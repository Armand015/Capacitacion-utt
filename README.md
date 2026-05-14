# Plataforma Institucional de Capacitación Digital UTT

Proyecto de estadía para construir una plataforma web institucional de capacitación digital dirigida al personal de la Universidad Tecnológica de Tijuana.

El MVP inicial permite mostrar un sitio público con catálogo de cursos, detalle de curso con módulos y lecciones, y una zona administrativa visual preparada para crecer hacia CRUD, autenticación y Supabase en iteraciones posteriores.

## Stack

- Next.js con App Router
- React
- TypeScript
- Tailwind CSS
- ESLint
- Supabase preparado para base de datos, autenticación y almacenamiento
- Datos mock locales como respaldo cuando Supabase no está configurado

## Ejecutar localmente

Instala dependencias:

```bash
npm install
```

Inicia el servidor de desarrollo:

```bash
npm run dev
```

Abre `http://localhost:3000`.

## Rutas principales

- `/` - Página de inicio institucional.
- `/cursos` - Catálogo público con búsqueda y filtro básico.
- `/cursos/[slug]` - Detalle de curso, módulos y lecciones.
- `/admin/login` - Pantalla visual de acceso administrativo.
- `/admin` - Dashboard administrativo mock.
- `/admin/cursos` - Listado administrativo mock de cursos.

## Estado actual del MVP

Listo en esta iteración:

- Proyecto base configurado con Next.js, TypeScript y Tailwind.
- Layout público y layout administrativo.
- Paleta institucional en tonos guinda.
- Componentes reutilizables iniciales: encabezado, pie de página, tarjeta de curso y estado vacío.
- Datos mock organizados por cursos, módulos y lecciones.
- Pantallas base para las rutas públicas y administrativas solicitadas.
- Cliente Supabase para navegador y servidor.
- Consultas de cursos preparadas para leer desde Supabase con fallback a mocks.
- Script SQL preliminar en `supabase/schema.sql`.
- `.env.example` preparado para variables de Supabase sin valores reales.

No incluido todavía:

- Autenticación real.
- Escritura real en base de datos desde el panel.
- CRUD funcional.
- Seguimiento de progreso.
- Cuentas para personal.
- Reportes, constancias o funciones avanzadas.

## Preparación para Supabase

El archivo `.env.example` incluye las variables esperadas:

```bash
NEXT_PUBLIC_SUPABASE_URL=
NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY=
NEXT_PUBLIC_SUPABASE_ANON_KEY=
SUPABASE_SERVICE_ROLE_KEY=
```

La aplicación usa `NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY` como variable principal recomendada por Supabase. `NEXT_PUBLIC_SUPABASE_ANON_KEY` queda como compatibilidad si el proyecto usa la nomenclatura anterior.

Mientras esas variables no existan en `.env.local`, las pantallas usan los datos mock de `src/features/courses/data.ts`. Cuando se configuren, las rutas leerán cursos desde Supabase usando `src/features/courses/queries.ts`.

Para crear las tablas preliminares, ejecuta el contenido de `supabase/schema.sql` en el SQL Editor de Supabase. Después puedes ejecutar `supabase/seed.sql` para cargar cursos demo. Las políticas incluidas permiten lectura pública solo de cursos publicados, módulos y lecciones asociadas.
