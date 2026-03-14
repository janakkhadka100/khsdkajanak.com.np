import type { NewsArticle } from "@/data/types";

type Props = {
  article: NewsArticle;
};

const categoryLabels: Record<string, string> = {
  interview: "Interview",
  feature: "Feature",
  press: "Press",
  event: "Event",
  speech: "Speech",
  program: "Program",
  panel: "Panel",
  other: "Coverage",
};

export function NewsCard({ article }: Props) {
  const date = new Date(article.publicationDate).toLocaleDateString("en-NP", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
  const categoryLabel = categoryLabels[article.category] ?? article.category;

  const content = (
    <>
      <div className="space-y-2">
        <p className="text-[0.7rem] uppercase tracking-[0.22em] text-gray-600">
          {categoryLabel} · {article.publication} · {date}
        </p>
        <h3 className="text-sm font-semibold text-gray-900">{article.title}</h3>
        <p className="text-xs leading-relaxed text-gray-700">{article.summary}</p>
      </div>
      {article.url && (
        <span className="mt-3 inline-flex items-center text-[0.7rem] font-medium uppercase tracking-[0.18em] text-gray-600 group-hover:text-royal-primary">
          Read article →
        </span>
      )}
    </>
  );

  if (article.url && !article.url.startsWith("#")) {
    return (
      <a
        href={article.url}
        target="_blank"
        rel="noreferrer"
        className="group flex flex-col justify-between rounded-xl border border-gray-200 bg-white p-4 shadow-sm transition hover:border-gray-300 hover:shadow-md"
      >
        {content}
      </a>
    );
  }

  return (
    <article className="flex flex-col justify-between rounded-xl border border-gray-200 bg-white p-4 shadow-sm">
      {content}
    </article>
  );
}
