import React from 'react';
import { siteData } from '../data/siteData';
import { SectionHeading } from '../components/SectionHeading';
import { MenuItem } from '../components/MenuItem';
import { Button } from '../components/Button';
import { ArrowRight } from 'lucide-react';

export const FeaturedItems = () => {
  const { featuredItems } = siteData;

  const items = Array.isArray(featuredItems)
    ? featuredItems
    : featuredItems?.items || [];

  if (items.length === 0) return null;

  const badge = featuredItems?.eyebrow || featuredItems?.badge || "Chef's Specials";
  const title = featuredItems?.title || "Signature Creations";
  const subtitle = featuredItems?.subtitle || featuredItems?.description || "A curated preview of our celebrated culinary highlights.";

  return (
    <section id="featured" className="py-20 md:py-28 lg:py-32 bg-dark-surface relative border-y border-white/5">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <SectionHeading
          badge={badge}
          title={title}
          subtitle={subtitle}
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-14">
          {items.map((item, idx) => (
            <MenuItem key={item.id || idx} item={item} />
          ))}
        </div>

        <div className="flex justify-center">
          <Button href="#menu" variant="outline" icon={ArrowRight}>
            View Full Seasonal Menu
          </Button>
        </div>
      </div>
    </section>
  );
};
