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
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
      className="bg-white rounded-2xl shadow-md overflow-hidden border border-amber/10 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-200 flex flex-col"
    >
      {/* Card visual */}
      <div
        className="h-40 flex items-center justify-center relative"
        style={{ background: item.gradient }}
      >
        <span className="text-7xl select-none" aria-hidden="true">
          {item.emoji}
        </span>
        {item.popular && (
          <span className="absolute top-3 right-3 bg-rust text-cream text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide">
            Popular
          </span>
        )}
      </div>

      {/* Card content */}
      <div className="p-5 flex flex-col flex-1">
        <h3 className="font-display font-bold text-xl text-brown mb-1.5">
          {item.name}
        </h3>
        <p className="text-warm-gray text-sm leading-relaxed flex-1 mb-4">
          {item.description}
        </p>

        <div className="flex items-center justify-between mt-auto">
          <span className="font-display font-bold text-2xl text-amber">
            ${item.price.toFixed(2)}
          </span>
          <button
            onClick={() => addItem(item)}
            className="flex items-center gap-2 bg-brown text-cream font-bold px-4 py-2.5 rounded-full hover:bg-amber transition-colors text-sm"
            aria-label={`Add ${item.name} to order`}
          >
            <Plus size={16} strokeWidth={2.5} />
            Add to Order
          </button>
        </div>
      </div>
    </motion.div>
  );
}
