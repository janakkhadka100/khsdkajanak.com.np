/**
 * Public Record & Media Discourse carousel.
 * Premium editorial slides for homepage.
 */

export type CarouselSlide = {
  id: string;
  tag: string;
  headline: string;
  summary: string;
  imageUrl: string;
  link?: string;
  linkLabel?: string;
};

export const carouselSlides: CarouselSlide[] = [
  {
    id: "visionary-director",
    tag: "Cinematic Narrative",
    headline: "Shaping Nepali Cinema: From '21 Varsha' to Social Dramas",
    summary:
      "Documenting demographic and social realities on screen. Janak Khadka brings the truth of Nepali society to films like '21 Varsha' and 'Fikka'.",
    imageUrl: "/images/janak-khadka/gallery/event-2025-11-12.jpg",
    link: "/projects",
    linkLabel: "Explore films",
  },
  {
    id: "cultural-think-tank",
    tag: "Television & Philosophy",
    headline: "Utopia - Ek Sundar Bhawishya: Bridging Vedic Wisdom and Modern Science",
    summary:
      "National television program exploring the intersection of Eastern philosophy, Sanatan Dharma, and science — direction and presentation.",
    imageUrl: "/images/janak-khadka/gallery/event-2025-10-23a.jpg",
    link: "https://thenepalipost.com/details/35343",
    linkLabel: "Read full article",
  },
  {
    id: "civic-leader",
    tag: "Public Initiatives",
    headline: "Advancing Rural Cinema and National Policies",
    summary:
      "Strategic engagement and leadership on rural cinema culture and film tourism, in collaboration with the Film Development Board.",
    imageUrl: "/images/janak-khadka/gallery/event-2025-12-17.jpg",
    link: "https://risingnepaldaily.com/news/74372",
    linkLabel: "Read full article",
  },
  {
    id: "media-strategist",
    tag: "Economic & Media Discourse",
    headline: "'Competitive Business Benefits Nepal' — A Strategic Perspective",
    summary:
      "Analytical perspective on Nepal's economy, media, and the need for competitive markets.",
    imageUrl: "/images/janak-khadka/gallery/event-2026-01-24a.jpg",
    link: "https://english.headlinenepal.com/details/36137",
    linkLabel: "Read full article",
  },
];
