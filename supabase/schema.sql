create table if not exists public.courses (
  id uuid primary key default gen_random_uuid(),
  title text not null,
  slug text not null unique,
  short_description text not null,
  description text not null,
  category text not null,
  thumbnail_url text,
  objective text,
  is_published boolean not null default false,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists public.course_modules (
  id uuid primary key default gen_random_uuid(),
  course_id uuid not null references public.courses(id) on delete cascade,
  title text not null,
  description text,
  sort_order integer not null default 1,
  created_at timestamptz not null default now()
);

create table if not exists public.course_lessons (
  id uuid primary key default gen_random_uuid(),
  module_id uuid not null references public.course_modules(id) on delete cascade,
  title text not null,
  description text,
  content_type text not null check (content_type in ('text', 'link', 'file')),
  content_text text,
  content_url text,
  file_url text,
  sort_order integer not null default 1,
  created_at timestamptz not null default now()
);

create table if not exists public.admin_profiles (
  id uuid primary key,
  email text not null unique,
  full_name text not null,
  role text not null default 'admin',
  created_at timestamptz not null default now()
);

alter table public.courses enable row level security;
alter table public.course_modules enable row level security;
alter table public.course_lessons enable row level security;
alter table public.admin_profiles enable row level security;

create policy "Cursos publicados visibles públicamente"
  on public.courses
  for select
  using (is_published = true);

create policy "Módulos de cursos publicados visibles públicamente"
  on public.course_modules
  for select
  using (
    exists (
      select 1
      from public.courses
      where courses.id = course_modules.course_id
        and courses.is_published = true
    )
  );

create policy "Lecciones de cursos publicados visibles públicamente"
  on public.course_lessons
  for select
  using (
    exists (
      select 1
      from public.course_modules
      join public.courses on courses.id = course_modules.course_id
      where course_modules.id = course_lessons.module_id
        and courses.is_published = true
    )
  );
