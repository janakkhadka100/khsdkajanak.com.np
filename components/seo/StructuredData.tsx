const BASE = "https://khadkajanak.com.np";

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  url: BASE,
  name: "Janak Khadka",
  description:
    "The cinematic, AI-powered public ecosystem of filmmaker, strategist, writer, and media personality Janak Khadka from Nepal. Film, civic discourse, AI tools.",
};

const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Janak Khadka",
  url: BASE,
  jobTitle: "Director, Civic Strategist, Cultural Architect",
  description:
    "Filmmaker, strategist, writer, and public thinker from Nepal. Building a cinematic, civic, and AI-powered public ecosystem.",
};

export function StructuredData() {
  const scripts = [
    { id: "website-schema", data: websiteSchema },
    { id: "person-schema", data: personSchema },
  ];

  return (
    <>
      {scripts.map(({ id, data }) => (
        <script
          key={id}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
        />
      ))}
    </>
  );
}
