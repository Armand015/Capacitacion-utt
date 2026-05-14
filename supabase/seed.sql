insert into public.courses (
  id,
  title,
  slug,
  short_description,
  description,
  category,
  thumbnail_url,
  objective,
  is_published
) values
  (
    '11111111-1111-4111-8111-111111111111',
    'Inducción institucional UTT',
    'induccion-institucional-utt',
    'Conoce los principios, servicios y procesos clave de la Universidad Tecnológica de Tijuana.',
    'Curso introductorio para personal de nuevo ingreso o colaboradores que requieren reforzar la estructura institucional, lineamientos generales y canales de atención internos.',
    'Institucional',
    '/course-covers/induccion.svg',
    'Facilitar una comprensión clara de la identidad institucional, los procesos básicos y las responsabilidades generales del personal.',
    true
  ),
  (
    '22222222-2222-4222-8222-222222222222',
    'Uso responsable de recursos digitales',
    'uso-responsable-recursos-digitales',
    'Lineamientos básicos para proteger información, dispositivos y servicios digitales institucionales.',
    'Capacitación enfocada en hábitos de seguridad digital, manejo responsable de datos y criterios para el uso de herramientas institucionales.',
    'Tecnología',
    '/course-covers/seguridad-digital.svg',
    'Promover prácticas claras y preventivas para reducir riesgos en el uso cotidiano de plataformas, archivos y cuentas institucionales.',
    true
  ),
  (
    '33333333-3333-4333-8333-333333333333',
    'Planeación y evaluación institucional',
    'planeacion-evaluacion-institucional',
    'Introducción a los criterios, evidencias y procesos relacionados con planeación y evaluación.',
    'Curso de referencia para personal que colabora en procesos de seguimiento, recopilación de evidencias y mejora continua institucional.',
    'Planeación',
    '/course-covers/planeacion.svg',
    'Apoyar la organización de actividades y evidencias vinculadas con procesos internos de planeación y evaluación.',
    false
  )
on conflict (slug) do update set
  title = excluded.title,
  short_description = excluded.short_description,
  description = excluded.description,
  category = excluded.category,
  thumbnail_url = excluded.thumbnail_url,
  objective = excluded.objective,
  is_published = excluded.is_published,
  updated_at = now();

insert into public.course_modules (
  id,
  course_id,
  title,
  description,
  sort_order
) values
  (
    'aaaaaaaa-aaaa-4aaa-8aaa-aaaaaaaaaaa1',
    '11111111-1111-4111-8111-111111111111',
    'Bienvenida e identidad institucional',
    'Visión general de la universidad y su propósito.',
    1
  ),
  (
    'aaaaaaaa-aaaa-4aaa-8aaa-aaaaaaaaaaa2',
    '11111111-1111-4111-8111-111111111111',
    'Procesos generales',
    'Lineamientos básicos para operaciones administrativas.',
    2
  ),
  (
    'bbbbbbbb-bbbb-4bbb-8bbb-bbbbbbbbbbb1',
    '22222222-2222-4222-8222-222222222222',
    'Seguridad cotidiana',
    null,
    1
  ),
  (
    'cccccccc-cccc-4ccc-8ccc-ccccccccccc1',
    '33333333-3333-4333-8333-333333333333',
    'Marco de trabajo',
    null,
    1
  )
on conflict (id) do update set
  title = excluded.title,
  description = excluded.description,
  sort_order = excluded.sort_order;

insert into public.course_lessons (
  id,
  module_id,
  title,
  description,
  content_type,
  content_text,
  content_url,
  file_url,
  sort_order
) values
  (
    'dddddddd-dddd-4ddd-8ddd-ddddddddddd1',
    'aaaaaaaa-aaaa-4aaa-8aaa-aaaaaaaaaaa1',
    'Presentación de la UTT',
    'Contexto general de la institución.',
    'text',
    'Material introductorio sobre la Universidad Tecnológica de Tijuana.',
    null,
    null,
    1
  ),
  (
    'dddddddd-dddd-4ddd-8ddd-ddddddddddd2',
    'aaaaaaaa-aaaa-4aaa-8aaa-aaaaaaaaaaa1',
    'Directorio y canales internos',
    'Recursos de contacto para orientación institucional.',
    'file',
    null,
    null,
    '/materiales/directorio-institucional.pdf',
    2
  ),
  (
    'dddddddd-dddd-4ddd-8ddd-ddddddddddd3',
    'aaaaaaaa-aaaa-4aaa-8aaa-aaaaaaaaaaa2',
    'Buenas prácticas de atención',
    null,
    'link',
    null,
    'https://www.uttijuana.edu.mx/',
    null,
    1
  ),
  (
    'eeeeeeee-eeee-4eee-8eee-eeeeeeeeeee1',
    'bbbbbbbb-bbbb-4bbb-8bbb-bbbbbbbbbbb1',
    'Contraseñas y acceso seguro',
    null,
    'text',
    'Recomendaciones para mantener credenciales institucionales protegidas.',
    null,
    null,
    1
  ),
  (
    'eeeeeeee-eeee-4eee-8eee-eeeeeeeeeee2',
    'bbbbbbbb-bbbb-4bbb-8bbb-bbbbbbbbbbb1',
    'Identificación de enlaces sospechosos',
    null,
    'link',
    null,
    'https://www.uttijuana.edu.mx/',
    null,
    2
  ),
  (
    'ffffffff-ffff-4fff-8fff-fffffffffff1',
    'cccccccc-cccc-4ccc-8ccc-ccccccccccc1',
    'Conceptos base',
    null,
    'text',
    'Definiciones iniciales para comprender el proceso institucional.',
    null,
    null,
    1
  )
on conflict (id) do update set
  title = excluded.title,
  description = excluded.description,
  content_type = excluded.content_type,
  content_text = excluded.content_text,
  content_url = excluded.content_url,
  file_url = excluded.file_url,
  sort_order = excluded.sort_order;
