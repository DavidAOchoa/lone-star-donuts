import type { Metadata } from 'next';
import Story from '@/components/Story';

export const metadata: Metadata = {
  title: 'Our Story — Lone Star Donuts',
  description:
    'Three generations of the Martinez family, baking handcrafted donuts in Round Rock, TX since 1987.',
};

export default function StoryPage() {
  return <Story />;
}
