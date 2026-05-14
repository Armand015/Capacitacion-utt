import Image from "next/image";
import Link from "next/link";
import type { Course } from "@/features/courses/types";

type CourseCardProps = {
  course: Course;
};

export function CourseCard({ course }: CourseCardProps) {
  return (
    <article className="overflow-hidden rounded-lg border border-slate-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-soft">
      <div className="relative aspect-[16/9] bg-brand-50">
        <Image
          src={course.thumbnailUrl}
          alt=""
          fill
          className="object-cover"
          sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
        />
      </div>
      <div className="flex min-h-64 flex-col p-5">
        <div className="flex items-center justify-between gap-3">
          <span className="text-xs font-semibold uppercase tracking-wide text-brand-700">
            {course.category}
          </span>
          <span className="text-xs text-slate-400">
            {course.modules.length} módulo{course.modules.length === 1 ? "" : "s"}
          </span>
        </div>
        <h3 className="mt-3 text-xl font-semibold leading-snug text-ink">
          {course.title}
        </h3>
        <p className="mt-3 flex-1 text-sm leading-6 text-slate-600">
          {course.shortDescription}
        </p>
        <Link
          href={`/cursos/${course.slug}`}
          className="mt-5 inline-flex w-fit items-center rounded-md bg-brand-700 px-4 py-2 text-sm font-semibold text-white transition hover:bg-brand-900"
        >
          Ver detalle
        </Link>
      </div>
    </article>
  );
}
