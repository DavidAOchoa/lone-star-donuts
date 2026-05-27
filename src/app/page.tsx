import Link from 'next/link';
import Hero from '@/components/Hero';
import { ChevronRight } from 'lucide-react';

const quickLinks = [
  {
    href: '/menu',
    emoji: '🍩',
    title: 'OUR MENU',
    desc: 'Browse all our donuts and kolaches — made fresh every morning.',
    cta: 'SEE THE MENU',
  },
  {
    href: '/story',
    emoji: '📖',
    title: 'OUR STORY',
    desc: 'Three generations of the Martinez family, baking since 1987.',
    cta: 'MEET THE FAMILY',
  },
  {
    href: '/locations',
    emoji: '📍',
    title: 'FIND US',
    desc: 'Hours, address, and directions. Open daily 6am – 2pm.',
    cta: 'GET DIRECTIONS',
  },
];

export default function Home() {
  return (
    <>
      <Hero />

      {/* Quick-access section */}
      <section className="bg-espresso-dark border-t border-cream/[0.08]">
        <div className="mx-auto max-w-6xl px-4 sm:px-8 py-16">
          <h2 className="font-display text-4xl text-cream tracking-[.06em] text-center mb-10">
            WHAT ARE YOU LOOKING FOR?
          </h2>

          {/* Cards with 1px gap lines */}
          <div className="grid sm:grid-cols-3 gap-px bg-cream/[0.06]">
            {quickLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="group bg-espresso-dark p-8 flex flex-col hover:bg-espresso transition-colors"
              >
                <span className="text-5xl mb-5 block" aria-hidden="true">
                  {link.emoji}
                </span>
                <h3 className="font-display text-2xl text-cream tracking-[.06em] mb-2">
                  {link.title}
                </h3>
                <p className="text-cream/40 text-sm leading-relaxed mb-6 flex-1">
                  {link.desc}
                </p>
                <span className="inline-flex items-center gap-2 font-display text-lg text-star-red tracking-[.1em] group-hover:gap-3 transition-all">
                  {link.cta}
                  <ChevronRight size={16} strokeWidth={2.5} />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
