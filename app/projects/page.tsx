import Sidebar from '@/components/Sidebar';

export default function ProjectsPage() {
  return (
    <main className="min-h-screen px-6 py-16 md:px-12">
      <div className="max-w-3xl mx-auto flex flex-col md:flex-row gap-12 md:gap-20">
        <div className="md:pt-1 shrink-0">
          <Sidebar />
        </div>

        <div className="flex-1">
          <h1 className="font-display text-4xl text-primary mb-10">Projects</h1>

          <p className="text-foreground/60 text-lg">
            Projects coming soon.
          </p>
        </div>
      </div>
    </main>
  );
}
