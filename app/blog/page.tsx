import Link from "next/link";
import { posts } from "@/data/posts";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
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
      <section className="section-shell border-b border-gray-200 pb-10 pt-4">
        <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Insights" }]} className="mb-4" />
        <p className="text-[0.7rem] uppercase tracking-[0.22em] text-gray-600">
          Insights & articles
        </p>
        <h1 className="mt-3 text-balance text-3xl font-semibold tracking-tight text-gray-900 md:text-4xl">
          Notes on film, society, strategy, media, and AI in Nepal.
        </h1>
        <p className="mt-5 max-w-2xl text-sm leading-relaxed text-gray-700">
          Long-form reflections, essays, and working notes that invite readers
          into the thinking behind films, public work, and AI tools on this
          platform.
        </p>
      </section>

      <section className="section-shell">
        {featured && (
          <Link href={`/blog/${featured.slug}`} className="block mb-12">
            <article className="group rounded-xl border border-royal-accent/25 bg-white shadow-sm p-6 text-sm transition hover:border-royal-accent/40 hover:shadow-md md:p-8">
              <p className="text-[0.7rem] uppercase tracking-[0.22em] text-gray-600">
                Featured
              </p>
              <h2 className="mt-3 text-lg font-semibold text-gray-900 group-hover:text-gray-900 md:text-xl">
                {featured.title}
              </h2>
              <p className="mt-2 text-xs uppercase tracking-[0.18em] text-gray-600">
                {categoryLabels[featured.category]} ·{" "}
                {new Date(featured.publishedAt).toLocaleDateString()}
              </p>
              <p className="mt-4 text-sm leading-relaxed text-gray-700">
                {featured.excerpt}
              </p>
            </article>
          </Link>
        )}

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {rest.map((post) => (
            <Link key={post.slug} href={`/blog/${post.slug}`} className="block">
              <article className="group h-full rounded-xl border border-gray-200 bg-white shadow-sm p-5 transition hover:border-gray-300 hover:shadow-md">
                <p className="text-[0.7rem] uppercase tracking-[0.22em] text-gray-600">
                  {categoryLabels[post.category]} ·{" "}
                  {new Date(post.publishedAt).toLocaleDateString()}
                </p>
                <h2 className="mt-3 text-sm font-semibold text-gray-900 group-hover:text-gray-900">
                  {post.title}
                </h2>
                <p className="mt-2 text-xs leading-relaxed text-gray-700">
                  {post.excerpt}
                </p>
              </article>
            </Link>
          ))}
        </div>

        <div className="mt-12 flex flex-wrap gap-4 text-[0.7rem] font-medium uppercase tracking-[0.16em]">
          <Link
            href="/projects"
            className="text-gray-600 underline-offset-4 hover:text-royal-primary hover:underline"
          >
            Explore projects →
          </Link>
          <Link
            href="/media"
            className="text-gray-600 underline-offset-4 hover:text-royal-primary hover:underline"
          >
            Media & appearances →
          </Link>
          <Link
            href="/ai-tools"
            className="text-gray-600 underline-offset-4 hover:text-royal-primary hover:underline"
          >
            AI tools →
          </Link>
        </div>

        <div className="mt-10 max-w-xl">
          <EmailCaptureBar
            variant="block"
            title="Dispatches from the Office of Janak Khadka"
            subtitle="Monthly essays, frameworks, and platform updates. No spam."
          />
        </div>
      </section>
    </div>
  );
}

