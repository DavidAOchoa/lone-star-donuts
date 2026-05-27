'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Plus, Minus, Trash2, ShoppingBag } from 'lucide-react';
import { useCart } from '@/context/CartContext';

export default function CartDrawer() {
  const { items, count, total, isOpen, closeCart, updateQuantity, removeItem, clearCart } =
    useCart();
  const [placed, setPlaced] = useState(false);

  function handlePlaceOrder() {
    setPlaced(true);
  }

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
            className="fixed inset-0 z-50 bg-brown/40 backdrop-blur-sm"
            aria-hidden="true"
          />

          {/* Drawer */}
          <motion.aside
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', stiffness: 280, damping: 28 }}
            className="fixed top-0 right-0 bottom-0 z-50 w-full max-w-md bg-cream shadow-2xl flex flex-col"
            role="dialog"
            aria-label="Your order"
          >
            {/* Header */}
            <div className="flex items-center justify-between px-6 py-5 border-b-2 border-amber/20">
              <div className="flex items-center gap-3">
                <ShoppingBag size={24} className="text-amber" />
                <h2 className="font-display font-bold text-2xl text-brown">
                  Your Order
                </h2>
                {count > 0 && (
                  <span className="bg-brown text-cream text-sm font-bold px-2.5 py-0.5 rounded-full">
                    {count}
                  </span>
                )}
              </div>
              <button
                onClick={handleClose}
                className="p-2 rounded-full hover:bg-amber/10 text-brown transition-colors"
                aria-label="Close cart"
              >
                <X size={24} />
              </button>
            </div>

            {/* Content */}
            {placed ? (
              /* Order placed confirmation */
              <div className="flex-1 flex flex-col items-center justify-center px-6 text-center">
                <span className="text-7xl mb-6" aria-hidden="true">🎉</span>
                <h3 className="font-display font-bold text-2xl text-brown mb-3">
                  Ready to Checkout!
                </h3>
                <p className="text-warm-gray leading-relaxed mb-6">
                  In your live site, this button connects directly to your
                  online ordering system — Square, Slice, or a custom solution.
                  Customers complete their payment there, securely.
                </p>
                <div className="bg-amber/10 border border-amber/30 rounded-xl p-4 mb-8 text-left w-full">
                  <p className="text-sm font-bold text-amber-dark mb-1">
                    Demo Note
                  </p>
                  <p className="text-sm text-brown-light">
                    This is a preview of what your site could look like.
                    Call us at{' '}
                    <a href="tel:+15125550123" className="font-bold underline">
                      (512) 555-0123
                    </a>{' '}
                    to discuss building your real ordering experience.
                  </p>
                </div>
                <button
                  onClick={handleClose}
                  className="w-full bg-brown text-cream font-bold text-lg py-4 rounded-full hover:bg-amber transition-colors"
                >
                  Got It — Back to Menu
                </button>
              </div>
            ) : items.length === 0 ? (
              /* Empty state */
              <div className="flex-1 flex flex-col items-center justify-center px-6 text-center">
                <span className="text-6xl mb-4" aria-hidden="true">🍩</span>
                <h3 className="font-display font-bold text-xl text-brown mb-2">
                  Your order is empty
                </h3>
                <p className="text-warm-gray mb-6">
                  Add some donuts from our menu and they&apos;ll appear here.
                </p>
                <button
                  onClick={handleClose}
                  className="bg-brown text-cream font-bold px-8 py-3 rounded-full hover:bg-amber transition-colors"
                >
                  Browse Menu
                </button>
              </div>
            ) : (
              <>
                {/* Item list */}
                <div className="flex-1 overflow-y-auto px-6 py-4 space-y-4 scrollbar-thin">
                  {items.map((item) => (
                    <div
                      key={item.id}
                      className="flex items-start gap-4 bg-white rounded-xl p-4 shadow-sm border border-amber/10"
                    >
                      {/* Emoji */}
                      <div
                        className="w-14 h-14 rounded-lg flex items-center justify-center flex-shrink-0 text-3xl"
                        style={{ background: item.gradient }}
                        aria-hidden="true"
                      >
                        {item.emoji}
                      </div>

                      {/* Details */}
                      <div className="flex-1 min-w-0">
                        <p className="font-display font-bold text-brown text-base leading-tight">
                          {item.name}
                        </p>
                        <p className="text-amber font-bold text-sm mt-0.5">
                          ${(item.price * item.quantity).toFixed(2)}
                        </p>

                        {/* Quantity controls */}
                        <div className="flex items-center gap-2 mt-2">
                          <button
                            onClick={() =>
                              updateQuantity(item.id, item.quantity - 1)
                            }
                            className="w-8 h-8 rounded-full bg-cream-dark flex items-center justify-center text-brown hover:bg-amber/20 transition-colors"
                            aria-label={`Remove one ${item.name}`}
                          >
                            <Minus size={14} />
                          </button>
                          <span className="w-6 text-center font-bold text-brown">
                            {item.quantity}
                          </span>
                          <button
                            onClick={() =>
                              updateQuantity(item.id, item.quantity + 1)
                            }
                            className="w-8 h-8 rounded-full bg-cream-dark flex items-center justify-center text-brown hover:bg-amber/20 transition-colors"
                            aria-label={`Add one more ${item.name}`}
                          >
                            <Plus size={14} />
                          </button>
                        </div>
                      </div>

                      {/* Remove */}
                      <button
                        onClick={() => removeItem(item.id)}
                        className="p-1.5 text-warm-gray hover:text-rust transition-colors flex-shrink-0"
                        aria-label={`Remove ${item.name}`}
                      >
                        <Trash2 size={16} />
                      </button>
                    </div>
                  ))}
                </div>

                {/* Footer */}
                <div className="px-6 py-6 border-t-2 border-amber/20 bg-cream space-y-4">
                  <div className="flex items-center justify-between text-lg">
                    <span className="text-warm-gray font-medium">Subtotal</span>
                    <span className="font-display font-bold text-brown text-2xl">
                      ${total.toFixed(2)}
                    </span>
                  </div>
                  <button
                    onClick={handlePlaceOrder}
                    className="w-full bg-amber text-cream font-bold text-xl py-4 rounded-full hover:bg-amber-dark transition-colors shadow-lg"
                  >
                    Place Order →
                  </button>
                  <button
                    onClick={clearCart}
                    className="w-full text-warm-gray text-sm hover:text-rust transition-colors py-1"
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
