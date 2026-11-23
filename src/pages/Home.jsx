import React from 'react';
import { siteData } from '../data/siteData';
import { ThemeInjector } from '../components/ThemeInjector';
import { Header } from '../components/Header';
import { Hero } from '../sections/Hero';
import { About } from '../sections/About';
import { FeaturedItems } from '../sections/FeaturedItems';
import { Menu } from '../sections/Menu';
import { Services } from '../sections/Services';
import { Gallery } from '../sections/Gallery';
import { Testimonials } from '../sections/Testimonials';
import { Reservation } from '../sections/Reservation';
import { Contact } from '../sections/Contact';
import { Footer } from '../components/Footer';

export const Home = () => {
  const { sections } = siteData;

  return (
    <div className="min-h-screen bg-dark-bg text-white selection:bg-gold-500 selection:text-dark-bg font-sans">
      {/* Dynamic Client Theme Injector */}
      <ThemeInjector />

      {/* Main Header / Navbar */}
      <Header />

      {/* Conditionally Rendered Sections */}
      {sections?.hero !== false && <Hero />}
      {sections?.about !== false && <About />}
      {sections?.featuredItems !== false && <FeaturedItems />}
      {sections?.menu !== false && <Menu />}
      {sections?.services !== false && <Services />}
      {sections?.gallery !== false && <Gallery />}
      {sections?.testimonials !== false && <Testimonials />}
      {sections?.reservation !== false && <Reservation />}
      {sections?.contact !== false && <Contact />}

      {/* Main Footer */}
      <Footer />
    </div>
  );
};

export default Home;
