import React from 'react';
import { Section } from './ui/Section';
import { Palette, Zap, Layout } from 'lucide-react';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-32 md:py-40 px-6 bg-white dark:bg-primary-dark">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          
          {/* Image Side */}
          <Section className="relative order-2 md:order-1">
            <div className="aspect-[3/4] rounded-2xl overflow-hidden bg-gray-100 dark:bg-gray-800 relative shadow-2xl">
              <img 
                src="https://picsum.photos/seed/ethenox/800/1000" 
                alt="Ethenox Portrait" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-8">
                <div>
                  <p className="text-white font-bold text-2xl">Ethenox</p>
                  <p className="text-white/80">Digital Artist & Designer</p>
                </div>
              </div>
            </div>
          </Section>

          {/* Text Side */}
          <Section delay={200} className="order-1 md:order-2">
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-gray-900 dark:text-white mb-8 leading-tight">
              Designing Visuals That <br/>
              <span className="text-accent-blue">Tell a Story</span>
            </h2>
            
            <p className="text-gray-600 dark:text-gray-400 text-lg mb-8 leading-relaxed">
              I'm a passionate designer focused on creating thumbnails that don't just look good—they perform. With over 5 years of experience in digital art and layout design, I understand the psychology behind what makes a viewer click.
            </p>

            <div className="space-y-6">
              {[
                { icon: Zap, title: "Speed & Efficiency", desc: "Turnaround times that keep up with your upload schedule." },
                { icon: Palette, title: "Color Theory Mastery", desc: "Using contrast and saturation to grab attention instantly." },
                { icon: Layout, title: "Strategic Composition", desc: "Layouts designed to guide the eye to the most important elements." }
              ].map((item, i) => (
                <div key={i} className="flex gap-4">
                  <div className="w-12 h-12 rounded-full bg-gray-100 dark:bg-gray-800 flex items-center justify-center shrink-0 text-accent-blue">
                    <item.icon size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 dark:text-white text-lg">{item.title}</h3>
                    <p className="text-gray-600 dark:text-gray-500">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </Section>

        </div>
      </div>
    </section>
  );
};