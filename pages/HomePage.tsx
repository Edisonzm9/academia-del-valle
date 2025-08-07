import React, { useState, useMemo } from 'react';
import { DUMMY_TESTIMONIALS, DUMMY_COURSES, GALLERY_IMAGES } from '../constants';
import { 
  AcademicCapIcon, 
  BriefcaseIcon, 
  ChartBarIcon,
  EnvelopeIcon,
  PhoneIcon,
  MapPinIcon,
  ComputerDesktopIcon,
  PlayIcon,
  CheckCircleIcon,
  ArrowRightIcon,
  ClockIcon,
  UserIcon
} from '@heroicons/react/24/outline';
import Header from '../components/Header';
import Footer from '../components/Footer';
import CourseCard from '../components/CourseCard';
import Gallery from '../components/Gallery';
import FloatingButtons from '../components/FloatingButtons';

const BenefitCard: React.FC<{ icon: React.ReactNode; title: string; children: React.ReactNode }> = ({ icon, title, children }) => (
  <div className="bg-white p-8 rounded-2xl shadow-xl text-center transform hover:scale-105 transition-all duration-500 hover:shadow-2xl border border-gray-100">
    <div className="flex justify-center items-center mb-6 text-adv-red">{icon}</div>
    <h3 className="font-montserrat text-2xl text-adv-blue mb-4 font-bold">{title}</h3>
    <p className="text-gray-600 leading-relaxed text-lg">{children}</p>
  </div>
);

const TestimonialCard: React.FC<{ testimonial: typeof DUMMY_TESTIMONIALS[0] }> = ({ testimonial }) => (
    <div className="bg-white p-8 rounded-2xl shadow-xl flex flex-col items-center text-center transform hover:scale-105 transition-all duration-300 border border-gray-100">
        <img src={testimonial.image} alt={testimonial.name} className="w-28 h-28 rounded-full mb-6 border-4 border-adv-red shadow-lg"/>
        <p className="text-gray-600 italic mb-6 text-lg leading-relaxed">"{testimonial.quote}"</p>
        <h4 className="font-montserrat text-adv-blue text-xl font-bold">{testimonial.name}</h4>
        <p className="text-adv-red font-semibold">{testimonial.course}</p>
    </div>
);

const GalleryImage: React.FC<{ src: string; alt: string }> = ({ src, alt }) => (
    <div className="overflow-hidden rounded-2xl shadow-xl h-64 md:h-80">
        <img 
            src={src} 
            alt={alt} 
            className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-500 ease-in-out"
        />
    </div>
);

const CertificationLogo: React.FC<{ name: string; image: string; alt: string }> = ({ name, image, alt }) => (
  <div className="group bg-white/90 backdrop-blur-sm p-6 rounded-2xl shadow-lg h-48 transform hover:scale-105 transition-all duration-500 border border-gray-100/50 hover:shadow-2xl hover:bg-white flex items-center justify-center relative overflow-hidden">
    {/* Efecto de fondo sutil */}
    <div className="absolute inset-0 bg-gradient-to-br from-gray-50/50 to-white/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
    
    <div className="text-center relative z-10">
      <div className="mb-4">
        <img 
          src={image} 
          alt={alt} 
          className="h-32 w-auto mx-auto object-contain filter group-hover:brightness-110 transition-all duration-300"
          onError={(e) => {
            e.currentTarget.style.display = 'none';
            e.currentTarget.nextElementSibling?.classList.remove('hidden');
          }}
        />
        <div className="hidden text-2xl font-bold text-adv-blue">{name.split(' ')[0]}</div>
      </div>
      <span className="text-sm font-semibold text-adv-blue block leading-tight">{name}</span>
    </div>
  </div>
);

const CourseStats = () => (
  <div className="bg-white py-16">
    <div className="container mx-auto px-6">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
        <div className="flex flex-col items-center">
          <AcademicCapIcon className="w-12 h-12 text-adv-red mb-4" />
          <h3 className="text-3xl font-bold text-adv-blue mb-2">7</h3>
          <p className="text-gray-600">Cursos Disponibles</p>
        </div>
        <div className="flex flex-col items-center">
          <BriefcaseIcon className="w-12 h-12 text-adv-red mb-4" />
          <h3 className="text-3xl font-bold text-adv-blue mb-2">3</h3>
          <p className="text-gray-600">Áreas de Formación</p>
        </div>
        <div className="flex flex-col items-center">
          <UserIcon className="w-12 h-12 text-adv-red mb-4" />
          <h3 className="text-3xl font-bold text-adv-blue mb-2">500+</h3>
          <p className="text-gray-600">Estudiantes Formados</p>
        </div>
        <div className="flex flex-col items-center">
          <CheckCircleIcon className="w-12 h-12 text-adv-red mb-4" />
          <h3 className="text-3xl font-bold text-adv-blue mb-2">100%</h3>
          <p className="text-gray-600">Certificados Oficiales</p>
        </div>
      </div>
    </div>
  </div>
);

