'use client';

import { motion } from 'framer-motion';

export default function Story() {
  return (
    <section id="story" className="py-20 px-4 sm:px-6 bg-cream">
      <div className="mx-auto max-w-6xl">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-xs text-amber font-bold uppercase tracking-widest">
              Our Story
            </span>
            <h2 className="mt-2 font-display font-bold text-4xl sm:text-5xl text-brown leading-tight mb-6">
              Baked with Love Since 1987
            </h2>
            <div className="space-y-5 text-lg text-brown-light leading-relaxed">
              <p>
                Lone Star Donuts started as a small kitchen on the back porch of
                the Martinez family home in Round Rock, Texas. Grandma Rosa's
                secret glazed recipe — still unchanged — drew neighbors from
                three streets over every Saturday morning.
              </p>
              <p>
                By 1991, we opened our first shop on Main Street. Word spread
                the way only good food can: one satisfied customer at a time.
                Three generations later, we&apos;re still using the same
                handwritten recipe cards, the same cast-iron glazing bowls, and
                the same 4am wake-up call.
              </p>
              <p>
                Everything is mixed, shaped, proofed, and fried right here —
                never shipped in, never frozen. If you come after noon, you
                might be too late. That&apos;s a promise we&apos;re proud to keep.
              </p>
            </div>

            <div className="mt-8 flex flex-wrap gap-8">
              {[
                { number: '36+', label: 'Years in business' },
                { number: '3', label: 'Generations of bakers' },
                { number: '4am', label: 'Every single morning' },
              ].map((stat) => (
                <div key={stat.label}>
                  <div className="font-display font-bold text-4xl text-amber">
                    {stat.number}
                  </div>
                  <div className="text-warm-gray font-medium mt-0.5">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Visual */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="relative"
          >
            {/* Main card */}
            <div
              className="rounded-3xl w-full aspect-square flex items-center justify-center text-[120px] shadow-xl"
              style={{
                background:
                  'linear-gradient(135deg, #FFF8DC 0%, #FFE082 50%, #FFC832 100%)',
              }}
              aria-hidden="true"
            >
              🍩
            </div>

            {/* Floating badge */}
            <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl shadow-xl p-5 border border-amber/20">
              <div className="font-display font-bold text-3xl text-amber">
                ⭐ 4.9
              </div>
              <div className="text-brown font-medium text-sm mt-0.5">
                2,400+ happy customers
              </div>
            </div>

            {/* Floating recipe card */}
            <div className="absolute -top-4 -right-4 bg-brown text-cream rounded-2xl shadow-xl p-4 max-w-[160px]">
              <div className="text-2xl mb-1" aria-hidden="true">📜</div>
              <div className="font-bold text-sm">Rosa&apos;s Original</div>
              <div className="text-cream/70 text-xs mt-0.5">Recipe since 1987</div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
