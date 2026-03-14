type Props = {
  quote: string;
  attribution?: string;
};

export function MediaQuote({ quote, attribution }: Props) {
  return (
    <figure className="rounded-xl border border-royal-accent/30 bg-white shadow-sm p-5 text-sm md:p-6">
      <p className="text-[0.7rem] uppercase tracking-[0.22em] text-gray-600">
        From the media
      </p>
      <blockquote className="mt-3 text-sm leading-relaxed text-gray-900">
        {quote}
      </blockquote>
      {attribution && (
        <figcaption className="mt-3 text-xs text-gray-600">
          {attribution}
        </figcaption>
      )}
    </figure>
  );
}