const HomePage: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<string>('Todos');
  
  const courseAreas = ['Todos', 'Belleza y Estética', 'Deportes y Fitness', 'Administración Pública'];

  const filteredCourses = useMemo(() => {
    if (activeFilter === 'Todos') {
      return DUMMY_COURSES;
    }
    return DUMMY_COURSES.filter(course => course.area === activeFilter);
  }, [activeFilter]);

  return (
    <div className="bg-white">
      <Header />
      <main>
        {/* 1. Hero Section */}
        <section 
          id="inicio"
          className="relative min-h-screen bg-gradient-to-br from-adv-blue via-purple-900 to-adv-blue flex items-center justify-center text-white overflow-hidden"
        >
          {/* Efectos de fondo */}
          <div className="absolute inset-0 bg-black opacity-20"></div>
          <div className="absolute top-0 left-0 w-full h-full">
            <div className="absolute top-20 left-20 w-72 h-72 bg-adv-red rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
            <div className="absolute top-40 right-20 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse" style={{animationDelay: '2s'}}></div>
            <div className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse" style={{animationDelay: '4s'}}></div>
          </div>
          
          <div className="relative text-center z-10 px-4 max-w-6xl mx-auto">
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-montserrat mb-8 font-bold leading-tight">
              <span className="text-white">Potencia tu</span>
              <br />
              <span className="text-adv-red">futuro</span>
            </h1>
            <p className="text-xl md:text-3xl mb-12 font-roboto max-w-4xl mx-auto leading-relaxed opacity-90">
              Transforma tu talento en una carrera de éxito con nuestra formación de calidad certificada.
            </p>
          </div>
        </section>

        {/* 2. About Us Section - Movido arriba para establecer credibilidad */}
        <section id="nosotros" className="bg-gradient-to-br from-gray-50 to-white py-20 md:py-32">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
                <h2 className="text-4xl md:text-6xl font-montserrat text-adv-blue mb-6 font-bold">Academia del Valle EC</h2>
                
                {/* Logo de la Academia */}
                <div className="flex justify-center mb-8">
                  <div className="group relative">
                    <img 
                      src="/images/logo.png" 
                      alt="Academia del Valle EC Logo" 
                      className="h-40 w-auto object-contain filter group-hover:brightness-110 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 drop-shadow-2xl"
                      onError={(e) => {
                        e.currentTarget.style.display = 'none';
                        // Fallback al logo anterior si la imagen falla
                        const fallback = e.currentTarget.nextElementSibling;
                        if (fallback) fallback.classList.remove('hidden');
                      }}
                    />
                    {/* Fallback SVG si la imagen falla */}
                    <div className="hidden flex items-center justify-center">
                      <div className="w-40 h-40 bg-gradient-to-br from-adv-red to-adv-blue rounded-2xl flex items-center justify-center shadow-lg">
                        <span className="text-white font-bold text-5xl">A</span>
                      </div>
                      <div className="ml-6 text-left">
                        <div className="text-adv-blue font-bold text-2xl">Academia del Valle</div>
                        <div className="text-gray-600 text-lg">EC</div>
                      </div>
                    </div>
                    
                    {/* Efecto de partículas en hover */}
                    <div className="absolute -top-2 -right-2 w-4 h-4 bg-adv-red rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-ping transition-all duration-500"></div>
                    <div className="absolute -bottom-2 -left-2 w-3 h-3 bg-adv-blue rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-ping transition-all duration-500 delay-200"></div>
                    
                    {/* Tooltip en hover */}
                    <div className="absolute -bottom-12 left-1/2 transform -translate-x-1/2 bg-adv-blue text-white px-4 py-2 rounded-lg text-sm font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                      Potencia tu futuro
                      <div className="absolute -top-1 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-adv-blue rotate-45"></div>
                    </div>
                  </div>
                </div>
                
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">Conoce la esencia de nuestra institución.</p>
            </div>

            <div className="mt-16 max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
                <div className="p-10 bg-white rounded-2xl shadow-xl">
                    <h3 className="text-4xl font-montserrat text-adv-red mb-6 font-bold">Misión</h3>
                    <p className="text-gray-700 leading-relaxed text-lg">
                    Brindar formación continua y de calidad a personas que desean mejorar su perfil profesional o emprender su propio negocio, mediante cursos certificados que fomenten el crecimiento personal y económico.
                    </p>
                </div>
                 <div className="relative h-96">
                    <img src="https://picsum.photos/seed/team/600/500" alt="Equipo de la academia" className="rounded-2xl shadow-2xl w-full h-full object-cover" />
                </div>
            </div>

            <div className="mt-16 max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
                 <div className="relative md:order-2 h-96">
                    <img src="https://picsum.photos/seed/vision/600/500" alt="Estudiante mirando al futuro" className="rounded-2xl shadow-2xl w-full h-full object-cover" />
                </div>
                <div className="p-10 bg-white rounded-2xl shadow-xl md:order-1">
                    <h3 className="text-4xl font-montserrat text-adv-red mb-6 font-bold">Visión</h3>
                    <p className="text-gray-700 leading-relaxed text-lg">
                    Ser la academia líder en formación técnica y profesional del Valle de Tumbaco y Ecuador, reconocida por su impacto positivo en el desarrollo social, la empleabilidad y el emprendimiento a través de una educación accesible, integral y actualizada.
                    </p>
                </div>
            </div>
          </div>
        </section>

        {/* 3. Value Proposition Section */}
        <section className="py-20 md:py-32 bg-gradient-to-br from-gray-50 to-white">
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-4xl md:text-6xl font-montserrat text-adv-blue mb-8 font-bold">Nuestra Propuesta de Valor</h2>
            <p className="max-w-5xl mx-auto text-xl md:text-2xl text-gray-700 leading-relaxed">
              Ofrecemos educación práctica, flexible y certificada con respaldo oficial, para que nuestros estudiantes puedan <span className="font-bold text-adv-red">potenciar su futuro</span>, desarrollarse profesionalmente y generar ingresos a través del conocimiento.
            </p>
          </div>
        </section>
        
        {/* 4. Benefits Section */}
        <section className="py-20 md:py-32 bg-white">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-6xl font-montserrat text-adv-blue mb-6 font-bold">¿Por qué elegirnos?</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">Descubre las ventajas que te ofrecemos para tu desarrollo profesional</p>
            </div>
            <div className="grid md:grid-cols-3 gap-12">
              <BenefitCard icon={<AcademicCapIcon className="w-20 h-20"/>} title="Cursos Certificados">
                Obtén certificaciones con respaldo oficial que validan tus habilidades y te abren puertas en el mercado laboral.
              </BenefitCard>
              <BenefitCard icon={<BriefcaseIcon className="w-20 h-20"/>} title="Formación Práctica">
                Aprende haciendo. Nuestros cursos están diseñados para darte experiencia real y aplicable desde el primer día.
              </BenefitCard>
              <BenefitCard icon={<ChartBarIcon className="w-20 h-20"/>} title="Crecimiento Profesional">
                Impulsa tu carrera o emprende tu propio negocio con las competencias más demandadas por el mercado.
              </BenefitCard>
            </div>
          </div>
        </section>

        {/* 5. Courses Section - El producto principal */}
        <section id="cursos" className="bg-white">
          {/* Header de Cursos */}
          <div className="bg-gradient-to-br from-adv-blue via-purple-900 to-adv-blue py-24 text-center text-white relative overflow-hidden">
            {/* Efectos de fondo */}
            <div className="absolute inset-0 bg-black opacity-20"></div>
            <div className="absolute top-0 left-0 w-full h-full">
              <div className="absolute top-20 left-20 w-72 h-72 bg-adv-red rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
              <div className="absolute top-40 right-20 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse" style={{animationDelay: '2s'}}></div>
              <div className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse" style={{animationDelay: '4s'}}></div>
            </div>
            
            <div className="relative z-10 container mx-auto px-6">
              <h1 className="text-4xl md:text-6xl font-montserrat font-bold mb-6">Todos Nuestros Cursos</h1>
              <p className="text-xl text-slate-200 max-w-3xl mx-auto leading-relaxed">
                Encuentra la formación ideal para ti y da el siguiente paso en tu carrera profesional. Todos nuestros cursos cuentan con certificación oficial y respaldo institucional.
              </p>
            </div>
          </div>
          
          {/* Estadísticas */}
          <CourseStats />
          
          {/* Filtros y Grid de Cursos */}
          <div className="container mx-auto px-6 py-20">
            {/* Filtros */}
            <div className="flex justify-center flex-wrap gap-3 mb-16">
              {courseAreas.map(area => (
                <button
                  key={area}
                  onClick={() => setActiveFilter(area)}
                  className={`px-8 py-3 font-semibold rounded-full text-sm transition-all duration-300 transform hover:scale-105 ${
                    activeFilter === area 
                    ? 'bg-adv-red text-white shadow-lg' 
                    : 'bg-white text-adv-blue hover:bg-gray-100 shadow-sm border border-gray-200'
                  }`}
                >
                  {area}
                </button>
              ))}
            </div>

            {/* Grid de cursos */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
              {filteredCourses.map(course => (
                <CourseCard key={course.id} course={course} variant="compact" showImage={false} />
              ))}
            </div>

            {/* Mensaje cuando no hay cursos */}
            {filteredCourses.length === 0 && (
              <div className="text-center py-16">
                <div className="bg-gray-50 rounded-2xl p-12 max-w-md mx-auto">
                  <AcademicCapIcon className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                  <h3 className="text-2xl font-bold text-gray-600 mb-2">Próximamente</h3>
                  <p className="text-gray-500">No hay cursos disponibles en esta categoría en este momento. ¡Mantente atento a nuestras nuevas ofertas!</p>
                </div>
              </div>
            )}
          </div>
        </section>

        {/* 6. Certifications Section - Credibilidad después de mostrar los cursos */}
        <section id="certificaciones" className="bg-white py-20 md:py-32">
            <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-6xl font-montserrat text-adv-blue mb-6 font-bold">Educación Certificada con Respaldo Oficial</h2>
              <p className="text-xl text-gray-600 mt-4 max-w-4xl mx-auto leading-relaxed">
                Tu futuro está en buenas manos. Estamos orgullosos de contar con la certificación y el respaldo de las instituciones más importantes del país, garantizando la calidad y validez de tu formación.
              </p>
            </div>

            <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
              <CertificationLogo name="Ministerio del Trabajo" image="/images/logo-ministerio.webp" alt="Ministerio del Trabajo" />
              <CertificationLogo name="SENESCYT" image="/images/logo-senescyt.webp" alt="SENESCYT" />
              <CertificationLogo name="Cámara de Comercio de Artesanos" image="/images/logo-camara.webp" alt="Cámara de Comercio de Artesanos" />
            </div>
            
            <div className="mt-16 text-center">
                <img src="https://picsum.photos/seed/graduation/1000/500" alt="Estudiante graduado" className="rounded-2xl shadow-2xl mx-auto" />
                <p className="mt-8 text-gray-600 italic text-xl">Invierte en una educación que te abre puertas.</p>
            </div>
          </div>
        </section>

        {/* 7. Aula Virtual Section - Herramienta de aprendizaje */}
        <section id="aula-virtual" className="py-20 md:py-32 bg-gradient-to-br from-adv-blue to-purple-900 text-white">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-6xl font-montserrat mb-6 font-bold">Aula Virtual</h2>
              <p className="text-xl opacity-90 max-w-3xl mx-auto">Accede a tu plataforma de aprendizaje desde cualquier lugar y en cualquier momento.</p>
            </div>
            
            <div className="max-w-4xl mx-auto bg-white/10 backdrop-blur-sm rounded-3xl p-8 md:p-12">
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div>
                  <h3 className="text-3xl font-montserrat mb-6 font-bold">Plataforma de Aprendizaje</h3>
                  <ul className="space-y-4 text-lg">
                    <li className="flex items-center">
                      <CheckCircleIcon className="w-6 h-6 text-adv-red mr-3" />
                      Contenido multimedia interactivo
                    </li>
                    <li className="flex items-center">
                      <CheckCircleIcon className="w-6 h-6 text-adv-red mr-3" />
                      Seguimiento de progreso en tiempo real
                    </li>
                    <li className="flex items-center">
                      <CheckCircleIcon className="w-6 h-6 text-adv-red mr-3" />
                      Tutorías virtuales personalizadas
                    </li>
                    <li className="flex items-center">
                      <CheckCircleIcon className="w-6 h-6 text-adv-red mr-3" />
                      Comunidad de estudiantes activa
                    </li>
                  </ul>
                  
                  <a 
                    href="#aula-virtual" 
                    className="inline-flex items-center mt-8 bg-adv-red text-white font-bold py-4 px-8 rounded-xl hover:bg-red-700 transition-all duration-300 transform hover:scale-105 shadow-xl"
                  >
                    <ComputerDesktopIcon className="w-6 h-6 mr-3" />
                    Acceder al Aula Virtual
                  </a>
                </div>
                
                <div className="relative">
                  <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-8 text-center">
                    <ComputerDesktopIcon className="w-24 h-24 mx-auto mb-6 text-adv-red" />
                    <h4 className="text-2xl font-bold mb-4">Acceso 24/7</h4>
                    <p className="text-lg opacity-90 mb-6">Estudia a tu ritmo y desde cualquier dispositivo</p>
                    
                    {/* Logo de Moodle integrado */}
                    <p className="text-sm opacity-80 mb-3">Con el respaldo de:</p>
                    <img 
                      src="/images/moodle.png" 
                      alt="Moodle LMS" 
                      className="w-32 h-auto mx-auto rounded-xl shadow-lg"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 8. Gallery Section - Evidencia visual */}
        <Gallery images={GALLERY_IMAGES} />

        {/* 9. Testimonials Section - Social proof al final */}
        <section className="py-20 md:py-32 bg-gradient-to-br from-gray-50 to-white">
            <div className="container mx-auto px-6">
                <h2 className="text-4xl md:text-6xl font-montserrat text-adv-blue text-center mb-16 font-bold">Lo que dicen nuestros estudiantes</h2>
                <div className="grid md:grid-cols-3 gap-12">
                    {DUMMY_TESTIMONIALS.map((testimonial) => (
                        <TestimonialCard key={testimonial.id} testimonial={testimonial} />
                    ))}
                </div>
            </div>
        </section>

        {/* 10. Contact Section - Call to action final */}
        <section id="contacto" className="bg-gradient-to-br from-gray-50 to-white py-20 md:py-32">
             <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                <h2 className="text-4xl md:text-6xl font-montserrat text-adv-blue mb-6 font-bold">Conversemos</h2>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">¿Tienes alguna pregunta? Estamos aquí para ayudarte a dar el siguiente paso en tu carrera.</p>
                </div>

                <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 bg-white p-12 md:p-16 rounded-3xl shadow-2xl">
                {/* Contact Form */}
                <form className="space-y-8" onSubmit={(e) => {
                  e.preventDefault();
                  const formData = new FormData(e.currentTarget);
                  const name = formData.get('name') as string;
                  const email = formData.get('email') as string;
                  const phone = formData.get('phone') as string;
                  const course = formData.get('course') as string;
                  const message = formData.get('message') as string;
                  
                  const whatsappMessage = `Hola! 👋 Soy *${name}* 📝

📧 *Email:* ${email}
📱 *Teléfono:* ${phone}

🎓 *Interés en curso:* ${course || 'Información general'}

💬 *Consulta:* ${message}

Me gustaría obtener más información sobre:
• Inscripciones y horarios
• Costos y formas de pago
• Requisitos para el curso
• Certificación al finalizar

¿Podrían ayudarme con esta información? Muchas gracias! 🙏`;

                  const whatsappUrl = `https://wa.me/593123456789?text=${encodeURIComponent(whatsappMessage)}`;
                  window.open(whatsappUrl, '_blank');
                }}>
                    <div>
                    <label htmlFor="name" className="block text-lg font-bold text-gray-700 mb-3">Nombre Completo *</label>
                    <input type="text" id="name" name="name" required className="w-full px-6 py-4 border-2 border-gray-200 rounded-xl focus:ring-adv-red focus:border-adv-red text-lg transition-all duration-300" placeholder="Tu nombre completo" />
                    </div>
                    <div>
                    <label htmlFor="email" className="block text-lg font-bold text-gray-700 mb-3">Email *</label>
                    <input type="email" id="email" name="email" required className="w-full px-6 py-4 border-2 border-gray-200 rounded-xl focus:ring-adv-red focus:border-adv-red text-lg transition-all duration-300" placeholder="tu.email@ejemplo.com" />
                    </div>
                    <div>
                    <label htmlFor="phone" className="block text-lg font-bold text-gray-700 mb-3">Teléfono *</label>
                    <input type="tel" id="phone" name="phone" required className="w-full px-6 py-4 border-2 border-gray-200 rounded-xl focus:ring-adv-red focus:border-adv-red text-lg transition-all duration-300" placeholder="Tu número de teléfono" />
                    </div>
                    <div>
                    <label htmlFor="course" className="block text-lg font-bold text-gray-700 mb-3">Curso de Interés</label>
                    <select id="course" name="course" className="w-full px-6 py-4 border-2 border-gray-200 rounded-xl focus:ring-adv-red focus:border-adv-red text-lg transition-all duration-300">
                      <option value="">Selecciona un curso (opcional)</option>
                      <option value="Barbería Profesional">Barbería Profesional</option>
                      <option value="Belleza Integral">Belleza Integral</option>
                      <option value="Mirada Perfecta">Mirada Perfecta</option>
                      <option value="Uñas Profesionales">Uñas Profesionales</option>
                      <option value="Personal Trainer">Personal Trainer</option>
                      <option value="Administración Pública con Mención en GADs">Administración Pública con Mención en GADs</option>
                      <option value="Maquillaje Profesional">Maquillaje Profesional</option>
                      <option value="Información General">Información General</option>
                    </select>
                    </div>
                    <div>
                    <label htmlFor="message" className="block text-lg font-bold text-gray-700 mb-3">Mensaje *</label>
                    <textarea id="message" name="message" rows={4} required className="w-full px-6 py-4 border-2 border-gray-200 rounded-xl focus:ring-adv-red focus:border-adv-red text-lg transition-all duration-300" placeholder="Cuéntanos sobre tu interés, preguntas específicas o cualquier consulta que tengas..."></textarea>
                    </div>
                    <div>
                    <button type="submit" className="w-full bg-adv-red text-white font-bold py-4 px-8 rounded-xl text-xl hover:bg-red-700 transition-all duration-300 transform hover:scale-105 shadow-xl flex items-center justify-center">
                        <svg className="w-6 h-6 mr-3" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
                        </svg>
                        Enviar por WhatsApp
                    </button>
                    </div>
                </form>

                {/* Contact Info */}
                <div className="space-y-10">
                    <h3 className="text-3xl font-montserrat text-adv-blue font-bold">Información de Contacto</h3>
                    <div className="flex items-start">
                    <MapPinIcon className="w-10 h-10 mr-6 text-adv-red flex-shrink-0 mt-2" />
                    <div>
                        <h4 className="font-bold text-xl text-gray-800 mb-2">Dirección</h4>
                        <p className="text-gray-600 text-lg">Tumbaco, Ecuador</p>
                    </div>
                    </div>
                    <div className="flex items-start">
                    <PhoneIcon className="w-10 h-10 mr-6 text-adv-red flex-shrink-0 mt-2" />
                    <div>
                        <h4 className="font-bold text-xl text-gray-800 mb-2">Teléfono</h4>
                        <p className="text-gray-600 text-lg">(+593) 123-456-789</p>
                    </div>
                    </div>
                    <div className="flex items-start">
                    <EnvelopeIcon className="w-10 h-10 mr-6 text-adv-red flex-shrink-0 mt-2" />
                    <div>
                        <h4 className="font-bold text-xl text-gray-800 mb-2">Email</h4>
                        <p className="text-gray-600 text-lg">info@academiadelvalle.ec</p>
                    </div>
                    </div>
                    <div className="mt-8">
                        <div className="aspect-w-16 aspect-h-9 rounded-2xl overflow-hidden shadow-xl">
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15959.256828552174!2d-78.4183424683515!3d-0.20310243431631027!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x91d59392e66d2181%3A0x62836f83d735b59a!2sTumbaco%2C%20Quito%2C%20Ecuador!5e0!3m2!1sen!2sus!4v1680000000000!5m2!1sen!2sus" width="100%" height="300" style={{border:0}} allowFullScreen={false} loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                        </div>
                    </div>
                </div>
                </div>
            </div>
        </section>
      </main>
      <Footer />
      
      {/* Botones flotantes */}
      <FloatingButtons />
    </div>
  );
};

export default HomePage;