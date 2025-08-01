
import React from 'react';
import { DUMMY_COURSES } from '../constants';
import CourseCard from '../components/CourseCard';

const CoursesPage: React.FC = () => {
  return (
    <div className="bg-gray-50">
      <div className="container mx-auto px-6 py-16">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-montserrat text-adv-blue">Nuestros Cursos</h1>
          <p className="text-lg text-gray-700 mt-4 max-w-2xl mx-auto">Explora nuestra oferta formativa y encuentra el curso perfecto para impulsar tu carrera.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {DUMMY_COURSES.map((course) => (
            <CourseCard key={course.id} course={course} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default CoursesPage;
