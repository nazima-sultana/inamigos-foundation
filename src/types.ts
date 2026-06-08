export interface Program {
  id: string;
  title: string;
  tagline: string;
  description: string;
  iconName: string; // Dynamic icon rendering helper
  colorClass: string; // Tailwind color theme selector
  bgClass: string;
  image: string;
  details: string[];
}

export interface BlogPost {
  id: string;
  title: string;
  date: string;
  excerpt: string;
  content: string;
  author: string;
  category: string;
  readTime: string;
  image: string;
}

export interface GalleryImage {
  id: string;
  url: string;
  caption: string;
  category: 'All' | 'Education' | 'Environment' | 'Community' | 'Youth';
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  quote: string;
  image: string;
}
