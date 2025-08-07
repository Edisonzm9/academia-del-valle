import React, { useState } from 'react';
import { DUMMY_COURSES } from '../constants';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { 
  ClockIcon, 
  UserIcon, 
  AcademicCapIcon,
  CheckCircleIcon,
  ChevronDownIcon,
  ChevronUpIcon,
  ArrowLeftIcon,
  BookOpenIcon,
  CalendarIcon,
  MapPinIcon
} from '@heroicons/react/24/outline';

interface CourseDetailPageProps {
  courseId: string;
}

const AccordionItem: React.FC<{ 
  module: any; 
  isOpen: boolean; 
  onClick: () => void 
}> = ({ module, isOpen, onClick }) => {
  return (
    <div className="border-b border-gray-200 last:border-b-0">
      <button
        onClick={onClick}
        className="w-full flex justify-between items-center text-left py-6 px-6 focus:outline-none bg-white hover:bg-gray-50 transition-colors"
      >
        <div className="flex-grow">
          <h4 className="text-xl font-bold text-adv-blue mb-2">{module.title}</h4>
          <div className="flex items-center gap-4 text-sm text-gray-600">
            <div className="flex items-center gap-1">
              <ClockIcon className="w-4 h-4 text-adv-red" />
              <span>{module.duration}</span>
            </div>
            <div className="flex items-center gap-1">
              <BookOpenIcon className="w-4 h-4 text-adv-red" />
              <span>{module.topics.length} temas</span>
            </div>
          </div>
        </div>
        {isOpen ? (
          <ChevronUpIcon className="w-6 h-6 text-adv-red transition-transform duration-300" />
        ) : (
          <ChevronDownIcon className="w-6 h-6 text-gray-400 transition-transform duration-300" />
        )}
      </button>
      <div className={`overflow-hidden transition-all duration-500 ease-in-out ${
        isOpen ? 'max-h-[800px]' : 'max-h-0'
      }`}>
        <div className="p-6 bg-gray-50 border-t border-gray-200">
          <ul className="space-y-3 text-gray-700">
            {module.topics.map((topic: string, index: number) => (
              <li key={index} className="flex items-start gap-3">
                <CheckCircleIcon className="w-5 h-5 text-adv-red flex-shrink-0 mt-0.5" />
                <span className="leading-relaxed">{topic}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

const CourseDetailPage: React.FC<CourseDetailPageProps> = ({ courseId }) => {
  const course = DUMMY_COURSES.find(c => c.id.toString() === courseId);
  const [openAccordion, setOpenAccordion] = useState<string | null>(
    course?.curriculum[0]?.title ?? null
  );

  const handleAccordionClick = (title: string) => {
    setOpenAccordion(openAccordion === title ? null : title);
  };

  if (!course) {
    return (
      <div className="bg-white">
        <Header />
        <div className="min-h-screen bg-gray-50 flex items-center justify-center">
          <div className="text-center">
            <AcademicCapIcon className="w-16 h-16 text-gray-400 mx-auto mb-4" />
            <h1 className="text-2xl font-bold text-gray-600 mb-2">Curso no encontrado</h1>
            <p className="text-gray-500">El curso que buscas no existe o ha sido movido.</p>
            <a 
              href="#cursos" 
              className="inline-flex items-center mt-6 bg-adv-red text-white font-bold py-3 px-6 rounded-xl hover:bg-red-700 transition-all duration-300"
            >
              <ArrowLeftIcon className="w-5 h-5 mr-2" />
              Volver a los Cursos
            </a>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  const detailItems = [
    { 
      icon: <ClockIcon className="w-6 h-6 text-adv-red" />, 
      label: "Duración Total", 
      value: `${course.duration} (${course.hours})` 
    },
    { 
      icon: <UserIcon className="w-6 h-6 text-adv-red" />, 
      label: "Instructor", 
      value: course.instructor 
    },
    { 
      icon: <AcademicCapIcon className="w-6 h-6 text-adv-red" />, 
      label: "Código del Curso", 
      value: course.code 
    },
    { 
      icon: <BookOpenIcon className="w-6 h-6 text-adv-red" />, 
      label: "Módulos", 
      value: `${course.curriculum.length} módulos` 
    },
    { 
      icon: <CalendarIcon className="w-6 h-6 text-adv-red" />, 
      label: "Área", 
      value: course.area 
    }
  ];

  return (
    <div className="bg-white">
      <Header />
      <main>
        {/* Header del curso */}
        <div className="relative text-white pt-32 pb-20 overflow-hidden">
          {/* Imagen de Fondo */}
          <div 
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${course.image})` }}
          />
          
          {/* Overlay Gradiente */}
          <div className="absolute inset-0 bg-gradient-to-r from-adv-blue/90 via-adv-blue/80 to-adv-blue/90" />
          
          {/* Contenido */}
          <div className="relative z-10 container mx-auto px-6">
            <a 
              href="/#cursos" 
              className="inline-flex items-center text-white hover:text-adv-red transition-colors duration-300 mb-8"
            >
              <ArrowLeftIcon className="w-5 h-5 mr-2" />
              Volver a los Cursos
            </a>
            
            <span className="inline-block px-4 py-2 bg-adv-red text-white rounded-full text-sm font-semibold mb-6">
              {course.area}
            </span>
            
            <h1 className="text-4xl md:text-6xl font-montserrat font-bold mb-6 text-white">
              {course.title}
            </h1>
            
            <p className="text-xl text-gray-200 max-w-4xl leading-relaxed">
              {course.focus}
            </p>
          </div>
        </div>

        <div className="container mx-auto px-6 py-20">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Columna Izquierda: Malla Curricular */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-200">
                <div className="bg-gradient-to-r from-adv-blue to-purple-900 text-white p-8">
                  <h2 className="text-3xl font-montserrat font-bold mb-4">
                    Malla Curricular Completa
                  </h2>
                  <p className="text-gray-200">
                    Conoce todos los módulos y temas que aprenderás en este curso
                  </p>
                </div>
                
                <div className="divide-y divide-gray-200">
                  {course.curriculum.map((module) => (
                    <AccordionItem 
                      key={module.title} 
                      module={module}
                      isOpen={openAccordion === module.title}
                      onClick={() => handleAccordionClick(module.title)}
                    />
                  ))}
                </div>
              </div>
            </div>
            
            {/* Columna Derecha: Detalles y CTA */}
            <div className="lg:col-span-1">
              <div className="sticky top-8">
                <div className="bg-white p-8 rounded-2xl shadow-xl border border-gray-200">
                  <h3 className="text-2xl font-montserrat font-bold text-adv-blue mb-6">
                    Detalles del Curso
                  </h3>
                  
                  <ul className="space-y-4 mb-8">
                    {detailItems.map(item => (
                      <li key={item.label} className="flex items-start gap-4">
                        <span className="flex-shrink-0 mt-1">{item.icon}</span>
                        <div>
                          <strong className="block text-sm text-gray-600 mb-1">
                            {item.label}
                          </strong>
                          <span className="text-adv-blue font-semibold">
                            {item.value}
                          </span>
                        </div>
                      </li>
                    ))}
                  </ul>
                  
                  <div className="space-y-4">
                  
                    
                    <a 
                      href={`https://wa.me/593123456789?text=${encodeURIComponent(`Hola! 👋 Me interesa mucho el curso de *${course.title}* 📚

📋 *Información del curso:*
• Área: ${course.area}
• Duración: ${course.duration} (${course.hours})
• Instructor: ${course.instructor}
• Código: ${course.code}

🎯 *Enfoque:* ${course.focus}

Me gustaría obtener más información sobre:
• Inscripciones y horarios
• Costos y formas de pago
• Requisitos para el curso
• Certificación al finalizar

¿Podrían ayudarme con esta información? Muchas gracias! 🙏`)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block w-full bg-green-500 text-white font-bold py-4 px-6 rounded-xl hover:bg-green-600 transition-all duration-300 text-center transform hover:scale-105 shadow-lg"
                    >
                      Consultar por WhatsApp
                    </a>
                  </div>
                  
                  <div className="mt-8 p-4 bg-gray-50 rounded-xl">
                    <h4 className="font-bold text-adv-blue mb-2">¿Por qué elegir este curso?</h4>
                    <ul className="space-y-2 text-sm text-gray-600">
                      <li className="flex items-center gap-2">
                        <CheckCircleIcon className="w-4 h-4 text-adv-red" />
                        Certificación oficial
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircleIcon className="w-4 h-4 text-adv-red" />
                        Instructores expertos
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircleIcon className="w-4 h-4 text-adv-red" />
                        Práctica real
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircleIcon className="w-4 h-4 text-adv-red" />
                        Material incluido
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default CourseDetailPage; 