import type { Metadata } from 'next';
import { Bebas_Neue, Lato } from 'next/font/google';
import './globals.css';
import { CartProvider } from '@/context/CartContext';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import CartButton from '@/components/CartButton';
import CartDrawer from '@/components/CartDrawer';

const bebasNeue = Bebas_Neue({
  variable: '--font-bebas',
  subsets: ['latin'],
  weight: '400',
  display: 'swap',
});

const lato = Lato({
  variable: '--font-lato',
  subsets: ['latin'],
  weight: ['400', '700', '900'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Lone Star Donuts — Fresh-Baked Daily in Flatonia, TX',
  description:
    'Handcrafted donuts and kolaches made fresh every morning in Flatonia, Texas. Open daily 6am to 2pm.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${bebasNeue.variable} ${lato.variable}`}>
      <body className="min-h-screen flex flex-col bg-espresso">
        <CartProvider>
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
          <CartButton />
          <CartDrawer />
        </CartProvider>
      </body>
    </html>
  );
}
