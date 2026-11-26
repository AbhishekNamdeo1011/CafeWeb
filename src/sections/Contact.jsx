import React from 'react';
import { siteData } from '../data/siteData';
import { SectionHeading } from '../components/SectionHeading';
import { MapPin, Phone, Mail, Clock, ExternalLink, Award, Globe } from 'lucide-react';
import { formatTelLink, formatMailtoLink } from '../utils/formatters';

export const Contact = () => {
  const { contact, social } = siteData;

  if (!contact) return null;

  const eyebrow = contact.eyebrow || contact.badge || "Get in Touch";
  const title = contact.title || "Location & Hours";
  const description = contact.description || contact.subtitle;
  const mapsUrl = contact.mapsUrl || contact.googleMapsUrl;

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
  const hoursList = contact.hours || contact.schedules || [];

  return (
    <section id="contact" className="py-24 bg-dark-surface relative border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeading
          badge={eyebrow}
          title={title}
          subtitle={description}
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left Card: Direct Contact Details & Google Maps Link */}
          <div className="bg-dark-card border border-white/10 rounded-2xl p-8 sm:p-10 flex flex-col justify-between shadow-xl">
            <div>
              <h3 className="font-serif text-2xl text-white font-medium mb-8">Direct Contact</h3>

              <div className="space-y-6 mb-10">
                {contact.address && (
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-gold-500/15 border border-gold-500/30 flex items-center justify-center text-gold-500 shrink-0 mt-0.5">
                      <MapPin size={20} />
                    </div>
                    <div>
                      <h4 className="text-xs uppercase tracking-wider text-gray-400 font-semibold mb-1">Our Address</h4>
                      <p className="text-white text-base font-light">
                        {typeof contact.address === 'object' ? contact.address.formatted : contact.address}
                      </p>
                    </div>
                  </div>
                )}

                {contact.phone && (
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-gold-500/15 border border-gold-500/30 flex items-center justify-center text-gold-500 shrink-0 mt-0.5">
                      <Phone size={20} />
                    </div>
                    <div>
                      <h4 className="text-xs uppercase tracking-wider text-gray-400 font-semibold mb-1">Telephone Inquiry</h4>
                      <a href={formatTelLink(contact.phone)} className="text-white text-base font-light hover:text-gold-500 transition-colors">
                        {contact.phone}
                      </a>
                    </div>
                  </div>
                )}

                {contact.email && (
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-gold-500/15 border border-gold-500/30 flex items-center justify-center text-gold-500 shrink-0 mt-0.5">
                      <Mail size={20} />
                    </div>
                    <div>
                      <h4 className="text-xs uppercase tracking-wider text-gray-400 font-semibold mb-1">Email Concierge</h4>
                      <a href={formatMailtoLink(contact.email)} className="text-white text-base font-light hover:text-gold-500 transition-colors">
                        {contact.email}
                      </a>
                    </div>
                  </div>
                )}
              </div>
            </div>

            {socialList.length > 0 && (
              <div className="pt-6 border-t border-white/10 flex items-center justify-between gap-4">
                <span className="text-xs uppercase tracking-wider text-gray-400 font-semibold">Follow Us</span>
                <div className="flex items-center gap-3">
                  {socialList.map((item, idx) => (
                    <a
                      key={idx}
                      href={item.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white hover:bg-gold-500 hover:text-dark-bg hover:border-gold-500 transition-all duration-300"
                      aria-label={item.platform}
                    >
                      {getSocialIcon(item.platform)}
                    </a>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Right Card: Interactive Opening Hours */}
          {hoursList.length > 0 && (
            <div className="bg-dark-card border border-white/10 rounded-2xl p-8 sm:p-10 flex flex-col justify-between shadow-xl">
              <div>
                <div className="flex items-center gap-3 mb-8">
                  <div className="w-10 h-10 rounded-full bg-gold-500/15 border border-gold-500/30 flex items-center justify-center text-gold-500">
                    <Clock size={20} />
                  </div>
                  <h3 className="font-serif text-2xl text-white font-medium">Opening Hours</h3>
                </div>

                <div className="space-y-4 mb-8">
                  {hoursList.map((sch, idx) => (
                    <div key={idx} className="flex items-center justify-between py-3 border-b border-white/10">
                      <span className="text-sm font-medium text-white">{sch.days}</span>
                      <span className="text-sm font-semibold text-gold-500">{sch.time || sch.diningHours}</span>
                    </div>
                  ))}
                </div>
              </div>

              {contact.note && (
                <div className="bg-white/5 border border-white/10 rounded-xl p-4">
                  <p className="text-xs text-gray-400 leading-relaxed italic">
                    Note: {contact.note}
                  </p>
                </div>
              )}
            </div>
          )}
        </div>

        {/* Embedded Interactive Map Container (Matching Saffron Courtyard Theme & Reference Image) */}
        <div className="mt-12 relative rounded-3xl overflow-hidden border border-white/15 shadow-2xl bg-dark-card group">
          {/* Top-Left 'FIND US' Gold Badge */}
          <div className="absolute top-5 left-5 z-10 bg-gold-500 text-dark-bg px-4 py-2 rounded-lg font-extrabold text-xs uppercase tracking-widest shadow-xl flex items-center gap-2 border border-gold-400/40">
            <MapPin size={16} />
            <span>FIND US</span>
          </div>

          {/* Interactive Google Map iframe */}
          <div className="w-full h-80 sm:h-96 relative bg-dark-surface">
            <iframe
              title={siteData.business.name + " location map"}
              src={contact.embedUrl}
              width="100%"
              height="100%"
              style={{ border: 0, filter: 'grayscale(0.5) invert(0.9) hue-rotate(180deg) contrast(1.1)' }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full h-full opacity-90 hover:opacity-100 transition-opacity duration-300"
            ></iframe>
          </div>

          {/* Map Footer Bar */}
          <div className="p-5 bg-dark-card border-t border-white/10 flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-gold-500/15 border border-gold-500/30 flex items-center justify-center text-gold-500 shrink-0">
                <MapPin size={16} />
              </div>
              <span className="text-sm font-medium text-gray-200">
                {typeof contact.address === 'object' ? contact.address.formatted : contact.address}
              </span>
            </div>

            {mapsUrl && (
              <a
                href={mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-gold-500 text-dark-bg text-xs font-semibold rounded-full hover:bg-gold-400 transition-all duration-300 shadow-md shrink-0"
              >
                Open in Google Maps <ExternalLink size={13} />
              </a>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
