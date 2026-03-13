import type { MediaItem } from "@/data/media";

type Props = {
  item: MediaItem;
};

export function MediaCard({ item }: Props) {
  const date = new Date(item.date).toLocaleDateString();

  return (
    <article className="flex flex-col justify-between rounded-2xl border border-white/12 bg-white/[0.03] p-4 text-sm text-zinc-100">
      <div className="space-y-2">
        <p className="text-[0.7rem] uppercase tracking-[0.22em] text-zinc-400">
          {item.outlet} · {date}
        </p>
        <h3 className="text-sm font-semibold text-zinc-50">{item.title}</h3>
        <p className="text-xs leading-relaxed text-zinc-300">{item.excerpt}</p>
      </div>
      {item.link && (
        <a
          href={item.link}
          target="_blank"
          rel="noreferrer"
          className="mt-3 inline-flex w-max items-center text-[0.7rem] font-medium uppercase tracking-[0.22em] text-zinc-300 underline-offset-4 hover:text-zinc-50 hover:underline"
        >
          View coverage
        </a>
      )}
    </article>
  );
}

