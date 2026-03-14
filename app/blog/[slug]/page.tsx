import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { posts } from "@/data/posts";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";

type Params = {
  slug: string;
};

export function generateStaticParams() {
  return posts.map((post) => ({ slug: post.slug }));
}

export function generateMetadata({ params }: { params: Params }): Metadata {
  const post = posts.find((p) => p.slug === params.slug);
  if (!post) return {};

  return {
    title: post.title,
    description: post.excerpt,
    alternates: { canonical: `/blog/${params.slug}` },
  };
}

export default function BlogPostPage({ params }: { params: Params }) {
  const post = posts.find((p) => p.slug === params.slug);

  if (!post) return notFound();

  const related = posts
    .filter((p) => p.slug !== post.slug)
    .slice(0, 2);

  return (
    <div className="page-shell space-y-12 pb-24 pt-10 md:space-y-16 md:pt-16">
      <article className="section-shell border-b border-gray-200 pb-10 pt-4">
        <Breadcrumbs
          items={[
            { label: "Home", href: "/" },
            { label: "Insights", href: "/blog" },
            { label: post.title },
          ]}
          className="mb-4"
        />
        <Link
          href="/blog"
          className="text-[0.7rem] font-medium uppercase tracking-[0.18em] text-gray-600 hover:text-gray-700"
        >
          ← Back to insights
        </Link>
        <p className="mt-4 text-[0.7rem] uppercase tracking-[0.22em] text-gray-600">
          Insights · {new Date(post.publishedAt).toLocaleDateString()}
        </p>
        <h1 className="mt-3 text-balance text-3xl font-semibold tracking-tight text-gray-900 md:text-4xl">
          {post.title}
        </h1>
        <p className="mt-4 max-w-2xl text-base leading-relaxed text-gray-700">
          {post.excerpt}
        </p>
        <div className="mt-8 max-w-2xl space-y-5 text-[0.95rem] leading-[1.75] text-gray-700">
          {post.body.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
      </article>

      {related.length > 0 && (
        <section className="section-shell border-b-0">
          <p className="text-[0.7rem] uppercase tracking-[0.22em] text-gray-600">
            More from the archive
          </p>
          <div className="mt-4 grid gap-4 sm:grid-cols-2">
            {related.map((p) => (
              <Link
                key={p.slug}
                href={`/blog/${p.slug}`}
                className="group rounded-xl border border-gray-200 bg-white shadow-sm p-4 transition hover:border-gray-300 hover:shadow-md"
              >
                <h2 className="text-sm font-semibold text-gray-900 group-hover:text-gray-900">
                  {p.title}
                </h2>
                <p className="mt-2 text-xs leading-relaxed text-gray-600">
                  {p.excerpt}
                </p>
              </Link>
            ))}
          </div>
          <Link
            href="/blog"
            className="mt-4 inline-flex text-[0.7rem] font-medium uppercase tracking-[0.18em] text-gray-600 hover:text-royal-primary"
          >
            All insights →
          </Link>
        </section>
      )}
    </div>
  );
}

