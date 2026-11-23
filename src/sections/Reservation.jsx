import React, { useState } from 'react';
import { siteData } from '../data/siteData';
import { SectionHeading } from '../components/SectionHeading';
import { Button } from '../components/Button';
import { Calendar, Clock, Users, Phone, MessageSquare, CheckCircle } from 'lucide-react';
import { formatTelLink } from '../utils/formatters';

export const Reservation = () => {
  const { reservation, contact, business } = siteData;

  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    partySize: '2',
    date: new Date().toISOString().split('T')[0],
    timeSlot: reservation?.timeSlots?.[4] || '06:00 PM',
    diningArea: reservation?.areas?.[0] || reservation?.diningAreas?.[0] || 'Main Dining Sanctuary',
    name: '',
    email: '',
    phone: '',
    specialRequest: ''
  });

  if (!reservation || reservation.enabled === false) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const eyebrow = reservation.eyebrow || reservation.badge || "Bookings";
  const title = reservation.title || "Reserve Your Experience";
  const description = reservation.description || reservation.subtitle;

  const ctaLabel = reservation.button?.label || (
    business?.type === 'hotel' ? 'Book Room & Suite' : 'Confirm Table Reservation'
  );

  const whatsappNum = contact?.whatsapp || reservation?.whatsapp;

  return (
    <section id="reservation" className="py-20 md:py-28 lg:py-32 bg-dark-bg relative">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="bg-dark-card/90 border border-white/15 rounded-3xl p-8 sm:p-12 md:p-16 relative overflow-hidden shadow-2xl">
          {/* Ambient Glow */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-gold-500/10 rounded-full blur-3xl pointer-events-none"></div>

          <SectionHeading
            badge={eyebrow}
            title={title}
            subtitle={description}
            className="mb-10"
          />

          {submitted ? (
            <div className="text-center py-12 flex flex-col items-center">
              <CheckCircle size={56} className="text-gold-500 mb-4" />
              <h3 className="font-serif text-3xl text-white font-medium mb-2">Request Received</h3>
              <p className="text-gray-300 text-base max-w-md mb-6 font-light leading-relaxed">
                Thank you, {formData.name || 'valued guest'}. Our concierge team will confirm your booking via phone/email shortly.
              </p>
              <Button onClick={() => setSubmitted(false)} variant="outline">
                Make Another Booking
              </Button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6 max-w-4xl mx-auto">
              {/* Form Controls */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {/* Party Size */}
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-gray-400 mb-2 flex items-center gap-1.5">
                    <Users size={14} className="text-gold-500" /> Party Size
                  </label>
                  <select
                    value={formData.partySize}
                    onChange={(e) => setFormData({ ...formData, partySize: e.target.value })}
                    className="w-full bg-dark-surface border border-white/15 rounded-xl px-4 py-3 text-white text-sm focus:border-gold-500 focus:ring-1 focus:ring-gold-500 outline-none transition-colors min-h-[44px]"
                  >
                    {(reservation.partySizes || [1,2,3,4,5,6,7,8]).map(num => (
                      <option key={num} value={num} className="bg-dark-card text-white">
                        {num} {num === 1 ? 'Guest' : 'Guests'}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Date */}
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-gray-400 mb-2 flex items-center gap-1.5">
                    <Calendar size={14} className="text-gold-500" /> Date
                  </label>
                  <input
                    type="date"
                    value={formData.date}
                    onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                    className="w-full bg-dark-surface border border-white/15 rounded-xl px-4 py-3 text-white text-sm focus:border-gold-500 focus:ring-1 focus:ring-gold-500 outline-none transition-colors min-h-[44px]"
                    required
                  />
                </div>

                {/* Time Slot */}
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-gray-400 mb-2 flex items-center gap-1.5">
                    <Clock size={14} className="text-gold-500" /> Time Slot
                  </label>
                  <select
                    value={formData.timeSlot}
                    onChange={(e) => setFormData({ ...formData, timeSlot: e.target.value })}
                    className="w-full bg-dark-surface border border-white/15 rounded-xl px-4 py-3 text-white text-sm focus:border-gold-500 focus:ring-1 focus:ring-gold-500 outline-none transition-colors min-h-[44px]"
                  >
                    {(reservation.timeSlots || ["06:00 PM"]).map((slot, idx) => (
                      <option key={idx} value={slot} className="bg-dark-card text-white">
                        {slot}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Seating Preference */}
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-gray-400 mb-2">
                    Preference
                  </label>
                  <select
                    value={formData.diningArea}
                    onChange={(e) => setFormData({ ...formData, diningArea: e.target.value })}
                    className="w-full bg-dark-surface border border-white/15 rounded-xl px-4 py-3 text-white text-sm focus:border-gold-500 focus:ring-1 focus:ring-gold-500 outline-none transition-colors min-h-[44px]"
                  >
                    {(reservation.areas || reservation.diningAreas || ["Main Hall"]).map((area, idx) => (
                      <option key={idx} value={area} className="bg-dark-card text-white">
                        {area}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Guest Details */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <input
                  type="text"
                  placeholder="Your Name *"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="bg-dark-surface border border-white/15 rounded-xl px-4 py-3 text-white text-sm focus:border-gold-500 focus:ring-1 focus:ring-gold-500 outline-none transition-colors min-h-[44px]"
                  required
                />
                <input
                  type="email"
                  placeholder="Email Address *"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="bg-dark-surface border border-white/15 rounded-xl px-4 py-3 text-white text-sm focus:border-gold-500 focus:ring-1 focus:ring-gold-500 outline-none transition-colors min-h-[44px]"
                  required
                />
                <input
                  type="tel"
                  placeholder="Phone Number *"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="bg-dark-surface border border-white/15 rounded-xl px-4 py-3 text-white text-sm focus:border-gold-500 focus:ring-1 focus:ring-gold-500 outline-none transition-colors min-h-[44px]"
                  required
                />
              </div>

              {/* Actions */}
              <div className="pt-4 flex flex-wrap items-center justify-between gap-4">
                <Button type="submit" variant="primary">
                  {ctaLabel}
                </Button>

                <div className="flex items-center gap-3">
                  {contact?.phone && (
                    <a
                      href={formatTelLink(contact.phone)}
                      className="inline-flex items-center gap-2 px-4 py-2.5 bg-white/5 border border-white/15 rounded-full text-xs font-semibold text-gray-300 hover:text-white hover:border-white/30 transition-colors min-h-[44px]"
                    >
                      <Phone size={14} className="text-gold-500" /> Call {contact.phone}
                    </a>
                  )}

                  {whatsappNum && (
                    <a
                      href={`https://wa.me/${whatsappNum.replace(/[^0-9]/g, '')}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2.5 bg-emerald-500/15 border border-emerald-500/30 text-emerald-400 rounded-full text-xs font-semibold hover:bg-emerald-500/25 transition-colors min-h-[44px]"
                    >
                      <MessageSquare size={14} /> WhatsApp
                    </a>
                  )}
                </div>
              </div>

              {reservation.notice && (
                <p className="text-xs text-gray-400 text-center pt-2 leading-relaxed">{reservation.notice}</p>
              )}
            </form>
          )}
        </div>
      </div>
    </section>
  );
};
