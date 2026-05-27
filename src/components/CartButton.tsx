'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { ShoppingBag } from 'lucide-react';
import { useCart } from '@/context/CartContext';

export default function CartButton() {
  const { count, total, openCart } = useCart();

  return (
    <AnimatePresence>
      {count > 0 && (
        <motion.button
          initial={{ opacity: 0, y: 24, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 24, scale: 0.9 }}
          transition={{ type: 'spring', stiffness: 300, damping: 24 }}
          onClick={openCart}
          className="fixed bottom-6 right-6 z-40 flex items-center gap-3 bg-star-red text-cream px-5 py-3.5 hover:bg-red-700 transition-colors shadow-xl font-display tracking-[.06em] text-xl"
          aria-label={`Open cart: ${count} items, $${total.toFixed(2)}`}
        >
          <div className="relative">
            <ShoppingBag size={22} />
            <span className="absolute -top-2 -right-2 min-w-[18px] h-[18px] bg-cream text-espresso text-[10px] font-black rounded-full flex items-center justify-center px-1">
              {count}
            </span>
          </div>
          {count} ITEM{count !== 1 ? 'S' : ''} · ${total.toFixed(2)}
        </motion.button>
      )}
    </AnimatePresence>
  );
}
