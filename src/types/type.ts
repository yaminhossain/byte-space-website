export interface Course {
  imgSrc: string;
  imgAlt: string;
  heading: string;
  authorName: string;
  rating: string;
}

export interface CreatorType {
  id: string;
  name: string;
  title: string;
  avatar: string;
  category: string;
  courseCount: number;
  studentCount: string;
  rating: string;
  reviewCount: string;
  experience: string;
  specialties: string[];
  featured?: boolean;
  bio: string;
}
