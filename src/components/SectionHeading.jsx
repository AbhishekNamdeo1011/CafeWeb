import React from 'react';
import { Sparkles } from 'lucide-react';

/**
 * Reusable SectionHeading component with hospitality typography hierarchy.
 */
export const SectionHeading = ({
  badge,
  title,
  subtitle,
  align = 'center',
  className = ''
}) => {
  const alignClasses = {
    center: 'text-center items-center',
    left: 'text-left items-start',
    right: 'text-right items-end'
  };

  return (
    <div className={`flex flex-col mb-14 md:mb-20 ${alignClasses[align] || alignClasses.center} ${className}`}>
      {/* Eyebrow Badge */}
      {badge && (
        <div className="inline-flex items-center gap-2 px-4 py-1 bg-gold-500/10 border border-gold-500/30 text-gold-500 rounded-full text-[11px] font-semibold tracking-[0.2em] uppercase mb-4 backdrop-blur-sm">
          <Sparkles size={11} />
          <span>{badge}</span>
        </div>
      )}

      {/* Main Section Title */}
      {title && (
        <h2 aria-label={title} className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium text-white tracking-tight leading-[1.12] mb-4 max-w-3xl">
          {title.split(' ').map((word, index) => (
            <React.Fragment key={index}>
              {index > 0 && ' '}
              <span className="word-mask"><span style={{ '--word': index }}>{word}</span></span>
            </React.Fragment>
          ))}
        </h2>
      )}

      {/* Subtitle / Description */}
      {subtitle && (
        <p className="text-gray-400 text-base sm:text-lg max-w-2xl font-light leading-relaxed">
          {subtitle}
        </p>
      )}

      {/* Subtle Accent Divider */}
      <div className="w-12 h-[2px] bg-gradient-to-r from-transparent via-gold-500 to-transparent mt-6"></div>
    </div>
  );
};
