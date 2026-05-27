import type { Metadata } from 'next';
import { Playfair_Display, Lato } from 'next/font/google';
import './globals.css';
import { CartProvider } from '@/context/CartContext';

const playfair = Playfair_Display({
  variable: '--font-playfair',
  subsets: ['latin'],
  display: 'swap',
});

const lato = Lato({
  variable: '--font-lato',
  subsets: ['latin'],
  weight: ['300', '400', '700', '900'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Lone Star Donuts — Fresh-Baked Daily in Round Rock, TX',
  description:
    'Handcrafted donuts and kolaches made fresh every morning. Visit us in Round Rock, Texas — open daily 6am to 2pm.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${playfair.variable} ${lato.variable}`}>
      <body className="min-h-screen">
        <CartProvider>{children}</CartProvider>
      </body>
    </html>
  );
}
