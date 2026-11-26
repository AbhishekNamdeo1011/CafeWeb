import React, { useState } from 'react';
import { siteData } from '../data/siteData';
import { SectionHeading } from '../components/SectionHeading';
import { ImageCard } from '../components/ImageCard';

export const Gallery = () => {
  const { gallery } = siteData;
  const [activeCategory, setActiveCategory] = useState('All');

  if (!gallery) return null;

  const items = Array.isArray(gallery) ? gallery : gallery.items || [];
  if (items.length === 0) return null;

  const eyebrow = gallery.eyebrow || gallery.badge || "Visual Gallery";
  const title = gallery.title || "Atmosphere & Gallery";
  const subtitle = gallery.subtitle || gallery.description;

  const categorySet = new Set(['All']);
  items.forEach(item => {
    if (item.category) categorySet.add(item.category);
  });
  const categories = Array.from(categorySet);

  const filteredImages = activeCategory === 'All'
    ? items
    : items.filter(item => item.category === activeCategory);

  return (
    <section id="gallery" className="py-20 md:py-28 lg:py-32 bg-dark-bg relative">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <SectionHeading
          badge={eyebrow}
          title={title}
          subtitle={subtitle}
        />

        {/* Category Tabs */}
        {categories.length > 2 && (
          <div className="flex flex-wrap items-center justify-center gap-3 mb-12">
            {categories.map((cat, idx) => (
              <button
                key={idx}
                onClick={() => setActiveCategory(cat)}
                className={`px-5 py-2 rounded-full text-xs font-semibold uppercase tracking-wider transition-all duration-300 cursor-pointer min-h-[44px] ${
                  activeCategory === cat
                    ? 'bg-gold-500 text-dark-bg shadow-md'
                    : 'bg-dark-card text-gray-400 border border-white/10 hover:text-white hover:border-white/20'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        )}

        {/* Photo Gallery Grid */}
        <div tabIndex={0} role="region" aria-label="Café photos" className="photo-gallery grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredImages.map((item, idx) => (
            <ImageCard key={item.id || idx} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
};
