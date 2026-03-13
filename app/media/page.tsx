import { mediaItems } from "@/data/media";
import { MediaCard } from "@/components/media/media-card";
import { MediaQuote } from "@/components/media/media-quote";

export default function MediaPage() {
  const featured = mediaItems.filter((m) => m.featured);
  const rest = mediaItems.filter((m) => !m.featured);

  const quoteSource = mediaItems.find((m) => m.quote);

  return (
    <div className="page-shell space-y-16 pb-24 pt-10 md:space-y-20 md:pt-16">
      <section className="section-shell border-b border-white/10 pb-10 pt-4">
        <p className="text-[0.7rem] uppercase tracking-[0.22em] text-zinc-500">
          Media, stages & public appearances
        </p>
        <h1 className="mt-3 text-balance text-3xl font-semibold tracking-tight text-zinc-50 md:text-4xl">
          A public record of conversations, coverage, and programs.
        </h1>
        <p className="mt-5 max-w-2xl text-sm leading-relaxed text-zinc-300">
          This page brings together interviews, festival conversations, television
          programs, speeches, and press mentions in one editorial archive – so
          journalists, collaborators, and audiences can see the work in context.
        </p>
      </section>

      <section className="section-shell">
        {featured.length > 0 && (
          <div className="space-y-6">
            <p className="text-[0.7rem] uppercase tracking-[0.22em] text-zinc-500">
              Featured appearances
            </p>
            <div className="grid gap-5 md:grid-cols-2">
              {featured.map((item) => (
                <MediaCard key={item.id} item={item} />
              ))}
            </div>
          </div>
        )}
      </section>

      <section className="section-shell">
        <div className="grid gap-8 md:grid-cols-[minmax(0,1.7fr)_minmax(0,1.3fr)] md:items-start">
          <div className="space-y-4">
            <p className="text-[0.7rem] uppercase tracking-[0.22em] text-zinc-500">
              Interviews, events & programs
            </p>
            <p className="text-sm leading-relaxed text-zinc-300">
              Below is a growing selection of interviews, on-stage conversations,
              keynotes, festival panels, and community programs connected to
              Janak&apos;s work.
            </p>
            <div className="grid gap-4 md:grid-cols-2">
              {rest.map((item) => (
                <MediaCard key={item.id} item={item} />
              ))}
            </div>
          </div>

          <div className="space-y-4">
            {quoteSource?.quote && (
              <MediaQuote
                quote={quoteSource.quote}
                attribution={`${quoteSource.outlet}, ${new Date(
                  quoteSource.date,
                ).getFullYear()}`}
              />
            )}
            <div className="rounded-3xl border border-white/15 bg-white/[0.03] p-5 text-xs text-zinc-300">
              <p className="text-[0.7rem] uppercase tracking-[0.22em] text-zinc-500">
                For media & speaking invitations
              </p>
              <p className="mt-3">
                For interviews, festival appearances, panels, hosting, or
                editorial collaborations, please use the contact channel and
                select the appropriate inquiry type.
              </p>
              <a
                href="/contact"
                className="mt-3 inline-flex items-center justify-center rounded-full bg-zinc-50 px-4 py-2 text-[0.7rem] font-semibold uppercase tracking-[0.22em] text-black"
              >
                Open media & speaking channel
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

