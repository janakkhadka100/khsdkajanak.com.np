import type { Testimonial } from "@/data/testimonials";

type Props = {
  item: Testimonial;
};

export function TestimonialCard({ item }: Props) {
  return (
    <figure className="rounded-3xl border border-white/15 bg-white/[0.03] p-5 text-sm text-zinc-100">
      <blockquote className="text-sm leading-relaxed text-zinc-50">
        “{item.quote}”
      </blockquote>
      <figcaption className="mt-3 text-xs text-zinc-400">
        <span className="font-medium text-zinc-200">{item.name}</span>
        {item.role && ` · ${item.role}`}
        {item.organization && ` · ${item.organization}`}
      </figcaption>
    </figure>
  );
}

