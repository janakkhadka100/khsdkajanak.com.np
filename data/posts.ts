export type PostCategory =
  | "film"
  | "society"
  | "strategy"
  | "nepal"
  | "media"
  | "astrology"
  | "ai"
  | "public-notes";

export type Post = {
  slug: string;
  title: string;
  category: PostCategory;
  excerpt: string;
  publishedAt: string;
  featured?: boolean;
  body: string[];
};

export const posts: Post[] = [
  {
    slug: "cinema-as-public-memory-nepal",
    title: "Cinema as Public Memory in Nepal",
    category: "film",
    excerpt:
      "Why Nepali films must begin treating ordinary lives as worthy of epic attention — not just as background.",
    publishedAt: "2026-01-15",
    featured: true,
    body: [
      "When audiences remember a decade, they rarely list policy decisions. They remember songs, scenes, scandals, and small stories that captured a feeling.",
      "For Nepal, cinema is not only a product. It is how we remember our own contradictions: migration and stillness, faith and doubt, streets and mountains.",
    ],
  },
  {
    slug: "ai-as-public-utility-in-nepal",
    title: "AI as a Public Utility, Not a Toy",
    category: "ai",
    excerpt:
      "In Nepal, AI becomes serious when it helps people write: letters, speeches, captions, proposals, and notes.",
    publishedAt: "2026-02-02",
    body: [
      "The real gap is not information. It is language. Many people know what they want to say but feel stuck when facing a blank page.",
      "If AI can reduce that friction — in Nepali, for real contexts — it becomes more than a novelty. It becomes infrastructure.",
    ],
  },
  {
    slug: "future-voice-of-nepali-media",
    title: "The Future Voice of Nepali Media",
    category: "media",
    excerpt:
      "We do not need louder media. We need slower, braver, and more structurally honest media.",
    publishedAt: "2026-03-01",
    body: [
      "The next chapter of Nepali media will likely be decided by who can hold both speed and depth together.",
      "This platform is interested in formats that invite citizens to think with, not just react to, what they watch.",
    ],
  },
];

