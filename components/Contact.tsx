import React, { useState } from 'react';
import { Section } from './ui/Section';
import { Button } from './ui/Button';
import { Mail, Twitter, Instagram, Send } from 'lucide-react';

export const Contact: React.FC = () => {
  // We keep state only for controlled inputs if needed, but for native submission
  // we can rely on the browser's form handling.
  
  return (
    <section id="contact" className="py-32 md:py-40 px-6 bg-white dark:bg-primary-dark">
      <div className="max-w-4xl mx-auto">
        <Section className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-gray-900 dark:text-white mb-4">
            Let's Work Together
          </h2>
          <p className="text-gray-600 dark:text-gray-400">
            Ready to level up your content? Send me a message.
          </p>
        </Section>

        <Section delay={200}>
          <div className="bg-gray-50 dark:bg-[#0a0a0a] p-8 md:p-12 rounded-3xl border border-gray-100 dark:border-gray-800 relative overflow-hidden">
            
            {/* 
              Standard HTML Form Submission 
              This redirects the user to FormSubmit's page, which ensures the 
              activation email trigger is visible and works reliably.
            */}
            <form 
              action="https://formsubmit.co/ethenox19@gmail.com" 
              method="POST" 
              className="space-y-6 relative z-10"
            >
              {/* Configuration Fields */}
              <input type="hidden" name="_subject" value="New Portfolio Inquiry" />
              <input type="hidden" name="_template" value="table" />
              <input type="hidden" name="_captcha" value="false" />
              <input type="hidden" name="_honey" style={{ display: 'none' }} />

              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium text-gray-900 dark:text-white">Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="w-full px-4 py-3 rounded-xl bg-white dark:bg-[#1a1a1a] border border-gray-200 dark:border-gray-800 focus:outline-none focus:border-accent-blue focus:ring-1 focus:ring-accent-blue transition-all dark:text-white placeholder-gray-400"
                    placeholder="John Doe"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium text-gray-900 dark:text-white">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full px-4 py-3 rounded-xl bg-white dark:bg-[#1a1a1a] border border-gray-200 dark:border-gray-800 focus:outline-none focus:border-accent-blue focus:ring-1 focus:ring-accent-blue transition-all dark:text-white placeholder-gray-400"
                    placeholder="john@example.com"
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium text-gray-900 dark:text-white">Message</label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={4}
                  className="w-full px-4 py-3 rounded-xl bg-white dark:bg-[#1a1a1a] border border-gray-200 dark:border-gray-800 focus:outline-none focus:border-accent-blue focus:ring-1 focus:ring-accent-blue transition-all dark:text-white resize-none placeholder-gray-400"
                  placeholder="Tell me about your channel goals..."
                />
              </div>

              <div className="pt-4">
                <Button 
                  type="submit" 
                  fullWidth 
                >
                  Send Message
                  <Send size={18} />
                </Button>
              </div>
            </form>

            <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-800 flex justify-center gap-8">
              <a 
                href="mailto:ethenox19@gmail.com" 
                className="text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors hover:scale-110 transform duration-200"
              >
                <Mail size={24} />
              </a>
              <a href="#" className="text-gray-400 hover:text-[#1DA1F2] transition-colors hover:scale-110 transform duration-200">
                <Twitter size={24} />
              </a>
              <a 
                href="https://www.instagram.com/ethenox_?igsh=cjlkNnN4cDN5ajkx" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-gray-400 hover:text-[#E1306C] transition-colors hover:scale-110 transform duration-200"
              >
                <Instagram size={24} />
              </a>
            </div>
          </div>
        </Section>
      </div>
    </section>
  );
};