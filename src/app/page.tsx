// src/app/home/page.tsx
import { metadata } from './metadata';
import Home from './home/page';

export default function HomePage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-brand-green">
      <Home />
    </main>
  );
}
