import React from 'react';
import { Star, Quote } from 'lucide-react';
import { ImageWithFallback } from './ImageWithFallback';

/**
 * Reusable TestimonialCard component for Reviews section.
 */
export const TestimonialCard = ({ item }) => {
  if (!item) return null;

  const { quote, author, role, publication, rating = 5, avatar } = item;

  return (
    <div className="bg-dark-card border border-white/10 rounded-2xl p-8 flex flex-col justify-between hover:border-gold-500/40 transition-all duration-300 shadow-lg relative group">
      <Quote size={32} className="text-gold-500/20 absolute top-6 right-6 group-hover:text-gold-500/40 transition-colors" />

      <div>
        {/* Star Rating */}
        <div className="flex items-center gap-1 text-gold-500 mb-6">
          {[...Array(rating)].map((_, i) => (
            <Star key={i} size={16} fill="currentColor" />
          ))}
        </div>

        {/* Review Quote */}
        <p className="text-gray-300 font-light text-base sm:text-lg italic leading-relaxed mb-8">
          "{quote}"
        </p>
      </div>

      {/* Author Details */}
      <div className="flex items-center gap-4 pt-6 border-t border-white/10">
        {avatar && (
          <div className="w-12 h-12 rounded-full overflow-hidden shrink-0 border border-gold-500/30">
            <ImageWithFallback
              src={avatar}
              alt={author}
              className="w-full h-full object-cover"
            />
          </div>
        )}
        <div>
          <h4 className="font-serif text-lg text-white font-medium">{author}</h4>
          <p className="text-xs text-gold-500 font-medium">{role || publication}</p>
          {publication && role && (
            <p className="text-[11px] text-gray-500">{publication}</p>
          )}
        </div>
      </div>
    </div>
  );
};
