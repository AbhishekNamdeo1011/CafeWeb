import React, { useState } from 'react';
import { siteData } from '../data/siteData';
import { SectionHeading } from '../components/SectionHeading';
import { MenuItem } from '../components/MenuItem';

export const Menu = () => {
  const { menu } = siteData;
  const initialCategory = menu?.categories?.[0]?.id || 'all';
  const [activeCategoryId, setActiveCategoryId] = useState(initialCategory);

  if (!menu || !menu.categories || menu.categories.length === 0) return null;

  const eyebrow = menu.eyebrow || menu.badge || "Gastronomic Offering";
  const title = menu.title || "Seasonal Menu";
  const description = menu.description || menu.subtitle;

  const getFilteredItems = () => {
    if (activeCategoryId === 'all') {
      return menu.categories.flatMap(cat => cat.items || []);
    }

    const targetCategory = menu.categories.find(cat => cat.id === activeCategoryId);
    if (targetCategory && targetCategory.items && targetCategory.items.length > 0) {
      return targetCategory.items;
    }

    if (menu.items) {
      return menu.items.filter(item => item.categoryId === activeCategoryId);
    }

    return [];
  };

  const filteredItems = getFilteredItems();

  return (
    <section id="menu" className="py-20 md:py-28 lg:py-32 bg-dark-bg relative">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <SectionHeading
          badge={eyebrow}
          title={title}
          subtitle={description}
        />

        {/* Dynamic Category Pill Tabs */}
        {menu.categories.length > 1 && (
          <div className="flex flex-wrap items-center justify-center gap-3 mb-14">
            {menu.categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategoryId(cat.id)}
                className={`px-6 py-2.5 rounded-full text-xs font-semibold uppercase tracking-wider transition-all duration-300 cursor-pointer min-h-[44px] ${
                  activeCategoryId === cat.id
                    ? 'bg-gold-500 text-dark-bg shadow-[0_4px_20px_rgba(212,175,55,0.2)] scale-105'
                    : 'bg-dark-card text-gray-400 border border-white/10 hover:text-white hover:border-white/20'
                }`}
              >
                {cat.name}
              </button>
            ))}
          </div>
        )}

        {/* Menu Items Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map((item, idx) => (
            <MenuItem key={item.id || idx} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
};
