import { useEffect } from "react";
import { Link } from "react-router-dom";
import { Phone, ChevronRight, BookOpen } from "lucide-react";
import VilleHeader from "@/components/ville/VilleHeader";
import VilleFooter from "@/components/ville/VilleFooter";
import VilleStickyCta from "@/components/ville/VilleStickyCta";

const PHONE = "03 74 47 47 93";
const PHONE_LINK = "tel:+33374474793";

export interface TocItem {
  id: string;
  title: string;
}

export interface BreadcrumbItem {
  name: string;
  url?: string;
}

interface GuidePageLayoutProps {
  metaTitle: string;
  metaDescription: string;
  h1: string;
  slug: string;
  breadcrumbItems: BreadcrumbItem[];
  tocItems: TocItem[];
  schemas: object[];
  children: React.ReactNode;
}

/** Encadré "Besoin d'un serrurier maintenant ?" — exporté pour usage inline dans les pages */
export const NeedHelp = ({ context }: { context?: string }) => (
  <div className="my-8 rounded-xl bg-orange-50 border border-orange-200 p-5 flex flex-col sm:flex-row items-start sm:items-center gap-4">
    <div className="w-11 h-11 rounded-full bg-[#f97316] flex items-center justify-center shrink-0 shadow-[0_4px_12px_rgba(249,115,22,0.3)]">
      <Phone className="w-5 h-5 text-white" />
    </div>
    <div className="flex-1 min-w-0">
      <p className="font-display font-bold text-[#1a2c4e] mb-0.5">
        Besoin d'un serrurier maintenant ?
      </p>
      <p className="text-sm text-[#64748b] leading-snug">
        {context ?? "Albert Serrurerie intervient dans tout le Haut-Rhin (68) en 30 minutes."}
      </p>
    </div>
    <a
      href={PHONE_LINK}
      className="shrink-0 inline-flex items-center gap-2 bg-[#f97316] hover:bg-[#ea580c] text-white font-bold text-sm rounded-xl px-5 py-3 transition-colors shadow-[0_4px_14px_rgba(249,115,22,0.3)]"
    >
      <Phone className="w-4 h-4" />
      {PHONE}
    </a>
  </div>
);

