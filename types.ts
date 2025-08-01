
export interface Course {
  id: number;
  title: string;
  description: string;
  image: string;
}

export interface Testimonial {
  id: number;
  name: string;
  course: string;
  quote: string;
  image: string;
}
