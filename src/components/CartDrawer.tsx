'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Plus, Minus, Trash2, ShoppingBag } from 'lucide-react';
import { useCart } from '@/context/CartContext';

export default function CartDrawer() {
  const { items, count, total, isOpen, closeCart, updateQuantity, removeItem, clearCart } = useCart();
  const [placed, setPlaced] = useState(false);

  function handleClose() {
    setPlaced(false);
    closeCart();
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleClose}
            className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm"
            aria-hidden="true"
          />

          {/* Drawer */}
          <motion.aside
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', stiffness: 280, damping: 28 }}
            className="fixed top-0 right-0 bottom-0 z-50 w-full max-w-md bg-espresso-dark border-l border-cream/10 flex flex-col"
            role="dialog"
            aria-label="Your order"
          >
            {/* Header */}
            <div className="flex items-center justify-between px-6 py-5 border-b border-cream/[0.08]">
              <div className="flex items-center gap-3">
                <ShoppingBag size={22} className="text-star-red" />
                <span className="font-display text-2xl text-cream tracking-[.08em]">
                  YOUR ORDER
                </span>
                {count > 0 && (
                  <span className="bg-star-red text-cream text-sm font-bold px-2.5 py-0.5 rounded-full">
                    {count}
                  </span>
                )}
              </div>
              <button
                onClick={handleClose}
                className="p-2 text-cream/40 hover:text-cream transition-colors"
                aria-label="Close cart"
              >
                <X size={24} />
              </button>
            </div>

            {/* Content */}
            {placed ? (
              <div className="flex-1 flex flex-col items-center justify-center px-8 text-center">
                <span className="text-7xl mb-6" aria-hidden="true">🤠</span>
                <h3 className="font-display text-3xl text-cream tracking-[.08em] mb-3">
                  READY TO CHECKOUT!
                </h3>
                <p className="text-cream/55 leading-relaxed mb-6">
                  In your live site, this button connects directly to your online ordering
                  system — Square, Toast, or a custom solution. Customers complete their
                  payment there, securely.
                </p>
                <div className="bg-star-amber/10 border border-star-amber/25 px-5 py-4 mb-8 text-left w-full">
                  <p className="text-xs font-bold text-star-amber tracking-[.1em] uppercase mb-1">
                    Demo Note
                  </p>
                  <p className="text-sm text-cream/55">
                    This is a preview of what your site could look like. Call{' '}
                    <a href="tel:+13615550123" className="text-star-amber font-bold">(361) 555-0123</a>{' '}
                    to discuss setting up real online ordering.
                  </p>
                </div>
                <button
                  onClick={handleClose}
                  className="w-full bg-star-red text-cream font-display text-xl tracking-[.08em] py-4 hover:bg-red-700 transition-colors"
                >
                  BACK TO MENU
                </button>
              </div>
            ) : items.length === 0 ? (
              <div className="flex-1 flex flex-col items-center justify-center px-8 text-center">
                <span className="text-6xl mb-4" aria-hidden="true">🍩</span>
                <h3 className="font-display text-2xl text-cream tracking-[.08em] mb-2">
                  YOUR ORDER IS EMPTY
                </h3>
                <p className="text-cream/40 mb-6">Add some donuts from our menu.</p>
                <button
                  onClick={handleClose}
                  className="bg-star-red text-cream font-display text-xl tracking-[.08em] px-8 py-3 hover:bg-red-700 transition-colors"
                >
                  BROWSE MENU
                </button>
              </div>
            ) : (
              <>
                {/* Item list */}
                <div className="flex-1 overflow-y-auto px-6 py-4 space-y-3 scrollbar-thin">
                  {items.map((item) => (
                    <div
                      key={item.id}
                      className="flex items-start gap-4 bg-espresso border border-cream/[0.06] p-4"
                    >
                      {/* Emoji */}
                      <div
                        className="w-14 h-14 flex items-center justify-center flex-shrink-0 text-3xl"
                        style={{ background: item.gradient }}
                        aria-hidden="true"
                      >
                        {item.emoji}
                      </div>

                      {/* Details */}
                      <div className="flex-1 min-w-0">
                        <p className="font-display text-base tracking-[.04em] text-cream leading-none mb-1">
                          {item.name.toUpperCase()}
                        </p>
                        <p className="text-star-amber font-display text-lg tracking-[.02em]">
                          ${(item.price * item.quantity).toFixed(2)}
                        </p>

                        {/* Qty controls */}
                        <div className="flex items-center gap-2 mt-2">
                          <button
                            onClick={() => updateQuantity(item.id, item.quantity - 1)}
                            className="w-7 h-7 border border-cream/20 flex items-center justify-center text-cream/60 hover:border-star-red hover:text-star-red transition-colors"
                            aria-label={`Remove one ${item.name}`}
                          >
                            <Minus size={12} />
                          </button>
                          <span className="w-6 text-center font-bold text-cream text-sm">
                            {item.quantity}
                          </span>
                          <button
                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                            className="w-7 h-7 border border-cream/20 flex items-center justify-center text-cream/60 hover:border-star-red hover:text-star-red transition-colors"
                            aria-label={`Add one more ${item.name}`}
                          >
                            <Plus size={12} />
                          </button>
                        </div>
                      </div>

                      <button
                        onClick={() => removeItem(item.id)}
                        className="p-1 text-cream/25 hover:text-star-red transition-colors flex-shrink-0"
                        aria-label={`Remove ${item.name}`}
                      >
                        <Trash2 size={15} />
                      </button>
                    </div>
                  ))}
                </div>

                {/* Footer */}
                <div className="px-6 py-6 border-t border-cream/[0.08] space-y-4">
                  <div className="flex items-baseline justify-between">
                    <span className="text-cream/45 font-bold text-sm tracking-[.08em] uppercase">Subtotal</span>
                    <span className="font-display text-3xl text-cream tracking-[.02em]">
                      ${total.toFixed(2)}
                    </span>
                  </div>
                  <button
                    onClick={() => setPlaced(true)}
                    className="w-full bg-star-red text-cream font-display text-2xl tracking-[.08em] py-4 hover:bg-red-700 transition-colors"
                  >
                    PLACE ORDER →
                  </button>
                  <button
                    onClick={clearCart}
                    className="w-full text-cream/30 text-xs tracking-[.1em] uppercase hover:text-star-red transition-colors py-1"
                  >
                    Clear order
                  </button>
                </div>
              </>
            )}
          </motion.aside>
        </>
      )}
    </AnimatePresence>
  );
}
