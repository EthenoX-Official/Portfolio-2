export interface Service {
  id: string;
  title: string;
  description: string;
  icon: 'youtube' | 'zap' | 'instagram';
}

export interface PricingItem {
  id: string;
  tier: string;
  price: string;
  deliverables: string[];
  recommended?: boolean;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  content: string;
  avatarUrl: string;
}

export interface NavItem {
  label: string;
  href: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}