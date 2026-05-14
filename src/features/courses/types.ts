export type LessonContentType = "text" | "link" | "file";

export type CourseLesson = {
  id: string;
  title: string;
  description?: string;
  contentType: LessonContentType;
  contentText?: string;
  contentUrl?: string;
  fileUrl?: string;
  sortOrder: number;
};

export type CourseModule = {
  id: string;
  title: string;
  description?: string;
  sortOrder: number;
  lessons: CourseLesson[];
};

export type Course = {
  id: string;
  title: string;
  slug: string;
  shortDescription: string;
  description: string;
  category: string;
  thumbnailUrl: string;
  isPublished: boolean;
  createdAt: string;
  updatedAt: string;
  objective: string;
  modules: CourseModule[];
};
