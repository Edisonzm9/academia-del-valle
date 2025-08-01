import React from 'react';

const GalleryImage: React.FC<{ src: string; alt: string }> = ({ src, alt }) => (
    <div className="overflow-hidden rounded-lg shadow-lg h-52 md:h-64">
        <img 
            src={src} 
            alt={alt} 
            className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-300 ease-in-out"
        />
    </div>
);


const AboutPage: React.FC = () => {
  return (
    <div className="bg-white py-16 md:py-24">
      <div className="container mx-auto px-6">
        <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-montserrat text-adv-blue">Academia del Valle EC</h1>
            <p className="text-lg text-gray-700 mt-4 max-w-2xl mx-auto">Conoce la esencia de nuestra institución.</p>
        </div>

        <div className="mt-16 max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="p-8 bg-gray-50 rounded-lg shadow-md">
                <h2 className="text-3xl font-montserrat text-adv-red mb-4">Misión</h2>
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
            <div className="p-8 bg-gray-50 rounded-lg shadow-md md:order-1">
                <h2 className="text-3xl font-montserrat text-adv-red mb-4">Visión</h2>
                <p className="text-gray-700 leading-relaxed">
                Ser la academia líder en formación técnica y profesional del Valle de Tumbaco y Ecuador, reconocida por su impacto positivo en el desarrollo social, la empleabilidad y el emprendimiento a través de una educación accesible, integral y actualizada.
                </p>
            </div>
        </div>

        {/* Gallery Section */}
        <div className="mt-24">
            <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-montserrat text-adv-blue">Nuestra Esencia en Imágenes</h2>
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
    </div>
  );
};

export default AboutPage;