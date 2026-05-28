'use client';

import { useState } from 'react';
import Image from 'next/image';
import { menuItems, categoryLabels } from '@/lib/menu';
import { DonutCategory } from '@/lib/types';
import DonutCard from './DonutCard';
import { cn } from '@/lib/cn';

const categories: DonutCategory[] = ['all', 'glazed', 'cake', 'filled', 'specialty', 'kolache'];

export default function Menu() {
  const [active, setActive] = useState<DonutCategory>('all');
  const filtered = active === 'all' ? menuItems : menuItems.filter((i) => i.category === active);

  return (
    <section className="bg-espresso pt-[72px] min-h-screen">
      <div className="mx-auto max-w-6xl px-4 sm:px-8 pb-20">

        {/* Section header */}
        <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-6 pt-16 mb-8 border-t border-cream/[0.08]">
          <div>
            <div className="text-[10px] tracking-[.18em] uppercase text-cream/35 mb-1.5">
              Made Fresh Daily
            </div>
            <h1 className="font-display text-6xl sm:text-7xl text-cream tracking-[.04em] leading-none">
              OUR MENU
            </h1>
          </div>

          {/* Category tabs */}
          <div className="flex flex-wrap">
            {categories.map((cat, i) => (
              <button
                key={cat}
                onClick={() => setActive(cat)}
                className={cn(
                  'font-display text-base tracking-[.1em] px-5 py-2.5 border border-cream/15 transition-colors',
                  i !== 0 && '-ml-px',
                  active === cat
                    ? 'bg-star-red text-cream border-star-red z-10 relative'
                    : 'text-cream/50 hover:text-cream hover:border-cream/40'
                )}
              >
                {categoryLabels[cat].toUpperCase()}
              </button>
            ))}
          </div>
        </div>

        {/* Photo banner */}
        <div className="relative w-full h-48 sm:h-64 overflow-hidden border border-cream/[0.06] mb-10">
          <Image
            src="/images/donut2.jpg"
            alt="Assorted fresh donuts at Lone Star Donuts"
            fill
            className="object-cover object-[center_40%]"
            sizes="(max-width: 1280px) 100vw, 1152px"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-espresso via-espresso/30 to-transparent" />
          <div className="absolute inset-0 flex flex-col justify-center pl-8 sm:pl-12">
            <p className="font-display text-star-amber tracking-[.18em] text-xs sm:text-sm mb-1">
              BAKED FRESH DAILY
            </p>
            <p className="font-display text-cream leading-none tracking-[.04em]"
              style={{ fontSize: 'clamp(28px, 4vw, 52px)' }}>
              SOMETHING FOR<br />EVERYONE.
            </p>
          </div>
        </div>

        {/* Card grid — 1px gaps using bg trick */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-px bg-cream/[0.06]">
          {filtered.map((item, i) => (
            <DonutCard key={item.id} item={item} index={i} />
          ))}
        </div>

        <p className="text-cream/30 text-sm mt-8 tracking-wide">
          Box orders and catering available —{' '}
          <a href="tel:+13615550123" className="text-star-amber hover:underline font-bold">
            give us a call.
          </a>
        </p>
      </div>
    </section>
  );
}
