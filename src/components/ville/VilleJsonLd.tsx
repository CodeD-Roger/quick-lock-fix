import { useEffect } from "react";
import { VilleData } from "@/data/types";

const PHONE = "03 74 47 47 93";

interface Props {
  data: VilleData;
}

const VilleJsonLd = ({ data }: Props) => {
  useEffect(() => {
    // LocalBusiness
    const localBusiness = {
      "@context": "https://schema.org",
      "@type": "Locksmith",
      name: `Albert Serrurerie – ${data.nom}`,
      url: `https://albert-serrurerie.com/${data.slug}`,
      telephone: PHONE,
      address: {
        "@type": "PostalAddress",
        addressLocality: data.nom,
        postalCode: data.codePostal,
        addressRegion: data.region,
        addressCountry: "FR",
      },
      areaServed: [data.nom, ...data.quartiers.slice(0, 5)],
      openingHours: "Mo-Su 00:00-24:00",
      priceRange: "€€",
      image: "https://albert-serrurerie.com/logo.webp",
      description: data.metaDescription,
      aggregateRating: {
        "@type": "AggregateRating",
        ratingValue: "4.8",
        reviewCount: "127",
        bestRating: "5",
      },
    };

    // FAQPage
    const faqPage = {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: data.faq.map((f) => ({
        "@type": "Question",
        name: f.question,
        acceptedAnswer: {
          "@type": "Answer",
          text: f.answer,
        },
      })),
    };

    // BreadcrumbList
    const breadcrumb = {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Accueil",
          item: "https://albert-serrurerie.com/",
        },
        {
          "@type": "ListItem",
          position: 2,
          name: `Serrurier ${data.departement}`,
          item: "https://albert-serrurerie.com/",
        },
        {
          "@type": "ListItem",
          position: 3,
          name: `Serrurier ${data.nom}`,
          item: `https://albert-serrurerie.com/${data.slug}`,
        },
      ],
    };

    const scripts = [localBusiness, faqPage, breadcrumb].map((schema) => {
      const script = document.createElement("script");
      script.type = "application/ld+json";
      script.textContent = JSON.stringify(schema);
      document.head.appendChild(script);
      return script;
    });

    return () => {
      scripts.forEach((s) => s.remove());
    };
  }, [data]);

  return null;
};

export default VilleJsonLd;
