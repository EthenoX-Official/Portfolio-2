import React from 'react';
import { Section } from './ui/Section';

const thumbnails = [
  "https://picsum.photos/seed/thumb1/600/340",
  "https://picsum.photos/seed/thumb2/600/340",
  "https://picsum.photos/seed/thumb3/600/340",
  "https://picsum.photos/seed/thumb4/600/340",
  "https://picsum.photos/seed/thumb5/600/340",
  "https://picsum.photos/seed/thumb6/600/340",
];

const thumbnailsRow2 = [
  "https://picsum.photos/seed/thumb7/600/340",
  "https://picsum.photos/seed/thumb8/600/340",
  "https://picsum.photos/seed/thumb9/600/340",
  "https://picsum.photos/seed/thumb10/600/340",
  "https://picsum.photos/seed/thumb11/600/340",
  "https://picsum.photos/seed/thumb12/600/340",
];

const thumbnailsRow3 = [
  "https://picsum.photos/seed/thumb13/600/340",
  "https://picsum.photos/seed/thumb14/600/340",
  "https://picsum.photos/seed/thumb15/600/340",
  "https://picsum.photos/seed/thumb16/600/340",
  "https://picsum.photos/seed/thumb17/600/340",
  "https://picsum.photos/seed/thumb18/600/340",
];

interface MarqueeRowProps {
  images: string[];
  direction?: 'left' | 'right';
  speed?: string;
}

const MarqueeRow: React.FC<MarqueeRowProps> = ({ images, direction = 'left' }) => {
  return (
    <div className="relative flex overflow-hidden w-full py-4 group">
      <div 
        className={`flex gap-6 whitespace-nowrap ${
          direction === 'left' ? 'animate-marquee-left' : 'animate-marquee-right'
        } hover:[animation-play-state:paused]`}
      >
        {[...images, ...images, ...images].map((src, idx) => (
          <div 
            key={idx} 
            className="relative flex-shrink-0 w-[300px] md:w-[400px] aspect-video rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 hover:scale-[1.02] cursor-pointer"
          >
            <img 
              src={src} 
              alt="Thumbnail work" 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/0 hover:bg-black/10 transition-colors duration-300" />
          </div>
        ))}
      </div>
      
      {/* Gradient fade overlay */}
      <div className="absolute top-0 left-0 w-20 md:w-40 h-full bg-gradient-to-r from-white dark:from-[#050505] to-transparent z-10" />
      <div className="absolute top-0 right-0 w-20 md:w-40 h-full bg-gradient-to-l from-white dark:from-[#050505] to-transparent z-10" />
    </div>
  );
};

export const WorkLoop: React.FC = () => {
  return (
    <section id="work" className="py-32 md:py-40 bg-secondary-light dark:bg-secondary-dark overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 mb-16">
        <Section>
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-gray-900 dark:text-white mb-6">
            Selected Works
          </h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-xl text-lg">
            A showcase of high-performance thumbnails designed to maximize click-through rates.
          </p>
        </Section>
      </div>

      <div className="flex flex-col gap-2">
        <MarqueeRow images={thumbnails} direction="left" />
        <MarqueeRow images={thumbnailsRow2} direction="right" />
        <MarqueeRow images={thumbnailsRow3} direction="left" />
      </div>
    </section>
  );
};