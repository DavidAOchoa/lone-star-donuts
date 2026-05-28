'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

const stats = [
  { number: '36+', label: 'Years in Business' },
  { number: '3',   label: 'Generations of Bakers' },
  { number: '4AM', label: 'Every Single Morning' },
];

export default function Story() {
  return (
    <section className="bg-espresso pt-[72px] min-h-screen">
      <div className="mx-auto max-w-6xl px-4 sm:px-8 pb-20">

        {/* Header */}
        <div className="pt-16 mb-16 border-t border-cream/[0.08]">
          <div className="text-[10px] tracking-[.18em] uppercase text-cream/35 mb-1.5">
            About Us
          </div>
          <h1 className="font-display text-6xl sm:text-7xl text-cream tracking-[.04em] leading-none">
            OUR STORY
          </h1>
        </div>

        <div className="grid lg:grid-cols-2 gap-20 items-start">
          {/* Left: bio */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="space-y-6 text-lg text-cream/60 leading-relaxed mb-12">
              <p>
                Lone Star Donuts started as a small kitchen on the back porch of the
                Martinez family home in Flatonia, Texas. Grandma Rosa&apos;s secret glazed
                recipe — still unchanged — drew neighbors from three streets over every
                Saturday morning.
              </p>
              <p>
                By 1991, we opened our first shop on Main Street. Word spread the way
                only good food can: one satisfied customer at a time. Three generations
                later, we&apos;re still using the same handwritten recipe cards, the same
                cast-iron glazing bowls, and the same 4am wake-up call.
              </p>
              <p>
                Everything is mixed, shaped, proofed, and fried right here — never
                shipped in, never frozen. If you come after noon, you might be too
                late. That&apos;s a promise we&apos;re proud to keep.
              </p>
            </div>

            {/* Stats */}
            <div className="border-t border-cream/[0.08]">
              {stats.map(({ number, label }) => (
                <div
                  key={label}
                  className="flex items-baseline gap-6 py-5 border-b border-cream/[0.08]"
                >
                  <div className="font-display text-5xl text-star-amber tracking-[.02em] w-28 flex-shrink-0">
                    {number}
                  </div>
                  <div className="text-cream/50 font-bold text-sm tracking-[.08em] uppercase">
                    {label}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right: visual */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="space-y-3"
          >
            {/* Big feature photo — Flatonia main street */}
            <div className="w-full aspect-[4/3] relative overflow-hidden border border-cream/[0.06]">
              <Image
                src="/images/flatonia1.jpg"
                alt="Downtown Flatonia, Texas — home of Lone Star Donuts since 1987"
                fill
                className="object-cover object-center"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              {/* Subtle dark overlay to keep text legible */}
              <div className="absolute inset-0 bg-espresso/25" />

              {/* Top caption */}
              <div className="absolute top-5 left-6">
                <p className="font-display text-xs tracking-[.2em] text-cream/70">
                  FLATONIA, TEXAS
                </p>
              </div>

              {/* Est. badge */}
              <div className="absolute bottom-6 right-6 border-2 border-star-red px-4 py-2 text-center bg-espresso/75 backdrop-blur-sm">
                <div className="font-display text-xs tracking-[.18em] text-cream/60">EST.</div>
                <div className="font-display text-3xl text-star-red tracking-[.04em] leading-none">1987</div>
                <div className="font-display text-xs tracking-[.14em] text-cream/60">FLATONIA</div>
              </div>
            </div>

            {/* Quote card */}
            <div className="bg-espresso-mid border border-cream/[0.06] px-8 py-6">
              <div className="text-star-amber text-3xl font-display tracking-widest mb-3" aria-hidden="true">
                ★ ★ ★ ★ ★
              </div>
              <p className="text-cream/70 text-base leading-relaxed italic">
                &ldquo;People drive from San Antonio just for Rosa&apos;s glazed.
                Been coming here since I was a kid — nothing&apos;s changed, and
                that&apos;s exactly the point.&rdquo;
              </p>
              <div className="text-cream/35 text-sm mt-3 tracking-[.06em] uppercase font-bold">
                — Local customer, 22 years running
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
