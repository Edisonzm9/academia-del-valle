import { Course, Testimonial } from './types';

export const NAV_LINKS = [
  { name: 'Inicio', path: '#inicio' },
  { name: 'Cursos', path: '#cursos' },
  { name: 'Nosotros', path: '#nosotros' },
  { name: 'Certificaciones', path: '#certificaciones' },
  { name: 'Contacto', path: '#contacto' },
];

export const DUMMY_COURSES: Course[] = [
  {
    id: 1,
    title: 'Marketing Digital y Redes Sociales',
    description: 'Aprende a crear estrategias de marketing efectivas y a gestionar redes sociales como un profesional.',
    image: 'https://picsum.photos/seed/marketing/600/400', // Placeholder temporal
  },
  {
    id: 2,
    title: 'Desarrollo Web Full Stack',
    description: 'Conviértete en un desarrollador web completo, dominando tanto el frontend como el backend.',
    image: 'https://picsum.photos/seed/webdev/600/400', // Placeholder temporal
  },
  {
    id: 3,
    title: 'Diseño Gráfico y Multimedia',
    description: 'Desata tu creatividad y aprende a utilizar las herramientas de diseño más demandadas en el mercado.',
    image: 'https://picsum.photos/seed/design/600/400', // Placeholder temporal
  },
  {
    id: 4,
    title: 'Gestión de Proyectos con Metodologías Ágiles',
    description: 'Lidera equipos y proyectos de manera eficiente con Scrum, Kanban y otras metodologías ágiles.',
    image: 'https://picsum.photos/seed/project/600/400', // Placeholder temporal
  },
  {
    id: 5,
    title: 'Reparación de Celulares y Tablets',
    description: 'Inicia tu propio negocio con nuestro curso práctico de reparación de dispositivos móviles.',
    image: 'https://picsum.photos/seed/mobile/600/400', // Placeholder temporal
  },
  {
    id: 6,
    title: 'Inglés para Negocios',
    description: 'Mejora tus oportunidades laborales aprendiendo a comunicarte de forma fluida en inglés en un entorno profesional.',
    image: 'https://picsum.photos/seed/english/600/400', // Placeholder temporal
  },
];

export const DUMMY_TESTIMONIALS: Testimonial[] = [
    {
        id: 1,
        name: 'Ana Pérez',
        course: 'Marketing Digital',
        quote: 'Gracias a la academia, pude lanzar mi propia agencia. Los conocimientos son 100% prácticos y aplicables desde el primer día.',
        image: 'https://picsum.photos/seed/ana/200/200' // Placeholder temporal
    },
    {
        id: 2,
        name: 'Carlos Mendoza',
        course: 'Desarrollo Web',
        quote: 'Conseguí un trabajo como desarrollador junior antes de terminar el curso. La formación es de altísima calidad y muy completa.',
        image: 'https://picsum.photos/seed/carlos/200/200' // Placeholder temporal
    },
    {
        id: 3,
        name: 'Sofía Ramirez',
        course: 'Diseño Gráfico',
        quote: 'Siempre me apasionó el diseño y aquí me dieron las herramientas para convertir mi pasión en mi profesión. ¡Totalmente recomendado!',
        image: 'https://picsum.photos/seed/sofia/200/200' // Placeholder temporal
    }
];

// Logo real de la academia
export const LOGO_URL = '/images/logo.png'; // Logo real de la academia

// Logo real de la academia
export const LOGO_URL_FOOTER = '/images/logo.jpeg'; // Logo real de la academia

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