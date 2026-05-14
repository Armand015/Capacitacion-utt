\# PROJECT SPEC — Plataforma Institucional de Capacitación Digital UTT



\## 1. Nombre del proyecto



\*\*Plataforma Institucional de Capacitación Digital para el Personal de la Universidad Tecnológica de Tijuana\*\*



\---



\## 2. Contexto del proyecto



Este proyecto forma parte de una estadía profesional en la \*\*Universidad Tecnológica de Tijuana\*\*, dentro del área de \*\*Planeación y Evaluación\*\*.



La institución busca contar con una plataforma digital que facilite la capacitación del personal mediante cursos, materiales y recursos organizados en un mismo sitio. La solución debe ser clara, accesible y escalable, permitiendo comenzar con una versión funcional sencilla y crecer posteriormente según las necesidades institucionales.



\---



\## 3. Objetivo general



Desarrollar una plataforma web institucional que permita \*\*consultar, organizar y administrar cursos de capacitación dirigidos al personal de la UTT\*\*, facilitando el acceso a contenidos formativos y dejando una base técnica preparada para incorporar funcionalidades más avanzadas en el futuro.



\---



\## 4. Enfoque actual del desarrollo



La primera versión del sistema será un \*\*MVP funcional\*\* con dos tipos de acceso:



\### 4.1 Acceso público

Cualquier visitante podrá:



\- Ver la página de inicio de la plataforma.

\- Consultar el catálogo de cursos publicados.

\- Buscar o filtrar cursos.

\- Ver la información general de cada curso.

\- Acceder al contenido visible de los cursos, según la configuración inicial del MVP.



\### 4.2 Acceso administrativo

Solo usuarios administradores podrán iniciar sesión para:



\- Crear cursos.

\- Editar cursos.

\- Publicar u ocultar cursos.

\- Crear módulos dentro de cada curso.

\- Crear lecciones o materiales dentro de cada módulo.

\- Gestionar contenido básico de capacitación.



\---



\## 5. Alcance del MVP



\### Incluido en la primera versión



\- Sitio web responsivo.

\- Página de inicio.

\- Catálogo público de cursos.

\- Buscador o filtro básico de cursos.

\- Vista de detalle de curso.

\- Organización de cursos por módulos y lecciones.

\- Login de administrador.

\- Panel administrativo protegido.

\- CRUD de cursos.

\- CRUD de módulos.

\- CRUD de lecciones.

\- Posibilidad de manejar distintos tipos de contenido:

&#x20; - Texto.

&#x20; - Enlaces externos.

&#x20; - Archivos PDF u otros materiales cargados.

\- Estado de publicación para mostrar u ocultar cursos.

\- Estructura técnica preparada para agregar cuentas de usuarios y monitoreo más adelante.



\### Fuera del alcance inicial, pero considerado para fases futuras



Estas funcionalidades \*\*no deben implementarse de inmediato\*\* hasta ser confirmadas con el asesor:



\- Registro o login para todo el personal.

\- Seguimiento individual del avance del usuario.

\- Cursos asignados a usuarios o departamentos.

\- Progreso por porcentaje.

\- Exámenes o cuestionarios.

\- Generación de constancias.

\- Reportes administrativos de cumplimiento.

\- Notificaciones automáticas.

\- Integración con cuentas institucionales existentes.

\- Roles avanzados adicionales al administrador.

\- Historial completo de actividad.



\---



\## 6. Usuarios previstos



\### 6.1 Visitante / Usuario público

Persona que ingresa a la plataforma sin iniciar sesión.



Puede:

\- Ver cursos publicados.

\- Consultar información general.

\- Acceder al contenido habilitado públicamente.



\### 6.2 Administrador

Persona responsable de gestionar el contenido de capacitación.



Puede:

\- Iniciar sesión.

\- Crear, editar y eliminar cursos.

\- Publicar u ocultar cursos.

\- Organizar módulos y lecciones.

\- Cargar o vincular materiales.



\---



\## 7. Funcionalidades principales



\### 7.1 Página de inicio

Debe presentar:



\- Nombre o propósito de la plataforma.

\- Descripción breve.

