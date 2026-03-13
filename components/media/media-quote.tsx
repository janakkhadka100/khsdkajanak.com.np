type Props = {
  quote: string;
  attribution?: string;
};

export function MediaQuote({ quote, attribution }: Props) {
  return (
    <figure className="rounded-3xl border border-white/15 bg-white/[0.03] p-5 text-sm text-zinc-100 md:p-6">
      <p className="text-[0.7rem] uppercase tracking-[0.22em] text-zinc-400">
        From the media
      </p>
      <blockquote className="mt-3 text-sm leading-relaxed text-zinc-50">
        {quote}
      </blockquote>
      {attribution && (
        <figcaption className="mt-2 text-xs text-zinc-400">
          {attribution}
        </figcaption>
      )}
    </figure>
  );
}

