import { CourseCard } from "@/components/course-card";
import { EmptyState } from "@/components/empty-state";
import { getCourseCategories, getPublishedCourses } from "@/features/courses/queries";

type CoursesPageProps = {
  searchParams?: Promise<{
    q?: string;
    categoria?: string;
  }>;
};

export default async function CoursesPage({ searchParams }: CoursesPageProps) {
  const params = await searchParams;
  const query = params?.q?.trim().toLowerCase() ?? "";
  const category = params?.categoria ?? "todas";
  const categories = await getCourseCategories();

  const courses = (await getPublishedCourses()).filter((course) => {
    const matchesQuery =
      !query ||
      course.title.toLowerCase().includes(query) ||
      course.shortDescription.toLowerCase().includes(query);
    const matchesCategory = category === "todas" || course.category === category;

    return matchesQuery && matchesCategory;
  });

  return (
    <section className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
      <div className="max-w-3xl">
        <h1 className="text-3xl font-bold text-ink sm:text-4xl">
          Catálogo de cursos
        </h1>
        <p className="mt-4 text-base leading-7 text-slate-600">
          Consulta los cursos publicados y revisa sus módulos, lecciones y
          materiales disponibles para capacitación institucional.
        </p>
      </div>

      <form className="mt-8 grid gap-3 rounded-lg border border-slate-200 bg-white p-4 shadow-sm md:grid-cols-[1fr_220px_auto]">
        <label className="sr-only" htmlFor="q">
          Buscar cursos
        </label>
        <input
          id="q"
          name="q"
          defaultValue={params?.q ?? ""}
          placeholder="Buscar por nombre o descripción"
          className="h-11 rounded-md border border-slate-300 px-3 text-sm outline-none focus:border-brand-600 focus:ring-2 focus:ring-brand-100"
        />

        <label className="sr-only" htmlFor="categoria">
          Filtrar por categoría
        </label>
        <select
          id="categoria"
          name="categoria"
          defaultValue={category}
          className="h-11 rounded-md border border-slate-300 px-3 text-sm outline-none focus:border-brand-600 focus:ring-2 focus:ring-brand-100"
        >
          <option value="todas">Todas las categorías</option>
          {categories.map((item) => (
            <option key={item} value={item}>
              {item}
            </option>
          ))}
        </select>

        <button
          type="submit"
          className="h-11 rounded-md bg-brand-700 px-5 text-sm font-semibold text-white transition hover:bg-brand-900"
        >
          Filtrar
        </button>
      </form>

      <div className="mt-8">
        {courses.length > 0 ? (
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {courses.map((course) => (
              <CourseCard key={course.id} course={course} />
            ))}
          </div>
        ) : (
          <EmptyState
            title="No se encontraron cursos"
            description="Intenta ajustar la búsqueda o seleccionar otra categoría del catálogo."
          />
        )}
      </div>
    </section>
  );
}
