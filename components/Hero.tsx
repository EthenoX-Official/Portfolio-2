import React from 'react';
import { ArrowDown, ArrowRight } from 'lucide-react';
import { Button } from './ui/Button';
import { Section } from './ui/Section';

export const Hero: React.FC = () => {
  return (
    <section id="home" className="relative min-h-[85vh] flex flex-col items-center justify-center px-6 pt-28 pb-16 overflow-hidden">
      
      {/* Background decoration */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-accent-purple/10 dark:bg-accent-purple/5 rounded-full blur-[100px] pointer-events-none" />
      
      {/* Reduced max-width from 3xl to 2xl for a narrower look */}
      <div className="relative z-10 max-w-2xl mx-auto text-center">
        <Section delay={100}>
          <div className="inline-block px-4 py-1.5 mb-6 rounded-full border border-gray-200 dark:border-gray-800 bg-white/50 dark:bg-black/50 backdrop-blur-sm">
            <span className="text-sm font-medium text-gray-600 dark:text-gray-400">
              Available for new projects
            </span>
          </div>
        </Section>

        <Section delay={200}>
          <h1 className="text-4xl md:text-6xl font-heading font-bold text-gray-900 dark:text-white tracking-tight leading-[1.1] mb-6">
            Ethenox <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-900 to-gray-500 dark:from-white dark:to-gray-500">
              Creative Designer
            </span>
          </h1>
        </Section>

        <Section delay={300}>
          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 mb-8 max-w-lg mx-auto leading-relaxed">
            Crafting high-converting thumbnails for YouTube, Shorts, and Reels that stop the scroll and drive clicks.
          </p>
        </Section>

        <Section delay={400} className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}>
            Hire Me <ArrowRight size={18} />
          </Button>
          <Button variant="secondary" onClick={() => document.getElementById('work')?.scrollIntoView({ behavior: 'smooth' })}>
            View My Work
          </Button>
        </Section>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <ArrowDown className="text-gray-400 dark:text-gray-600" size={20} />
      </div>
    </section>
  );
};