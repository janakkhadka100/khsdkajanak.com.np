import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getToolLandingBySlug, toolLandingSlugs } from "@/data/toolLandings";
import { ToolLandingLayout } from "@/components/tools/ToolLandingLayout";

type Params = { slug: string };

export function generateStaticParams() {
  return toolLandingSlugs.map((slug) => ({ slug }));
}

export function generateMetadata({ params }: { params: Params }): Metadata {
  const meta = getToolLandingBySlug(params.slug);
  if (!meta) return { title: "Tool | Janak Khadka" };
  const title = meta.seoTitle.replace(/\s*\|\s*Janak Khadka\s*$/, "");
  return {
    title,
    description: meta.seoDescription,
    alternates: { canonical: `/tools/${params.slug}` },
    openGraph: {
      title: meta.seoTitle,
      description: meta.seoDescription,
    },
  };
}

export default function ToolLandingPage({ params }: { params: Params }) {
  const meta = getToolLandingBySlug(params.slug);
  if (!meta) return notFound();
  return <ToolLandingLayout meta={meta} pageSlug={params.slug} />;
}
