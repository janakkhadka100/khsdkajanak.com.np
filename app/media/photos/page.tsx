import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { PhotoGallery } from "@/components/photos/PhotoGallery";
import { photoArchive, getFeaturedPhotos } from "@/data/photos";

export const metadata: Metadata = {
  title: "Photo Archive",
  description:
    "A curated archive of public photos connected to Janak Khadka — film, media, events, and civic work in Nepal.",
  alternates: { canonical: "/media/photos" },
};

export default function PhotoArchivePage() {
  const featured = getFeaturedPhotos();

  return (
    <div className="page-shell space-y-16 pb-24 pt-10 md:space-y-20 md:pt-16">
      <section className="section-shell border-b border-gray-200 pb-10 pt-4">
        <Breadcrumbs
          items={[
            { label: "Home", href: "/" },
            { label: "Media", href: "/media" },
            { label: "Photo Archive" },
          ]}
          className="mb-4"
        />
        <p className="text-[0.7rem] uppercase tracking-[0.22em] text-gray-600">
          Photo archive
        </p>
        <h1 className="mt-3 text-balance text-3xl font-semibold tracking-tight text-gray-900 md:text-4xl">
          Public images and visual archive
        </h1>
        <p className="mt-5 max-w-2xl text-sm leading-relaxed text-gray-700">
          A growing collection of photos from films, events, programs, and public
          appearances. Import-ready for future additions from public sources.
        </p>
      </section>

      {featured.length > 0 && (
        <section className="section-shell">
          <p className="text-[0.7rem] uppercase tracking-[0.22em] text-gray-600">
            Featured
          </p>
          <div className="mt-6">
            <PhotoGallery photos={featured} />
          </div>
        </section>
      )}

      <section className="section-shell">
        <p className="text-[0.7rem] uppercase tracking-[0.22em] text-gray-600">
          Full archive
        </p>
        <div className="mt-6">
          <PhotoGallery photos={photoArchive} />
        </div>
      </section>

      <section className="section-shell border-b-0">
        <div className="flex flex-wrap gap-4 text-sm">
          <Link
            href="/media"
            className="text-gray-700 underline-offset-4 hover:text-royal-primary hover:underline"
          >
            Media & appearances →
          </Link>
          <Link
            href="/media/archive"
            className="text-gray-700 underline-offset-4 hover:text-royal-primary hover:underline"
          >
            News archive →
          </Link>
          <Link
            href="/profile"
            className="text-gray-700 underline-offset-4 hover:text-royal-primary hover:underline"
          >
            Public profile →
          </Link>
        </div>
      </section>
    </div>
  );
}
