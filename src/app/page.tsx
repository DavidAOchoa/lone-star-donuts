import Link from 'next/link';
import Hero from '@/components/Hero';
import { ChevronRight } from 'lucide-react';

const quickLinks = [
  {
    href: '/menu',
    emoji: '🍩',
    title: 'Our Menu',
    desc: 'Browse all our donuts and kolaches — made fresh every morning.',
    cta: 'See the Menu',
  },
  {
    href: '/story',
    emoji: '📖',
    title: 'Our Story',
    desc: 'Three generations of the Martinez family, baking since 1987.',
    cta: 'Meet the Family',
  },
  {
    href: '/locations',
    emoji: '📍',
    title: 'Find Us',
    desc: 'Hours, address, and directions. Open daily 6am – 2pm.',
    cta: 'Get Directions',
  },
];

export default function Home() {
  return (
    <>
      <Hero />

      {/* Quick-access cards */}
      <section className="py-16 px-4 sm:px-6 bg-cream-dark">
        <div className="mx-auto max-w-5xl">
          <h2 className="font-display font-bold text-3xl text-brown text-center mb-10">
            What are you looking for?
          </h2>
          <div className="grid sm:grid-cols-3 gap-6">
            {quickLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="group bg-white rounded-2xl p-7 shadow-md border-2 border-transparent hover:border-amber/40 hover:shadow-xl transition-all flex flex-col"
              >
                <span className="text-5xl mb-5 block" aria-hidden="true">
                  {link.emoji}
                </span>
                <h3 className="font-display font-bold text-2xl text-brown mb-2">
                  {link.title}
                </h3>
                <p className="text-warm-gray leading-relaxed mb-6 flex-1">
                  {link.desc}
                </p>
                <span className="inline-flex items-center gap-2 text-amber font-bold text-base group-hover:gap-3 transition-all">
                  {link.cta}
                  <ChevronRight size={18} strokeWidth={2.5} />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
