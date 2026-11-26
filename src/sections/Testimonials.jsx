import React from 'react';
import { siteData } from '../data/siteData';
import { SectionHeading } from '../components/SectionHeading';
import { TestimonialCard } from '../components/TestimonialCard';

export const Testimonials = () => {
  const { testimonials } = siteData;

  if (!testimonials) return null;

  const items = Array.isArray(testimonials) ? testimonials : testimonials.items || [];
  if (items.length === 0) return null;

  const eyebrow = testimonials.eyebrow || testimonials.badge || "Guest Reviews";
  const title = testimonials.title || "What Critics & Guests Say";
  const subtitle = testimonials.subtitle || testimonials.description;

  return (
    <section id="testimonials" className="py-20 md:py-28 lg:py-32 bg-dark-surface relative border-y border-white/5">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <SectionHeading
          badge={eyebrow}
          title={title}
          subtitle={subtitle}
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {items.map((item, idx) => (
            <TestimonialCard key={item.id || idx} item={item} />
          ))}
        </div>
        {testimonials.url && <a href={testimonials.url} className="block w-fit mx-auto mt-8 underline underline-offset-4 text-gold-500">Read more reviews on District</a>}
      </div>
    </section>
  );
};
