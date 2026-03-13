import Link from "next/link";
import { posts } from "@/data/posts";
import { EmailCaptureBar } from "@/components/common/EmailCaptureBar";

const categoryLabels: Record<string, string> = {
  film: "Film",
  society: "Society",
  strategy: "Strategy",
  nepal: "Nepal",
  media: "Media",
  astrology: "Astrology",
  ai: "AI & Future",
  "public-notes": "Public Notes",
};

export default function BlogIndexPage() {
  const featured = posts.find((post) => post.featured);
  const rest = posts.filter((post) => post.slug !== featured?.slug);

  return (
    <div className="page-shell space-y-16 pb-24 pt-10 md:space-y-20 md:pt-16">
      <section className="section-shell border-b border-white/10 pb-10 pt-4">
        <p className="text-[0.7rem] uppercase tracking-[0.22em] text-zinc-500">
          Insights & articles
        </p>
        <h1 className="mt-3 text-balance text-3xl font-semibold tracking-tight text-zinc-50 md:text-4xl">
          Notes on film, society, strategy, media, and AI in Nepal.
        </h1>
        <p className="mt-5 max-w-2xl text-sm leading-relaxed text-zinc-300">
          Long-form reflections, essays, and working notes that invite readers
          into the thinking behind films, public work, and AI tools on this
          platform.
        </p>
      </section>

      <section className="section-shell">
        {featured && (
          <article className="mb-10 rounded-3xl border border-white/15 bg-white/[0.04] p-6 text-sm text-zinc-200 md:p-8">
            <p className="text-[0.7rem] uppercase tracking-[0.22em] text-zinc-500">
              Featured
            </p>
            <Link href={`/blog/${featured.slug}`}>
              <h2 className="mt-3 text-lg font-semibold text-zinc-50 md:text-xl">
                {featured.title}
              </h2>
            </Link>
            <p className="mt-2 text-xs uppercase tracking-[0.22em] text-zinc-500">
              {categoryLabels[featured.category]} ·{" "}
              {new Date(featured.publishedAt).toLocaleDateString()}
            </p>
            <p className="mt-3 text-sm leading-relaxed text-zinc-200">
              {featured.excerpt}
            </p>
          </article>
        )}

        <div className="grid gap-4 md:grid-cols-3">
          {rest.map((post) => (
            <article
              key={post.slug}
              className="rounded-2xl border border-white/10 bg-white/[0.03] p-4 text-sm text-zinc-200"
            >
              <p className="text-[0.7rem] uppercase tracking-[0.22em] text-zinc-500">
                {categoryLabels[post.category]} ·{" "}
                {new Date(post.publishedAt).toLocaleDateString()}
              </p>
              <Link href={`/blog/${post.slug}`}>
                <h2 className="mt-3 text-sm font-semibold text-zinc-50">
                  {post.title}
                </h2>
              </Link>
              <p className="mt-2 text-xs leading-relaxed text-zinc-300">
                {post.excerpt}
              </p>
            </article>
          ))}
        </div>
        <div className="mt-10 max-w-xl">
          <EmailCaptureBar
            variant="block"
            title="Get new articles in your inbox"
            subtitle="One email when we publish. Unsubscribe anytime."
          />
        </div>
      </section>
    </div>
  );
}

