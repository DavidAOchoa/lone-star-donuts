'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, ShoppingBag } from 'lucide-react';
import { useCart } from '@/context/CartContext';
import { cn } from '@/lib/cn';

const navLinks = [
  { label: 'Menu', href: '/menu' },
  { label: 'Our Story', href: '/story' },
  { label: 'Find Us', href: '/locations' },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const { count, openCart } = useCart();
  const pathname = usePathname();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-espresso border-b border-cream/[0.08]">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="flex items-center justify-between h-[72px]">

          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <span className="text-star-red text-2xl leading-none" aria-hidden="true">★</span>
            <div className="leading-tight">
              <div className="font-display text-2xl text-cream tracking-[.08em] leading-none">
                Lone Star Donuts
              </div>
              <div className="text-[10px] text-cream/40 tracking-[.14em] uppercase mt-0.5">
                Flatonia, TX · Est. 1987
              </div>
            </div>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-10">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  'font-bold text-sm tracking-[.1em] uppercase transition-colors',
                  pathname === link.href
                    ? 'text-star-red'
                    : 'text-cream/60 hover:text-cream'
                )}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Right: phone + cart */}
          <div className="flex items-center gap-3">
            <a
              href="tel:+13615550123"
              className="hidden sm:block border-2 border-star-red text-cream font-display text-xl tracking-[.1em] px-5 py-2 hover:bg-star-red transition-colors"
              aria-label="Call us at (361) 555-0123"
            >
              (361) 555-0123
            </a>

            <button
              onClick={openCart}
              className="relative p-2.5 border border-cream/20 text-cream hover:border-cream/50 transition-colors"
              aria-label={`Open cart, ${count} items`}
            >
              <ShoppingBag size={20} />
              {count > 0 && (
                <span className="absolute -top-1.5 -right-1.5 min-w-[20px] h-5 bg-star-red text-cream text-xs font-bold rounded-full flex items-center justify-center px-1">
                  {count}
                </span>
              )}
            </button>

            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="md:hidden p-2 text-cream/60 hover:text-cream transition-colors"
              aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
            >
              {mobileOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile dropdown */}
        {mobileOpen && (
          <div className="md:hidden border-t border-cream/[0.08] py-4 space-y-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className={cn(
                  'block font-bold text-sm tracking-[.1em] uppercase px-2 py-3 transition-colors',
                  pathname === link.href ? 'text-star-red' : 'text-cream/60 hover:text-cream'
                )}
              >
                {link.label}
              </Link>
            ))}
            <a
              href="tel:+13615550123"
              className="block font-display text-2xl text-star-amber tracking-[.06em] px-2 py-2"
            >
              (361) 555-0123
            </a>
          </div>
        )}
      </div>
    </header>
  );
}
