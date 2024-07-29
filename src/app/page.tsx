import { PersonAddAlt1 } from '@mui/icons-material';
import Link from 'next/link';
import Home from './home/page';

export const metadata = {
  title: 'Sloane Tailored Ai Platform',
  description: 'Makes Business Easy',
  openGraph: {
    images: [],
  },
};

export default function HomePage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#2e026d] to-[#15162c] text-white">
      <Home />
    </main>
  );
}
