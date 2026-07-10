export interface Testimonial {
  id: string;
  name: string;
  role: string;
  content: string;
  rating: number;
  image: string;
}

export const testimonials: Testimonial[] = [
  {
    id: '1',
    name: 'Rajesh Kumar',
    role: 'Happy Customer',
    content:
      'Anandam Residency is a clean, secure, and well-maintained residential community with good amenities and a peaceful environment. A great place for comfortable family living',
    rating: 5,
    image:
      'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop',
  },
  {
    id: '2',
    name: 'Priya Singh',
    role: 'Investor',
    content:
      'Anandam Residency is an affordable and beautiful residential project in Asansol with great amenities, strong security, and a peaceful living environment.',
    rating: 5,
    image:
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop',
  },
  {
    id: '3',
    name: 'Amit Patel',
    role: 'Property Buyer',
    content:
      'A well-planned project with quality construction and professional management. The entire experience was smooth, transparent, and satisfying.',
    rating: 5,
    image:
      'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop',
  },
];
