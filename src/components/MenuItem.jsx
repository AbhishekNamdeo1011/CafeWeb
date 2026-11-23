import React from 'react';
import { formatPrice } from '../utils/formatters';
import { Star } from 'lucide-react';
import { ImageWithFallback } from './ImageWithFallback';

/**
 * Editorial MenuItem component for Menu and Signature Items sections.
 */
export const MenuItem = ({ item }) => {
  if (!item) return null;

  const title = item.name || item.title;
  const description = item.description;
  const price = item.price;
  const currency = item.currency || '₹';
  const isPopular = item.popular ?? item.isPopular;
  const image = item.image || item.url;
  const isVeg = item.isVeg ?? (typeof item.tag === 'string' && item.tag.toLowerCase().includes('veg') && !item.tag.toLowerCase().includes('non'));
  
  const tags = Array.isArray(item.tags)
    ? item.tags
    : item.tag ? [item.tag] : [];

  return (
    <div className="group bg-dark-card/90 border border-white/10 rounded-2xl overflow-hidden hover:border-gold-500/40 transition-all duration-300 hover:-translate-y-1 shadow-lg flex flex-col justify-between">
      <div>
        {/* Image Frame with Aspect Ratio */}
        {image && (
          <div className="relative aspect-[4/3] w-full overflow-hidden bg-dark-surface">
            <ImageWithFallback
              src={image}
              alt={title}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-dark-card via-dark-card/20 to-transparent"></div>

            {isPopular && (
              <span className="absolute top-3 right-3 bg-gold-500 text-dark-bg text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full flex items-center gap-1 shadow-md">
                <Star size={10} fill="currentColor" /> Popular
              </span>
            )}
          </div>
        )}

        {/* Dish Name & Price */}
        <div className="p-6">
          <div className="flex items-baseline justify-between gap-4 mb-3">
            <div className="flex items-center gap-2.5">
              {item.isVeg !== undefined && (
                <span
                  className={`w-4 h-4 border shrink-0 flex items-center justify-center ${
                    isVeg ? 'border-emerald-500' : 'border-rose-500'
                  }`}
                  title={isVeg ? 'Vegetarian' : 'Non-Vegetarian'}
                >
                  {isVeg ? (
                    <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
                  ) : (
                    <span className="w-0 h-0 border-l-[3.5px] border-l-transparent border-r-[3.5px] border-r-transparent border-b-[7px] border-b-rose-500"></span>
                  )}
                </span>
              )}
              <h3 className="font-serif text-xl sm:text-2xl text-white font-medium group-hover:text-gold-500 transition-colors leading-snug">
                {title}
              </h3>
            </div>
            <span className="font-serif text-xl sm:text-2xl font-semibold text-gold-400 shrink-0">
              {formatPrice(price, currency)}
            </span>
          </div>

          <p className="text-gray-400 text-sm font-light leading-relaxed mb-4">
            {description}
          </p>
        </div>
      </div>

      {/* Dietary Tags */}
      {tags.length > 0 && (
        <div className="px-6 pb-6 pt-0 flex flex-wrap gap-2">
          {tags.map((tag, idx) => (
            <span
              key={idx}
              className="text-[11px] font-medium text-gold-400 bg-gold-500/10 border border-gold-500/20 px-2.5 py-0.5 rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>
      )}
    </div>
  );
};
