export type Testimonial = {
  id: string;
  name: string;
  role: string;
  organization?: string;
  quote: string;
  featured?: boolean;
};

export const testimonials: Testimonial[] = [
  {
    id: "artist-collaborator",
    name: "Artist collaborator (name forthcoming)",
    role: "Filmmaker & collaborator",
    quote:
      "Janak does not treat projects as content. He treats them as long-term relationships with audiences.",
    featured: true,
  },
  {
    id: "community-organizer",
    name: "Community organizer",
    role: "Program partner",
    quote:
      "The way he blends film, discussion, and real community concerns feels rare in our media landscape.",
  },
];

