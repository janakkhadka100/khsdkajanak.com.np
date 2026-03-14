# Data architecture

Content uses a single-source model. Add items to canonical sources; derived layers stay in sync.

## Canonical sources (add items here)

| File | Content | Used by |
|------|---------|---------|
| `media.ts` | Media appearances, interviews, events | Media page, **news archive** |
| `projects.ts` | Projects and initiatives | Projects page, profile, impact |
| `bio.ts` | Biography, multiIdentity, timeline, quote | About, **profile** |

## Derived layers (no manual duplication)

| File | Derives from | Purpose |
|------|--------------|---------|
| `news.ts` | `media.ts` | News archive; `newsOverlays` for url/tags |
| `profile.ts` | `bio.ts`, `projects.ts` | Profile summary and bio blocks |
| `photos.ts` | `media.ts` | Photo seed; add to `photoArchive` or `curatedPhotos` |

## Extending content

- **New media item** → add to `mediaItems` → appears on Media page and News archive
- **New project** → add to `projects` → appears on Projects, profile roles
- **New photo** → push to `photoArchive` or `curatedPhotos` → same `PhotoArchiveItem` shape
- **News-specific metadata** (url, tags) → add to `newsOverlays` in `news.ts`, keyed by media id

## Aligned (same initiative names, manual sync)

- `timelineMedia.ts` — aligns with `bio.timeline` + projects
- `impact.ts` — aligns with `projects`, `initiatives.ts`
