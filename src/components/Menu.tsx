'use client';

import { useState } from 'react';
import { menuItems, categoryLabels } from '@/lib/menu';
import { DonutCategory } from '@/lib/types';
import DonutCard from './DonutCard';
import { cn } from '@/lib/cn';

const categories: DonutCategory[] = ['all', 'glazed', 'cake', 'filled', 'specialty', 'kolache'];

export default function Menu() {
  const [active, setActive] = useState<DonutCategory>('all');

  const filtered =
    active === 'all' ? menuItems : menuItems.filter((i) => i.category === active);

  return (
    <section id="menu" className="py-20 px-4 sm:px-6 bg-cream-dark">
      <div className="mx-auto max-w-6xl">
        {/* Section header */}
        <div className="text-center mb-12">
          <span className="text-xs text-amber font-bold uppercase tracking-widest">
            Made Fresh Daily
          </span>
          <h2 className="mt-2 font-display font-bold text-4xl sm:text-5xl text-brown">
            Our Donuts &amp; Kolaches
          </h2>
          <p className="mt-4 text-lg text-warm-gray max-w-xl mx-auto">
            Every item baked fresh in our kitchen before sunrise. Come early —
            we&apos;re sold out by noon most days.
          </p>
        </div>

        {/* Category filter */}
        <div className="flex gap-2 overflow-x-auto pb-2 mb-10 justify-center flex-wrap">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={cn(
                'px-5 py-2.5 rounded-full font-bold text-base transition-colors whitespace-nowrap border-2',
                active === cat
                  ? 'bg-brown text-cream border-brown'
                  : 'bg-white text-brown-light border-amber/20 hover:border-amber hover:text-amber'
              )}
            >
              {categoryLabels[cat]}
            </button>
          ))}
        </div>

        {/* Donut grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filtered.map((item, i) => (
            <DonutCard key={item.id} item={item} index={i} />
          ))}
        </div>

        {/* Order note */}
        <p className="text-center text-warm-gray text-sm mt-10">
          Prices listed per piece. Box orders and catering available —{' '}
          <a href="tel:+15125550123" className="text-amber font-bold hover:underline">
            give us a call!
          </a>
        </p>
      </div>
    </section>
  );
}
