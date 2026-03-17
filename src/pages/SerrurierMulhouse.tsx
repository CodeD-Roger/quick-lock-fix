import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { mulhouseData } from "@/data/mulhouse";
import VilleJsonLd from "@/components/ville/VilleJsonLd";
import VilleHeader from "@/components/ville/VilleHeader";
import VilleBreadcrumb from "@/components/ville/VilleBreadcrumb";
import VilleHero from "@/components/ville/VilleHero";
import VilleInterventions from "@/components/ville/VilleInterventions";
import VilleSeoBlock from "@/components/ville/VilleSeoBlock";
import VilleTarifs from "@/components/ville/VilleTarifs";
import VilleAvis from "@/components/ville/VilleAvis";
import VilleFaq from "@/components/ville/VilleFaq";
import VilleMap from "@/components/ville/VilleMap";
import VilleMaillage from "@/components/ville/VilleMaillage";
import VilleCta from "@/components/ville/VilleCta";
import VilleFooter from "@/components/ville/VilleFooter";
import VilleStickyCta from "@/components/ville/VilleStickyCta";

gsap.registerPlugin(ScrollTrigger);

const SerrurierMulhouse = () => {
  const mainRef = useRef<HTMLDivElement>(null);

  // Dynamic meta tags
  useEffect(() => {
    document.title = mulhouseData.metaTitle;

    const setMeta = (name: string, content: string) => {
      let el = document.querySelector(`meta[name="${name}"]`);
      if (!el) {
        el = document.createElement("meta");
        el.setAttribute("name", name);
        document.head.appendChild(el);
      }
      el.setAttribute("content", content);
    };

    setMeta("description", mulhouseData.metaDescription);
    setMeta("robots", "index, follow");

    // Canonical
    let canonical = document.querySelector('link[rel="canonical"]') as HTMLLinkElement;
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.rel = "canonical";
      document.head.appendChild(canonical);
    }
    canonical.href = `https://albert-serrurerie.com/${mulhouseData.slug}`;

    return () => {
      document.title = "Albert Serrurerie — Serrurier d'urgence 24h/24";
    };
  }, []);

  // GSAP scroll animations
  useEffect(() => {
    if (!mainRef.current) return;
    const ctx = gsap.context(() => {
      // Hero elements
      gsap.from(".ville-hero-anim", {
        y: 40,
        opacity: 0,
        duration: 0.8,
        stagger: 0.1,
        ease: "power3.out",
      });

      // Sections fade in
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
      <VilleJsonLd data={mulhouseData} />
      <VilleHeader />
      <VilleBreadcrumb data={mulhouseData} />
      <VilleHero data={mulhouseData} />
      <VilleInterventions data={mulhouseData} />
      <VilleSeoBlock
        id="seo-block-1"
        title={`Votre serrurier de confiance à ${mulhouseData.nom}`}
        content={mulhouseData.seoBlock1}
      />
      <VilleTarifs data={mulhouseData} />
      <VilleSeoBlock
        id="seo-block-2"
        title={`Pourquoi choisir Albert Serrurerie à ${mulhouseData.nom} ?`}
        content={mulhouseData.seoBlock2}
      />
      <VilleAvis data={mulhouseData} />
      <VilleFaq data={mulhouseData} />
      <VilleMap data={mulhouseData} />
      <VilleMaillage data={mulhouseData} />
      <VilleCta data={mulhouseData} />
      <VilleFooter />
      <VilleStickyCta />
    </div>
  );
};

export default SerrurierMulhouse;
