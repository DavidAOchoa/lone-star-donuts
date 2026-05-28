'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';

const TICKER_ITEMS = [
  { label: 'FRESH BAKED DAILY', mobile: true },
  { label: 'OPEN 6AM – 2PM',    mobile: true },
  { label: 'FLATONIA, TX',      mobile: true },
  { label: 'EST. 1987',         mobile: false },
  { label: 'KOLACHES TOO',      mobile: false },
  { label: 'FAMILY OWNED',      mobile: false },
];

function isOpenNow(): boolean {
  const now = new Date();
  const day = now.getDay();
  const mins = now.getHours() * 60 + now.getMinutes();
  if (day === 0) return mins >= 420 && mins < 720;   // Sun 7am–12pm
  if (day === 6) return mins >= 330 && mins < 780;   // Sat 5:30am–1pm
  return mins >= 360 && mins < 840;                  // Mon–Fri 6am–2pm
}

function todayHours(): { time: string; label: string } {
  const day = new Date().getDay();
  if (day === 0) return { time: '7AM – 12PM', label: 'Sunday' };
  if (day === 6) return { time: '5:30AM – 1PM', label: 'Saturday' };
  return { time: '6AM – 2PM', label: 'Monday – Friday' };
}

export default function Hero() {
  const open = isOpenNow();
  const hours = todayHours();

  return (
    <section className="pt-[72px] bg-espresso">
      {/* Ticker */}
      <div className="bg-star-red flex justify-center overflow-hidden py-[9px]">
        <div className="flex items-center justify-center flex-wrap gap-x-10 gap-y-1 px-6 font-display text-sm tracking-[.14em] text-cream text-center">
          {TICKER_ITEMS.map((item) => (
            <span key={item.label} className={item.mobile ? 'whitespace-nowrap' : 'whitespace-nowrap hidden sm:inline'}>
              ★ {item.label}
            </span>
          ))}
        </div>
      </div>

      {/* Hero grid */}
      <div className="mx-auto max-w-6xl px-6 sm:px-8 py-12 lg:py-20 grid grid-cols-1 lg:grid-cols-[3fr_2fr] gap-10 lg:gap-16 items-start lg:items-center relative overflow-hidden">

        {/* Background star watermark */}
        <div
          className="absolute -right-10 -bottom-10 text-star-red/[0.04] pointer-events-none select-none leading-none"
          style={{ fontSize: '500px', fontFamily: 'sans-serif' }}
          aria-hidden="true"
        >★</div>

        {/* LEFT: Headline */}
        <div className="relative z-10">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-3 mb-7"
          >
            <div className="h-[2px] w-10 bg-star-red flex-shrink-0" />
            <span className="text-xs text-star-red font-black tracking-[.2em] uppercase">
              Flatonia&apos;s Original Since 1987
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-display text-cream leading-[.95] tracking-[.02em] mb-7"
            style={{ fontSize: 'clamp(72px, 9vw, 108px)' }}
          >
            FRESH<br />EVERY<br />
            <span className="text-star-amber">MORNING.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="text-cream/55 text-lg leading-relaxed mb-11 max-w-md"
          >
            Handcrafted donuts and kolaches, made from scratch before sunrise.
            Classic glazed. Texas honey butter. Pecan praline.
            Come early — we sell out.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.35 }}
            className="flex gap-4 flex-wrap"
          >
            <Link
              href="/menu"
              className="bg-star-red text-cream font-display text-2xl tracking-[.08em] px-10 py-4 hover:bg-red-700 transition-colors"
            >
              VIEW MENU
            </Link>
            <Link
              href="/locations"
              className="border-2 border-cream/25 text-cream font-display text-2xl tracking-[.08em] px-10 py-4 hover:border-cream/60 transition-colors"
            >
              FIND US
            </Link>
          </motion.div>
        </div>

        {/* RIGHT: Open Now panel */}
        <motion.div
          initial={{ opacity: 0, x: 24 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative z-10 border border-cream/10"
        >
          {/* Banner */}
          <div
            className={`flex items-center justify-between px-7 py-4 ${
              open ? 'bg-star-red' : 'bg-espresso-mid border-b border-cream/10'
            }`}
          >
            <span className="font-display text-[1.75rem] tracking-[.1em] text-cream leading-none">
              {open ? "WE'RE OPEN NOW" : 'CURRENTLY CLOSED'}
            </span>
            {open && (
              <div
                className="w-3 h-3 rounded-full bg-cream pulse-dot flex-shrink-0"
                aria-hidden="true"
              />
            )}
          </div>

          {/* Body */}
          <div className="bg-espresso-dark px-7 py-6">
            {/* Today */}
            <div className="mb-5 pb-5 border-b border-cream/[0.08]">
              <div className="text-[10px] tracking-[.18em] uppercase text-cream/35 mb-2">
                Today&apos;s Hours
              </div>
              <div className="font-display text-5xl text-cream tracking-[.04em] leading-none">
                {hours.time}
              </div>
              <div className="text-cream/40 text-sm mt-2">{hours.label}</div>
            </div>

            {/* Weekly schedule */}
            <div className="space-y-2.5 mb-5 pb-5 border-b border-cream/[0.08]">
              {[
                { day: 'Mon – Fri', time: '6AM – 2PM' },
                { day: 'Saturday',  time: '5:30AM – 1PM' },
                { day: 'Sunday',    time: '7AM – 12PM' },
              ].map(({ day, time }) => (
                <div key={day} className="flex justify-between items-baseline">
                  <span className="text-cream/45 text-sm">{day}</span>
                  <span className="font-display text-lg tracking-[.06em] text-cream/75">{time}</span>
                </div>
              ))}
            </div>

            {/* Phone */}
            <a
              href="tel:+13615550123"
              className="flex items-center justify-between bg-star-amber/10 border border-star-amber/25 px-5 py-3.5 hover:bg-star-amber/15 transition-colors"
            >
              <div>
                <div className="text-[10px] tracking-[.14em] uppercase text-cream/35 mb-0.5">
                  Call Us
                </div>
                <div className="font-display text-2xl tracking-[.06em] text-star-amber">
                  (361) 555-0123
                </div>
              </div>
              <span className="text-xl" aria-hidden="true">📞</span>
            </a>
          </div>
        </motion.div>
      </div>

      {/* Full-width photo strip */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        className="relative w-full h-[260px] sm:h-[380px] lg:h-[460px] overflow-hidden"
      >
        <Image
          src="/images/donut1.jpg"
          alt="Fresh glazed donuts from Lone Star Donuts, Flatonia TX"
          fill
          className="object-cover object-[center_60%]"
          sizes="100vw"
          priority
        />
        {/* Gradient fade into the section above and below */}
        <div className="absolute inset-0 bg-gradient-to-b from-espresso via-transparent to-espresso" />
        {/* Subtle red vignette on sides */}
        <div className="absolute inset-0 bg-gradient-to-r from-espresso/50 via-transparent to-espresso/50" />
        {/* Centered text overlay */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center">
            <p className="font-display text-cream/90 tracking-[.2em] text-sm sm:text-base drop-shadow-lg">
              ★ &nbsp; MADE FROM SCRATCH BEFORE SUNRISE &nbsp; ★
            </p>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
