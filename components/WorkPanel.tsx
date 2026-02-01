export default function WorkPanel() {
  return (
    <section className="flex-shrink-0 w-screen h-screen min-h-screen bg-work snap-start overflow-y-auto overflow-x-hidden panel-scroll">
      <div className="container mx-auto px-8 py-16 text-white">
        {/* Scroll Indicator */}
        <div className="fixed left-4 top-1/2 -translate-y-1/2 flex flex-col gap-2">
          <div className="w-2 h-2 bg-white rounded-full opacity-50"></div>
          <div className="w-2 h-2 bg-white rounded-full"></div>
          <div className="w-2 h-2 bg-white rounded-full opacity-50"></div>
        </div>

        {/* Section 1: Overview */}
        <div className="min-h-screen flex items-center justify-center">
          <div className="max-w-3xl">
            <h2 className="text-6xl font-bold mb-8">Work</h2>
            <p className="text-2xl leading-relaxed">
              Overview section placeholder. Introduction to work experience and projects.
            </p>
          </div>
        </div>

        {/* Section 2: RHYTHM */}
        <div className="min-h-screen flex items-center justify-center">
          <div className="max-w-3xl">
            <h3 className="text-8xl font-bold mb-8">RHYTHM</h3>
            <p className="text-xl leading-relaxed">
              Rhythm Technologies work experience content goes here.
            </p>
          </div>
        </div>

        {/* Section 3: FOOD */}
        <div className="min-h-screen flex items-center justify-center">
          <div className="max-w-3xl">
            <h3 className="text-8xl font-bold mb-8">FOOD</h3>
            <p className="text-xl leading-relaxed">
              Restaurant experience content goes here.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
