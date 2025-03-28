// src/app/home/page.tsx
import { metadata } from './metadata';
import Home from './home/page';
import Section1 from './home/Section1';
import Section2 from './home/Section2';
import Section3 from './home/Section3';
import Section4 from './home/Section4';
import Section5 from './home/Section5';
import Section6 from './home/Section6';

export default function HomePage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#2e026d] to-[#15162c] text-white">
      <Home />
    </main>
  );
}
