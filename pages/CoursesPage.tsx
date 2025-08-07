
import React, { useState, useMemo } from 'react';
import { DUMMY_COURSES } from '../constants';
import CourseCard from '../components/CourseCard';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { 
  AcademicCapIcon,
  BriefcaseIcon,
  ClockIcon,
  UserIcon,
  CheckCircleIcon
} from '@heroicons/react/24/outline';

const PageHeader = ({ title, subtitle }: { title: string, subtitle: string }) => (
  <div className="bg-gradient-to-br from-adv-blue via-purple-900 to-adv-blue py-24 text-center text-white relative overflow-hidden">
    {/* Efectos de fondo */}
    <div className="absolute inset-0 bg-black opacity-20"></div>
    <div className="absolute top-0 left-0 w-full h-full">
      <div className="absolute top-20 left-20 w-72 h-72 bg-adv-red rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
      <div className="absolute top-40 right-20 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse" style={{animationDelay: '2s'}}></div>
      <div className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse" style={{animationDelay: '4s'}}></div>
    </div>
    
    <div className="relative z-10 container mx-auto px-6">
      <h1 className="text-4xl md:text-6xl font-montserrat font-bold mb-6">{title}</h1>
      <p className="text-xl text-slate-200 max-w-3xl mx-auto leading-relaxed">{subtitle}</p>
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

const CoursesPage: React.FC = () => {
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
        <PageHeader 
          title="Todos Nuestros Cursos" 
          subtitle="Encuentra la formación ideal para ti y da el siguiente paso en tu carrera profesional. Todos nuestros cursos cuentan con certificación oficial y respaldo institucional." 
        />
        
        <CourseStats />
        
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
      </main>
      <Footer />
    </div>
  );
};

export default CoursesPage;
