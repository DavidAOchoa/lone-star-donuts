import type { Metadata } from 'next';
import Menu from '@/components/Menu';

export const metadata: Metadata = {
  title: 'Our Menu — Lone Star Donuts',
  description:
    'Fresh donuts and kolaches made every morning. Browse glazed, cake, filled, specialty, and kolache options.',
};

export default function MenuPage() {
  return <Menu />;
}
