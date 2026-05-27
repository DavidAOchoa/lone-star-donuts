'use client';

import { motion } from 'framer-motion';
import { MapPin, Clock, Phone, Mail } from 'lucide-react';

const hours = [
  { day: 'Monday – Friday', time: '6:00 am – 2:00 pm' },
  { day: 'Saturday', time: '5:30 am – 1:00 pm' },
  { day: 'Sunday', time: '7:00 am – 12:00 pm (noon)' },
];

export default function Locations() {
  return (
    <section id="locations" className="py-20 px-4 sm:px-6 bg-cream-dark">
      <div className="mx-auto max-w-6xl">
        {/* Section header */}
        <div className="text-center mb-14">
          <span className="text-xs text-amber font-bold uppercase tracking-widest">
            Come See Us
          </span>
          <h2 className="mt-2 font-display font-bold text-4xl sm:text-5xl text-brown">
            Find Us &amp; Hours
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Hours card */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-white rounded-3xl p-8 shadow-md border border-amber/10"
          >
            <div className="flex items-center gap-3 mb-7">
              <div className="w-12 h-12 bg-amber/15 rounded-xl flex items-center justify-center">
                <Clock size={24} className="text-amber" />
              </div>
              <h3 className="font-display font-bold text-2xl text-brown">
                Store Hours
              </h3>
            </div>

            <div className="space-y-4">
              {hours.map(({ day, time }) => (
                <div
                  key={day}
                  className="flex items-start justify-between gap-4 py-3 border-b border-amber/10 last:border-0"
                >
                  <span className="font-medium text-brown text-base">{day}</span>
                  <span className="font-bold text-amber text-base text-right">
                    {time}
                  </span>
                </div>
              ))}
            </div>

            <p className="mt-6 text-warm-gray text-sm italic">
              * We often sell out early on weekends. Come before 10am for the
              best selection!
            </p>
          </motion.div>

          {/* Contact + Location card */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="space-y-6"
          >
            {/* Phone — large and prominent */}
            <div className="bg-brown text-cream rounded-3xl p-8 shadow-md">
              <p className="text-cream/70 font-medium mb-2 text-sm uppercase tracking-widest">
                Give us a call
              </p>
              <a
                href="tel:+15125550123"
                className="flex items-center gap-4 group"
              >
                <div className="w-14 h-14 bg-amber/20 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Phone size={28} className="text-amber" />
                </div>
                <span className="font-display font-bold text-4xl text-cream group-hover:text-amber transition-colors">
                  (512) 555-0123
                </span>
              </a>
              <p className="text-cream/60 text-sm mt-4">
                Box orders, catering, and special requests welcome.
              </p>
            </div>

            {/* Address */}
            <div className="bg-white rounded-3xl p-6 shadow-md border border-amber/10">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-amber/15 rounded-xl flex items-center justify-center flex-shrink-0 mt-0.5">
                  <MapPin size={24} className="text-amber" />
                </div>
                <div>
                  <h3 className="font-display font-bold text-xl text-brown mb-1">
                    Our Location
                  </h3>
                  <address className="not-italic text-brown-light text-base leading-relaxed">
                    1423 Round Rock Ave<br />
                    Round Rock, TX 78681
                  </address>
                  <a
                    href="https://maps.google.com/?q=1423+Round+Rock+Ave,+Round+Rock,+TX+78681"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block mt-3 text-amber font-bold text-sm hover:underline"
                  >
                    Get Directions →
                  </a>
                </div>
              </div>
            </div>

            {/* Email */}
            <div className="bg-white rounded-3xl p-6 shadow-md border border-amber/10">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-amber/15 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Mail size={24} className="text-amber" />
                </div>
                <div>
                  <h3 className="font-medium text-warm-gray text-sm mb-0.5">
                    Email Us
                  </h3>
                  <a
                    href="mailto:hello@lonestardonuts.com"
                    className="font-bold text-brown text-base hover:text-amber transition-colors"
                  >
                    hello@lonestardonuts.com
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
