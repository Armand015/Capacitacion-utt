import Link from "next/link";
import { getCourses } from "@/features/courses/queries";

export default async function AdminCoursesPage() {
  const courses = await getCourses();

  return (
    <section className="mx-auto max-w-6xl px-4 py-10 sm:px-6 lg:px-8">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <h1 className="text-3xl font-bold text-ink">Cursos</h1>
          <p className="mt-3 max-w-2xl text-sm leading-6 text-slate-600">
            Listado administrativo para revisar publicaciones, categorías,
            módulos y lecciones antes de conectar el CRUD real.
          </p>
        </div>
        <button
          type="button"
          className="rounded-md bg-brand-700 px-4 py-2 text-sm font-semibold text-white opacity-80"
        >
          Nuevo curso
        </button>
      </div>

      <div className="mt-8 overflow-hidden rounded-lg border border-slate-200 bg-white shadow-sm">
        <div className="hidden grid-cols-[1.4fr_160px_140px_120px] gap-4 border-b border-slate-200 bg-slate-50 px-5 py-3 text-xs font-semibold uppercase tracking-wide text-slate-500 md:grid">
          <span>Curso</span>
          <span>Categoría</span>
          <span>Estado</span>
          <span>Acciones</span>
        </div>
        <div className="divide-y divide-slate-100">
          {courses.map((course) => {
            const lessonCount = course.modules.reduce(
              (total, module) => total + module.lessons.length,
              0,
            );

            return (
              <article
                key={course.id}
                className="grid gap-4 px-5 py-5 md:grid-cols-[1.4fr_160px_140px_120px] md:items-center"
              >
                <div>
                  <h2 className="font-semibold text-ink">{course.title}</h2>
                  <p className="mt-1 text-sm leading-6 text-slate-500">
                    {course.modules.length} módulo
                    {course.modules.length === 1 ? "" : "s"} · {lessonCount}{" "}
                    lección{lessonCount === 1 ? "" : "es"}
                  </p>
                </div>
                <p className="text-sm text-slate-600">{course.category}</p>
                <span
                  className={`w-fit rounded-md px-3 py-1 text-xs font-semibold ${
                    course.isPublished
                      ? "bg-brand-50 text-brand-700"
                      : "bg-amber-50 text-amber-700"
                  }`}
                >
                  {course.isPublished ? "Publicado" : "Oculto"}
                </span>
                <div className="flex gap-3 text-sm font-semibold">
                  <Link
                    href={`/cursos/${course.slug}`}
                    className="text-brand-700 hover:text-brand-900"
                  >
                    Ver
                  </Link>
                  <button type="button" className="text-slate-400">
                    Editar
                  </button>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
