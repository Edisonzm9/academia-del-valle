import React from 'react';
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
  ArrowRightIcon
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

const CertificationLogo: React.FC<{ name: string }> = ({ name }) => (
  <div className="bg-white p-8 flex items-center justify-center rounded-2xl shadow-xl h-48 transform hover:scale-105 transition-all duration-300 border border-gray-100">
    <span className="text-2xl font-bold text-center text-adv-blue">{name}</span>
  </div>
);


const HomePage: React.FC = () => {
  return (
    <div className="bg-white">
      <Header />
      <main>
        {/* Hero Section Mejorado */}
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
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <a 
                href="#cursos" 
                className="bg-adv-red text-white font-bold py-4 px-12 rounded-full text-xl hover:bg-red-700 transition-all duration-300 transform hover:scale-105 shadow-2xl"
              >
                Ver Cursos
              </a>
              <a 
                href="#contacto" 
                className="bg-transparent border-2 border-white text-white font-bold py-4 px-12 rounded-full text-xl hover:bg-white hover:text-adv-blue transition-all duration-300 transform hover:scale-105"
              >
                Contactar
              </a>
            </div>
          </div>
        </section>

        {/* Value Proposition Section Mejorado */}
        <section className="py-20 md:py-32 bg-gradient-to-br from-gray-50 to-white">
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-4xl md:text-6xl font-montserrat text-adv-blue mb-8 font-bold">Nuestra Propuesta de Valor</h2>
            <p className="max-w-5xl mx-auto text-xl md:text-2xl text-gray-700 leading-relaxed">
              Ofrecemos educación práctica, flexible y certificada con respaldo oficial, para que nuestros estudiantes puedan <span className="font-bold text-adv-red">potenciar su futuro</span>, desarrollarse profesionalmente y generar ingresos a través del conocimiento.
            </p>
          </div>
        </section>
        
        {/* Benefits Section Mejorado */}
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

        {/* Testimonials Section Mejorado */}
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

        {/* Courses Section Mejorado */}
        <section id="cursos" className="bg-white py-20 md:py-32">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-6xl font-montserrat text-adv-blue mb-6 font-bold">Nuestros Cursos</h2>
              <p className="text-xl text-gray-600 mt-4 max-w-3xl mx-auto">Explora nuestra oferta formativa y encuentra el curso perfecto para impulsar tu carrera.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {DUMMY_COURSES.slice(0, 6).map((course) => (
                <CourseCard key={course.id} course={course} />
              ))}
            </div>
            <div className="text-center mt-12">
              <a 
                href="#cursos" 
                className="inline-flex items-center bg-adv-red text-white font-bold py-4 px-8 rounded-xl hover:bg-red-700 transition-all duration-300 transform hover:scale-105 shadow-xl"
              >
                Ver Todos los Cursos
                <ArrowRightIcon className="w-5 h-5 ml-2" />
              </a>
            </div>
          </div>
        </section>

        {/* Aula Virtual Section */}
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

        {/* Gallery Section */}
        <Gallery images={GALLERY_IMAGES} />

        {/* About Us Section Mejorado */}
        <section id="nosotros" className="bg-gradient-to-br from-gray-50 to-white py-20 md:py-32">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
                <h2 className="text-4xl md:text-6xl font-montserrat text-adv-blue mb-6 font-bold">Academia del Valle EC</h2>
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

            <div className="mt-24">
                <div className="text-center mb-16">
                    <h3 className="text-4xl md:text-6xl font-montserrat text-adv-blue mb-6 font-bold">Nuestra Esencia en Imágenes</h3>
                    <p className="text-xl text-gray-600 max-w-4xl mx-auto">Un vistazo a la vida en la academia, donde la teoría se encuentra con la práctica y los sueños se convierten en profesiones.</p>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
                    <GalleryImage src="https://picsum.photos/seed/gallery1/600/500" alt="Estudiantes colaborando en un proyecto" />
                    <GalleryImage src="https://picsum.photos/seed/gallery2/600/500" alt="Profesor experto guiando a un alumno" />
                    <GalleryImage src="https://picsum.photos/seed/gallery3/600/500" alt="Taller práctico de electrónica" />
                    <GalleryImage src="https://picsum.photos/seed/gallery4/600/500" alt="Estudiante concentrado en su computadora" />
                    <GalleryImage src="https://picsum.photos/seed/gallery5/600/500" alt="Modernas instalaciones de la academia" />
                    <GalleryImage src="https://picsum.photos/seed/gallery6/600/500" alt="Grupo de estudiantes celebrando su graduación" />
                </div>
            </div>
          </div>
        </section>

        {/* Certifications Section Mejorado */}
        <section id="certificaciones" className="bg-white py-20 md:py-32">
            <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-6xl font-montserrat text-adv-blue mb-6 font-bold">Educación Certificada con Respaldo Oficial</h2>
              <p className="text-xl text-gray-600 mt-4 max-w-4xl mx-auto leading-relaxed">
                Tu futuro está en buenas manos. Estamos orgullosos de contar con la certificación y el respaldo de las instituciones más importantes del país, garantizando la calidad y validez de tu formación.
              </p>
            </div>

            <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
              <CertificationLogo name="Ministerio del Trabajo" />
              <CertificationLogo name="SENESCYT" />
              <CertificationLogo name="Cámara de Comercio de Artesanos" />
            </div>
            
            <div className="mt-16 text-center">
                <img src="https://picsum.photos/seed/graduation/1000/500" alt="Estudiante graduado" className="rounded-2xl shadow-2xl mx-auto" />
                <p className="mt-8 text-gray-600 italic text-xl">Invierte en una educación que te abre puertas.</p>
            </div>
          </div>
        </section>

        {/* Contact Section Mejorado */}
        <section id="contacto-form" className="bg-gradient-to-br from-gray-50 to-white py-20 md:py-32">
             <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                <h2 className="text-4xl md:text-6xl font-montserrat text-adv-blue mb-6 font-bold">Conversemos</h2>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">¿Tienes alguna pregunta? Estamos aquí para ayudarte a dar el siguiente paso en tu carrera.</p>
                </div>

                <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 bg-white p-12 md:p-16 rounded-3xl shadow-2xl">
                {/* Contact Form */}
                <form className="space-y-8">
                    <div>
                    <label htmlFor="name" className="block text-lg font-bold text-gray-700 mb-3">Nombre</label>
                    <input type="text" id="name" name="name" className="w-full px-6 py-4 border-2 border-gray-200 rounded-xl focus:ring-adv-red focus:border-adv-red text-lg transition-all duration-300" placeholder="Tu nombre completo" />
                    </div>
                    <div>
                    <label htmlFor="email" className="block text-lg font-bold text-gray-700 mb-3">Email</label>
                    <input type="email" id="email" name="email" className="w-full px-6 py-4 border-2 border-gray-200 rounded-xl focus:ring-adv-red focus:border-adv-red text-lg transition-all duration-300" placeholder="tu.email@ejemplo.com" />
                    </div>
                    <div>
                    <label htmlFor="phone" className="block text-lg font-bold text-gray-700 mb-3">Teléfono</label>
                    <input type="tel" id="phone" name="phone" className="w-full px-6 py-4 border-2 border-gray-200 rounded-xl focus:ring-adv-red focus:border-adv-red text-lg transition-all duration-300" placeholder="Tu número de teléfono" />
                    </div>
                    <div>
                    <label htmlFor="message" className="block text-lg font-bold text-gray-700 mb-3">Mensaje</label>
                    <textarea id="message" name="message" rows={6} className="w-full px-6 py-4 border-2 border-gray-200 rounded-xl focus:ring-adv-red focus:border-adv-red text-lg transition-all duration-300" placeholder="Escribe tu consulta aquí..."></textarea>
                    </div>
                    <div>
                    <button type="submit" className="w-full bg-adv-red text-white font-bold py-4 px-8 rounded-xl text-xl hover:bg-red-700 transition-all duration-300 transform hover:scale-105 shadow-xl">
                        Enviar Mensaje
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