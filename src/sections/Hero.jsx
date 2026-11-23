import React from 'react';
import { Award, ArrowRight, ChevronDown } from 'lucide-react';
import { siteData } from '../data/siteData';
import { Button } from '../components/Button';

export const Hero = () => {
  const { hero, business } = siteData;

  if (!hero) return null;

  const eyebrow = hero.eyebrow || hero.badge;
  const title = hero.title || business?.name;
  const subtitle = hero.subtitle || business?.description;
  const image = hero.image || hero.images?.[0];

  return (
    <section id="hero" className="relative min-h-[92vh] lg:min-h-screen flex items-center justify-center pt-28 pb-20 overflow-hidden bg-black">
      {/* Background Image & Overlay */}
      {image && (
        <div className="absolute inset-0 z-0 overflow-hidden">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover object-center scale-105 pointer-events-none"
          />
          {/* Balanced Dark Vignette Overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/75 via-black/40 to-[#0D0C0A]"></div>
          <div className="absolute inset-0 bg-black/25"></div>
        </div>
      )}

      {/* Main Content Container */}
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10 flex flex-col items-center text-center">
        <div className="max-w-4xl flex flex-col items-center">
          {eyebrow && (
            <div className="inline-flex items-center gap-2 px-5 py-1.5 bg-gold-500/15 border border-gold-500/30 text-gold-500 rounded-full text-xs font-semibold tracking-[0.2em] uppercase mb-6 backdrop-blur-md">
              <Award size={14} />
              <span>{eyebrow}</span>
            </div>
          )}

          <h1 className="font-serif text-white text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-medium leading-[1.08] tracking-tight mb-6 max-w-4xl">
            {title}
          </h1>

          <p className="text-gray-300 text-base sm:text-xl md:text-2xl font-light mb-10 max-w-2xl leading-relaxed">
            {subtitle}
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6">
            {hero.primaryButton && (
              <Button href={hero.primaryButton.href || hero.primaryButton.link} variant="primary" icon={ArrowRight}>
                {hero.primaryButton.label || hero.primaryButton.text}
              </Button>
            )}
            {hero.secondaryButton && (
              <Button href={hero.secondaryButton.href || hero.secondaryButton.link} variant="secondary">
                {hero.secondaryButton.label || hero.secondaryButton.text}
              </Button>
            )}
          </div>
        </div>

        {/* Scroll Indicator */}
        <a 
          href="#about" 
          className="absolute bottom-6 sm:bottom-8 text-gray-400 hover:text-gold-500 transition-colors duration-200"
          aria-label="Scroll to About section"
        >
          <ChevronDown size={28} className="animate-bounce" />
        </a>
      </div>
    </section>
  );
};
