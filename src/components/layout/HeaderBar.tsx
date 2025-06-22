'use client';
import Link from 'next/link';
import ThemeToggle from '@/components/ui/ThemeToggle';

export default function HeaderBar() {
  return (
    <header className="header">
      <nav className="nav">
        <div className="nav-left">
          <Link href="/" className="logo">Hg Q.</Link>
        </div>
        <div className="nav-right">
          <Link href="/signin" className="nav-link">Sign In</Link>
          <Link href="/signup" className="nav-link">Sign Up</Link>
          <ThemeToggle />
        </div>
      </nav>
    </header>
  );
}