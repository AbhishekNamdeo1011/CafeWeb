import React, { useState } from 'react';
import { Utensils } from 'lucide-react';

/**
 * Reusable image component with robust fallback handling.
 * Prevents broken image icons, layout collapses, or ugly empty states.
 */
export const ImageWithFallback = ({
  src,
  alt = 'Restaurant Image',
  className = '',
  containerClassName = '',
  loading = 'lazy',
  fallbackText = ''
}) => {
  const [hasError, setHasError] = useState(false);

  const isValidSrc = typeof src === 'string' && src.trim().length > 0 && !src.includes('source.unsplash.com');

  if (hasError || !isValidSrc) {
    if (process.env.NODE_ENV === 'development' && src) {
      console.warn(`[ImageWithFallback] Failed to load image: ${src}`);
    }

    return (
      <div
        className={`w-full h-full bg-gradient-to-br from-dark-card via-dark-surface to-[#221e17] flex flex-col items-center justify-center p-4 border border-white/10 text-center relative overflow-hidden ${containerClassName}`}
        role="img"
        aria-label={alt || fallbackText || 'Image unavailable'}
      >
        <div className="w-10 h-10 rounded-full bg-gold-500/10 border border-gold-500/30 flex items-center justify-center text-gold-500 mb-2">
          <Utensils size={18} />
        </div>
        <span className="text-xs font-serif font-medium text-gray-300 line-clamp-2 px-2">
          {alt || fallbackText || 'Saffron Courtyard'}
        </span>
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      className={className}
      loading={loading}
      onError={() => setHasError(true)}
    />
  );
};

export default ImageWithFallback;
