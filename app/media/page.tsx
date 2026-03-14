import Link from "next/link";
import { mediaItems } from "@/data/media";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { MediaCard } from "@/components/media/media-card";
import { MediaQuote } from "@/components/media/media-quote";

export default function MediaPage() {
  const featured = mediaItems.filter((m) => m.featured);
  const rest = mediaItems.filter((m) => !m.featured);

  const quoteSource = mediaItems.find((m) => m.quote);

  return (
    <div className="page-shell space-y-16 pb-24 pt-10 md:space-y-20 md:pt-16">
      <section className="section-shell border-b border-gray-200 pb-10 pt-4">
        <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Media" }]} className="mb-4" />
        <p className="text-[0.7rem] uppercase tracking-[0.22em] text-gray-600">
          Media, stages & public appearances
        </p>
        <h1 className="mt-3 text-balance text-3xl font-semibold tracking-tight text-gray-900 md:text-4xl">
          A public record of conversations, coverage, and programs.
        </h1>
        <p className="mt-5 max-w-2xl text-sm leading-relaxed text-gray-700">
          This page brings together interviews, festival conversations, television
          programs, speeches, and press mentions in one editorial archive – so
          journalists, collaborators, and audiences can see the work in context.
        </p>
      </section>

      <section className="section-shell">
        {featured.length > 0 && (
          <div className="space-y-6">
            <p className="text-[0.7rem] uppercase tracking-[0.22em] text-gray-600">
              Featured appearances
            </p>
            <div className="grid gap-5 sm:grid-cols-2">
              {featured.map((item) => (
                <MediaCard key={item.id} item={item} />
              ))}
            </div>
          </div>
        )}
      </section>

      <section className="section-shell">
        <div className="grid gap-10 md:grid-cols-[minmax(0,1.7fr)_minmax(0,1.3fr)] md:items-start">
          <div className="space-y-5">
            <p className="text-[0.7rem] uppercase tracking-[0.22em] text-gray-600">
              Interviews, events & programs
            </p>
            <p className="text-sm leading-relaxed text-gray-700">
              A growing selection of interviews, on-stage conversations,
              keynotes, festival panels, and community programs connected to
              Janak&apos;s work.
            </p>
            <div className="grid gap-4 sm:grid-cols-2">
              {rest.map((item) => (
                <MediaCard key={item.id} item={item} />
              ))}
            </div>

            <div className="flex flex-wrap gap-4 pt-2 text-[0.7rem] font-medium uppercase tracking-[0.16em]">
              <Link
                href="/media/archive"
                className="text-gray-600 underline-offset-4 hover:text-royal-primary hover:underline"
              >
                News archive →
              </Link>
              <Link
                href="/media/photos"
                className="text-gray-600 underline-offset-4 hover:text-royal-primary hover:underline"
              >
                Photo archive →
              </Link>
              <Link
                href="/timeline"
                className="text-gray-600 underline-offset-4 hover:text-royal-primary hover:underline"
              >
                Timeline →
              </Link>
              <Link
                href="/blog"
                className="text-gray-600 underline-offset-4 hover:text-royal-primary hover:underline"
              >
                Read insights →
              </Link>
              <Link
                href="/projects"
                className="text-gray-600 underline-offset-4 hover:text-royal-primary hover:underline"
              >
                Explore projects →
              </Link>
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
            <div className="rounded-xl border border-gray-200 bg-white shadow-sm p-5 text-xs text-gray-700">
              <p className="text-[0.7rem] uppercase tracking-[0.22em] text-gray-600">
                For media & speaking invitations
              </p>
              <p className="mt-3">
                For interviews, festival appearances, panels, hosting, or
                editorial collaborations, please use the contact channel and
                select the appropriate inquiry type.
              </p>
              <Link
                href="/contact"
                className="mt-3 inline-flex items-center justify-center rounded-full bg-royal-primary px-4 py-2 text-[0.7rem] font-semibold uppercase tracking-[0.22em] text-white"
              >
                Open media & speaking channel
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

