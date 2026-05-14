import Image from "next/image";
import Link from "next/link";
import { CourseCard } from "@/components/course-card";
import { getPublishedCourses } from "@/features/courses/queries";

export default async function HomePage() {
  const featuredCourses = (await getPublishedCourses()).slice(0, 2);

  return (
    <>
      <section className="bg-white">
        <div className="mx-auto grid max-w-6xl gap-10 px-4 py-16 sm:px-6 lg:grid-cols-[1.05fr_0.95fr] lg:px-8 lg:py-20">
          <div className="flex flex-col justify-center">
            <h1 className="max-w-3xl text-4xl font-bold tracking-normal text-ink sm:text-5xl">
              Plataforma Institucional de Capacitación Digital para el Personal
              de la UTT
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">
              Un espacio centralizado para consultar cursos, materiales y
              recursos formativos de manera clara, organizada y accesible.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/cursos"
                className="rounded-md bg-brand-700 px-5 py-3 text-center text-sm font-semibold text-white transition hover:bg-brand-900"
              >
                Explorar cursos
              </Link>
              <Link
                href="/admin/login"
                className="rounded-md border border-slate-300 px-5 py-3 text-center text-sm font-semibold text-ink transition hover:border-brand-700 hover:text-brand-700"
              >
                Acceso administrativo
              </Link>
            </div>
          </div>

          <div className="relative min-h-80 overflow-hidden rounded-lg border border-slate-200 bg-brand-50 shadow-soft">
            <Image
              src="/institutional-learning.svg"
              alt=""
              fill
              priority
              className="object-cover"
              sizes="(min-width: 1024px) 520px, 100vw"
            />
          </div>
        </div>
      </section>

      <section className="border-y border-slate-200 bg-brand-50/70">
        <div className="mx-auto grid max-w-6xl gap-6 px-4 py-10 sm:px-6 md:grid-cols-3 lg:px-8">
          {[
            ["Cursos publicados", "Catálogo inicial visible para el personal."],
            ["Módulos y lecciones", "Estructura lista para organizar materiales."],
            ["Administración base", "Panel visual preparado para CRUD futuro."],
          ].map(([title, description]) => (
            <div key={title}>
              <h2 className="text-base font-semibold text-ink">{title}</h2>
              <p className="mt-2 text-sm leading-6 text-slate-600">
                {description}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <h2 className="text-2xl font-bold text-ink">Cursos disponibles</h2>
            <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-600">
              Primeros cursos mock para demostrar el flujo público del MVP.
            </p>
          </div>
          <Link href="/cursos" className="text-sm font-semibold text-brand-700">
            Ver catálogo completo
          </Link>
        </div>

        <div className="mt-8 grid gap-6 md:grid-cols-2">
          {featuredCourses.map((course) => (
            <CourseCard key={course.id} course={course} />
          ))}
        </div>
      </section>
    </>
  );
}
