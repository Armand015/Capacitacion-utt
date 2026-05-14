import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getCourseBySlug } from "@/features/courses/queries";

type CourseDetailPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export const dynamic = "force-dynamic";

export default async function CourseDetailPage({ params }: CourseDetailPageProps) {
  const { slug } = await params;
  const course = await getCourseBySlug(slug);

  if (!course || !course.isPublished) {
    notFound();
  }

  return (
    <article>
      <section className="bg-white">
        <div className="mx-auto grid max-w-6xl gap-8 px-4 py-12 sm:px-6 lg:grid-cols-[1fr_420px] lg:px-8">
          <div>
            <Link href="/cursos" className="text-sm font-semibold text-brand-700">
              Volver al catálogo
            </Link>
            <p className="mt-6 text-sm font-semibold uppercase tracking-wide text-brand-700">
              {course.category}
            </p>
            <h1 className="mt-3 text-3xl font-bold text-ink sm:text-4xl">
              {course.title}
            </h1>
            <p className="mt-5 text-base leading-8 text-slate-600">
              {course.description}
            </p>
          </div>
          <div className="relative min-h-64 overflow-hidden rounded-lg border border-slate-200 bg-brand-50 shadow-soft">
            <Image
              src={course.thumbnailUrl}
              alt=""
              fill
              className="object-cover"
              sizes="(min-width: 1024px) 420px, 100vw"
            />
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-6xl gap-8 px-4 py-12 sm:px-6 lg:grid-cols-[280px_1fr] lg:px-8">
        <aside className="h-fit rounded-lg border border-slate-200 bg-white p-5 shadow-sm">
          <h2 className="text-sm font-semibold uppercase tracking-wide text-slate-500">
            Objetivo
          </h2>
          <p className="mt-3 text-sm leading-6 text-slate-700">
            {course.objective}
          </p>
          <dl className="mt-6 space-y-3 border-t border-slate-200 pt-5 text-sm">
            <div className="flex justify-between gap-4">
              <dt className="text-slate-500">Módulos</dt>
              <dd className="font-semibold text-ink">{course.modules.length}</dd>
            </div>
            <div className="flex justify-between gap-4">
              <dt className="text-slate-500">Lecciones</dt>
              <dd className="font-semibold text-ink">
                {course.modules.reduce(
                  (total, module) => total + module.lessons.length,
                  0,
                )}
              </dd>
            </div>
          </dl>
        </aside>

        <div>
          <h2 className="text-2xl font-bold text-ink">Contenido del curso</h2>
          <div className="mt-6 space-y-5">
            {course.modules
              .toSorted((a, b) => a.sortOrder - b.sortOrder)
              .map((module) => (
                <section
                  key={module.id}
                  className="rounded-lg border border-slate-200 bg-white p-5 shadow-sm"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <h3 className="text-lg font-semibold text-ink">
                        {module.title}
                      </h3>
                      {module.description ? (
                        <p className="mt-2 text-sm leading-6 text-slate-600">
                          {module.description}
                        </p>
                      ) : null}
                    </div>
                    <span className="rounded-md bg-brand-50 px-3 py-1 text-xs font-semibold text-brand-700">
                      Módulo {module.sortOrder}
                    </span>
                  </div>

                  <ol className="mt-5 divide-y divide-slate-100">
                    {module.lessons
                      .toSorted((a, b) => a.sortOrder - b.sortOrder)
                      .map((lesson) => (
                        <li key={lesson.id} className="py-4">
                          <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
                            <div>
                              <p className="font-medium text-ink">{lesson.title}</p>
                              {lesson.description ? (
                                <p className="mt-1 text-sm text-slate-500">
                                  {lesson.description}
                                </p>
                              ) : null}
                            </div>
                            <span className="w-fit rounded-md border border-slate-200 px-3 py-1 text-xs font-medium text-slate-500">
                              {lesson.contentType === "text"
                                ? "Texto"
                                : lesson.contentType === "link"
                                  ? "Enlace"
                                  : "Archivo"}
                            </span>
                          </div>
                        </li>
                      ))}
                  </ol>
                </section>
              ))}
          </div>
        </div>
      </section>
    </article>
  );
}
