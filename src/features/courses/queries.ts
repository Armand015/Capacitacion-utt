import { unstable_noStore as noStore } from "next/cache";
import { createClient } from "@/lib/supabase/server";
import { getSupabaseEnv } from "@/lib/supabase/env";
import { mockCourses } from "./data";
import type { Course, CourseLesson, CourseModule } from "./types";

type CourseRow = {
  id: string;
  title: string;
  slug: string;
  short_description: string;
  description: string;
  category: string;
  thumbnail_url: string | null;
  is_published: boolean;
  created_at: string;
  updated_at: string;
  objective: string | null;
  course_modules:
    | Array<{
        id: string;
        title: string;
        description: string | null;
        sort_order: number;
        course_lessons:
          | Array<{
              id: string;
              title: string;
              description: string | null;
              content_type: CourseLesson["contentType"];
              content_text: string | null;
              content_url: string | null;
              file_url: string | null;
              sort_order: number;
            }>
          | null;
      }>
    | null;
};

function mapCourse(row: CourseRow): Course {
  return {
    id: row.id,
    title: row.title,
    slug: row.slug,
    shortDescription: row.short_description,
    description: row.description,
    category: row.category,
    thumbnailUrl: row.thumbnail_url ?? "/course-covers/induccion.svg",
    isPublished: row.is_published,
    createdAt: row.created_at,
    updatedAt: row.updated_at,
    objective: row.objective ?? "Objetivo pendiente de documentar.",
    modules: (row.course_modules ?? [])
      .map<CourseModule>((module) => ({
        id: module.id,
        title: module.title,
        description: module.description ?? undefined,
        sortOrder: module.sort_order,
        lessons: (module.course_lessons ?? [])
          .map<CourseLesson>((lesson) => ({
            id: lesson.id,
            title: lesson.title,
            description: lesson.description ?? undefined,
            contentType: lesson.content_type,
            contentText: lesson.content_text ?? undefined,
            contentUrl: lesson.content_url ?? undefined,
            fileUrl: lesson.file_url ?? undefined,
            sortOrder: lesson.sort_order,
          }))
          .sort((a, b) => a.sortOrder - b.sortOrder),
      }))
      .sort((a, b) => a.sortOrder - b.sortOrder),
  };
}

async function getCoursesFromSupabase(onlyPublished: boolean) {
  noStore();

  const supabase = await createClient();
  let query = supabase
    .from("courses")
    .select(
      `
        id,
        title,
        slug,
        short_description,
        description,
        category,
        thumbnail_url,
        is_published,
        created_at,
        updated_at,
        objective,
        course_modules (
          id,
          title,
          description,
          sort_order,
          course_lessons (
            id,
            title,
            description,
            content_type,
            content_text,
            content_url,
            file_url,
            sort_order
          )
        )
      `,
    )
    .order("created_at", { ascending: false });

  if (onlyPublished) {
    query = query.eq("is_published", true);
  }

  const { data, error } = await query;

  if (error) {
    console.warn("No se pudieron cargar cursos desde Supabase:", error.message);
    return onlyPublished
      ? mockCourses.filter((course) => course.isPublished)
      : mockCourses;
  }

  return (data as CourseRow[]).map(mapCourse);
}

export async function getCourses(options?: { onlyPublished?: boolean }) {
  const onlyPublished = options?.onlyPublished ?? false;

  if (!getSupabaseEnv().isConfigured) {
    return onlyPublished
      ? mockCourses.filter((course) => course.isPublished)
      : mockCourses;
  }

  return getCoursesFromSupabase(onlyPublished);
}

export async function getPublishedCourses() {
  return getCourses({ onlyPublished: true });
}

export async function getCourseBySlug(slug: string) {
  const courses = await getCourses({ onlyPublished: false });

  return courses.find((course) => course.slug === slug);
}

export async function getCourseCategories() {
  const courses = await getCourses({ onlyPublished: false });

  return Array.from(new Set(courses.map((course) => course.category))).sort();
}
