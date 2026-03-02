import Link from 'next/link';
import { getEssayBySlug, getAllEssaySlugs } from '@/lib/essays';
import Sidebar from '@/components/Sidebar';

interface EssayPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export default async function EssayPage(props: EssayPageProps) {
  const params = await props.params;
  const essay = await getEssayBySlug(params.slug);

  return (
    <main className="min-h-screen px-6 py-16 md:px-12">
      <div className="max-w-3xl mx-auto flex flex-col md:flex-row gap-12 md:gap-20">
        <div className="md:pt-1 shrink-0">
          <Sidebar />
        </div>

        <div className="flex-1">
          <Link
            href="/essays"
            className="inline-flex items-center gap-2 text-foreground/50 hover:text-primary transition-colors mb-8 text-sm"
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
            Back to Essays
          </Link>

          <article>
            <h1 className="font-display text-4xl mb-8">{essay.title}</h1>
            <div
              className="prose prose-lg"
              dangerouslySetInnerHTML={{ __html: essay.contentHtml }}
            />
          </article>
        </div>
      </div>
    </main>
  );
}

export async function generateStaticParams() {
  const slugs = getAllEssaySlugs();
  return slugs.map((slug) => ({ slug }));
}
