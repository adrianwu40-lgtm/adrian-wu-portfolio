import Link from 'next/link';
import { getAllEssays } from '@/lib/essays';
import Sidebar from '@/components/Sidebar';
import { ArrowUpRight } from 'lucide-react';

export default function EssaysPage() {
  const essays = getAllEssays();

  return (
    <main className="min-h-screen px-6 py-16 md:px-12">
      <div className="max-w-3xl mx-auto flex flex-col md:flex-row gap-12 md:gap-20">
        <div className="md:pt-1 shrink-0">
          <Sidebar />
        </div>

        <div className="flex-1">
          <h1 className="font-display text-4xl text-primary mb-10">Essays</h1>

          <div className="space-y-4">
            {essays.map((essay) => (
              <Link
                key={essay.slug}
                href={`/essays/${essay.slug}`}
                className="group block p-4 -mx-4 rounded-xl hover:bg-primary/5 transition-all border border-transparent hover:border-primary/10"
              >
                <div className="flex items-baseline justify-between gap-4 mb-1">
                  <span className="text-lg font-semibold group-hover:text-primary transition-colors">
                    {essay.title}
                  </span>
                  <ArrowUpRight className="w-4 h-4 text-foreground/30 group-hover:text-primary group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all shrink-0" />
                </div>
                <div className="flex items-baseline justify-between gap-4">
                  <p className="text-foreground/60 text-sm">{essay.description}</p>
                  <span className="text-xs text-foreground/40 shrink-0">{essay.date}</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
