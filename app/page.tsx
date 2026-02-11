import Link from 'next/link';
import ThemeToggle from '@/components/ThemeToggle';

const essays = [
  {
    slug: 'writing-essays',
    title: 'On Writing Essays',
    date: '',
    description: '',
  },
];

export default function Home() {
  return (
    <main className="min-h-screen px-6 py-16">
      <div className="max-w-lg mx-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-12">
          <h1 className="text-4xl font-bold text-accent">Adrian Wu</h1>
          <ThemeToggle />
        </div>

        {/* Bio */}
        <p className="text-lg leading-relaxed mb-16">
          figuring stuff out
        </p>

        {/* Essays */}
        <section className="mb-16">
          <h2 className="text-sm font-mono uppercase tracking-widest text-foreground/50 mb-6">Essays</h2>
          <div className="space-y-4">
            {essays.map((essay) => (
              <Link
                key={essay.slug}
                href={`/essays/${essay.slug}`}
                className="block p-4 -mx-4 rounded-lg hover:bg-foreground/5 transition-colors"
              >
                <div className="flex items-baseline justify-between gap-4 mb-1">
                  <span className="text-lg font-semibold">{essay.title}</span>
                  <span className="text-sm text-foreground/50 shrink-0">{essay.date}</span>
                </div>
                <p className="text-foreground/60 text-sm">{essay.description}</p>
              </Link>
            ))}
          </div>
        </section>

        {/* Links */}
        <section>
          <h2 className="text-sm font-mono uppercase tracking-widest text-foreground/50 mb-4">Links</h2>
          <div className="flex gap-6 text-sm">
            <a href="https://www.linkedin.com/feed/" className="text-foreground/70 hover:text-accent transition-colors" target="_blank" rel="noopener noreferrer">LinkedIn</a>
            <a href="mailto:adrian.wu.atw@gmail.com" className="text-foreground/70 hover:text-accent transition-colors">Email</a>
          </div>
        </section>
      </div>
    </main>
  );
}
