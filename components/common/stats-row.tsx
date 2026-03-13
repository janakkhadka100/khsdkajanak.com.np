import type { ImpactHighlight } from "@/data/highlights";

type Props = {
  items: ImpactHighlight[];
};

export function StatsRow({ items }: Props) {
  return (
    <div className="grid gap-4 md:grid-cols-3">
      {items.map((item) => (
        <div
          key={item.id}
          className="rounded-2xl border border-white/12 bg-white/[0.03] p-4"
        >
          <p className="text-xs uppercase tracking-[0.22em] text-zinc-500">
            {item.label}
          </p>
          <p className="mt-2 text-2xl font-semibold text-zinc-50">
            {item.value}
          </p>
          {item.description && (
            <p className="mt-1 text-xs text-zinc-400">{item.description}</p>
          )}
        </div>
      ))}
    </div>
  );
}

