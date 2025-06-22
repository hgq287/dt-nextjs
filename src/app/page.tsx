'use client';

import ThemeToggle from '@/components/ui/ThemeToggle';
import { useRouter } from 'next/navigation';

export default function HomePage() {
  const router = useRouter();

  return (
    <main className="container">
      <div className="card">
        <h1 className="title">Welcome to Hg Q. Template</h1>
        <p className="subtitle">A professional starter template for web development.</p>

        <div style={{ display: 'flex', gap: '1rem', marginTop: '2rem', justifyContent: 'center' }}>
          <button className="button" onClick={() => router.push('/signin')}>Sign In</button>
          <button className="button" onClick={() => router.push('/signup')}>Sign Up</button>
        </div>

        <div style={{ marginTop: '2rem', textAlign: 'center' }}>
          <ThemeToggle />
        </div>
      </div>
    </main>
  );
}