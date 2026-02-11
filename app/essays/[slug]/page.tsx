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
          <h1 className="text-4xl font-bold mb-8">On Writing Essays</h1>
          <div className="space-y-5 text-lg leading-relaxed">
            <p>I started reading &ldquo;successful smart guy in tech&rdquo; blogs last year after chatting with Geoff Challen, my CS professor at the time. That sort got me sucked into that side of the internet &mdash; Paul Graham, Dwarkesh&apos;s podcast &mdash; and it&apos;s been cool to hear the personal thoughts of these people separate from noise associated with their work. Since then, I&apos;ve been tinkering with the idea of writing some essays of my own. I liked writing in high school English and I&apos;ve been looking to expand my digital presence, so it seemed like a good fit.</p>

            <p>The thing is, this is a different type of writing. It&apos;s much easier to write in English class within the rails of a designated prompt; I can&apos;t exactly write as though I&apos;m an authority figure either &mdash; I&apos;m 19! So if I&apos;m not writing essays for class, and I&apos;m not a &ldquo;successful smart guy in tech&rdquo;, what am I doing? Here&apos;s where I&apos;ve landed:</p>

            <p>I use essays as a <em>tool for learning, remembering, and networking</em>.</p>

            <ol className="list-decimal pl-6 space-y-1">
              <li>Learn deeply about an idea and refine my personal take on it</li>
              <li>Remember those ideas so I don&apos;t lose them in an increasingly attention-demanding landscape</li>
              <li>Network by putting my ideas out in the world, hoping to find eyeballs of interesting and interested people</li>
            </ol>

            <p>Writing is not a medium to publicize my already existing thoughts, but a collaborative tool in which my ideas grow and come into focus. If I haven&apos;t gained something after writing an essay, I&apos;ve failed.</p>

            <h3 className="text-2xl font-bold pt-4">Find my based takes</h3>

            <p>I think lots of things are really cool: restaurants, volleyball, conducting, etc. On top of that, I think the coolest people in these fields are always the ones with really angular, opinionated ideas. Whether I agree or disagree, it&apos;s always interesting to hear nuanced ideas that someone prides themself on.</p>

            <p>Therefore, I want to develop my own angular takes that I can feel pride in &mdash; and I think that&apos;s just a more fun way to think. I&apos;ve found that writing not only helps me have an end goal for focused learning, it also helps me pin my ideas down and examine them more closely. It&apos;s like passing a demi-glace through a sieve: all of the impure chunks and cloudiness are pulled out by the requisite logical correctness of a good essay.</p>

            <p>I don&apos;t want to restrict that amazing utility simply to academic thinking. It can be applied to anything that is worth thinking about, whether it be deciding whether or not to switch positions on my volleyball team or articulating anxieties I&apos;m working on in my relationship. As a result, you won&apos;t really see a specific genre of things I write about.</p>

            <p>My essays are quite literally &ldquo;what&apos;s on my mind&rdquo;. My process generally works like this:</p>

            <ol className="list-decimal pl-6 space-y-1">
              <li>I think about something</li>
              <li>If it&apos;s worth thinking more about I&apos;ll write it down in my notes app.</li>
              <li>If I keep thinking about it, or it keeps showing up in my life, or it is just REALLY cool, then I&apos;ll jot more concrete notes</li>
              <li>I keep on poking at it until an essay comes out or I lose interest. If it gets boring, it&apos;s either not an interesting enough idea or I&apos;m not at the right time yet.</li>
            </ol>

            <p>Without fail, everything I write about is durable enough to hold my attention span enough to emerge as an essay into the world. That&apos;s pretty awesome! I hope you think these topics are as cool as I do.</p>

            <h3 className="text-2xl font-bold pt-4">I hate forgetting things</h3>

            <p>I&apos;ve been journaling pretty constantly for at least 4 years now: hour-long voice memos, huge Notion docs, handwritten pocket notebooks. I know that even if I think something is cool now, my attention will soon be captured by something else and I&apos;ll forget that interest. That idea of loss irks me.</p>

            <p>But my thoughts, like my relationships, are limited by their ability to be sustained. It doesn&apos;t matter if a friendship is amazing if it isn&apos;t consistently tended to; sooner or later our lives will drift us apart. Important things need to be nurtured with regular time, energy, and attention &mdash; and these things are limited.</p>

            <p>So what I really mean is this: <strong>I hate forgetting <em>important</em> things</strong>. Ideas come and go, but the ones that are really powerful and can be mined sustainably are the ones I can&apos;t let go of. That&apos;s where essays come in. As I said above, I won&apos;t even get to writing an essay unless an idea has captured my attention with both breadth and depth, so they also serve to record my most important thoughts.</p>

            <h3 className="text-2xl font-bold pt-4">Are you still here? Then this is for you!</h3>

            <p>Whether you read or just scrolled down, it makes me happy you&apos;ve made it this far. <em>I want to talk to you</em>. I&apos;m at the stage in my life where I&apos;m always eager to meet new people and learn new things. My hope is that creating these branches of my person will bring them into my circle.</p>

            <p>If you offer advice, I will <em>always</em> listen and try to genuinely understand it. If you&apos;re wondering what we could talk about, I have a page listing many of the things I love. If there&apos;s something in the essay that resonates with you, something you disagree with, or you just want to chat, please find me at <a href="mailto:adrian.wu.atw@gmail.com" className="text-accent hover:underline">adrian.wu.atw@gmail.com</a></p>
          </div>
        </article>
      </div>
    </div>
  );
}

export async function generateStaticParams() {
  return [
    { slug: 'writing-essays' },
  ];
}
