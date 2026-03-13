import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { posts } from "@/data/posts";

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
    title: `${post.title} · Janak Khadka`,
    description: post.excerpt,
  };
}

export default function BlogPostPage({ params }: { params: Params }) {
  const post = posts.find((p) => p.slug === params.slug);

  if (!post) return notFound();

  return (
    <div className="page-shell space-y-10 pb-24 pt-10 md:space-y-16 md:pt-16">
      <article className="section-shell border-b border-white/10 pb-10 pt-4">
        <p className="text-[0.7rem] uppercase tracking-[0.22em] text-zinc-500">
          Insights · {new Date(post.publishedAt).toLocaleDateString()}
        </p>
        <h1 className="mt-3 text-balance text-3xl font-semibold tracking-tight text-zinc-50 md:text-4xl">
          {post.title}
        </h1>
        <p className="mt-3 max-w-2xl text-sm leading-relaxed text-zinc-300">
          {post.excerpt}
        </p>
        <div className="mt-6 space-y-4 text-sm leading-relaxed text-zinc-200">
          {post.body.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
      </article>
    </div>
  );
}

