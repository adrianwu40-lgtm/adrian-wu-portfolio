'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

const links = [
  { href: '/', label: 'Home' },
  { href: '/essays', label: 'Essays' },
  { href: '/projects', label: 'Projects' },
];

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <nav className="flex flex-row md:flex-col gap-4 md:gap-3">
      {links.map((link) => {
        const active =
          link.href === '/'
            ? pathname === '/'
            : pathname.startsWith(link.href);

        return (
          <Link
            key={link.href}
            href={link.href}
            className={`text-sm transition-colors ${
              active
                ? 'text-primary font-semibold'
                : 'text-foreground/50 hover:text-foreground'
            }`}
          >
            {link.label}
          </Link>
        );
      })}
    </nav>
  );
}
