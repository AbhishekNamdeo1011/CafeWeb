import React from 'react';
import { siteData } from '../data/siteData';
import { SectionHeading } from '../components/SectionHeading';
import { Button } from '../components/Button';
import { Quote, ArrowRight } from 'lucide-react';
import { ImageWithFallback } from '../components/ImageWithFallback';

export const About = () => {
  const { about } = siteData;

  if (!about) return null;

  const eyebrow = about.eyebrow || about.badge || "Our Story";
  const description = about.description || about.paragraph1;

  return (
    <section id="about" className="py-20 md:py-28 lg:py-32 bg-dark-bg relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Editorial Story & Stats (7 Cols on desktop) */}
          <div className="lg:col-span-7">
            <SectionHeading
              badge={eyebrow}
              title={about.title}
              align="left"
              className="mb-8"
            />

            <p className="text-gray-300 text-base sm:text-lg font-light leading-relaxed mb-6 max-w-2xl">
              {description}
            </p>

            {about.paragraph2 && (
              <p className="text-gray-400 text-sm sm:text-base font-light leading-relaxed mb-8 max-w-2xl">
                {about.paragraph2}
              </p>
            )}

            {/* Stats Grid */}
            {about.stats && about.stats.length > 0 && (
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 pt-6 border-t border-white/10 mb-8 max-w-2xl">
                {about.stats.map((stat, idx) => (
                  <div key={idx} className="flex flex-col">
                    <span className="font-serif text-3xl sm:text-4xl text-gold-400 font-semibold mb-1">
                      {stat.value}
                    </span>
                    <span className="text-xs uppercase tracking-widest text-gray-400 font-medium">
                      {stat.label}
                    </span>
                  </div>
                ))}
              </div>
            )}

            {/* Action Button or Chef Quote */}
            {about.button ? (
              <div className="mt-4">
                <Button href={about.button.href || about.button.link} variant="outline" icon={ArrowRight}>
                  {about.button.label || about.button.text}
                </Button>
              </div>
            ) : about.chef?.quote ? (
              <div className="bg-dark-card/90 border border-white/10 rounded-2xl p-6 relative flex items-start gap-4 mt-6 max-w-xl">
                <Quote size={28} className="text-gold-500 shrink-0 mt-1" />
                <div>
                  <p className="text-gray-200 italic text-sm mb-3 font-light leading-relaxed">"{about.chef.quote}"</p>
                  <p className="font-serif text-white font-medium text-base">{about.chef.name}</p>
                  <p className="text-xs text-gold-400">{about.chef.title}</p>
                </div>
              </div>
            ) : null}
          </div>

          {/* Right Column: Editorial Photography Frame (5 Cols on desktop) */}
          {about.image && (
            <div className="lg:col-span-5 relative mt-6 lg:mt-0">
              {/* Asymmetric Offset Frame */}
              <div className="relative rounded-3xl overflow-hidden border border-white/10 shadow-2xl aspect-[3/4] bg-dark-card">
                <ImageWithFallback
                  src={about.image}
                  alt={about.title}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark-bg/80 via-transparent to-transparent"></div>
              </div>

              {/* Floating Overlapping Chef Card */}
              {about.chef?.image && (
                <div className="absolute -bottom-6 -left-4 sm:-bottom-8 sm:-left-8 bg-dark-surface/95 backdrop-blur-xl border border-white/15 rounded-2xl p-4 sm:p-5 shadow-2xl flex items-center gap-4 max-w-[280px] sm:max-w-xs">
                  <div className="w-14 h-14 rounded-full overflow-hidden shrink-0 border border-gold-500/40">
                    <ImageWithFallback
                      src={about.chef.image}
                      alt={about.chef.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="font-serif text-white font-medium text-base leading-snug">{about.chef.name}</h4>
                    <p className="text-xs text-gold-400 mt-0.5">{about.chef.title}</p>
                  </div>
                </div>
              )}
            </div>
          )}

        </div>
      </div>
    </section>
  );
};
