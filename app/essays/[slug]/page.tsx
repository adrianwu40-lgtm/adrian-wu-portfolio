import Link from 'next/link';

interface EssayPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export default async function EssayPage(props: EssayPageProps) {
  const params = await props.params;
  const { slug } = params;

  return (
    <div className="min-h-screen bg-primary">
      <div className="container mx-auto px-8 py-16 max-w-3xl">
        {/* Back link */}
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-gray-700 hover:text-gray-900 mb-8"
        >
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M10 19l-7-7m0 0l7-7m-7 7h18"
            />
          </svg>
          Back to home
        </Link>

        {/* Essay content placeholder */}
        <article className="prose prose-lg max-w-none">
          <h1 className="text-5xl font-bold mb-4">Essay: {slug}</h1>
          <p className="text-gray-600 mb-8">Essay content will go here.</p>
          <div className="space-y-4">
            <p>This is a placeholder for essay content.</p>
            <p>In the future, this will load from markdown files or a CMS.</p>
          </div>
        </article>
      </div>
    </div>
  );
}

// Generate static params for known essays (optional, for static generation)
export async function generateStaticParams() {
  return [
    { slug: 'uiuc-talkshow' },
    { slug: 'learning-curiosity' },
    { slug: 'better-systems' },
  ];
}
