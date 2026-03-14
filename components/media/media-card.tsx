import type { MediaItem, MediaItemType } from "@/data/media";

const typeLabels: Record<MediaItemType, string> = {
  interview: "Interview",
  event: "Event",
  speech: "Speech",
  program: "Program",
  feature: "Feature",
  "press-mention": "Press",
  panel: "Panel",
};

type Props = {
  item: MediaItem;
};

export function MediaCard({ item }: Props) {
  const date = new Date(item.date).toLocaleDateString();
  const typeLabel = typeLabels[item.type];

  const content = (
    <>
      <div className="space-y-2">
        <p className="text-[0.7rem] uppercase tracking-[0.22em] text-gray-600">
          {typeLabel} · {item.outlet} · {date}
        </p>
        <h3 className="text-sm font-semibold text-gray-900">{item.title}</h3>
        <p className="text-xs leading-relaxed text-gray-700">{item.excerpt}</p>
      </div>
      {item.link && (
        <span className="mt-3 inline-flex items-center text-[0.7rem] font-medium uppercase tracking-[0.18em] text-gray-600 group-hover:text-royal-primary">
          View coverage →
        </span>
      )}
    </>
  );

  if (item.link) {
    return (
      <a
        href={item.link}
        target="_blank"
        rel="noreferrer"
        className="group flex flex-col justify-between rounded-xl border border-gray-200 bg-white shadow-sm p-4 text-sm transition hover:border-gray-300 hover:shadow-md"
      >
        {content}
      </a>
    );
  }

  return (
    <article className="flex flex-col justify-between rounded-xl border border-gray-200 bg-white shadow-sm p-4 text-sm">
      {content}
    </article>
  );
}

