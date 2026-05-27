'use client';

import { motion } from 'framer-motion';
import { Plus } from 'lucide-react';
import { useCart } from '@/context/CartContext';
import { MenuItem } from '@/lib/types';

interface DonutCardProps {
  item: MenuItem;
  index: number;
}

export default function DonutCard({ item, index }: DonutCardProps) {
  const { addItem } = useCart();

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.35, delay: index * 0.04 }}
      className="bg-espresso-dark flex flex-col"
    >
      {/* Emoji area */}
      <div
        className="h-36 flex items-center justify-center relative"
        style={{ background: item.gradient }}
      >
        <span className="text-6xl select-none" aria-hidden="true">{item.emoji}</span>
        {item.popular && (
          <span className="absolute top-3 right-3 text-[10px] font-black tracking-[.12em] text-star-amber uppercase">
            ★ Popular
          </span>
        )}
      </div>

      {/* Content */}
      <div className="p-5 flex flex-col flex-1">
        <h3 className="font-display text-[1.4rem] text-cream tracking-[.04em] leading-none mb-2">
          {item.name.toUpperCase()}
        </h3>
        <p className="text-cream/40 text-sm leading-relaxed flex-1 mb-5">
          {item.description}
        </p>
        <div className="flex items-center justify-between">
          <span className="font-display text-3xl text-star-amber tracking-[.02em]">
            ${item.price.toFixed(2)}
          </span>
          <button
            onClick={() => addItem(item)}
            className="flex items-center gap-1.5 border border-cream/20 text-cream/60 font-black text-xs tracking-[.12em] uppercase px-4 py-2.5 hover:border-star-red hover:text-star-red transition-colors"
            aria-label={`Add ${item.name} to order`}
          >
            <Plus size={14} strokeWidth={2.5} />
            ADD
          </button>
        </div>
      </div>
    </motion.div>
  );
}
