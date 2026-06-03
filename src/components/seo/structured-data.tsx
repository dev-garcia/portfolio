import { profile } from "@/data/portfolio/profile";
import { absoluteUrl, site } from "@/data/site";

const structuredData = [
  {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": absoluteUrl("/#person"),
    name: profile.name,
    jobTitle: "Desenvolvedor Full Stack",
    description: site.description,
    email: `mailto:${profile.email}`,
    image: absoluteUrl(profile.photoSrc),
    url: absoluteUrl("/"),
    sameAs: [profile.links.linkedin, profile.links.github],
    address: {
      "@type": "PostalAddress",
      addressLocality: "Manaus",
      addressRegion: "AM",
      addressCountry: "BR",
    },
    knowsAbout: [
      "Backend",
      "APIs",
      "Integrações",
      "React",
      "Next.js",
      "TypeScript",
      "Node.js",
      "PostgreSQL",
    ],
  },
  {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": absoluteUrl("/#website"),
    name: site.name,
    description: site.description,
    inLanguage: site.language,
    url: absoluteUrl("/"),
    author: {
      "@id": absoluteUrl("/#person"),
    },
  },
  {
    "@context": "https://schema.org",
    "@type": "ProfilePage",
    "@id": absoluteUrl("/#profile-page"),
    name: site.title,
    description: site.description,
    inLanguage: site.language,
    url: absoluteUrl("/"),
    mainEntity: {
      "@id": absoluteUrl("/#person"),
    },
  },
];

export function StructuredData() {
  return (
    <script type="application/ld+json">
      {JSON.stringify(structuredData).replaceAll("<", "\\u003c")}
    </script>
  );
}
