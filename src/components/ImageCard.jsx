import React from 'react';
import { ImageWithFallback } from './ImageWithFallback';

/**
 * Reusable ImageCard component for Photo Gallery section.
 * Supports image or url properties.
 */
export const ImageCard = ({ item, onClick }) => {
  if (!item) return null;

  const { title, category } = item;
  const image = item.image || item.url;

  return (
    <div
      onClick={() => onClick && onClick(item)}
      className="group relative rounded-2xl overflow-hidden cursor-pointer aspect-[4/3] bg-dark-card border border-white/10 hover:border-gold-500/50 transition-all duration-300 shadow-md"
    >
      <ImageWithFallback
        src={image}
        alt={title || category}
        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        loading="lazy"
      />

      {/* Dark Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-dark-bg/90 via-dark-bg/20 to-transparent opacity-80 group-hover:opacity-95 transition-opacity duration-300 flex flex-col justify-end p-6">
        {category && (
          <span className="text-[11px] font-semibold uppercase tracking-widest text-gold-500 mb-1">
            {category}
          </span>
        )}
        <h4 className="font-serif text-xl text-white font-medium group-hover:translate-x-1 transition-transform duration-300">
          {title}
        </h4>
      </div>
    </div>
  );
};
