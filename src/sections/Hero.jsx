import React from 'react';
import { Leaf } from 'lucide-react';
import { siteData } from '../data/siteData';
import { Button } from '../components/Button';

export const Hero = () => {
  const { hero, business } = siteData;
  if (!hero) return null;
  const title = hero.title || business.name;
  return (
    <section id="hero" className="cafe-hero">
      <div className="hero-layout">
        <div className="hero-copy">
          <p className="hero-location"><Leaf size={17} aria-hidden="true" />{hero.eyebrow}</p>
          <h1 aria-label={title}>{title.split(' ').map((word, index) => (
            <span key={index} className="word-mask" aria-hidden="true"><span style={{ '--word': index }}>{word}</span>{' '}</span>
          ))}</h1>
          <p className="hero-subtitle">{hero.subtitle}</p>
          <div className="hero-actions">
            <Button href={hero.primaryButton.href}>{hero.primaryButton.label}</Button>
            <Button href={hero.secondaryButton.href} variant="outline">{hero.secondaryButton.label}</Button>
          </div>
        </div>
        <figure className="hero-photo" data-scroll-photo>
          <img src={hero.image} alt="The wooden coffee counter and illuminated arch inside The Leaf" width="1448" height="1086" fetchPriority="high" />
        </figure>
      </div>
    </section>
  );
};
