import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, Leaf } from 'lucide-react';
import { siteData } from '../data/siteData';
import { formatTelLink } from '../utils/formatters';
import { Button } from './Button';

export const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const { business, navigation, contact, reservation } = siteData;

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  const bookingLabel = reservation?.button?.label || "Reservations";
  const bookingHref = reservation?.button?.href || "#reservation";

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b ${
      isScrolled 
        ? 'bg-dark-surface/90 backdrop-blur-xl border-white/10 py-3 shadow-xl' 
        : 'bg-gradient-to-b from-black/80 to-transparent border-transparent py-4.5'
    }`}>
      <div className={`max-w-[1440px] mx-auto px-4 sm:px-6 flex items-center justify-between gap-4 ${isMobileMenuOpen ? 'relative z-[60]' : ''}`}>
        {/* Brand Logo / Business Name */}
        <a href="#hero" className="flex items-center gap-2.5 sm:gap-3 text-white group shrink-0" onClick={closeMobileMenu}>
          {business?.logo ? (
            <img src={business.logo} alt={business.name} className="h-9 w-auto object-contain" />
          ) : (
            <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-gold-500/15 border border-gold-500/30 flex items-center justify-center text-gold-500 group-hover:border-gold-500/60 transition-colors shrink-0">
              <Leaf size={18} />
            </div>
          )}

          <div className="flex flex-col">
            <span className="font-serif text-xl sm:text-2xl font-semibold tracking-wide text-white leading-none whitespace-nowrap">
              <span className="sm:hidden">{siteData.hero?.title || business?.name}</span>
              <span className="hidden sm:inline">{business?.name}</span>
            </span>
            {business?.tagline && (
              <span className="text-[9px] sm:text-[10px] uppercase tracking-[0.15em] text-gold-500 mt-1 font-medium truncate max-w-[160px] sm:max-w-[200px]">
                {business.tagline}
              </span>
            )}
          </div>
        </a>

        {/* Desktop Navigation Links */}
        {navigation && navigation.length > 0 && (
          <nav className="hidden xl:block" aria-label="Main Navigation">
            <ul className="flex items-center gap-4 xl:gap-6 text-xs xl:text-sm font-medium">
              {navigation.map((item, index) => (
                <li key={index} className="shrink-0">
                  <a
                    href={item.href}
                    className="relative text-gray-300 hover:text-white transition-colors py-1 whitespace-nowrap after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1px] after:bg-gold-500 hover:after:w-full after:transition-all after:duration-300"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        )}

        {/* Action Buttons */}
        <div className="flex items-center gap-3 sm:gap-4 shrink-0">
          {contact?.phone && (
            <a
              href={formatTelLink(contact.phone)}
              className="hidden 2xl:flex items-center gap-2 text-xs xl:text-sm text-gray-300 hover:text-gold-500 transition-colors whitespace-nowrap shrink-0"
              aria-label={`Call us at ${contact.phone}`}
            >
              <Phone size={14} className="text-gold-500 shrink-0" />
              <span className="whitespace-nowrap">{contact.phone}</span>
            </a>
          )}

          {reservation?.enabled !== false && (
            <div className="hidden sm:block"><Button href={bookingHref} className="py-2 px-4 sm:px-5 text-xs whitespace-nowrap shrink-0">
              {bookingLabel}
            </Button></div>
          )}

          {/* Mobile & Laptop Drawer Toggle Button */}
          <button
            aria-controls="mobile-navigation" className="relative z-[60] xl:hidden p-2 text-white hover:text-gold-500 transition-colors cursor-pointer shrink-0"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={isMobileMenuOpen}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      <div id="mobile-navigation" data-lenis-prevent data-open={isMobileMenuOpen} inert={!isMobileMenuOpen} className={`fixed inset-0 h-dvh overflow-y-auto bg-dark-bg z-50 transition-all duration-300 xl:hidden flex flex-col p-8 pt-24 ${
        isMobileMenuOpen ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-4'
      }`}>
        <div className="flex flex-col h-full justify-between">
          <ul className="flex flex-col gap-6">
            {navigation?.map((item, index) => (
              <li key={index} style={{ "--link-order": index }}>
                <a
                  href={item.href}
                  className="font-serif text-3xl text-white hover:text-gold-500 transition-colors block"
                  onClick={closeMobileMenu}
                >
                  {item.name}
                </a>
              </li>
            ))}
          </ul>

          <div className="flex flex-col gap-4">
            {reservation?.enabled !== false && (
              <Button href={bookingHref} fullWidth onClick={closeMobileMenu}>
                {bookingLabel}
              </Button>
            )}
            {contact?.phone && (
              <a
                href={formatTelLink(contact.phone)}
                className="w-full py-3.5 bg-white/5 border border-white/10 text-white text-center font-semibold rounded-full flex items-center justify-center gap-2 hover:bg-white/10 transition-colors text-sm"
              >
                <Phone size={16} /> Call {contact.phone}
              </a>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};
