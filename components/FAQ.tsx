import React, { useState } from 'react';
import { Section } from './ui/Section';
import { Plus, Minus } from 'lucide-react';
import { FAQItem } from '../types';

const faqs: FAQItem[] = [
  {
    question: "What is your typical turnaround time?",
    answer: "For single thumbnails, I usually deliver within 24 hours. Bulk orders (5+ thumbnails) may take 2-3 days depending on complexity."
  },
  {
    question: "How do revisions work?",
    answer: "I offer unlimited revisions for all packages until you are 100% satisfied with the design. We'll work together to get the CTR-optimized look you need."
  },
  {
    question: "Do you provide source files?",
    answer: "Yes, source files (PSD) are available in the 'Pro' and 'Monthly' packages. For the starter package, I provide high-resolution PNG/JPG."
  },
  {
    question: "What software do you use?",
    answer: "I primarily use Adobe Photoshop with various plugins and generative AI tools to create high-quality, unique composites."
  },
  {
    question: "Do you offer discounts for bulk orders?",
    answer: "Yes! The 'Pack of 5' and 'Monthly' tiers are already discounted compared to the single rate. For larger custom orders, feel free to contact me directly."
  }
];

export const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="py-32 md:py-40 px-6 bg-white dark:bg-primary-dark">
       <div className="max-w-3xl mx-auto">
         <Section className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-gray-900 dark:text-white mb-4">
              Common Questions
            </h2>
            <p className="text-gray-600 dark:text-gray-400">
              Everything you need to know about the process.
            </p>
         </Section>
         <div className="space-y-4">
           {faqs.map((faq, idx) => (
             <Section key={idx} delay={idx * 100}>
               <div 
                 className="border border-gray-200 dark:border-gray-800 rounded-2xl overflow-hidden bg-gray-50 dark:bg-[#0a0a0a] transition-all hover:border-gray-300 dark:hover:border-gray-700"
               >
                 <button
                   onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                   className="w-full flex items-center justify-between p-6 text-left"
                 >
                   <span className="font-semibold text-lg text-gray-900 dark:text-white pr-8">{faq.question}</span>
                   {openIndex === idx ? (
                     <Minus className="text-accent-blue flex-shrink-0" />
                   ) : (
                     <Plus className="text-gray-400 flex-shrink-0" />
                   )}
                 </button>
                 <div 
                   className={`px-6 overflow-hidden transition-all duration-300 ease-in-out ${
                     openIndex === idx ? 'max-h-48 pb-6 opacity-100' : 'max-h-0 opacity-0'
                   }`}
                 >
                   <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                     {faq.answer}
                   </p>
                 </div>
               </div>
             </Section>
           ))}
         </div>
       </div>
    </section>
  );
};