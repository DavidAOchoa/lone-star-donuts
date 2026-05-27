export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-brown text-cream py-12 px-4 sm:px-6">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Brand */}
          <div className="text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start gap-2 mb-2">
              <span className="text-2xl" aria-hidden="true">🍩</span>
              <span className="font-display font-bold text-xl">
                Lone Star Donuts
              </span>
            </div>
            <p className="text-cream/60 text-sm">
              Round Rock, TX · Est. 1987 · Family-Owned &amp; Operated
            </p>
          </div>

          {/* Quick links */}
          <nav className="flex gap-6 text-cream/70 text-sm font-medium">
            <a href="#menu" className="hover:text-amber transition-colors">
              Menu
            </a>
            <a href="#story" className="hover:text-amber transition-colors">
              Our Story
            </a>
            <a href="#locations" className="hover:text-amber transition-colors">
              Find Us
            </a>
            <a
              href="tel:+15125550123"
              className="hover:text-amber transition-colors"
            >
              (512) 555-0123
            </a>
          </nav>
        </div>

        <div className="mt-8 pt-6 border-t border-cream/10 flex flex-col sm:flex-row items-center justify-between gap-3 text-cream/40 text-sm">
          <p>© {year} Lone Star Donuts. All rights reserved.</p>
          <p>
            Site by{' '}
            <a
              href="https://davidochoa.dev"
              target="_blank"
              rel="noopener noreferrer"
              className="text-amber/70 hover:text-amber transition-colors"
            >
              David Ochoa
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
