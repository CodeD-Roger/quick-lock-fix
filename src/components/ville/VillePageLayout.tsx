import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { VilleData } from "@/data/types";
import VilleJsonLd from "./VilleJsonLd";
import VilleHeader from "./VilleHeader";
import VilleBreadcrumb from "./VilleBreadcrumb";
import VilleHero from "./VilleHero";
import VilleInterventions from "./VilleInterventions";
import VilleSeoBlock from "./VilleSeoBlock";
import VilleTarifs from "./VilleTarifs";
import VilleAvis from "./VilleAvis";
import VilleFaq from "./VilleFaq";
import VilleMap from "./VilleMap";
import VilleMaillage from "./VilleMaillage";
import VilleCta from "./VilleCta";
import VilleFooter from "./VilleFooter";
import VilleStickyCta from "./VilleStickyCta";

gsap.registerPlugin(ScrollTrigger);

const VillePageLayout = ({ data }: { data: VilleData }) => {
  const mainRef = useRef<HTMLDivElement>(null);

  // Injection dynamique des balises SEO dans <head>
  useEffect(() => {
    document.title = data.metaTitle;

    const setMeta = (name: string, content: string) => {
      let el = document.querySelector(`meta[name="${name}"]`);
      if (!el) {
        el = document.createElement("meta");
        el.setAttribute("name", name);
        document.head.appendChild(el);
      }
      el.setAttribute("content", content);
    };

    setMeta("description", data.metaDescription);
    setMeta("robots", "index, follow");

    let canonical = document.querySelector('link[rel="canonical"]') as HTMLLinkElement;
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.rel = "canonical";
      document.head.appendChild(canonical);
    }
    canonical.href = `https://albert-serrurerie.com/${data.slug}`;

    return () => {
      document.title = "Albert Serrurerie — Serrurier d'urgence 24h/24";
    };
  }, [data]);

  // Animations GSAP au scroll
  useEffect(() => {
    if (!mainRef.current) return;
    const ctx = gsap.context(() => {
      gsap.from(".ville-hero-anim", {
        y: 40,
        opacity: 0,
        duration: 0.8,
        stagger: 0.1,
        ease: "power3.out",
      });

      mainRef.current!.querySelectorAll("section").forEach((section) => {
        gsap.from(section, {
          scrollTrigger: {
            trigger: section,
            start: "top 88%",
            once: true,
          },
          y: 30,
          opacity: 0,
          duration: 0.7,
          ease: "power3.out",
        });
      });
    }, mainRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={mainRef} className="min-h-screen bg-white text-[#1a2c4e] overflow-x-hidden">
      {/* JSON-LD : LocalBusiness + FAQPage + BreadcrumbList */}
      <VilleJsonLd data={data} />
      {/* Header sticky avec numéro */}
      <VilleHeader />
      {/* Breadcrumb : Accueil > Serrurier 68 > Serrurier [Ville] */}
      <VilleBreadcrumb data={data} />
      {/* Hero H1 + badge 30 min + CTA orange */}
      <VilleHero data={data} />
      {/* Grille 5 prestations */}
      <VilleInterventions data={data} />
      {/* Bloc SEO 1 */}
      <VilleSeoBlock
        id="seo-block-1"
        title={`Votre serrurier de confiance à ${data.nom}`}
        content={data.seoBlock1}
      />
      {/* Tableau tarifs */}
      <VilleTarifs data={data} />
      {/* Bloc SEO 2 */}
      <VilleSeoBlock
        id="seo-block-2"
        title={`Pourquoi choisir Albert Serrurerie à ${data.nom} ?`}
        content={data.seoBlock2}
      />
      {/* Avis Google 5 étoiles */}
      <VilleAvis data={data} />
      {/* FAQ Accordion 8 questions */}
      <VilleFaq data={data} />
      {/* Google Maps iframe */}
      <VilleMap data={data} />
      {/* Maillage interne villes voisines */}
      <VilleMaillage data={data} />
      {/* CTA final */}
      <VilleCta data={data} />
      <VilleFooter />
      {/* Bouton sticky mobile uniquement */}
      <VilleStickyCta />
    </div>
  );
};

export default VillePageLayout;
