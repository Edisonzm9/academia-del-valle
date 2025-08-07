import { Course, Testimonial } from './types';

export const NAV_LINKS = [
  { name: 'Inicio', path: '#inicio' },
  { name: 'Cursos', path: '#cursos' },
  { name: 'Nosotros', path: '#nosotros' },
  { name: 'Certificaciones', path: '#certificaciones' },
  { name: 'Contacto', path: '#contacto' },
];

// Cursos reales de la Academia del Valle basados en los documentos de Word
export const DUMMY_COURSES: Course[] = [
  {
    id: 1,
    title: "Barbería Profesional",
    description: "Aprende las técnicas más modernas de barbería desde cortes clásicos hasta estilos contemporáneos, incluyendo técnicas de afeitado profesional y cuidado de barba.",
    image: "https://images.unsplash.com/photo-1585747860715-2ba37e788b70?w=800&h=600&fit=crop",
    area: "Belleza y Estética",
    instructor: "Eduardo Estevez",
    duration: "6 meses",
    hours: "144 horas",
    code: "BAR-001",
    focus: "Formación integral en barbería moderna con técnicas profesionales y atención al cliente.",
    curriculum: [
      {
        title: "MÓDULO 1: FUNDAMENTOS DE LA BARBERÍA",
        duration: "1 mes",
        topics: [
          "Historia y evolución de la barbería",
          "Ética, presentación e imagen del barbero",
          "Bioseguridad, limpieza y desinfección",
          "Conocimiento del cuero cabelludo y tipos de cabello",
          "Manejo correcto de herramientas y postura profesional"
        ]
      },
      {
        title: "MÓDULO 2: CORTE CLÁSICO Y TÉCNICAS BASE",
        duration: "1 mes",
        topics: [
          "Particiones y secciones del cabello",
          "Uso básico de tijeras, máquina y peine",
          "Corte clásico recto",
          "Técnicas de desbaste y texturizado",
          "Lavado y preparación del cabello"
        ]
      },
      {
        title: "MÓDULO 3: CORTES MODERNOS Y FADE",
        duration: "1 mes",
        topics: [
          "Degradados: low fade, mid fade, high fade",
          "Corte taper y crop texturizado",
          "Pompadour, mohicano, comb over",
          "Técnica de desvanecido limpio y sombreado",
          "Combinación de técnicas con máquina y tijera"
        ]
      },
      {
        title: "MÓDULO 4: BARBA Y AFEITADO PROFESIONAL",
        duration: "1 mes",
        topics: [
          "Tipos y estilos de barba",
          "Perfilado y diseño de contornos",
          "Técnica de afeitado con navaja",
          "Cuidado pre y post afeitado",
          "Corrección de asimetrías en barba"
        ]
      },
      {
        title: "MÓDULO 5: ESTILIZADO Y ACABADOS FINALES",
        duration: "1 mes",
        topics: [
          "Uso correcto de productos: ceras, pomadas, fijadores",
          "Brushing y peinados masculinos",
          "Técnicas de acabado con calor",
          "Estilos según rostro y tendencia",
          "Presentación profesional al cliente"
        ]
      },
      {
        title: "MÓDULO 6: GESTIÓN Y EMPRENDIMIENTO",
        duration: "1 mes",
        topics: [
          "Atención al cliente y fidelización",
          "Construcción de marca personal y redes sociales",
          "Cómo abrir tu barbería (aspectos legales y operativos)",
          "Examen práctico y teórico",
          "Evaluación en modelo real"
        ]
      }
    ]
  },
  {
    id: 2,
    title: "Belleza Integral",
    description: "Formación completa en belleza integral que incluye cuidado capilar, estilismo, manicure, pedicure, cuidado facial, maquillaje y técnicas de barbería.",
    image: "https://images.unsplash.com/photo-1562322140-8baeececf3df?w=800&h=600&fit=crop",
    area: "Belleza y Estética",
    instructor: "Gioconda Manguia, Damaris Alvarez",
    duration: "6 meses",
    hours: "288 horas",
    code: "BEI-001",
    focus: "Formación integral en todas las áreas de la belleza para convertirte en un profesional completo.",
    curriculum: [
      {
        title: "MÓDULO 1: INTRODUCCIÓN A LA BELLEZA INTEGRAL",
        duration: "1 mes",
        topics: [
          "Historia y evolución de la belleza",
          "Ética profesional y presentación personal",
          "Bioseguridad e higiene",
          "Tipos de piel y análisis facial",
          "Equipos y herramientas básicas"
        ]
      },
      {
        title: "MÓDULO 2: CUIDADO CAPILAR Y PEINADOS BÁSICOS",
        duration: "1 mes",
        topics: [
          "Higiene y cuidado del cabello",
          "Diagnóstico capilar",
          "Lavado profesional",
          "Secado y brushing",
          "Peinados básicos: Trenzas, ondas, Recogidos, Semi Recogidos, Coletas",
          "Cepillado de Cabello: Puntas hacia adentro, hacia afuera, cepillado con volumen y alisados",
          "Permacología: Hombre y mujer"
        ]
      },
      {
        title: "MÓDULO 3: ESTILISMO",
        duration: "1 mes",
        topics: [
          "Cortes básicos de mujer",
          "Escalonado",
          "Degrafilado",
          "Igualado de puntas",
          "Clásico con tijera de hombre",
          "Uso de Máquinas corte de hombre",
          "Afeitado básico",
          "Preparación clientes/hombre y mujer"
        ]
      },
      {
        title: "MÓDULO 4: MANICURE Y PEDICURE",
        duration: "1 mes",
        topics: [
          "Anatomía de manos y pies",
          "Técnicas de corte, limado y esmaltado",
          "Manicure y pedicure spa",
          "Uñas naturales y esmalte semipermanente",
          "Protocolos de higiene y esterilización",
          "Trazos y difuminación",
          "Higienización de hombre y mujer",
          "Diseños, apliques y pigmentos",
          "Pinceladas Medias"
        ]
      },
      {
        title: "MÓDULO 5: CUIDADO FACIAL BÁSICO",
        duration: "1 mes",
        topics: [
          "Diagnóstico facial",
          "Limpieza facial profesional",
          "Mascarillas naturales y cosméticas",
          "Masajes faciales",
          "Uso de vaporizador y extracción",
          "Hidratación y protección solar",
          "Aparatología básica facial",
          "Reconocimiento tipos de piel"
        ]
      },
      {
        title: "MÓDULO 6: AUTOMAQUILLAJE Y MAQUILLAJE SOCIAL",
        duration: "1 mes",
        topics: [
          "Tipos de rostro y correcciones",
          "Preparación de la piel",
          "Maquillaje de día y de noche",
          "Técnicas con brochas y esponjas",
          "Cuidado de los productos y pinceles",
          "Teoría del color",
          "Morfología facial"
        ]
      },
      {
        title: "MÓDULO 7: BIENESTAR Y ESTILO DE VIDA SALUDABLE",
        duration: "1 mes",
        topics: [
          "Hábitos saludables para la piel y el cuerpo",
          "Alimentación y belleza",
          "Técnicas de relajación y autoestima",
          "Imagen integral y empoderamiento",
          "Masajes"
        ]
      },
      {
        title: "MÓDULO 8: BARBERÍA",
        duration: "1 mes",
        topics: [
          "Fade desvanecido con navaja",
          "Tallado Capilar",
          "Barba y bigote",
          "Creativo",
          "Afeitado y Spa"
        ]
      },
      {
        title: "MÓDULO 9: COLORIMETRÍA",
        duration: "1 mes",
        topics: [
          "Tinte Global",
          "Tinte en puntas",
          "Mechas localizadas",
          "Canas difusas",
          "Baby Lights"
        ]
      },
      {
        title: "MÓDULO 10: MIRADA PERFECTA",
        duration: "1 mes",
        topics: [
          "Pestañas pelo a pelo: diseños, materiales y técnicas",
          "Pestañas de punto: Remoción, mantenimiento, cuidados de pestañas",
          "Visajismo, diseño de cejas",
          "Depilación con hilo y cera",
          "Lifting de pestañas",
          "Laminado de cejas",
          "Semipermanente con Henna"
        ]
      }
    ]
  },
  {
    id: 3,
    title: "Mirada Perfecta",
    description: "Especialización en técnicas de pestañas, cejas y depilación. Aprende las técnicas más avanzadas para crear miradas impactantes y naturales.",
    image: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=800&h=600&fit=crop",
    area: "Belleza y Estética",
    instructor: "Msc. Priscila Gómez",
    duration: "3 meses",
    hours: "36 horas",
    code: "MIR-001",
    focus: "Especialización en técnicas avanzadas de pestañas, cejas y depilación para crear miradas perfectas.",
    curriculum: [
      {
        title: "PRIMER MÓDULO: PESTAÑAS",
        duration: "1 mes",
        topics: [
          "Pestañas pelo a pelo: técnica, uso de insumos, materiales",
          "Técnicas y diseño: clásico, volumen tecnológico y más",
          "Lo más nuevo: rímel, natural, 3D tecnológico",
          "Técnica Híbrida (clásica con volumen)",
          "Volumen Ruso",
          "Pestañas de punto: técnica, uso de insumos, materiales",
          "Arma tus propios abanicos",
          "Crea el diseño de acuerdo a la mirada",
          "Aplicación correcta, retoque, retiro y cuidados profesionales",
          "Lifting de pestañas: técnica, materiales"
        ]
      },
      {
        title: "SEGUNDO MÓDULO: CEJAS",
        duration: "1 mes",
        topics: [
          "Pigmentación semi permanente: Tinturado con Henna",
          "Materiales y técnica",
          "Visajismo: Mapping-Diseño de mirada",
          "Diseños de cejas hombre-mujer",
          "Depilación con hilo: uso de materiales, insumos y técnica",
          "Depilación con Cera: uso de materiales, insumos y técnica"
        ]
      },
      {
        title: "TERCER MÓDULO: MARKETING Y VENTAS",
        duration: "1 mes",
        topics: [
          "Marketing y ventas",
          "Aprende a vender en redes sociales",
          "Crea tus redes sociales",
          "Crea diseños básicos para hacer publicidad con plantillas"
        ]
      }
    ]
  },
  {
    id: 4,
    title: "Uñas Profesionales",
    description: "Formación completa en manicure y pedicure profesional incluyendo técnicas de gel, acrílico, polygel y nail art avanzado.",
    image: "https://images.unsplash.com/photo-1604654894610-df63bc536371?w=800&h=600&fit=crop",
    area: "Belleza y Estética",
    instructor: "Instructor Especializado",
    duration: "4 meses",
    hours: "120 horas",
    code: "UNA-001",
    focus: "Formación integral en técnicas profesionales de uñas para convertirte en un especialista del nail art.",
    curriculum: [
      {
        title: "MÓDULO 1: INTRODUCCIÓN AL MUNDO DE LA MANICURA",
        duration: "1 mes",
        topics: [
          "Historia y evolución de la manicura",
          "Rol del manicurista profesional",
          "Normas de ética y atención al cliente",
          "Higiene y bioseguridad",
          "Conocimiento básico de la anatomía de la uña",
          "Etapas de la esterilización",
          "Enfermedades más comunes en uñas"
        ]
      },
      {
        title: "MÓDULO 2: HERRAMIENTAS Y PRODUCTOS",
        duration: "1 mes",
        topics: [
          "Presentación de Herramientas básicas: limas, alicates, empujadores, pulidores, etc.",
          "Productos esenciales: esmaltes, removedores, aceites, geles, acrílicos",
          "Desinfección y esterilización correcta del material",
          "Preparación del área de trabajo"
        ]
      },
      {
        title: "MÓDULO 3: TÉCNICA DE MANICURA RUSA",
        duration: "1 mes",
        topics: [
          "Tipos de pieles",
          "Manicura rusa combinada paso a paso",
          "Preparación de la uña",
          "Aplicación del color",
          "Manejo de pincel",
          "Control de perlas",
          "Posición correcta del molde según la anatomía de la uña",
          "Estructuras y esculpido",
          "Colocación del molde de manera comercial"
        ]
      },
      {
        title: "MÓDULO 4: UÑAS DE GEL",
        duration: "1 mes",
        topics: [
          "Preparación de la uña natural",
          "Aplicación de gel constructor",
          "Esmaltado semipermanente",
          "Corrección de imperfecciones",
          "Mantenimiento y relleno"
        ]
      },
      {
        title: "MÓDULO 5: MANICURA SPA",
        duration: "1 mes",
        topics: [
          "Manicura spa (exfoliación, mascarillas, aceites)",
          "Elaboración de producto para spa",
          "Masajes y cuidado de manos"
        ]
      },
      {
        title: "MÓDULO 6: UÑAS ACRÍLICAS",
        duration: "1 mes",
        topics: [
          "Introducción al producto acrílico",
          "Esculpido de uñas con tips y formas",
          "Técnica de limado y pulido",
          "Aplicación de color y decoración",
          "Relleno y retirada segura"
        ]
      },
      {
        title: "MÓDULO 7: POLYGEL",
        duration: "1 mes",
        topics: [
          "Introducción al producto Polygel",
          "Esculpido de uñas con tips y formas",
          "Técnica de limado y pulido",
          "Aplicación de color y decoración",
          "Relleno y retirada segura"
        ]
      },
      {
        title: "MÓDULO 8: DECORACIÓN DE UÑAS",
        duration: "1 mes",
        topics: [
          "Nail art con pincel: figuras",
          "Encapsulados, baby boomer",
          "Tendencias actuales"
        ]
      },
      {
        title: "MÓDULO 9: GESTIÓN PROFESIONAL",
        duration: "1 mes",
        topics: [
          "Atención al cliente y trato personalizado",
          "Cómo armar tu maletín profesional",
          "Fotografía de tus trabajos para redes sociales",
          "Precios y gestión de citas",
          "Emprendimiento: cómo iniciar tu propio negocio o cabina"
        ]
      },
      {
        title: "MÓDULO 10: PRÁCTICAS GUIADAS Y EVALUACIÓN",
        duration: "1 mes",
        topics: [
          "Casos reales con modelos",
          "Resolución de problemas comunes (uñas quebradas, hongos, etc.)",
          "Supervisión individual",
          "Examen práctico y teórico",
          "Retroalimentación individual",
          "Entrega de certificados"
        ]
      }
    ]
  },
  {
    id: 5,
    title: "Personal Trainer",
    description: "Formación completa para convertirte en instructor personal certificado. Aprende anatomía, fisiología, biomecánica y metodología del entrenamiento.",
    image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&h=600&fit=crop",
    area: "Deportes y Fitness",
    instructor: "Instructor Especializado",
    duration: "6 meses",
    hours: "180 horas",
    code: "PT-001",
    focus: "Formación integral para convertirte en un profesional del fitness con conocimientos científicos y prácticos.",
    curriculum: [
      {
        title: "MÓDULO 1: FUNDAMENTOS DE ANATOMÍA HUMANA APLICADA AL EJERCICIO",
        duration: "1 mes",
        topics: [
          "Introducción al sistema musculoesquelético",
          "Ejes y planos del movimiento",
          "Grupos musculares principales y su función",
          "Anatomía aplicada al entrenamiento"
        ]
      },
      {
        title: "MÓDULO 2: PRINCIPIOS DE FISIOLOGÍA DEL EJERCICIO",
        duration: "1 mes",
        topics: [
          "Adaptaciones fisiológicas al entrenamiento",
          "Sistemas energéticos (aeróbico y anaeróbico)",
          "Sistema cardiovascular y respiratorio",
          "Respuestas hormonales al ejercicio"
        ]
      },
      {
        title: "MÓDULO 3: BIOMECÁNICA DEL MOVIMIENTO HUMANO",
        duration: "1 mes",
        topics: [
          "Principios básicos de biomecánica",
          "Análisis de movimientos en ejercicios de pesas",
          "Errores comunes y prevención de lesiones",
          "Técnica correcta en ejercicios básicos y avanzados"
        ]
      },
      {
        title: "MÓDULO 4: METODOLOGÍA DEL ENTRENAMIENTO CON PESAS",
        duration: "1 mes",
        topics: [
          "Principios del entrenamiento (sobrecarga, especificidad, progresión, etc.)",
          "Variables del entrenamiento: volumen, intensidad, descanso",
          "Diseño de rutinas según objetivos (hipertrofia, fuerza, resistencia)",
          "Ejercicios funcionales vs analíticos"
        ]
      },
      {
        title: "MÓDULO 5: EVALUACIÓN FÍSICA Y PLANIFICACIÓN DEL ENTRENAMIENTO",
        duration: "1 mes",
        topics: [
          "Evaluación inicial: peso, % de grasa, fuerza, resistencia",
          "Interpretación de resultados",
          "Elaboración de planes semanales y mensuales",
          "Ajustes según progreso y objetivos"
        ]
      },
      {
        title: "MÓDULO 6: ROL DEL INSTRUCTOR Y ATENCIÓN AL CLIENTE",
        duration: "1 mes",
        topics: [
          "Ética y responsabilidad profesional",
          "Comunicación efectiva y motivación del cliente",
          "Seguridad en el gimnasio",
          "Protocolos básicos de primeros auxilios"
        ]
      },
      {
        title: "MÓDULO 7: NUTRICIÓN DEPORTIVA",
        duration: "1 mes",
        topics: [
          "Macronutrientes y su impacto en el rendimiento físico",
          "Suplementación deportiva: tipos, usos y precauciones",
          "Hidratación antes, durante y después del ejercicio",
          "Planificación alimenticia según objetivos (pérdida de grasa, ganancia muscular, rendimiento)"
        ]
      },
      {
        title: "MÓDULO 8: PSICOLOGÍA DEPORTIVA",
        duration: "1 mes",
        topics: [
          "Motivación y adherencia al entrenamiento",
          "Gestión del estrés y emociones en el entorno deportivo",
          "Comunicación efectiva para mejorar el desempeño del cliente",
          "Importancia del entorno positivo para el desarrollo del deportista"
        ]
      },
      {
        title: "MÓDULO 9: ENTRENAMIENTO ADAPTADO",
        duration: "1 mes",
        topics: [
          "Principios del entrenamiento adaptado",
          "Poblaciones especiales: adultos mayores, personas con sobrepeso y patologías comunes",
          "Modificación de ejercicios y progresiones según capacidades individuales",
          "Evaluación y seguimiento en programas adaptados"
        ]
      }
    ]
  },
  {
    id: 6,
    title: "Administración Pública con Mención en GADs",
    description: "Formación especializada en administración pública con enfoque en Gobiernos Autónomos Descentralizados. Aprende gestión documental, compras públicas y más.",
    image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=800&h=600&fit=crop",
    area: "Administración Pública",
    instructor: "Instructor Especializado",
    duration: "8 meses",
    hours: "240 horas",
    code: "AP-001",
    focus: "Formación especializada en administración pública para trabajar en instituciones gubernamentales y GADs.",
    curriculum: [
      {
        title: "MÓDULO 1: INTRODUCCIÓN A LA ADMINISTRACIÓN PÚBLICA",
        duration: "1 mes",
        topics: [
          "Marco jurídico de los GADs",
          "Convenios interinstitucionales",
          "Acuerdos y resoluciones",
          "Estructura del Estado y competencias de los GADs"
        ]
      },
      {
        title: "MÓDULO 2: CONTABILIDAD GUBERNAMENTAL Y GESTIÓN DOCUMENTAL",
        duration: "1 mes",
        topics: [
          "Fundamentos de la contabilidad gubernamental",
          "Sistema de Gestión Documental",
          "Manejo de archivos físicos y digitales",
          "Uso del sistema SIGAD"
        ]
      },
      {
        title: "MÓDULO 3: COMPRAS PÚBLICAS",
        duration: "1 mes",
        topics: [
          "Normativa del SERCOP",
          "Fases del proceso de contratación",
          "Herramientas electrónicas: Portal de Compras Públicas",
          "Tipos de procedimientos: ínfima cuantía, subasta inversa, régimen especial"
        ]
      },
      {
        title: "MÓDULO 4: COMUNICACIÓN POLÍTICA Y PARTICIPACIÓN CIUDADANA",
        duration: "1 mes",
        topics: [
          "Principios de comunicación pública",
          "Estrategias de vocería institucional",
          "Mecanismos de participación ciudadana",
          "Gestión de redes sociales y reputación pública"
        ]
      },
      {
        title: "MÓDULO 5: GOBERNABILIDAD Y BUEN GOBIERNO",
        duration: "1 mes",
        topics: [
          "Gobernabilidad y gobernanza",
          "Transparencia y rendición de cuentas",
          "Control social y veedurías",
          "Ética pública"
        ]
      },
      {
        title: "MÓDULO 6: TÉCNICAS LEGISLATIVAS",
        duration: "1 mes",
        topics: [
          "Tipos de sesiones de los concejos/parlamentos locales",
          "Elaboración y aprobación de actas",
          "Elaboración de acuerdos y resoluciones",
          "Técnicas de redacción normativa"
        ]
      },
      {
        title: "MÓDULO 7: PLANIFICACIÓN TERRITORIAL Y DESARROLLO LOCAL",
        duration: "1 mes",
        topics: [
          "Plan de Desarrollo y Ordenamiento Territorial (PDOT)",
          "Plan de Uso y Gestión del Suelo (PUGS)",
          "Instrumentos de planificación operativa",
          "Seguimiento y evaluación de planes"
        ]
      },
      {
        title: "MÓDULO 8: GESTIÓN DOCUMENTAL Y ARCHIVO",
        duration: "1 mes",
        topics: [
          "Ciclo de vida del documento",
          "Clasificación, conservación y digitalización",
          "Normativa del Sistema Nacional de Archivos",
          "Elaboración de cuadros de clasificación documental"
        ]
      },
      {
        title: "MÓDULO 9: FUNCIÓN DE LA CONTRALORÍA GENERAL DEL ESTADO",
        duration: "1 mes",
        topics: [
          "Competencias de la Contraloría",
          "Tipos de auditoría",
          "Informes de responsabilidades",
          "Acciones de seguimiento y cumplimiento"
        ]
      },
      {
        title: "MÓDULO 10: GESTIÓN DE TALENTO HUMANO EN EL SECTOR PÚBLICO",
        duration: "1 mes",
        topics: [
          "Procesos de selección, contratación y desvinculación",
          "Evaluación del desempeño",
          "Régimen disciplinario",
          "Capacitación y desarrollo profesional"
        ]
      }
    ]
  },
  {
    id: 7,
    title: "Maquillaje Profesional",
    description: "Formación integral en maquillaje profesional. Aprende técnicas desde maquillaje social hasta maquillaje artístico y de novias.",
    image: "https://images.unsplash.com/photo-1512496015851-a90fb38ba796?w=800&h=600&fit=crop",
    area: "Belleza y Estética",
    instructor: "Instructor Especializado",
    duration: "6 meses",
    hours: "144 horas",
    code: "MAQ-001",
    focus: "Formación completa en maquillaje profesional para convertirte en un artista del maquillaje.",
    curriculum: [
      {
        title: "MÓDULO 1: INTRODUCCIÓN AL MAQUILLAJE",
        duration: "1 mes",
        topics: [
          "Productos de maquillaje y explicación",
          "Tipos de piel y sus cuidados",
          "Bioseguridad e higiene",
          "Presentación del kit profesional",
          "Teoría del maquillaje",
          "Colorimetría aplicada al maquillaje",
          "Tipos de piel, preparación, tipos de rostros y su corrección"
        ]
      },
      {
        title: "MÓDULO 2: TIPOS DE ROSTRO Y CORRECCIONES",
        duration: "1 mes",
        topics: [
          "Morfología del rostro, correcciones claro oscuro",
          "Tipos de difuminación más práctica",
          "Planimetría de cejas más práctica"
        ]
      },
      {
        title: "MÓDULO 3: BASES Y CORRECCIONES",
        duration: "1 mes",
        topics: [
          "Colorimetría más creación de bases",
          "Tema extenso varias divisiones de clases"
        ]
      },
      {
        title: "MÓDULO 4: TÉCNICAS DE OJOS",
        duration: "1 mes",
        topics: [
          "Anatomía del ojo",
          "Tipos de delineados más práctica"
        ]
      },
      {
        title: "MÓDULO 5: TÉCNICA DE MAQUILLAJE MÓDULO 1",
        duration: "1 mes",
        topics: [
          "Esfumado suave",
          "Semi Cut crease",
          "Halo eyes",
          "Esfumado en V"
        ]
      },
      {
        title: "MÓDULO 6: TÉCNICA DE MAQUILLAJE MÓDULO 2",
        duration: "1 mes",
        topics: [
          "Técnica en piel madura",
          "Técnica piel ébano",
          "Técnica Cut crease abierto",
          "Técnica delineado gráfico más Artístico"
        ]
      },
      {
        title: "MÓDULO 7: TÉCNICA DE MAQUILLAJE MÓDULO 3",
        duration: "1 mes",
        topics: [
          "Novia clásica",
          "Novia romántica piel blindada",
          "Novia piel híbrida",
          "Novia Glam Juisy Skin"
        ]
      },
      {
        title: "MÓDULO 8: MAQUILLAJE CON AERÓGRAFO",
        duration: "1 mes",
        topics: [
          "Armado y desarmado de aerógrafo",
          "Piel Híbrida con Aerógrafo"
        ]
      }
    ]
  }
];

