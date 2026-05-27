import type { Metadata } from 'next';
import Locations from '@/components/Locations';

export const metadata: Metadata = {
  title: 'Find Us — Lone Star Donuts',
  description:
    'Lone Star Donuts is located at 1423 Round Rock Ave, Round Rock, TX. Open daily 6am–2pm. Call (512) 555-0123.',
};

export default function LocationsPage() {
  return <Locations />;
}