\- Acceso al catálogo de cursos.

\- Diseño institucional, claro y profesional.

\- Llamado a explorar los cursos disponibles.



\### 7.2 Catálogo de cursos

Debe permitir:



\- Mostrar cursos publicados.

\- Buscar cursos por nombre.

\- Filtrar por categoría, si se implementa desde el inicio.

\- Mostrar tarjeta de curso con:

&#x20; - Título.

&#x20; - Descripción corta.

&#x20; - Imagen o portada.

&#x20; - Categoría.

&#x20; - Botón para ver más.



\### 7.3 Detalle de curso

Debe mostrar:



\- Título del curso.

\- Descripción.

\- Imagen de portada.

\- Objetivo o propósito del curso.

\- Lista de módulos.

\- Lecciones asociadas a cada módulo.

\- Materiales o enlaces correspondientes.



\### 7.4 Panel de administración

Debe incluir:



\- Inicio de sesión protegido.

\- Dashboard administrativo simple.

\- Vista de cursos existentes.

\- Acciones para:

&#x20; - Crear curso.

&#x20; - Editar curso.

&#x20; - Eliminar curso.

&#x20; - Publicar / despublicar.

\- Gestión de módulos.

\- Gestión de lecciones.

\- Carga o vinculación de materiales.



\---



\## 8. Modelo funcional inicial



\### 8.1 Curso

Un curso debe tener como mínimo:



\- Título.

\- Descripción breve.

\- Descripción completa.

\- Categoría.

\- Imagen de portada.

\- Estado de publicación.

\- Fecha de creación.

\- Fecha de actualización.



\### 8.2 Módulo

Cada curso puede tener varios módulos.



Un módulo debe tener:



\- Título.

\- Descripción opcional.

\- Orden de aparición.

\- Relación con un curso.



\### 8.3 Lección

Cada módulo puede contener varias lecciones.



Una lección debe tener:



\- Título.

\- Descripción opcional.

\- Tipo de contenido.

\- Contenido o URL asociada.

\- Orden de aparición.

\- Relación con un módulo.



\---



\## 9. Tipos de contenido contemplados



Cada lección podrá manejar inicialmente uno de estos tipos:



\- \*\*Texto:\*\* contenido escrito directamente en la plataforma.

\- \*\*Enlace:\*\* recurso externo, como video o sitio web.

\- \*\*Archivo:\*\* material almacenado y accesible desde la plataforma, como PDF.



La estructura debe permitir que en el futuro se puedan agregar otros tipos de contenido, como:

\- Video embebido.

\- Presentaciones.

\- Cuestionarios.

\- Actividades.



\---



\## 10. Requisitos no funcionales



La aplicación deberá procurar:



\- Diseño limpio, profesional y fácil de usar.

\- Navegación intuitiva.

\- Compatibilidad con escritorio y dispositivos móviles.

\- Código organizado y mantenible.

\- Componentes reutilizables.

\- Separación clara entre frontend, lógica y acceso a datos.

\- Preparación para crecimiento futuro del sistema.

\- Buenas prácticas básicas de seguridad en el panel administrativo.



\---



\## 11. Stack tecnológico propuesto



\### Frontend / Framework

\- \*\*Next.js\*\* con App Router.

\- \*\*React\*\*.

\- \*\*TypeScript\*\*.



\### Estilos

\- \*\*Tailwind CSS\*\*.



\### Backend y servicios

\- \*\*Supabase\*\* para:

&#x20; - Base de datos PostgreSQL.

&#x20; - Autenticación de administrador.

&#x20; - Almacenamiento de materiales o archivos.



\### Control de versiones

\- \*\*Git\*\*.

\- \*\*GitHub\*\*.



\### Entorno de desarrollo

\- \*\*Visual Studio Code\*\*.

\- \*\*Codex\*\* como apoyo para planificación, generación de código, refactorización y documentación.



\---



\## 12. Base de datos preliminar



La estructura inicial puede considerar tablas como:



\### `courses`

\- `id`

\- `title`

\- `slug`

\- `short\_description`

\- `description`

\- `category`

\- `thumbnail\_url`

\- `is\_published`

\- `created\_at`

