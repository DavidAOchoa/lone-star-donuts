import Link from 'next/link';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-espresso-dark border-t border-cream/[0.08] py-12 px-4 sm:px-8">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 mb-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-2">
              <span className="text-star-red text-xl leading-none" aria-hidden="true">★</span>
              <span className="font-display text-2xl text-cream tracking-[.08em]">
                Lone Star Donuts
              </span>
            </div>
            <p className="text-cream/30 text-sm tracking-wide">
              Flatonia, TX · Est. 1987 · Family-Owned &amp; Operated
            </p>
          </div>

          {/* Nav */}
          <nav className="flex flex-wrap gap-x-8 gap-y-2">
            {[
              { label: 'Menu',      href: '/menu' },
              { label: 'Our Story', href: '/story' },
              { label: 'Find Us',   href: '/locations' },
            ].map(({ label, href }) => (
              <Link
                key={href}
                href={href}
                className="text-cream/45 text-sm font-bold tracking-[.08em] uppercase hover:text-cream transition-colors"
              >
                {label}
              </Link>
            ))}
            <a
              href="tel:+13615550123"
              className="text-cream/45 text-sm font-bold tracking-[.08em] uppercase hover:text-cream transition-colors"
            >
              (361) 555-0123
            </a>
          </nav>
        </div>

        <div className="pt-6 border-t border-cream/[0.06] flex flex-col sm:flex-row items-center justify-between gap-3 text-cream/25 text-sm">
          <p>© {year} Lone Star Donuts. All rights reserved.</p>
          <p>
            Site by{' '}
            <a
              href="https://portfolio-v3-neon-theta.vercel.app"
              target="_blank"
              rel="noopener noreferrer"
              className="text-star-amber/60 hover:text-star-amber transition-colors"
            >
              David Ochoa
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
