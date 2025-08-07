
export interface Course {
  id: number;
  title: string;
  description: string;
  image: string;
  area: string;
  instructor: string;
  duration: string;
  hours: string;
  code: string;
  focus: string;
  curriculum: Module[];
}

export interface Module {
  title: string;
  duration: string;
  topics: string[];
}

export interface Testimonial {
  id: number;
  name: string;
  course: string;
  quote: string;
  image: string;
}
