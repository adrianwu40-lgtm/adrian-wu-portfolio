'use client';

const sections = [
  { key: 'experience', label: 'Experience' },
  { key: 'text', label: 'Text' },
  { key: 'acknowledgments', label: 'Acknowledgments' },
];

interface SidebarProps {
  activeSection?: string;
  onSectionChange?: (section: string) => void;
}

export default function Sidebar({ activeSection, onSectionChange }: SidebarProps) {
  return (
    <nav className="flex flex-col gap-3">
      {sections.map((section) => {
        const isActive = activeSection === section.key;

        return (
          <button
            key={section.key}
            onClick={() => onSectionChange?.(section.key)}
            className={`text-left text-sm tracking-wide uppercase transition-colors ${
              isActive
                ? 'text-primary font-semibold'
                : 'text-foreground/50 hover:text-foreground'
            }`}
          >
            {section.label}
          </button>
        );
      })}
    </nav>
  );
}
