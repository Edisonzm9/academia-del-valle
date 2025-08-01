import React from 'react';
import { DUMMY_TESTIMONIALS, DUMMY_COURSES } from '../constants';
import CertificateIcon from '../components/icons/CertificateIcon';
import BriefcaseIcon from '../components/icons/BriefcaseIcon';
import TrendingUpIcon from '../components/icons/TrendingUpIcon';
import Header from '../components/Header';
import Footer from '../components/Footer';
import CourseCard from '../components/CourseCard';
import MailIcon from '../components/icons/MailIcon';
import PhoneIcon from '../components/icons/PhoneIcon';
import MapPinIcon from '../components/icons/MapPinIcon';

const BenefitCard: React.FC<{ icon: React.ReactNode; title: string; children: React.ReactNode }> = ({ icon, title, children }) => (
  <div className="bg-white p-6 rounded-lg shadow-md text-center transform hover:scale-105 transition-transform duration-300">
    <div className="flex justify-center items-center mb-4 text-adv-red">{icon}</div>
    <h3 className="font-montserrat text-xl text-adv-blue mb-2">{title}</h3>
    <p className="text-gray-600">{children}</p>
  </div>
);

const TestimonialCard: React.FC<{ testimonial: typeof DUMMY_TESTIMONIALS[0] }> = ({ testimonial }) => (
    <div className="bg-gray-100 p-8 rounded-xl shadow-lg flex flex-col items-center text-center">
        <img src={testimonial.image} alt={testimonial.name} className="w-24 h-24 rounded-full mb-4 border-4 border-adv-red"/>
        <p className="text-gray-600 italic mb-4">"{testimonial.quote}"</p>
        <h4 className="font-montserrat text-adv-blue text-lg font-bold">{testimonial.name}</h4>
        <p className="text-adv-red">{testimonial.course}</p>
    </div>
);

const GalleryImage: React.FC<{ src: string; alt: string }> = ({ src, alt }) => (
    <div className="overflow-hidden rounded-lg shadow-lg h-52 md:h-64">
        <img 
            src={src} 
            alt={alt} 
            className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-300 ease-in-out"
        />
    </div>
);

const CertificationLogo: React.FC<{ name: string }> = ({ name }) => (
  <div className="bg-gray-100 p-8 flex items-center justify-center rounded-lg shadow-md h-40 transform hover:scale-105 transition-transform duration-300">
    <span className="text-xl font-bold text-center text-adv-blue">{name}</span>
  </div>
);


