'use client';

const links = [
  { href: '#experience', label: 'Experience' },
  { href: '#text', label: 'Text' },
  { href: '#restaurants', label: 'Restaurants' },
];

interface SidebarProps {
  activeSection?: string;
}

export default function Sidebar({ activeSection }: SidebarProps) {
  return (
    <nav className="flex flex-col gap-3">
      {links.map((link) => {
        const isActive = activeSection === link.href.replace('#', '');

        return (
          <a
            key={link.href}
            href={link.href}
            className={`text-sm tracking-wide uppercase transition-colors ${
              isActive
                ? 'text-primary font-semibold'
                : 'text-foreground/50 hover:text-foreground'
            }`}
          >
            {link.label}
          </a>
        );
      })}
    </nav>
  );
}
