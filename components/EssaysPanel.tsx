export default function EssaysPanel() {
  const essays = [
    { date: '2025-08-25', title: 'UIUC Talkshow Interview', slug: 'uiuc-talkshow' },
    { date: '2025-07-12', title: 'On Learning and Curiosity', slug: 'learning-curiosity' },
    { date: '2025-06-03', title: 'Building Better Systems', slug: 'better-systems' },
  ];

  return (
    <section className="flex-shrink-0 w-screen h-screen min-h-screen bg-essays snap-start overflow-y-auto overflow-x-hidden panel-scroll">
      <div className="container mx-auto px-8 py-16 flex items-center justify-center min-h-screen">
        {/* Scroll Indicator */}
        <div className="fixed right-4 top-1/2 -translate-y-1/2 flex flex-col gap-2">
          <div className="w-2 h-2 bg-white rounded-full"></div>
          <div className="w-2 h-2 bg-white rounded-full opacity-50"></div>
          <div className="w-2 h-2 bg-white rounded-full opacity-50"></div>
        </div>

        {/* Content Card - 3/5 width */}
        <div className="w-3/5 bg-white rounded-lg shadow-2xl p-12">
          {/* Header with underline accent */}
          <div className="mb-12">
            <h2 className="text-7xl font-bold text-gray-800 mb-2">Attack</h2>
            <div className="w-32 h-2 bg-essays"></div>
          </div>

          {/* Essay List */}
          <div className="space-y-6">
            {essays.map((essay) => (
              <a
                key={essay.slug}
                href={`/essays/${essay.slug}`}
                className="block group"
              >
                <div className="flex items-baseline gap-4 text-gray-700 hover:text-essays transition-colors">
                  <span className="text-sm font-mono">{essay.date}</span>
                  <span className="text-xl font-semibold">{essay.title}</span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
