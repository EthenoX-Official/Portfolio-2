import React from 'react';
import { Section } from './ui/Section';
import { Button } from './ui/Button';
import { Check } from 'lucide-react';
import { PricingItem } from '../types';

const pricing: PricingItem[] = [
  {
    id: 'starter',
    tier: 'Single',
    price: '$25',
    deliverables: ['1 Custom Thumbnail', '2 Revisions', 'High Resolution (4K)', 'Source File (PSD)', '24h Turnaround'],
  },
  {
    id: 'pro',
    tier: 'Pack of 5',
    price: '$110',
    deliverables: ['5 Custom Thumbnails', 'Unlimited Revisions', 'A/B Testing Variants', 'Priority Support', 'Source Files (PSD)'],
    recommended: true
  },
  {
    id: 'channel',
    tier: 'Monthly',
    price: '$400',
    deliverables: ['Up to 15 Thumbnails', 'Unlimited Revisions', 'Strategy Call', 'Dedicated Slack Channel', 'Rush Delivery Available'],
  }
];

export const Pricing: React.FC = () => {
  return (
    <section id="pricing" className="py-32 md:py-40 px-6 bg-white dark:bg-primary-dark">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <Section>
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-gray-900 dark:text-white mb-4">
              Simple Pricing
            </h2>
            <p className="text-gray-600 dark:text-gray-400">
              No hidden fees. Choose the package that fits your content frequency.
            </p>
          </Section>
        </div>

        <div className="grid md:grid-cols-3 gap-8 items-start">
          {pricing.map((plan, idx) => (
            <Section key={plan.id} delay={idx * 100}>
              <div className={`relative p-8 rounded-3xl border transition-all duration-300 hover:shadow-2xl ${
                plan.recommended 
                  ? 'bg-gray-900 dark:bg-white text-white dark:text-black border-transparent scale-105 z-10' 
                  : 'bg-white dark:bg-[#0a0a0a] text-gray-900 dark:text-white border-gray-200 dark:border-gray-800 hover:border-accent-blue'
              }`}>
                {plan.recommended && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-blue-500 to-purple-500 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                    Most Popular
                  </div>
                )}
                
                <h3 className={`text-lg font-medium mb-2 ${plan.recommended ? 'text-gray-300 dark:text-gray-600' : 'text-gray-500'}`}>
                  {plan.tier}
                </h3>
                <div className="flex items-baseline gap-1 mb-8">
                  <span className="text-5xl font-bold tracking-tight">{plan.price}</span>
                </div>

                <ul className="space-y-4 mb-8">
                  {plan.deliverables.map((item, i) => (
                    <li key={i} className="flex items-center gap-3">
                      <Check size={18} className={plan.recommended ? 'text-accent-blue' : 'text-green-500'} />
                      <span className="text-sm font-medium opacity-90">{item}</span>
                    </li>
                  ))}
                </ul>

                <Button 
                  fullWidth 
                  variant={plan.recommended ? 'secondary' : 'primary'}
                  className={plan.recommended ? 'bg-white text-black hover:bg-gray-100 dark:bg-black dark:text-white' : ''}
                >
                  Get Started
                </Button>
              </div>
            </Section>
          ))}
        </div>
      </div>
    </section>
  );
};