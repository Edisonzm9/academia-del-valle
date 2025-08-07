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
      <div className="group bg-white/80 backdrop-blur-xl rounded-3xl shadow-2xl overflow-hidden flex flex-col h-full transform hover:-translate-y-2 transition-all duration-500 border border-white/20 hover:shadow-3xl hover:bg-white/90">
        {/* Small Descriptive Image - Increased Size */}
        <div className="relative h-28 bg-gradient-to-r from-adv-red/20 to-adv-blue/20">
          <div 
            className="absolute inset-0 bg-cover bg-center opacity-60"
            style={{ 
              backgroundImage: `url(${course.image})`,
              backgroundColor: '#f8fafc'
            }}
            onError={(e) => {
              e.currentTarget.style.backgroundImage = 'url(https://picsum.photos/400/120?random=1)';
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-adv-red/30 to-adv-blue/30" />
          
          {/* iOS Style Badge */}
          <div className="absolute top-3 left-3">
            <div className="inline-flex items-center px-3 py-1 bg-white/20 backdrop-blur-sm rounded-xl border border-white/30">
              <div className="w-1.5 h-1.5 bg-white rounded-full mr-2"></div>
              <span className="text-white font-semibold text-xs">{course.area}</span>
            </div>
          </div>
        </div>
        
        <div className="p-5 flex-grow flex flex-col">
          {/* iOS Style Title - Reduced Margin */}
          <h3 className="text-lg font-bold text-gray-900 mb-3 flex-grow leading-tight tracking-tight line-clamp-2">{course.title}</h3>
          
          {/* iOS Style Info Grid - Reduced Spacing */}
          <div className="space-y-2 mb-4">
            <div className="flex items-center gap-3 p-2.5 bg-gray-50/50 backdrop-blur-sm rounded-xl border border-gray-100/50">
              <div className="w-7 h-7 bg-adv-red/10 rounded-lg flex items-center justify-center">
                <ClockIcon className="w-4 h-4 text-adv-red" />
              </div>
              <div>
                <p className="text-xs text-gray-500 font-medium">Duración</p>
                <p className="text-sm font-semibold text-gray-900">{course.duration} ({course.hours})</p>
              </div>
            </div>
            
            <div className="flex items-center gap-3 p-2.5 bg-gray-50/50 backdrop-blur-sm rounded-xl border border-gray-100/50">
              <div className="w-7 h-7 bg-adv-red/10 rounded-lg flex items-center justify-center">
                <UserIcon className="w-4 h-4 text-adv-red" />
              </div>
              <div>
                <p className="text-xs text-gray-500 font-medium">Instructor</p>
                <p className="text-sm font-semibold text-gray-900 line-clamp-1">{course.instructor}</p>
              </div>
            </div>
            
            <div className="flex items-center gap-3 p-2.5 bg-gray-50/50 backdrop-blur-sm rounded-xl border border-gray-100/50">
              <div className="w-7 h-7 bg-adv-red/10 rounded-lg flex items-center justify-center">
                <AcademicCapIcon className="w-4 h-4 text-adv-red" />
              </div>
              <div>
                <p className="text-xs text-gray-500 font-medium">Código</p>
                <p className="text-sm font-semibold text-gray-900">{course.code}</p>
              </div>
            </div>
          </div>
        </div>
        
        {/* iOS Style Button - Reduced Padding */}
        <div className="p-5 bg-gradient-to-r from-gray-50/50 to-white/50 backdrop-blur-sm border-t border-gray-100/50">
          <a 
            href={`/curso/${course.id}`} 
            className="group/btn flex items-center justify-center w-full bg-adv-red text-white font-semibold py-3 px-4 rounded-xl hover:bg-red-700 transition-all duration-300 transform hover:scale-105 shadow-xl hover:shadow-2xl"
          >
            <span>Ver Malla Curricular</span>
            <ArrowRightIcon className="w-4 h-4 ml-2 transition-transform duration-300 group-hover/btn:translate-x-1" />
          </a>
        </div>
      </div>
    );
  }

  return (
    <div className="group bg-white/80 backdrop-blur-xl rounded-3xl shadow-2xl overflow-hidden transform hover:-translate-y-3 transition-all duration-500 hover:shadow-3xl hover:bg-white/90 border border-white/20 h-full">
      {/* Small Descriptive Image - Increased Size */}
      <div className="relative h-32 bg-gradient-to-r from-adv-red/20 to-adv-blue/20">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-60"
          style={{ 
            backgroundImage: `url(${course.image})`,
            backgroundColor: '#f8fafc'
          }}
          onError={(e) => {
            e.currentTarget.style.backgroundImage = 'url(https://picsum.photos/400/140?random=1)';
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-adv-red/30 to-adv-blue/30" />
        
        {/* iOS Style Badge */}
        <div className="absolute top-3 left-3">
          <div className="inline-flex items-center px-3 py-1 bg-white/20 backdrop-blur-sm rounded-xl border border-white/30">
            <div className="w-1.5 h-1.5 bg-white rounded-full mr-2"></div>
            <span className="text-white font-semibold text-xs">{course.area}</span>
          </div>
        </div>
      </div>
      
      <div className="p-4 flex flex-col h-full">
        <h3 className="text-lg font-bold text-gray-900 mb-2 line-clamp-2">{course.title}</h3>
        
        <p className="text-sm text-gray-600 mb-3 line-clamp-2 flex-grow leading-relaxed">
          {course.description}
        </p>
        
        {/* iOS Style Info Cards - Reduced Spacing */}
        <div className="space-y-1.5 mb-3">
          <div className="flex items-center gap-2 p-2 bg-gray-50/50 backdrop-blur-sm rounded-lg border border-gray-100/50">
            <div className="w-6 h-6 bg-adv-red/10 rounded-md flex items-center justify-center">
              <ClockIcon className="w-3 h-3 text-adv-red" />
            </div>
            <div>
              <p className="text-xs text-gray-500 font-medium">Duración</p>
              <p className="text-xs font-semibold text-gray-900">{course.duration} ({course.hours})</p>
            </div>
          </div>
          
          <div className="flex items-center gap-2 p-2 bg-gray-50/50 backdrop-blur-sm rounded-lg border border-gray-100/50">
            <div className="w-6 h-6 bg-adv-red/10 rounded-md flex items-center justify-center">
              <UserIcon className="w-3 h-3 text-adv-red" />
            </div>
            <div>
              <p className="text-xs text-gray-500 font-medium">Instructor</p>
              <p className="text-xs font-semibold text-gray-900 line-clamp-1">{course.instructor}</p>
            </div>
          </div>
          
          <div className="flex items-center gap-2 p-2 bg-gray-50/50 backdrop-blur-sm rounded-lg border border-gray-100/50">
            <div className="w-6 h-6 bg-adv-red/10 rounded-md flex items-center justify-center">
              <AcademicCapIcon className="w-3 h-3 text-adv-red" />
            </div>
            <div>
              <p className="text-xs text-gray-500 font-medium">Código</p>
              <p className="text-xs font-semibold text-gray-900">{course.code}</p>
            </div>
          </div>
        </div>
        
        {/* iOS Style Button */}
        <a 
          href={`/curso/${course.id}`} 
          className="group/btn flex items-center justify-center w-full bg-adv-red text-white font-semibold py-3 px-4 rounded-xl hover:bg-red-700 transition-all duration-300 transform hover:scale-105 shadow-xl hover:shadow-2xl mt-auto"
        >
          <span>Ver Malla Curricular</span>
          <ArrowRightIcon className="w-4 h-4 ml-2 transition-transform duration-300 group-hover/btn:translate-x-1" />
        </a>
      </div>
    </div>
  );
};

export default CourseCard;