const GuidePageLayout = ({
  metaTitle,
  metaDescription,
  h1,
  slug,
  breadcrumbItems,
  tocItems,
  schemas,
  children,
}: GuidePageLayoutProps) => {
  // Injection dynamique des balises SEO
  useEffect(() => {
    document.title = metaTitle;

    const setMeta = (name: string, content: string) => {
      let el = document.querySelector(`meta[name="${name}"]`);
      if (!el) {
        el = document.createElement("meta");
        el.setAttribute("name", name);
        document.head.appendChild(el);
      }
      el.setAttribute("content", content);
    };

    setMeta("description", metaDescription);
    setMeta("robots", "index, follow");

    let canonical = document.querySelector('link[rel="canonical"]') as HTMLLinkElement;
    if (!canonical) {
      canonical = document.createElement("link") as HTMLLinkElement;
      canonical.rel = "canonical";
      document.head.appendChild(canonical);
    }
    canonical.href = `https://albert-serrurerie.com/${slug}`;

    return () => {
      document.title = "Albert Serrurerie — Serrurier d'urgence 24h/24";
    };
  }, [metaTitle, metaDescription, slug]);

  // Injection des schémas JSON-LD
  useEffect(() => {
    const scripts = schemas.map((schema) => {
      const script = document.createElement("script");
      script.type = "application/ld+json";
      script.textContent = JSON.stringify(schema);
      document.head.appendChild(script);
      return script;
    });
    return () => scripts.forEach((s) => s.remove());
  }, [schemas]);

  return (
    <div className="min-h-screen bg-white text-[#1a2c4e] overflow-x-hidden">
      <VilleHeader />

      {/* Hero band : breadcrumb + H1 */}
      <div
        style={{ background: "linear-gradient(135deg, #1a2c4e 0%, #0f1d35 100%)" }}
        className="py-10 md:py-14"
      >
        <div className="container max-w-5xl mx-auto px-5 sm:px-6">
          {/* Fil d'Ariane */}
          <nav aria-label="Fil d'Ariane" className="flex items-center flex-wrap gap-1.5 text-sm text-[#94a3b8] mb-5">
            {breadcrumbItems.map((item, i) => (
              <span key={i} className="flex items-center gap-1.5">
                {i > 0 && <ChevronRight className="w-3.5 h-3.5 shrink-0 text-[#475569]" />}
                {item.url ? (
                  <Link to={item.url} className="hover:text-[#f97316] transition-colors">
                    {item.name}
                  </Link>
                ) : (
                  <span className="text-[#cbd5e1]">{item.name}</span>
                )}
              </span>
            ))}
          </nav>

          <h1 className="font-display text-2xl sm:text-3xl md:text-[2.1rem] font-bold text-white leading-tight max-w-3xl">
            {h1}
          </h1>

          <div className="flex flex-wrap gap-2 mt-5">
            {["Haut-Rhin (68)", "Mulhouse · Colmar", "Devis gratuit"].map((tag) => (
              <span
                key={tag}
                className="text-xs font-medium bg-white/10 text-[#cbd5e1] rounded-full px-3 py-1"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Contenu principal : TOC + Article */}
      <div className="container max-w-5xl mx-auto px-5 sm:px-6 py-10 lg:py-14">
        <div className="lg:grid lg:grid-cols-[240px_1fr] lg:gap-12 xl:gap-16">

          {/* TOC desktop sticky */}
          <aside className="hidden lg:block">
            <div className="sticky top-24 rounded-xl border border-[#e2e8f0] bg-[#f8fafc] p-5">
              <div className="flex items-center gap-2 mb-4 pb-3 border-b border-[#e2e8f0]">
                <BookOpen className="w-4 h-4 text-[#f97316]" />
                <span className="font-display font-bold text-sm text-[#1a2c4e]">
                  Table des matières
                </span>
              </div>
              <ol className="space-y-2.5">
                {tocItems.map((item, i) => (
                  <li key={item.id}>
                    <a
                      href={`#${item.id}`}
                      className="text-sm text-[#64748b] hover:text-[#f97316] transition-colors leading-snug flex gap-2"
                    >
                      <span className="text-[#f97316] font-bold shrink-0 text-xs mt-0.5">{i + 1}.</span>
                      {item.title}
                    </a>
                  </li>
                ))}
              </ol>
              <div className="mt-5 pt-4 border-t border-[#e2e8f0]">
                <a
                  href={PHONE_LINK}
                  className="flex items-center justify-center gap-2 bg-[#f97316] hover:bg-[#ea580c] text-white font-bold text-sm rounded-lg py-3 px-4 w-full transition-colors"
                >
                  <Phone className="w-4 h-4" />
                  {PHONE}
                </a>
              </div>
            </div>
          </aside>

          {/* TOC mobile */}
          <div className="lg:hidden mb-8 rounded-xl border border-[#e2e8f0] bg-[#f8fafc] p-4">
            <div className="flex items-center gap-2 mb-3">
              <BookOpen className="w-4 h-4 text-[#f97316]" />
              <span className="font-display font-bold text-sm text-[#1a2c4e]">Sommaire</span>
            </div>
            <ol className="space-y-1.5 columns-2 gap-x-4">
              {tocItems.map((item, i) => (
                <li key={item.id} className="break-inside-avoid">
                  <a
                    href={`#${item.id}`}
                    className="text-xs text-[#64748b] hover:text-[#f97316] transition-colors flex gap-1.5"
                  >
                    <span className="text-[#f97316] font-bold shrink-0">{i + 1}.</span>
                    {item.title}
                  </a>
                </li>
              ))}
            </ol>
          </div>

          {/* Article */}
          <article className="min-w-0">
            {children}
          </article>
        </div>
      </div>

      <VilleFooter />
      <VilleStickyCta />
    </div>
  );
};

export default GuidePageLayout;
