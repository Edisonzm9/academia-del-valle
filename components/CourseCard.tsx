import React from 'react';
import { Course } from '../types';

interface CourseCardProps {
  course: Course;
}

const CourseCard: React.FC<CourseCardProps> = ({ course }) => {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden transform hover:-translate-y-2 transition-transform duration-300 flex flex-col">
      <img src={course.image} alt={course.title} className="w-full h-48 object-cover" />
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="font-montserrat text-xl text-adv-blue mb-2">{course.title}</h3>
        <p className="text-gray-600 flex-grow mb-4">{course.description}</p>
        <a 
          href="#contacto" 
          className="mt-auto self-start bg-adv-red text-white font-bold py-2 px-6 rounded-full hover:bg-red-700 transition-colors duration-300 text-center"
        >
          Más Información
        </a>
      </div>
    </div>
  );
};

export default CourseCard;