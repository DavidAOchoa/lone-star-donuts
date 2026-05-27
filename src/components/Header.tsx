'use client';

import { useState } from 'react';
import { Phone, Menu, X, ShoppingBag } from 'lucide-react';
import { useCart } from '@/context/CartContext';

const navLinks = [
  { label: 'Our Menu', href: '#menu' },
  { label: 'Our Story', href: '#story' },
  { label: 'Find Us', href: '#locations' },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const { count, openCart } = useCart();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-cream border-b-2 border-amber/20 shadow-sm">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2 group">
            <span className="text-3xl" aria-hidden="true">🍩</span>
            <div className="leading-tight">
              <span className="font-display font-bold text-xl text-brown block">
                Lone Star Donuts
              </span>
              <span className="text-xs text-warm-gray tracking-wide">
                Round Rock, TX · Est. 1987
              </span>
            </div>
          </a>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-base font-medium text-brown-light hover:text-amber px-4 py-2 rounded-lg transition-colors hover:bg-amber/10"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Right: phone + cart */}
          <div className="flex items-center gap-3">
            <a
              href="tel:+15125550123"
              className="hidden sm:flex items-center gap-2 bg-amber text-cream px-4 py-2 rounded-full font-bold text-base hover:bg-amber-dark transition-colors"
              aria-label="Call us"
            >
              <Phone size={16} strokeWidth={2.5} />
              <span>(512) 555-0123</span>
            </a>

            <button
              onClick={openCart}
              className="relative p-2.5 rounded-full bg-brown text-cream hover:bg-brown-light transition-colors"
              aria-label={`Open cart, ${count} items`}
            >
              <ShoppingBag size={20} />
              {count > 0 && (
                <span className="absolute -top-1 -right-1 min-w-[20px] h-5 bg-rust text-cream text-xs font-bold rounded-full flex items-center justify-center px-1">
                  {count}
                </span>
              )}
            </button>

            {/* Mobile menu toggle */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="md:hidden p-2 rounded-lg text-brown hover:bg-amber/10 transition-colors"
              aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
            >
              {mobileOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile dropdown */}
        {mobileOpen && (
          <div className="md:hidden border-t border-amber/20 py-4 space-y-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="block text-lg font-medium text-brown-light hover:text-amber px-4 py-3 rounded-lg hover:bg-amber/10 transition-colors"
              >
                {link.label}
              </a>
            ))}
            <a
              href="tel:+15125550123"
              className="flex items-center gap-2 text-lg font-bold text-amber px-4 py-3"
            >
              <Phone size={18} />
              (512) 555-0123
            </a>
          </div>
        )}
      </div>
    </header>
  );
}
