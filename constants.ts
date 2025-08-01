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
    image: '/images/courses/marketing-digital.jpg', // Asset local desde public/images/
  },
  {
    id: 2,
    title: 'Desarrollo Web Full Stack',
    description: 'Conviértete en un desarrollador web completo, dominando tanto el frontend como el backend.',
    image: '/images/courses/web-development.jpg', // Asset local desde public/images/
  },
  {
    id: 3,
    title: 'Diseño Gráfico y Multimedia',
    description: 'Desata tu creatividad y aprende a utilizar las herramientas de diseño más demandadas en el mercado.',
    image: '/images/courses/graphic-design.jpg', // Asset local desde public/images/
  },
  {
    id: 4,
    title: 'Gestión de Proyectos con Metodologías Ágiles',
    description: 'Lidera equipos y proyectos de manera eficiente con Scrum, Kanban y otras metodologías ágiles.',
    image: '/images/courses/project-management.jpg', // Asset local desde public/images/
  },
  {
    id: 5,
    title: 'Reparación de Celulares y Tablets',
    description: 'Inicia tu propio negocio con nuestro curso práctico de reparación de dispositivos móviles.',
    image: '/images/courses/mobile-repair.jpg', // Asset local desde public/images/
  },
  {
    id: 6,
    title: 'Inglés para Negocios',
    description: 'Mejora tus oportunidades laborales aprendiendo a comunicarte de forma fluida en inglés en un entorno profesional.',
    image: '/images/courses/business-english.jpg', // Asset local desde public/images/
  },
];

export const DUMMY_TESTIMONIALS: Testimonial[] = [
    {
        id: 1,
        name: 'Ana Pérez',
        course: 'Marketing Digital',
        quote: 'Gracias a la academia, pude lanzar mi propia agencia. Los conocimientos son 100% prácticos y aplicables desde el primer día.',
        image: '/images/testimonials/ana-perez.jpg' // Asset local desde public/images/
    },
    {
        id: 2,
        name: 'Carlos Mendoza',
        course: 'Desarrollo Web',
        quote: 'Conseguí un trabajo como desarrollador junior antes de terminar el curso. La formación es de altísima calidad y muy completa.',
        image: '/images/testimonials/carlos-mendoza.jpg' // Asset local desde public/images/
    },
    {
        id: 3,
        name: 'Sofía Ramirez',
        course: 'Diseño Gráfico',
        quote: 'Siempre me apasionó el diseño y aquí me dieron las herramientas para convertir mi pasión en mi profesión. ¡Totalmente recomendado!',
        image: '/images/testimonials/sofia-ramirez.jpg' // Asset local desde public/images/
    }
];

// Logo local desde la carpeta public
export const LOGO_URL = '/images/logo.png'; // Asset local desde public/images/

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
  // Logos de certificaciones - Probando con rutas directas
  CERTIFICATIONS: {
    MINISTERIO_TRABAJO: './images/logo-ministerio.webp',
    SENESCYT: './images/logo-senescyt.webp',
    CAMARA_ARTESANOS: './images/logo-camara.webp',
  },
  // Fuentes
  FONTS: {
    PRIMARY: '/fonts/roboto-regular.woff2',
    PRIMARY_BOLD: '/fonts/roboto-bold.woff2',
    SECONDARY: '/fonts/open-sans-regular.woff2',
  }
};