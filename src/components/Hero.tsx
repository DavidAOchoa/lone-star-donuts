'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ChevronRight, Clock, MapPin } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Warm background */}
      <div
        className="absolute inset-0 -z-10"
        style={{
          background:
            'radial-gradient(ellipse 80% 60% at 50% 40%, #FFF3CD 0%, #FDE9B8 40%, #F5D896 100%)',
        }}
      />

      {/* Decorative donut rings */}
      <div
        className="absolute top-24 right-8 text-[160px] opacity-10 select-none pointer-events-none hidden lg:block"
        aria-hidden="true"
        style={{ filter: 'blur(2px)' }}
      >
        🍩
      </div>
      <div
        className="absolute bottom-16 left-8 text-[120px] opacity-10 select-none pointer-events-none hidden lg:block"
        aria-hidden="true"
        style={{ transform: 'rotate(-15deg)', filter: 'blur(2px)' }}
      >
        🍩
      </div>

      <div className="mx-auto max-w-6xl px-4 sm:px-6 w-full py-16">
        <div className="max-w-3xl">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 bg-amber/15 border border-amber/30 rounded-full px-4 py-2 mb-8"
          >
            <span className="text-lg" aria-hidden="true">⭐</span>
            <span className="text-amber-dark font-bold text-sm tracking-wide uppercase">
              Family-Owned Since 1987
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-display font-bold text-brown leading-tight mb-6"
            style={{ fontSize: 'clamp(2.5rem, 7vw, 5rem)', lineHeight: 1.15 }}
          >
            Handcrafted Donuts,{' '}
            <span className="text-amber">Fresh Every Morning.</span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-brown-light leading-relaxed mb-10 max-w-xl"
          >
            From classic glazed to Texas pecan praline, every donut is made from
            scratch with love — just like they always have been.
          </motion.p>

          {/* Info pills */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-wrap gap-4 mb-10"
          >
            <div className="flex items-center gap-2 bg-white/70 rounded-full px-4 py-2 text-brown font-medium shadow-sm">
              <Clock size={18} className="text-amber" />
              <span>Open Daily · 6am – 2pm</span>
            </div>
            <div className="flex items-center gap-2 bg-white/70 rounded-full px-4 py-2 text-brown font-medium shadow-sm">
              <MapPin size={18} className="text-amber" />
              <span>Round Rock, TX</span>
            </div>
          </motion.div>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <Link
              href="/menu"
              className="inline-flex items-center justify-center gap-2 bg-brown text-cream text-lg font-bold px-8 py-4 rounded-full hover:bg-brown-light transition-colors shadow-lg"
            >
              View Our Menu
              <ChevronRight size={20} strokeWidth={2.5} />
            </Link>
            <Link
              href="/locations"
              className="inline-flex items-center justify-center gap-2 border-2 border-brown text-brown text-lg font-bold px-8 py-4 rounded-full hover:bg-brown hover:text-cream transition-colors"
            >
              Find Us
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
