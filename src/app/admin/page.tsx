import Link from "next/link";
import { getCourses } from "@/features/courses/queries";

export default async function AdminDashboardPage() {
  const courses = await getCourses();
  const published = courses.filter((course) => course.isPublished).length;
  const draft = courses.length - published;
  const lessons = courses.reduce(
    (courseTotal, course) =>
      courseTotal +
      course.modules.reduce(
        (moduleTotal, module) => moduleTotal + module.lessons.length,
        0,
      ),
    0,
  );

  return (
    <section className="mx-auto max-w-6xl px-4 py-10 sm:px-6 lg:px-8">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <h1 className="text-3xl font-bold text-ink">Panel administrativo</h1>
          <p className="mt-3 max-w-2xl text-sm leading-6 text-slate-600">
            Vista inicial para supervisar cursos, estados de publicación y
            estructura de contenidos. Las acciones son demostrativas por ahora.
          </p>
        </div>
        <Link
          href="/admin/cursos"
          className="rounded-md bg-brand-700 px-4 py-2 text-center text-sm font-semibold text-white hover:bg-brand-900"
        >
          Gestionar cursos
        </Link>
      </div>

      <div className="mt-8 grid gap-4 md:grid-cols-4">
        {[
          ["Cursos totales", courses.length],
          ["Publicados", published],
          ["Ocultos", draft],
          ["Lecciones mock", lessons],
        ].map(([label, value]) => (
          <div
            key={label}
            className="rounded-lg border border-slate-200 bg-white p-5 shadow-sm"
          >
            <p className="text-sm font-medium text-slate-500">{label}</p>
            <p className="mt-3 text-3xl font-bold text-ink">{value}</p>
          </div>
        ))}
      </div>

      <div className="mt-8 rounded-lg border border-slate-200 bg-white p-6 shadow-sm">
        <h2 className="text-xl font-semibold text-ink">Siguientes acciones</h2>
        <div className="mt-5 grid gap-4 md:grid-cols-2">
          <div className="rounded-lg bg-slate-50 p-4">
            <h3 className="font-semibold text-ink">CRUD de cursos</h3>
            <p className="mt-2 text-sm leading-6 text-slate-600">
              Pendiente para una iteración posterior, conectado a Supabase.
            </p>
          </div>
          <div className="rounded-lg bg-slate-50 p-4">
            <h3 className="font-semibold text-ink">Módulos y lecciones</h3>
            <p className="mt-2 text-sm leading-6 text-slate-600">
              La estructura de datos ya contempla orden, tipo de contenido y
              relaciones básicas.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
