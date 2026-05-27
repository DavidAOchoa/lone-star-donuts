'use client';

import { motion } from 'framer-motion';
import { MapPin, Mail } from 'lucide-react';

const schedule = [
  { day: 'Mon – Fri', time: '6:00 AM – 2:00 PM' },
  { day: 'Saturday',  time: '5:30 AM – 1:00 PM' },
  { day: 'Sunday',    time: '7:00 AM – 12:00 PM' },
];

export default function Locations() {
  return (
    <section className="bg-espresso pt-[72px] min-h-screen">
      <div className="mx-auto max-w-6xl px-4 sm:px-8 pb-20">

        {/* Header */}
        <div className="pt-16 mb-16 border-t border-cream/[0.08]">
          <div className="text-[10px] tracking-[.18em] uppercase text-cream/35 mb-1.5">
            Come See Us
          </div>
          <h1 className="font-display text-6xl sm:text-7xl text-cream tracking-[.04em] leading-none">
            FIND US
          </h1>
        </div>

        <div className="grid md:grid-cols-2 gap-6">

          {/* Hours card */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="border border-cream/10 overflow-hidden"
          >
            {/* We're Open banner */}
            <div className="bg-star-red flex items-center justify-between px-8 py-5">
              <span className="font-display text-[1.85rem] tracking-[.1em] text-cream leading-none">
                WE&apos;RE OPEN NOW
              </span>
              <div className="w-3 h-3 rounded-full bg-cream pulse-dot flex-shrink-0" aria-hidden="true" />
            </div>

            {/* Body */}
            <div className="bg-espresso-dark px-8 py-7">
              {/* Today big */}
              <div className="mb-6 pb-6 border-b border-cream/[0.08]">
                <div className="text-[10px] tracking-[.18em] uppercase text-cream/35 mb-2">
                  Today&apos;s Hours
                </div>
                <div className="font-display text-5xl text-cream tracking-[.04em] leading-none">
                  6AM – 2PM
                </div>
                <div className="text-cream/40 text-sm mt-2">Monday – Friday</div>
              </div>

              {/* Full schedule */}
              <div className="space-y-3 mb-6 pb-6 border-b border-cream/[0.08]">
                {schedule.map(({ day, time }) => (
                  <div key={day} className="flex items-baseline justify-between gap-4">
                    <span className="text-cream/45 font-medium">{day}</span>
                    <span className="font-display text-xl tracking-[.06em] text-cream/80">{time}</span>
                  </div>
                ))}
              </div>

              <p className="text-cream/30 text-sm italic">
                * We often sell out on weekends. Come before 10am for the best selection!
              </p>
            </div>
          </motion.div>

          {/* Contact column */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="flex flex-col gap-4"
          >
            {/* Phone — big and prominent */}
            <div className="bg-espresso-dark border border-cream/10 px-8 py-7 flex-1">
              <div className="text-[10px] tracking-[.18em] uppercase text-cream/35 mb-4">
                Give Us a Call
              </div>
              <a
                href="tel:+13615550123"
                className="block font-display text-5xl text-star-amber tracking-[.04em] hover:text-star-red transition-colors leading-none mb-3"
              >
                (361) 555-0123
              </a>
              <p className="text-cream/40 text-sm">
                Box orders, catering, and special requests welcome.
              </p>
            </div>

            {/* Address */}
            <div className="bg-espresso-dark border border-cream/10 px-8 py-6">
              <div className="flex items-start gap-4">
                <MapPin size={22} className="text-star-red mt-0.5 flex-shrink-0" />
                <div>
                  <div className="font-display text-xl text-cream tracking-[.06em] mb-1">
                    OUR LOCATION
                  </div>
                  <address className="not-italic text-cream/55 leading-relaxed">
                    208 E South Main St<br />
                    Flatonia, TX 78941
                  </address>
                  <a
                    href="https://maps.google.com/?q=208+E+South+Main+St,+Flatonia,+TX+78941"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block mt-3 font-bold text-sm tracking-[.06em] uppercase text-star-red hover:underline"
                  >
                    Get Directions →
                  </a>
                </div>
              </div>
            </div>

            {/* Email */}
            <div className="bg-espresso-dark border border-cream/10 px-8 py-5">
              <div className="flex items-center gap-4">
                <Mail size={20} className="text-star-red flex-shrink-0" />
                <div>
                  <div className="text-[10px] tracking-[.14em] uppercase text-cream/35 mb-0.5">Email</div>
                  <a
                    href="mailto:hello@lonestardonuts.com"
                    className="font-bold text-cream/80 hover:text-cream transition-colors"
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
