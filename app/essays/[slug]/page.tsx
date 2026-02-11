import Link from 'next/link';
import { getEssayBySlug, getAllEssaySlugs } from '@/lib/essays';

interface EssayPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export default async function EssayPage(props: EssayPageProps) {
  const params = await props.params;
  const essay = await getEssayBySlug(params.slug);

  return (
    <div className="min-h-screen px-6 py-16">
      <div className="max-w-xl mx-auto">
        {/* Back link */}
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-foreground/60 hover:text-accent transition-colors mb-12"
        >
          <svg
            className="w-4 h-4"
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
          Back
        </Link>

        {/* Essay content */}
        <article>
          <h1 className="text-4xl font-bold mb-8">{essay.title}</h1>
          <div
            className="prose prose-lg"
            dangerouslySetInnerHTML={{ __html: essay.contentHtml }}
          />
        </article>
      </div>
    </div>
  );
}

export async function generateStaticParams() {
  const slugs = getAllEssaySlugs();
  return slugs.map((slug) => ({ slug }));
}