export const DUMMY_TESTIMONIALS: Testimonial[] = [
    {
        id: 1,
        name: 'Ana Pérez',
        course: 'Barbería Profesional',
        quote: 'Gracias a la academia, pude lanzar mi propia barbería. Los conocimientos son 100% prácticos y aplicables desde el primer día.',
        image: 'https://picsum.photos/seed/ana/200/200'
    },
    {
        id: 2,
        name: 'Carlos Mendoza',
        course: 'Personal Trainer',
        quote: 'Conseguí un trabajo como instructor personal antes de terminar el curso. La formación es de altísima calidad y muy completa.',
        image: 'https://picsum.photos/seed/carlos/200/200'
    },
    {
        id: 3,
        name: 'Sofía Ramirez',
        course: 'Belleza Integral',
        quote: 'Siempre me apasionó la belleza y aquí me dieron las herramientas para convertir mi pasión en mi profesión. ¡Totalmente recomendado!',
        image: 'https://picsum.photos/seed/sofia/200/200'
    }
];

// Logo real de la academia
export const LOGO_URL = '/images/logo.png';

// Logo real de la academia
export const LOGO_URL_FOOTER = '/images/logo.jpeg';

// Galería de instalaciones
export const GALLERY_IMAGES = [
  {
    id: 1,
    src: 'https://picsum.photos/seed/classroom1/800/600',
    alt: 'Aula de informática',
    title: 'Aula de Informática',
    description: 'Nuestras aulas equipadas con computadoras de última generación para prácticas reales.'
  },
  {
    id: 2,
    src: 'https://picsum.photos/seed/classroom2/800/600',
    alt: 'Aula de diseño',
    title: 'Aula de Diseño',
    description: 'Espacios creativos para desarrollar habilidades de diseño gráfico y multimedia.'
  },
  {
    id: 3,
    src: 'https://picsum.photos/seed/workshop/800/600',
    alt: 'Taller práctico',
    title: 'Taller Práctico',
    description: 'Áreas especializadas para talleres de reparación y mantenimiento de dispositivos.'
  },
  {
    id: 4,
    src: 'https://picsum.photos/seed/library/800/600',
    alt: 'Biblioteca',
    title: 'Biblioteca Digital',
    description: 'Recursos educativos y material de consulta para complementar tu formación.'
  },
  {
    id: 5,
    src: 'https://picsum.photos/seed/lounge/800/600',
    alt: 'Área de descanso',
    title: 'Área de Descanso',
    description: 'Espacios cómodos para networking y descanso entre clases.'
  },
  {
    id: 6,
    src: 'https://picsum.photos/seed/entrance/800/600',
    alt: 'Recepción',
    title: 'Recepción',
    description: 'Nuestro equipo está listo para recibirte y resolver todas tus consultas.'
  }
];

