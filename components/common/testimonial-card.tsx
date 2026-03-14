import type { Testimonial } from "@/data/testimonials";

type Props = {
  item: Testimonial;
};

export function TestimonialCard({ item }: Props) {
  return (
    <figure className="rounded-3xl border border-gray-200 bg-white shadow-sm p-5 text-sm text-gray-900">
      <blockquote className="text-sm leading-relaxed text-zinc-50">
        “{item.quote}”
      </blockquote>
      <figcaption className="mt-3 text-xs text-gray-600">
        <span className="font-medium text-gray-700">{item.name}</span>
        {item.role && ` · ${item.role}`}
        {item.organization && ` · ${item.organization}`}
      </figcaption>
    </figure>
  );
}

