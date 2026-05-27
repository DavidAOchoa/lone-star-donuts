import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Menu from '@/components/Menu';
import Story from '@/components/Story';
import Locations from '@/components/Locations';
import Footer from '@/components/Footer';
import CartButton from '@/components/CartButton';
import CartDrawer from '@/components/CartDrawer';

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Menu />
        <Story />
        <Locations />
      </main>
      <Footer />
      <CartButton />
      <CartDrawer />
    </>
  );
}