\- `updated\_at`



\### `course\_modules`

\- `id`

\- `course\_id`

\- `title`

\- `description`

\- `sort\_order`

\- `created\_at`



\### `course\_lessons`

\- `id`

\- `module\_id`

\- `title`

\- `description`

\- `content\_type`

\- `content\_text`

\- `content\_url`

\- `file\_url`

\- `sort\_order`

\- `created\_at`



\### `admin\_profiles`

\- `id`

\- `email`

\- `full\_name`

\- `role`

\- `created\_at`



> Nota: esta estructura puede modificarse tras el levantamiento formal de requerimientos con el asesor.



\---



\## 13. Rutas iniciales sugeridas



\### Públicas

\- `/`

\- `/cursos`

\- `/cursos/\[slug]`



\### Administración

\- `/admin/login`

\- `/admin`

\- `/admin/cursos`

\- `/admin/cursos/nuevo`

\- `/admin/cursos/\[id]/editar`



\---



\## 14. Criterios de diseño



La plataforma debe verse:



\- Institucional.

\- Moderna.

\- Amigable para personal no técnico.

\- Limpia y organizada.

\- Fácil de navegar.



Se recomienda utilizar:



\- Tarjetas de cursos.

\- Navegación simple.

\- Jerarquía visual clara.

\- Colores sobrios.

\- Tipografía legible.

\- Formularios fáciles de entender.



\---



\## 15. Decisiones de alcance pendientes de confirmación



Antes de desarrollar funcionalidades avanzadas, se deberá confirmar con el asesor:



1\. ¿Los cursos serán completamente públicos o solo visibles para personal?

2\. ¿Se requerirá login para los usuarios finales?

3\. ¿Se desea monitorear el progreso de cada participante?

4\. ¿Habrá cursos obligatorios y opcionales?

5\. ¿Se asignarán cursos a usuarios o áreas específicas?

6\. ¿Se necesitan constancias o comprobantes de finalización?

7\. ¿Quién cargará y administrará los cursos?

8\. ¿La plataforma deberá alojarse en infraestructura propia de la UTT?

9\. ¿Se desea reutilizar algún sistema de cuentas institucionales existente?

10\. ¿Qué tipos de reportes serían necesarios en una versión futura?



\---



\## 16. Roadmap de desarrollo sugerido



\### Fase 1 — Base del proyecto

\- Inicializar proyecto.

\- Configurar estructura de carpetas.

\- Configurar Tailwind.

\- Configurar Supabase.

\- Crear layout general y navegación.



\### Fase 2 — Sitio público

\- Crear página de inicio.

\- Crear catálogo de cursos.

\- Crear vista de detalle del curso.

\- Conectar cursos publicados desde base de datos.



\### Fase 3 — Administración

\- Implementar login de administrador.

\- Crear dashboard administrativo.

\- Crear CRUD de cursos.

\- Crear CRUD de módulos y lecciones.



\### Fase 4 — Materiales

\- Integrar carga de archivos o enlaces.

\- Mostrar materiales en las lecciones.

\- Validar estructura básica de contenido.



\### Fase 5 — Revisión y escalabilidad

\- Mejorar UI/UX.

\- Revisar componentes.

\- Documentar el sistema.

\- Dejar preparada la arquitectura para usuarios, progreso y reportes futuros.



\---



\## 17. Principio de desarrollo



La plataforma debe construirse de forma \*\*modular y escalable\*\*, evitando tomar decisiones irreversibles antes de confirmar los requerimientos institucionales. El MVP debe ser funcional, ordenado y útil por sí mismo, pero también servir como base para una versión más completa en caso de que la institución solicite monitoreo, cuentas de usuarios y seguimiento del aprendizaje.



\---



\## 18. Instrucción general para asistentes de desarrollo



Al trabajar sobre este proyecto:



\- No asumir funcionalidades avanzadas no confirmadas.

\- Priorizar un MVP limpio y funcional.

\- Mantener el código organizado y fácil de mantener.

\- Documentar decisiones importantes.

\- Preparar el sistema para escalar a futuro.

\- Antes de cambios grandes, explicar brevemente el plan técnico.

