"use client";

import { useState, useCallback, useEffect, useRef } from "react";
import type { PhotoArchiveItem } from "@/data/types";

type Props = {
  photos: PhotoArchiveItem[];
};

export function PhotoGallery({ photos }: Props) {
  const [selected, setSelected] = useState<PhotoArchiveItem | null>(null);
  const dialogRef = useRef<HTMLDivElement>(null);

  const open = useCallback((photo: PhotoArchiveItem) => setSelected(photo), []);
  const close = useCallback(() => setSelected(null), []);

  useEffect(() => {
    if (selected) {
      document.body.style.overflow = "hidden";
      dialogRef.current?.focus();
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [selected]);

  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent) => {
      if (e.key === "Escape") close();
    },
    [close]
  );

  return (
    <>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {photos.map((photo) => (
          <button
            key={photo.id}
            type="button"
            onClick={() => open(photo)}
            className="group relative aspect-[4/3] overflow-hidden rounded-xl border border-gray-200 bg-gray-100 shadow-sm transition hover:border-gray-300 hover:shadow-md focus:outline-none focus:ring-2 focus:ring-royal-primary/30"
          >
            <img
              src={photo.imageUrl}
              alt={photo.alt}
              loading="lazy"
              className="h-full w-full object-cover transition group-hover:scale-[1.02]"
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            />
            {(photo.caption || photo.year) && (
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 to-transparent p-3 text-left">
                <p className="text-xs font-medium text-white">{photo.caption ?? photo.event ?? photo.year}</p>
                {photo.source && (
                  <p className="mt-0.5 text-[0.65rem] text-white/80">{photo.source}</p>
                )}
              </div>
            )}
          </button>
        ))}
      </div>

      {selected && (
        <div
          ref={dialogRef}
          role="dialog"
          aria-modal="true"
          aria-label="Photo lightbox"
          onKeyDown={handleKeyDown}
          tabIndex={-1}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4 outline-none"
          onClick={close}
        >
          <button
            type="button"
            onClick={close}
            className="absolute right-4 top-4 rounded-full bg-white/10 px-3 py-1.5 text-xs font-medium uppercase tracking-wider text-white hover:bg-white/20"
          >
            Close
          </button>
          <div
            className="relative max-h-[85vh] max-w-4xl"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={selected.imageUrl}
              alt={selected.alt}
              className="max-h-[85vh] w-auto rounded-lg object-contain"
            />
            <div className="mt-3 rounded-lg bg-white/5 p-4 text-left text-sm text-white">
              {selected.caption && <p className="font-medium">{selected.caption}</p>}
              <div className="mt-2 flex flex-wrap gap-x-4 gap-y-1 text-xs text-white/80">
                {selected.source && <span>Source: {selected.source}</span>}
                {selected.year && <span>{selected.year}</span>}
                {selected.event && <span>{selected.event}</span>}
                {selected.photographer && <span>Photo: {selected.photographer}</span>}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
