import React, { useEffect, useRef } from 'react';
import Lenis from 'lenis';
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
  const page = useRef(null);

  useEffect(() => {
    const lenis = new Lenis({
      autoRaf: true,
      lerp: 0.065,
      wheelMultiplier: 0.88,
      syncTouch: false,
    });
    const root = page.current;
    function followAnchor(event) {
      if (event.defaultPrevented || event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
      const link = event.target.closest('a[href^="#"]');
      const target = link && document.getElementById(link.hash.slice(1));
      if (!target) return;
      event.preventDefault();
      if (location.hash !== link.hash) history.pushState(history.state, '', link.hash);
      target.tabIndex = -1;
      target.focus({ preventScroll: true });
      lenis.scrollTo(target, { duration: 1.55, easing: t => 1 - (1 - t) ** 3 });
    }
    root.addEventListener('click', followAnchor);
    return () => {
      root.removeEventListener('click', followAnchor);
      lenis.destroy();
    };
  }, []);

  useEffect(() => {
    const preference = window.matchMedia('(prefers-reduced-motion: reduce)');
    const photos = [...page.current.querySelectorAll('[data-scroll-photo] img')];
    let frame = 0;
    function paint() {
      frame = 0;
      const height = document.documentElement.clientHeight;
      const offsets = photos.map(photo => {
        const bounds = photo.parentElement.getBoundingClientRect();
        const position = (height - bounds.top) / (height + bounds.height);
        return Math.max(-1, Math.min(1, position * 2 - 1));
      });
      photos.forEach((photo, index) => photo.style.setProperty('--photo-position', offsets[index]));
    }
    function schedule() {
      if (!frame) frame = requestAnimationFrame(paint);
    }
    function stop() {
      window.removeEventListener('scroll', schedule);
      window.removeEventListener('resize', schedule);
      cancelAnimationFrame(frame);
      frame = 0;
    }
    function syncMotion() {
      stop();
      if (preference.matches) return;
      window.addEventListener('scroll', schedule, { passive: true });
      window.addEventListener('resize', schedule);
      schedule();
    }
    syncMotion();
    preference.addEventListener('change', syncMotion);
    return () => {
      stop();
      preference.removeEventListener('change', syncMotion);
    };
  }, []);

  useEffect(() => {
    if (!window.IntersectionObserver || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const observer = new IntersectionObserver(entries => {
      for (const entry of entries) {
        if (entry.isIntersecting) {
          entry.target.classList.add('enter-view');
          observer.unobserve(entry.target);
        }
      }
    }, { threshold: 0.08 });
    page.current.querySelectorAll('section h2, section .grid > div, #reservation form, footer .grid > div').forEach(element => observer.observe(element));
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={page} className="min-h-screen bg-dark-bg text-white selection:bg-gold-500 selection:text-dark-bg font-sans">
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
