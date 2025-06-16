'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Header() {
  const pathname = usePathname();

  return (
    <header className="flex items-center justify-between p-4 border-b border-gray-200">
      <div className="flex items-center gap-2">
        <Link href="/" className="text-2xl font-black text-black">Mythropic</Link>
      </div>
      <nav className="hidden md:flex gap-6 text-sm font-medium text-gray-700">
        <Link
          href="/solutions"
          className={`hover:underline ${pathname === '/solutions' ? 'underline underline-offset-4 font-semibold text-black' : ''}`}
        >
          Solutions
        </Link>
        <Link
          href="/blogs"
          className={`hover:underline ${pathname === '/blogs' ? 'underline underline-offset-4 font-semibold text-black' : ''}`}
        >
          Blogs
        </Link>
        <Link
          href="/pricing"
          className={`hover:underline ${pathname === '/pricing' ? 'underline underline-offset-4 font-semibold text-black' : ''}`}
        >
          Pricing
        </Link>
        <Link
          href="/contact"
          className={`hover:underline ${pathname === '/contact' ? 'underline underline-offset-4 font-semibold text-black' : ''}`}
        >
          Contact
        </Link>
      </nav>
    </header>
  );
}