const HomePage: React.FC = () => {
  return (
    <div className="bg-white">
      <Header />
      <main>
        {/* Hero Section */}
        <section 
          id="inicio"
          className="relative h-[60vh] md:h-[80vh] bg-cover bg-center flex items-center justify-center text-white"
          style={{ backgroundImage: "url('https://picsum.photos/seed/students/1920/1080')" }}
        >
          <div className="absolute inset-0 bg-black opacity-50"></div>
          <div className="relative text-center z-10 px-4">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-montserrat mb-4 drop-shadow-lg">Potencia tu futuro</h1>
            <p className="text-lg md:text-2xl mb-8 font-roboto max-w-3xl mx-auto">Transforma tu talento en una carrera de éxito con nuestra formación de calidad.</p>
            <a 
              href="#cursos" 
              className="bg-adv-red text-white font-bold py-3 px-8 rounded-full text-lg hover:bg-red-700 transition-colors duration-300 transform hover:scale-105"
            >
              Ver Cursos
            </a>
          </div>
        </section>

        {/* Value Proposition Section */}
        <section className="py-16 md:py-24 bg-gray-50">
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-3xl md:text-4xl font-montserrat text-adv-blue mb-6">Nuestra Propuesta de Valor</h2>
            <p className="max-w-4xl mx-auto text-lg text-gray-700">
              Ofrecemos educación práctica, flexible y certificada con respaldo oficial, para que nuestros estudiantes puedan <span className="font-bold text-adv-red">potenciar su futuro</span>, desarrollarse profesionalmente y generar ingresos a través del conocimiento.
            </p>
          </div>
        </section>
        
        {/* Benefits Section */}
        <section className="py-16 md:py-24 bg-white">
          <div className="container mx-auto px-6">
            <div className="grid md:grid-cols-3 gap-8">
              <BenefitCard icon={<CertificateIcon className="w-16 h-16"/>} title="Cursos Certificados">
                Obtén certificaciones con respaldo oficial que validan tus habilidades y te abren puertas en el mercado laboral.
              </BenefitCard>
              <BenefitCard icon={<BriefcaseIcon className="w-16 h-16"/>} title="Formación Práctica">
                Aprende haciendo. Nuestros cursos están diseñados para darte experiencia real y aplicable desde el primer día.
              </BenefitCard>
              <BenefitCard icon={<TrendingUpIcon className="w-16 h-16"/>} title="Crecimiento Profesional">
                Impulsa tu carrera o emprende tu propio negocio con las competencias más demandadas por el mercado.
              </BenefitCard>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-16 md:py-24 bg-gray-50">
            <div className="container mx-auto px-6">
                <h2 className="text-3xl md:text-4xl font-montserrat text-adv-blue text-center mb-12">Lo que dicen nuestros estudiantes</h2>
                <div className="grid md:grid-cols-3 gap-8">
                    {DUMMY_TESTIMONIALS.map((testimonial) => (
                        <TestimonialCard key={testimonial.id} testimonial={testimonial} />
                    ))}
                </div>
            </div>
        </section>

        {/* Courses Section */}
        <section id="cursos" className="bg-white py-16 md:py-24">
          <div className="container mx-auto px-6">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-montserrat text-adv-blue">Nuestros Cursos</h2>
              <p className="text-lg text-gray-700 mt-4 max-w-2xl mx-auto">Explora nuestra oferta formativa y encuentra el curso perfecto para impulsar tu carrera.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {DUMMY_COURSES.map((course) => (
                <CourseCard key={course.id} course={course} />
              ))}
            </div>
          </div>
        </section>

        {/* About Us Section */}
        <section id="nosotros" className="bg-gray-50 py-16 md:py-24">
          <div className="container mx-auto px-6">
            <div className="text-center">
                <h2 className="text-4xl md:text-5xl font-montserrat text-adv-blue">Academia del Valle EC</h2>
                <p className="text-lg text-gray-700 mt-4 max-w-2xl mx-auto">Conoce la esencia de nuestra institución.</p>
            </div>

            <div className="mt-16 max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                <div className="p-8 bg-white rounded-lg shadow-md">
                    <h3 className="text-3xl font-montserrat text-adv-red mb-4">Misión</h3>
                    <p className="text-gray-700 leading-relaxed">
                    Brindar formación continua y de calidad a personas que desean mejorar su perfil profesional o emprender su propio negocio, mediante cursos certificados que fomenten el crecimiento personal y económico.
                    </p>
                </div>
                 <div className="relative h-80">
                    <img src="https://picsum.photos/seed/team/500/400" alt="Equipo de la academia" className="rounded-lg shadow-xl w-full h-full object-cover" />
                </div>
            </div>

            <div className="mt-16 max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                 <div className="relative md:order-2 h-80">
                    <img src="https://picsum.photos/seed/vision/500/400" alt="Estudiante mirando al futuro" className="rounded-lg shadow-xl w-full h-full object-cover" />
                </div>
                <div className="p-8 bg-white rounded-lg shadow-md md:order-1">
                    <h3 className="text-3xl font-montserrat text-adv-red mb-4">Visión</h3>
                    <p className="text-gray-700 leading-relaxed">
                    Ser la academia líder en formación técnica y profesional del Valle de Tumbaco y Ecuador, reconocida por su impacto positivo en el desarrollo social, la empleabilidad y el emprendimiento a través de una educación accesible, integral y actualizada.
                    </p>
                </div>
            </div>

            <div className="mt-24">
                <div className="text-center mb-12">
                    <h3 className="text-3xl md:text-4xl font-montserrat text-adv-blue">Nuestra Esencia en Imágenes</h3>
                    <p className="text-lg text-gray-700 mt-4 max-w-3xl mx-auto">Un vistazo a la vida en la academia, donde la teoría se encuentra con la práctica y los sueños se convierten en profesiones.</p>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
                    <GalleryImage src="https://picsum.photos/seed/gallery1/500/400" alt="Estudiantes colaborando en un proyecto" />
                    <GalleryImage src="https://picsum.photos/seed/gallery2/500/400" alt="Profesor experto guiando a un alumno" />
                    <GalleryImage src="https://picsum.photos/seed/gallery3/500/400" alt="Taller práctico de electrónica" />
                    <GalleryImage src="https://picsum.photos/seed/gallery4/500/400" alt="Estudiante concentrado en su computadora" />
                    <GalleryImage src="https://picsum.photos/seed/gallery5/500/400" alt="Modernas instalaciones de la academia" />
                    <GalleryImage src="https://picsum.photos/seed/gallery6/500/400" alt="Grupo de estudiantes celebrando su graduación" />
                </div>
            </div>
          </div>
        </section>

        {/* Certifications Section */}
        <section id="certificaciones" className="bg-white py-16 md:py-24">
            <div className="container mx-auto px-6">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-montserrat text-adv-blue">Educación Certificada con Respaldo Oficial</h2>
              <p className="text-lg text-gray-700 mt-4 max-w-3xl mx-auto">
                Tu futuro está en buenas manos. Estamos orgullosos de contar con la certificación y el respaldo de las instituciones más importantes del país, garantizando la calidad y validez de tu formación.
              </p>
            </div>

            <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
              <CertificationLogo name="Ministerio del Trabajo" />
              <CertificationLogo name="SENESCYT" />
              <CertificationLogo name="Cámara de Comercio de Artesanos" />
            </div>
            
            <div className="mt-16 text-center">
                <img src="https://picsum.photos/seed/graduation/800/400" alt="Estudiante graduado" className="rounded-lg shadow-xl mx-auto" />
                <p className="mt-6 text-gray-600 italic">Invierte en una educación que te abre puertas.</p>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contacto-form" className="bg-gray-50 py-16 md:py-24">
             <div className="container mx-auto px-6">
                <div className="text-center mb-12">
                <h2 className="text-4xl md:text-5xl font-montserrat text-adv-blue">Conversemos</h2>
                <p className="text-lg text-gray-700 mt-4 max-w-2xl mx-auto">¿Tienes alguna pregunta? Estamos aquí para ayudarte a dar el siguiente paso en tu carrera.</p>
                </div>

                <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 bg-white p-8 md:p-12 rounded-lg shadow-xl">
                {/* Contact Form */}
                <form className="space-y-6">
                    <div>
                    <label htmlFor="name" className="block text-sm font-bold text-gray-700 mb-1">Nombre</label>
                    <input type="text" id="name" name="name" className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-adv-red focus:border-adv-red" placeholder="Tu nombre completo" />
                    </div>
                    <div>
                    <label htmlFor="email" className="block text-sm font-bold text-gray-700 mb-1">Email</label>
                    <input type="email" id="email" name="email" className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-adv-red focus:border-adv-red" placeholder="tu.email@ejemplo.com" />
                    </div>
                    <div>
                    <label htmlFor="phone" className="block text-sm font-bold text-gray-700 mb-1">Teléfono</label>
                    <input type="tel" id="phone" name="phone" className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-adv-red focus:border-adv-red" placeholder="Tu número de teléfono" />
                    </div>
                    <div>
                    <label htmlFor="message" className="block text-sm font-bold text-gray-700 mb-1">Mensaje</label>
                    <textarea id="message" name="message" rows={4} className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-adv-red focus:border-adv-red" placeholder="Escribe tu consulta aquí..."></textarea>
                    </div>
                    <div>
                    <button type="submit" className="w-full bg-adv-red text-white font-bold py-3 px-6 rounded-full hover:bg-red-700 transition-colors duration-300">
                        Enviar Mensaje
                    </button>
                    </div>
                </form>

                {/* Contact Info */}
                <div className="space-y-8">
                    <h3 className="text-2xl font-montserrat text-adv-blue">Información de Contacto</h3>
                    <div className="flex items-start">
                    <MapPinIcon className="w-8 h-8 mr-4 text-adv-red flex-shrink-0 mt-1" />
                    <div>
                        <h4 className="font-bold text-lg text-gray-800">Dirección</h4>
                        <p className="text-gray-600">Tumbaco, Ecuador</p>
                    </div>
                    </div>
                    <div className="flex items-start">
                    <PhoneIcon className="w-8 h-8 mr-4 text-adv-red flex-shrink-0 mt-1" />
                    <div>
                        <h4 className="font-bold text-lg text-gray-800">Teléfono</h4>
                        <p className="text-gray-600">(+593) 123-456-789</p>
                    </div>
                    </div>
                    <div className="flex items-start">
                    <MailIcon className="w-8 h-8 mr-4 text-adv-red flex-shrink-0 mt-1" />
                    <div>
                        <h4 className="font-bold text-lg text-gray-800">Email</h4>
                        <p className="text-gray-600">info@academiadelvalle.ec</p>
                    </div>
                    </div>
                    <div className="mt-6">
                        <div className="aspect-w-16 aspect-h-9 rounded-lg overflow-hidden shadow-md">
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15959.256828552174!2d-78.4183424683515!3d-0.20310243431631027!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x91d59392e66d2181%3A0x62836f83d735b59a!2sTumbaco%2C%20Quito%2C%20Ecuador!5e0!3m2!1sen!2sus!4v1680000000000!5m2!1sen!2sus" width="100%" height="250" style={{border:0}} allowFullScreen={false} loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                        </div>
                    </div>
                </div>
                </div>
            </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default HomePage;