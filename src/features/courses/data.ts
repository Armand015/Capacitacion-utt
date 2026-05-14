import type { Course } from "./types";

export const mockCourses: Course[] = [
  {
    id: "course-01",
    title: "Inducción institucional UTT",
    slug: "induccion-institucional-utt",
    shortDescription:
      "Conoce los principios, servicios y procesos clave de la Universidad Tecnológica de Tijuana.",
    description:
      "Curso introductorio para personal de nuevo ingreso o colaboradores que requieren reforzar la estructura institucional, lineamientos generales y canales de atención internos.",
    category: "Institucional",
    thumbnailUrl: "/course-covers/induccion.svg",
    isPublished: true,
    createdAt: "2026-05-01",
    updatedAt: "2026-05-10",
    objective:
      "Facilitar una comprensión clara de la identidad institucional, los procesos básicos y las responsabilidades generales del personal.",
    modules: [
      {
        id: "module-01",
        title: "Bienvenida e identidad institucional",
        description: "Visión general de la universidad y su propósito.",
        sortOrder: 1,
        lessons: [
          {
            id: "lesson-01",
            title: "Presentacion de la UTT",
            description: "Contexto general de la institución.",
            contentType: "text",
            contentText:
              "Material introductorio sobre la Universidad Tecnológica de Tijuana.",
            sortOrder: 1,
          },
          {
            id: "lesson-02",
            title: "Directorio y canales internos",
            description: "Recursos de contacto para orientación institucional.",
            contentType: "file",
            fileUrl: "/materiales/directorio-institucional.pdf",
            sortOrder: 2,
          },
        ],
      },
      {
        id: "module-02",
        title: "Procesos generales",
        description: "Lineamientos basicos para operaciones administrativas.",
        sortOrder: 2,
        lessons: [
          {
            id: "lesson-03",
            title: "Buenas prácticas de atención",
            contentType: "link",
            contentUrl: "https://www.uttijuana.edu.mx/",
            sortOrder: 1,
          },
        ],
      },
    ],
  },
  {
    id: "course-02",
    title: "Uso responsable de recursos digitales",
    slug: "uso-responsable-recursos-digitales",
    shortDescription:
      "Lineamientos básicos para proteger información, dispositivos y servicios digitales institucionales.",
    description:
      "Capacitación enfocada en hábitos de seguridad digital, manejo responsable de datos y criterios para el uso de herramientas institucionales.",
    category: "Tecnologia",
    thumbnailUrl: "/course-covers/seguridad-digital.svg",
    isPublished: true,
    createdAt: "2026-05-03",
    updatedAt: "2026-05-12",
    objective:
      "Promover prácticas claras y preventivas para reducir riesgos en el uso cotidiano de plataformas, archivos y cuentas institucionales.",
    modules: [
      {
        id: "module-03",
        title: "Seguridad cotidiana",
        sortOrder: 1,
        lessons: [
          {
            id: "lesson-04",
            title: "Contraseñas y acceso seguro",
            contentType: "text",
            contentText:
              "Recomendaciones para mantener credenciales institucionales protegidas.",
            sortOrder: 1,
          },
          {
            id: "lesson-05",
            title: "Identificacion de enlaces sospechosos",
            contentType: "link",
            contentUrl: "https://www.uttijuana.edu.mx/",
            sortOrder: 2,
          },
        ],
      },
    ],
  },
  {
    id: "course-03",
    title: "Planeación y evaluación institucional",
    slug: "planeacion-evaluacion-institucional",
    shortDescription:
      "Introducción a los criterios, evidencias y procesos relacionados con planeación y evaluación.",
    description:
      "Curso de referencia para personal que colabora en procesos de seguimiento, recopilación de evidencias y mejora continua institucional.",
    category: "Planeación",
    thumbnailUrl: "/course-covers/planeacion.svg",
    isPublished: false,
    createdAt: "2026-05-06",
    updatedAt: "2026-05-11",
    objective:
      "Apoyar la organizacion de actividades y evidencias vinculadas con procesos internos de planeacion y evaluacion.",
    modules: [
      {
        id: "module-04",
        title: "Marco de trabajo",
        sortOrder: 1,
        lessons: [
          {
            id: "lesson-06",
            title: "Conceptos base",
            contentType: "text",
            contentText:
              "Definiciones iniciales para comprender el proceso institucional.",
            sortOrder: 1,
          },
        ],
      },
    ],
  },
];

export function getPublishedCourses() {
  return mockCourses.filter((course) => course.isPublished);
}

export function getCourseBySlug(slug: string) {
  return mockCourses.find((course) => course.slug === slug);
}

export function getCourseCategories() {
  return Array.from(new Set(mockCourses.map((course) => course.category))).sort();
}
