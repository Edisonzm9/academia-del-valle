import React from 'react';
import { Course } from '../types';

interface CourseCardProps {
  course: Course;
}

const CourseCard: React.FC<CourseCardProps> = ({ course }) => {
  return (
    <div className="bg-white rounded-2xl shadow-xl overflow-hidden transform hover:-translate-y-4 transition-all duration-500 hover:shadow-2xl flex flex-col border border-gray-100 group">
      <div className="relative overflow-hidden">
        <img src={course.image} alt={course.title} className="w-full h-56 object-cover transform group-hover:scale-110 transition-transform duration-500" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      </div>
      <div className="p-8 flex flex-col flex-grow">
        <h3 className="font-montserrat text-2xl text-adv-blue mb-4 font-bold leading-tight">{course.title}</h3>
        <p className="text-gray-600 flex-grow mb-6 text-lg leading-relaxed">{course.description}</p>
        <a 
          href="#contacto" 
          className="mt-auto self-start bg-adv-red text-white font-bold py-4 px-8 rounded-xl hover:bg-red-700 transition-all duration-300 text-center text-lg transform hover:scale-105 shadow-lg group-hover:shadow-xl"
        >
          Más Información
        </a>
      </div>
    </div>
  );
};

export default CourseCard;