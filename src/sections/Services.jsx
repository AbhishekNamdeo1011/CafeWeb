import React from 'react';
import { siteData } from '../data/siteData';
import { SectionHeading } from '../components/SectionHeading';
import { Utensils, Wine, Users, Coffee, Sparkles, ShoppingBag, Truck, Calendar, Home, Flame, Crown, Heart, Award, ShieldCheck } from 'lucide-react';

export const Services = () => {
  const { services } = siteData;

  if (!services) return null;

  const items = Array.isArray(services) ? services : services.items || [];
  if (items.length === 0) return null;

  const eyebrow = services.eyebrow || services.badge || "Services & Experiences";
  const title = services.title || "Curated Guest Experiences";
  const subtitle = services.subtitle || services.description || "Tailored hospitality experiences designed to celebrate Indian culinary art.";

  const renderIcon = (iconName) => {
    switch (iconName) {
      case 'Flame': return <Flame size={24} />;
      case 'Crown': return <Crown size={24} />;
      case 'Heart': return <Heart size={24} />;
      case 'Award': return <Award size={24} />;
      case 'ShieldCheck': return <ShieldCheck size={24} />;
      case 'Utensils': return <Utensils size={24} />;
      case 'Wine': return <Wine size={24} />;
      case 'Users': return <Users size={24} />;
      case 'Coffee': return <Coffee size={24} />;
      case 'ShoppingBag': return <ShoppingBag size={24} />;
      case 'Truck': return <Truck size={24} />;
      case 'Calendar': return <Calendar size={24} />;
      case 'Home': return <Home size={24} />;
      default: return <Sparkles size={24} />;
    }
  };

  return (
    <section id="services" className="py-20 md:py-28 lg:py-32 bg-dark-surface relative border-y border-white/5">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <SectionHeading
          badge={eyebrow}
          title={title}
          subtitle={subtitle}
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {items.map((item) => (
            <div
              key={item.id}
              className="bg-dark-card/90 border border-white/10 rounded-2xl p-8 hover:border-gold-500/40 transition-all duration-300 hover:-translate-y-1 shadow-lg flex flex-col justify-between group"
            >
              <div>
                <div className="w-12 h-12 rounded-xl bg-gold-500/15 border border-gold-500/30 flex items-center justify-center text-gold-500 mb-6 group-hover:bg-gold-500 group-hover:text-dark-bg transition-all duration-300">
                  {renderIcon(item.icon)}
                </div>

                <h3 className="font-serif text-xl text-white font-medium mb-3 group-hover:text-gold-400 transition-colors">
                  {item.title}
                </h3>

                <p className="text-gray-400 text-sm font-light leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

