import React from 'react';
import { Course } from '../types';
import { 
  ClockIcon, 
  UserIcon, 
  AcademicCapIcon,
  ArrowRightIcon
} from '@heroicons/react/24/outline';

interface CourseCardProps {
  course: Course;
  variant?: 'compact' | 'full';
  showImage?: boolean;
}

const CourseCard: React.FC<CourseCardProps> = ({ course, variant = 'full', showImage = true }) => {
  if (variant === 'compact') {
    return (
      <div className="bg-white rounded-2xl shadow-xl overflow-hidden flex flex-col h-full transform hover:-translate-y-3 transition-all duration-500 border border-gray-100 hover:shadow-2xl">
        <div className="p-8 flex-grow flex flex-col">
          <span className="inline-block px-4 py-2 bg-adv-red/10 text-adv-red rounded-full text-sm font-semibold mb-4 w-fit border border-adv-red/20">
            {course.area}
          </span>
          <h3 className="text-2xl font-bold text-adv-blue mb-4 flex-grow leading-tight">{course.title}</h3>
          <div className="text-sm text-gray-600 space-y-3 mb-6">
            <div className="flex items-center gap-3">
              <ClockIcon className="w-5 h-5 text-adv-red flex-shrink-0" />
              <span><strong>Duración:</strong> {course.duration} ({course.hours})</span>
            </div>
            <div className="flex items-center gap-3">
              <UserIcon className="w-5 h-5 text-adv-red flex-shrink-0" />
              <span><strong>Instructor:</strong> {course.instructor}</span>
            </div>
            <div className="flex items-center gap-3">
              <AcademicCapIcon className="w-5 h-5 text-adv-red flex-shrink-0" />
              <span><strong>Código:</strong> {course.code}</span>
            </div>
          </div>
        </div>
        <div className="p-8 bg-gradient-to-r from-gray-50 to-white border-t border-gray-100">
          <a 
            href={`/curso/${course.id}`} 
            className="group flex items-center justify-center w-full text-center bg-adv-red text-white font-bold py-4 px-6 rounded-xl hover:bg-red-700 transition-all duration-300 transform hover:scale-105 shadow-lg"
          >
            Ver Malla Curricular 
            <ArrowRightIcon className="w-5 h-5 ml-3 transition-transform duration-300 group-hover:translate-x-1" />
          </a>
        </div>
      </div>
    );
  }

  return (
    <div className="group bg-white rounded-2xl shadow-xl overflow-hidden transform hover:-translate-y-4 transition-all duration-500 hover:shadow-2xl border border-gray-100 h-full">
      {showImage && (
        <div className="relative h-48 overflow-hidden">
          <div 
            className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
            style={{ 
              backgroundImage: `url(${course.image})`,
              backgroundColor: '#f8fafc' // Fallback color
            }}
            onError={(e) => {
              // Si la imagen falla, usar una imagen por defecto
              e.currentTarget.style.backgroundImage = 'url(https://picsum.photos/400/300?random=1)';
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
          
          <div className="absolute top-4 left-4">
            <span className="inline-block px-3 py-1 bg-adv-red text-white rounded-full text-xs font-semibold shadow-lg">
              {course.area}
            </span>
          </div>
          
          <div className="absolute bottom-4 left-4 right-4">
            <h3 className="text-lg font-bold text-white leading-tight line-clamp-2">
              {course.title}
            </h3>
          </div>
        </div>
      )}
      
      <div className="p-6 flex flex-col h-full">
        {!showImage && (
          <span className="inline-block px-3 py-1 bg-adv-red/10 text-adv-red rounded-full text-xs font-semibold mb-4 w-fit border border-adv-red/20">
            {course.area}
          </span>
        )}
        
        {!showImage && (
          <h3 className="text-xl font-bold text-adv-blue mb-3 line-clamp-2">{course.title}</h3>
        )}
        
        <p className="text-sm text-gray-600 mb-6 line-clamp-3 flex-grow">
          {course.description}
        </p>
        
        <div className="space-y-3 mb-6">
          <div className="flex items-center gap-2 text-sm text-gray-600">
            <ClockIcon className="w-4 h-4 text-adv-red" />
            <span><strong>Duración:</strong> {course.duration} ({course.hours})</span>
          </div>
          <div className="flex items-center gap-2 text-sm text-gray-600">
            <UserIcon className="w-4 h-4 text-adv-red" />
            <span><strong>Instructor:</strong> {course.instructor}</span>
          </div>
          <div className="flex items-center gap-2 text-sm text-gray-600">
            <AcademicCapIcon className="w-4 h-4 text-adv-red" />
            <span><strong>Código:</strong> {course.code}</span>
          </div>
        </div>
        
        <a 
          href={`/curso/${course.id}`} 
          className="group/btn flex items-center justify-center w-full bg-adv-red text-white font-semibold py-4 px-6 rounded-xl hover:bg-red-700 transition-all duration-300 transform hover:scale-105 shadow-lg mt-auto"
        >
          Ver Malla Curricular 
          <ArrowRightIcon className="w-5 h-5 ml-3 transition-transform duration-300 group-hover/btn:translate-x-1" />
        </a>
      </div>
    </div>
  );
};

export default CourseCard;