// Otros assets útiles
export const ASSETS = {
  // Iconos
  ICONS: {
    ARROW_RIGHT: '/icons/arrow-right.svg',
    ARROW_LEFT: '/icons/arrow-left.svg',
    MENU: '/icons/menu.svg',
    CLOSE: '/icons/close.svg',
    SEARCH: '/icons/search.svg',
    PHONE: '/icons/phone.svg',
    EMAIL: '/icons/email.svg',
    LOCATION: '/icons/location.svg',
    FACEBOOK: '/icons/facebook.svg',
    INSTAGRAM: '/icons/instagram.svg',
    TWITTER: '/icons/twitter.svg',
    LINKEDIN: '/icons/linkedin.svg',
  },
  // Imágenes
  IMAGES: {
    HERO_BANNER: '/images/hero-banner.jpg',
    ABOUT_US: '/images/about-us.jpg',
    FACILITIES: '/images/facilities.jpg',
    TEAM: '/images/team.jpg',
    CERTIFICATES: '/images/certificates.jpg',
  },
  // Logos de certificaciones - Rutas corregidas
  CERTIFICATIONS: {
    MINISTERIO_TRABAJO: '/images/logo-ministerio.webp',
    SENESCYT: '/images/logo-senescyt.webp',
    CAMARA_ARTESANOS: '/images/logo-camara.webp',
  },
  // Fuentes
  FONTS: {
    PRIMARY: '/fonts/roboto-regular.woff2',
    PRIMARY_BOLD: '/fonts/roboto-bold.woff2',
    SECONDARY: '/fonts/open-sans-regular.woff2',
  }
};