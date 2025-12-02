import React from 'react';
import { Section } from './ui/Section';
import { Youtube, Instagram, Smartphone } from 'lucide-react';
import { Service } from '../types';

const services: Service[] = [
  {
    id: '1',
    title: 'YouTube Thumbnails',
    description: 'High-CTR thumbnails designed for long-form content. Optimized for mobile and desktop screens.',
    icon: 'youtube'
  },
  {
    id: '2',
    title: 'Shorts Covers',
    description: 'Eye-catching frames selected or designed specifically for the YouTube Shorts feed.',
    icon: 'zap'
  },
  {
    id: '3',
    title: 'Reels & TikTok',
    description: 'Vertical aesthetics that fit the Instagram and TikTok interface perfectly.',
    icon: 'instagram'
  }
];

export const Services: React.FC = () => {
  const getIcon = (type: string) => {
    switch (type) {
      case 'youtube': return <Youtube size={32} />;
      case 'zap': return <Smartphone size={32} />;
      case 'instagram': return <Instagram size={32} />;
      default: return <Youtube size={32} />;
    }
  };

  return (
    <section id="services" className="py-32 md:py-40 px-6 bg-secondary-light dark:bg-secondary-dark">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <Section>
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-gray-900 dark:text-white mb-4">
              My Services
            </h2>
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Specialized design solutions tailored for content creators.
            </p>
          </Section>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, idx) => (
            <Section key={service.id} delay={idx * 100}>
              <div className="group bg-white dark:bg-[#1a1a1a] p-8 rounded-2xl border border-transparent hover:border-gray-200 dark:hover:border-gray-700 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl dark:hover:shadow-black/50">
                <div className="w-16 h-16 rounded-xl bg-gray-50 dark:bg-black flex items-center justify-center text-gray-900 dark:text-white mb-6 group-hover:bg-accent-blue group-hover:text-white transition-colors duration-300">
                  {getIcon(service.icon)}
                </div>
                
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3 relative inline-block">
                  {service.title}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 group-hover:w-full transition-all duration-300" />
                </h3>
                
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                  {service.description}
                </p>
              </div>
            </Section>
          ))}
        </div>
      </div>
    </section>
  );
};