import React from 'react';
import { Section } from './ui/Section';
import { Testimonial } from '../types';

const testimonials: Testimonial[] = [
  {
    id: '1',
    name: 'Alex Hormozi Fan',
    role: 'YouTuber (500k Subs)',
    content: "The CTR on my videos went up by 4% after switching to Ethenox. The designs are clean, punchy, and exactly what the algorithm wants.",
    avatarUrl: 'https://picsum.photos/seed/face1/100/100'
  },
  {
    id: '2',
    name: 'Sarah Digital',
    role: 'Lifestyle Vlogger',
    content: "Incredible speed and quality. I usually need revisions but Ethenox nailed the vibe on the first try. Highly recommended!",
    avatarUrl: 'https://picsum.photos/seed/face2/100/100'
  },
  {
    id: '3',
    name: 'Tech Reviewer',
    role: 'Tech Channel',
    content: "Professionalism at its finest. The pricing is a steal for the quality of work you get. My channel looks so much more consistent now.",
    avatarUrl: 'https://picsum.photos/seed/face3/100/100'
  },
  {
    id: '4',
    name: 'Gaming Pro',
    role: 'Streamer',
    content: "Best thumbnail designer I've worked with. Knows exactly how to highlight the gameplay moments that matter.",
    avatarUrl: 'https://picsum.photos/seed/face4/100/100'
  },
];

export const Testimonials: React.FC = () => {
  return (
    <section id="testimonials" className="py-32 md:py-40 bg-secondary-light dark:bg-secondary-dark overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 mb-16 text-center">
        <Section>
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-gray-900 dark:text-white mb-4">
            Client Love
          </h2>
        </Section>
      </div>

      <div className="relative w-full flex overflow-hidden">
        {/* Gradients */}
        <div className="absolute top-0 left-0 w-20 md:w-40 h-full bg-gradient-to-r from-[#f5f5f7] dark:from-[#121212] to-transparent z-10" />
        <div className="absolute top-0 right-0 w-20 md:w-40 h-full bg-gradient-to-l from-[#f5f5f7] dark:from-[#121212] to-transparent z-10" />

        <div className="flex gap-6 animate-marquee-right hover:[animation-play-state:paused] py-4">
          {[...testimonials, ...testimonials, ...testimonials].map((t, i) => (
            <div 
              key={`${t.id}-${i}`}
              className="flex-shrink-0 w-[350px] bg-white dark:bg-[#1a1a1a] p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow"
            >
              <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed italic">
                "{t.content}"
              </p>
              <div className="flex items-center gap-4">
                <img src={t.avatarUrl} alt={t.name} className="w-12 h-12 rounded-full object-cover" />
                <div>
                  <h4 className="font-bold text-gray-900 dark:text-white">{t.name}</h4>
                  <p className="text-sm text-gray-500">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};