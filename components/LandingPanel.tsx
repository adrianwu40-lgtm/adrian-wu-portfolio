export default function LandingPanel() {
  return (
    <section className="flex-shrink-0 w-screen h-screen bg-primary snap-start relative overflow-hidden">
      {/* Top-left text */}
      <div className="absolute top-16 left-16 max-w-md">
        <h1 className="text-6xl leading-tight font-bold text-gray-800">
          I like
          <br />
          learning
          <br />
          about cool
          <br />
          stuff
        </h1>
      </div>

      {/* Bottom-right text */}
      <div className="absolute bottom-16 right-16 text-right">
        <h2 className="text-7xl font-bold text-gray-800">
          Adrian
          <br />
          Wu
        </h2>
      </div>

      {/* Bottom center arrow */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
        <svg
          className="w-8 h-8 text-gray-600"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 14l-7 7m0 0l-7-7m7 7V3"
          />
        </svg>
      </div>
    </section>
  );
}
