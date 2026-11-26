import React from 'react';
import { Utensils, MapPin, Phone, Mail, Award, ArrowUp, Globe } from 'lucide-react';
import { siteData } from '../data/siteData';
import { formatTelLink, formatMailtoLink } from '../utils/formatters';

export const Footer = () => {
  const { business, contact, social, footer } = siteData;


  const getSocialIcon = (platform) => {
    switch (platform.toLowerCase()) {
      case 'instagram':
        return (
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
            <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
            <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
          </svg>
        );
      case 'facebook':
        return (
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
          </svg>
        );
      case 'tripadvisor':
        return <Award size={18} />;
      default:
        return <Globe size={18} />;
    }
  };

  const socialList = social ? Object.entries(social).map(([platform, url]) => ({ platform, url })) : [];

  return (
    <footer className="bg-[#08090a] border-t border-white/10 pt-20 pb-10 text-gray-400">
      <div className="max-w-7xl mx-auto px-6">
        {/* Top Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-[2fr_1fr_1.5fr_1.5fr] gap-12 mb-16">
          {/* Brand Info */}
          <div className="lg:pr-4">
            <div className="flex items-center gap-3 mb-4">
              {business?.logo ? (
                <img src={business.logo} alt={business.name} className="h-9 w-auto object-contain" />
              ) : (
                <div className="w-10 h-10 rounded-full bg-gold-500/15 border border-gold-500/30 flex items-center justify-center text-gold-500">
                  <Utensils size={20} />
                </div>
              )}
              <span className="font-serif text-2xl font-semibold tracking-wide text-white">
                {business?.name || "Saffron Courtyard"}
              </span>
            </div>

            <p className="text-sm text-gray-400 leading-relaxed mb-6">
              {footer?.description || business?.description}
            </p>

            {/* Social Icons */}
            {socialList.length > 0 && (
              <div className="flex items-center gap-3">
                {socialList.map((item, idx) => (
                  <a
                    key={idx}
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white hover:bg-gold-500 hover:text-dark-bg hover:border-gold-500 transition-all duration-300 hover:-translate-y-0.5"
                    aria-label={item.platform}
                  >
                    {getSocialIcon(item.platform)}
                  </a>
                ))}
              </div>
            )}
          </div>

          {/* Quick Links */}
          {footer?.quickLinks && (
            <div>
              <h4 className="font-serif text-xl text-white font-medium mb-6 tracking-wide">Navigation</h4>
              <ul className="flex flex-col gap-3 text-sm">
                {footer.quickLinks.map((link, idx) => (
                  <li key={idx}>
                    <a href={link.href} className="text-gray-400 hover:text-gold-500 transition-colors">
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Contact Details */}
          {contact && (
            <div>
              <h4 className="font-serif text-xl text-white font-medium mb-6 tracking-wide">Location & Contact</h4>
              <ul className="flex flex-col gap-3 text-sm">
                {contact.address && (
                  <li className="flex items-start gap-3">
                    <MapPin size={18} className="text-gold-500 shrink-0 mt-0.5" />
                    <span>{contact.address}</span>
                  </li>
                )}
                {contact.phone && (
                  <li className="flex items-start gap-3">
                    <Phone size={18} className="text-gold-500 shrink-0 mt-0.5" />
                    <a href={formatTelLink(contact.phone)} className="hover:text-gold-500 transition-colors">
                      {contact.phone}
                    </a>
                  </li>
                )}
                {contact.email && (
                  <li className="flex items-start gap-3">
                    <Mail size={18} className="text-gold-500 shrink-0 mt-0.5" />
                    <a href={formatMailtoLink(contact.email)} className="hover:text-gold-500 transition-colors">
                      {contact.email}
                    </a>
                  </li>
                )}
              </ul>
            </div>
          )}

          {/* Opening Hours */}
          {contact?.hours && (
            <div>
              <h4 className="font-serif text-xl text-white font-medium mb-6 tracking-wide">Opening Hours</h4>
              <ul className="flex flex-col gap-3 text-sm">
                {contact.hours.map((sch, idx) => (
                  <li key={idx} className="flex flex-col">
                    <span className="text-white font-medium">{sch.days}</span>
                    <span className="text-gold-500 text-xs mt-0.5">{sch.time || sch.diningHours}</span>
                  </li>
                ))}
              </ul>
              {contact.note && <p className="text-xs text-gray-500 mt-4 leading-relaxed">{contact.note}</p>}
            </div>
          )}
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left">
          <p className="text-xs text-gray-500">{footer?.copyright}</p>

          {footer?.legalLinks && (
            <div className="flex items-center gap-6 text-xs text-gray-500">
              {footer.legalLinks.map((link, idx) => (
                <a key={idx} href={link.href} className="hover:text-gray-300 transition-colors">
                  {link.label}
                </a>
              ))}
            </div>
          )}

          <a
            href="#hero"
            className="w-10 h-10 rounded-full bg-white/5 border border-white/10 text-white flex items-center justify-center hover:bg-gold-500 hover:text-dark-bg hover:border-gold-500 transition-all duration-300 hover:-translate-y-1 cursor-pointer"
            aria-label="Back to top"
          >
            <ArrowUp size={18} />
          </a>
        </div>
      </div>
    </footer>
  );
};
