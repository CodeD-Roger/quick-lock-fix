import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  Phone,
  Clock,
  Shield,
  FileText,
  Timer,
  DoorOpen,
  KeyRound,
  ShieldAlert,
  Lock,
  PhoneCall,
  Wrench,
  CheckCircle2,
  MapPin,
  ArrowRight,
  BadgeCheck,
  Zap,
  Star,
  ThumbsUp,
  ChevronDown,
  ShieldCheck,
  CircleCheckBig,
  Quote,
} from "lucide-react";
import logoAlbert from "@/assets/logo-albert.jpg";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Link } from "react-router-dom";

gsap.registerPlugin(ScrollTrigger);

const PHONE = "03 74 47 47 93";
const PHONE_LINK = "tel:+33374474793";

/* ─── Animated Counter Hook ─── */
const useCountUp = (end: number, duration = 2000, startOnView = true) => {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    if (!startOnView || !ref.current) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;
          let start = 0;
          const step = (timestamp: number) => {
            if (!start) start = timestamp;
            const progress = Math.min((timestamp - start) / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            setCount(Math.floor(eased * end));
            if (progress < 1) requestAnimationFrame(step);
          };
          requestAnimationFrame(step);
        }
      },
      { threshold: 0.3 }
    );
    observer.observe(ref.current);
    return () => observer.disconnect();
  }, [end, duration, startOnView]);

  return { count, ref };
};

/* ─── Data ─── */
const trustPillars = [
  { icon: Timer, title: "Intervention < 30 min", desc: "Un technicien qualifié chez vous en moins de 30 minutes, où que vous soyez dans le Haut-Rhin." },
  { icon: FileText, title: "Tarifs transparents", desc: "Devis gratuit et détaillé avant toute intervention. Aucune surprise sur la facture." },
  { icon: ShieldCheck, title: "Agréé assurance", desc: "Prise en charge facilitée avec votre assurance habitation. Facture conforme." },
  { icon: Clock, title: "Disponible 24h/24", desc: "Nuit, week-end, jour férié — nous sommes toujours disponibles pour vous." },
];

const services = [
  { icon: DoorOpen, title: "Ouverture de porte", desc: "Porte claquée ou fermée à clé ? Ouverture rapide et sans dégât grâce à nos outils de précision.", badge: "Le + demandé" },
  { icon: KeyRound, title: "Changement de serrure", desc: "Remplacement et installation de serrures de toutes marques : Vachette, Fichet, Bricard, Mul-T-Lock.", badge: null },
  { icon: ShieldAlert, title: "Sécurisation après effraction", desc: "Intervention immédiate pour sécuriser votre logement après un cambriolage. Remplacement de porte et serrure.", badge: "Urgence" },
  { icon: Lock, title: "Porte blindée & serrure renforcée", desc: "Installation de portes blindées certifiées et serrures haute sécurité multipoints.", badge: null },
];

const stats = [
  { value: 2500, suffix: "+", label: "Interventions réalisées", icon: Wrench },
  { value: 98, suffix: "%", label: "Clients satisfaits", icon: ThumbsUp },
  { value: 30, suffix: "min", label: "Délai moyen d'arrivée", icon: Timer },
  { value: 24, suffix: "h/24", label: "Disponibilité", icon: Clock },
];

const steps = [
  { num: "1", title: "Vous appelez", desc: "Contactez-nous au 03 74 47 47 93. Réponse immédiate, diagnostic par téléphone.", icon: PhoneCall },
  { num: "2", title: "On intervient", desc: "Un technicien qualifié arrive chez vous en moins de 30 minutes avec tout le matériel.", icon: Wrench },
  { num: "3", title: "Problème résolu", desc: "Intervention efficace, propre et garantie. Vous réglez après satisfaction.", icon: CircleCheckBig },
];

const faqData = [
  { q: "Combien coûte une ouverture de porte ?", a: "Le tarif dépend du type de serrure et de la complexité de l'intervention. Nous vous fournissons un devis gratuit et transparent par téléphone avant toute intervention. Pas de mauvaise surprise." },
  { q: "En combien de temps intervenez-vous ?", a: "Notre délai moyen d'intervention est de 20 à 30 minutes. Nous disposons de techniciens répartis sur tout le secteur pour garantir une réactivité maximale, de jour comme de nuit." },
  { q: "Intervenez-vous la nuit et le week-end ?", a: "Oui, nous sommes disponibles 24 heures sur 24, 7 jours sur 7, y compris les nuits, week-ends et jours fériés. Les urgences n'attendent pas." },
  { q: "Faut-il un devis avant l'intervention ?", a: "Oui, un devis détaillé vous est communiqué systématiquement avant le début de l'intervention. Vous êtes libre d'accepter ou de refuser, sans engagement." },
  { q: "Êtes-vous agréé par les assurances ?", a: "Oui, nous sommes agréés par la plupart des assurances habitation. Nous fournissons une facture conforme pour faciliter votre remboursement." },
  { q: "Quelles marques de serrures installez-vous ?", a: "Nous travaillons avec les meilleures marques : Fichet, Vachette, Bricard, Mul-T-Lock, Mottura, Picard. Nous vous conseillons la solution la plus adaptée à votre besoin et budget." },
  { q: "Que faire en cas d'effraction ?", a: "Appelez-nous immédiatement pour sécuriser votre logement. Déposez ensuite plainte au commissariat. Nous intervenons en urgence pour remplacer la serrure et renforcer votre porte." },
  { q: "Votre intervention est-elle garantie ?", a: "Oui, toutes nos interventions sont garanties. Nous utilisons du matériel professionnel et des pièces de qualité pour assurer la durabilité de notre travail." },
];

const reviews = [
  { name: "Marie L.", location: "Mulhouse", rating: 5, text: "Intervention rapide et professionnelle un dimanche soir. Le serrurier est arrivé en 25 minutes. Tarif annoncé respecté. Je recommande vivement." },
  { name: "Thomas K.", location: "Colmar", rating: 5, text: "Après un cambriolage en pleine nuit, le technicien a sécurisé ma porte et changé la serrure en moins d'une heure. Facture claire pour l'assurance." },
  { name: "Sophie M.", location: "Mulhouse", rating: 5, text: "Changement de cylindre sur une serrure 3 points, travail propre et rapide. Le technicien a pris le temps d'expliquer. Prix correct." },
];

const villes = [
  { nom: "Mulhouse", cp: "68100", slug: "serrurier-mulhouse" },
  { nom: "Colmar", cp: "68000", slug: "serrurier-colmar" },
  { nom: "Illzach", cp: "68110", slug: "serrurier-illzach" },
  { nom: "Wittenheim", cp: "68270", slug: "serrurier-wittenheim" },
  { nom: "Kingersheim", cp: "68260", slug: "serrurier-kingersheim" },
  { nom: "Riedisheim", cp: "68400", slug: "serrurier-riedisheim" },
];

/* ─── Stat Counter Component ─── */
const StatCounter = ({ value, suffix, label, icon: Icon }: typeof stats[0]) => {
  const { count, ref } = useCountUp(value, 2200);
  return (
    <div ref={ref} className="text-center p-6 md:p-8">
      <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[#f97316] to-[#ea580c] flex items-center justify-center mx-auto mb-4 shadow-[0_8px_24px_rgba(249,115,22,0.3)]">
        <Icon className="w-6 h-6 text-white" />
      </div>
      <div className="font-display text-3xl md:text-4xl font-bold text-white mb-1">
        {count}<span className="text-[#f97316]">{suffix}</span>
      </div>
      <p className="text-sm text-[#94a3b8]">{label}</p>
    </div>
  );
};

const Index = () => {
  const mainRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!mainRef.current) return;
    const ctx = gsap.context(() => {
      gsap.from(".hero-anim", {
        y: 50,
        opacity: 0,
        duration: 0.9,
        stagger: 0.12,
        ease: "power3.out",
      });

      gsap.from(".hero-badge", {
        scale: 0.8,
        opacity: 0,
        duration: 0.5,
        stagger: 0.08,
        delay: 0.6,
        ease: "back.out(1.5)",
      });

      mainRef.current!.querySelectorAll("section").forEach((section) => {
        gsap.from(section, {
          scrollTrigger: { trigger: section, start: "top 88%", once: true },
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
      {/* ─── HEADER ─── */}
      <nav className="bg-white border-b border-[#e2e8f0] sticky top-0 z-40" aria-label="Navigation principale">
        <div className="container max-w-6xl mx-auto px-5 sm:px-6 py-3 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2">
            <img src={logoAlbert} alt="Albert Serrurerie" className="h-9 w-auto" />
            <span className="font-display font-bold text-[#1a2c4e] text-lg sm:text-xl">
              Albert <span className="text-[#f97316]">Serrurerie</span>
            </span>
          </Link>
          <div className="flex items-center gap-3 sm:gap-4">
            <a href={PHONE_LINK} className="hidden sm:flex items-center gap-2 text-[#1a2c4e] font-bold text-base hover:text-[#f97316] transition-colors">
              <Phone className="w-4 h-4 text-[#f97316]" />
              {PHONE}
            </a>
            <a href={PHONE_LINK}>
              <Button className="bg-[#f97316] hover:bg-[#ea580c] text-white font-bold rounded-lg text-sm px-4 py-2 sm:px-5">
                <Phone className="w-4 h-4 mr-1.5 sm:hidden" />
                <span className="hidden sm:inline">Appel d'urgence</span>
                <span className="sm:hidden">Appeler</span>
              </Button>
            </a>
          </div>
        </div>
      </nav>

      {/* ─── HERO SECTION ─── */}
      <header className="relative overflow-hidden" style={{ background: "linear-gradient(135deg, #1a2c4e 0%, #0f1d35 60%, #162847 100%)" }}>
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#f97316]/5 rounded-full blur-[120px] pointer-events-none" aria-hidden="true" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#f97316]/3 rounded-full blur-[100px] pointer-events-none" aria-hidden="true" />

        <div className="relative z-10 container max-w-6xl mx-auto px-5 sm:px-6 pt-12 pb-20 md:pt-24 md:pb-32">
          <div className="hero-anim flex items-center gap-2 mb-8 justify-center">
            <span className="inline-flex items-center gap-2 bg-[#f97316]/15 border border-[#f97316]/30 text-[#f97316] rounded-full px-4 py-1.5 text-sm font-semibold">
              <span className="w-2 h-2 rounded-full bg-[#f97316] animate-pulse" />
              Disponible maintenant — 24h/24 • 7j/7
            </span>
          </div>

          <div className="hero-anim flex justify-center mb-8">
            <img src={logoAlbert} alt="Albert Serrurerie — Serrurier d'urgence Haut-Rhin" className="h-24 sm:h-28 md:h-32 w-auto" width="128" height="128" />
          </div>

          <h1 className="hero-anim font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white text-center leading-[1.1] mb-6 text-balance">
            Votre Serrurier
            <br />
            <span className="text-[#f97316]">d'Urgence 24h/24</span>
          </h1>

          <p className="hero-anim text-[#94a3b8] text-base sm:text-lg md:text-xl max-w-2xl mx-auto text-center leading-relaxed mb-10 text-balance">
            Porte claquée, serrure cassée, effraction ? <strong className="text-white">Albert Serrurerie</strong> intervient
            en <strong className="text-white">moins de 30 minutes</strong> dans tout le Haut-Rhin (68).
          </p>

          <div className="hero-anim flex justify-center mb-10">
            <a href={PHONE_LINK} className="inline-block group">
              <div className="bg-gradient-to-r from-[#f97316] to-[#ea580c] rounded-2xl px-8 py-5 sm:px-10 sm:py-6 md:px-12 md:py-7 inline-flex flex-col items-center gap-1.5 shadow-[0_8px_30px_rgba(249,115,22,0.35)] transition-all group-hover:scale-105 group-hover:shadow-[0_16px_60px_rgba(249,115,22,0.45)] duration-300">
                <span className="text-white text-sm font-semibold tracking-widest uppercase">Appelez maintenant</span>
                <span className="text-white font-display text-3xl sm:text-4xl md:text-5xl font-bold tracking-wider">
                  {PHONE}
                </span>
              </div>
            </a>
          </div>

          <div className="hero-anim flex flex-wrap items-center justify-center gap-x-4 gap-y-3 text-sm">
            {["Devis gratuit", "Sans surprise", "Agréé assurance"].map((label) => (
              <span key={label} className="hero-badge flex items-center gap-1.5 text-[#cbd5e1] bg-white/5 border border-white/10 rounded-full px-4 py-1.5">
                <CheckCircle2 className="w-4 h-4 text-[#f97316]" aria-hidden="true" />
                {label}
              </span>
            ))}
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-2 text-white/30 animate-bounce" aria-hidden="true">
          <ChevronDown className="w-5 h-5" />
        </div>
      </header>

      {/* ─── TRUST SECTION ─── */}
      <section className="py-16 md:py-24 bg-white" aria-labelledby="trust-heading">
        <div className="container max-w-6xl mx-auto px-5 sm:px-6">
          <h2 id="trust-heading" className="font-display text-2xl sm:text-3xl md:text-4xl font-bold text-[#1a2c4e] text-center mb-3">
            Pourquoi nous <span className="text-[#f97316]">faire confiance</span> ?
          </h2>
          <p className="text-center text-[#64748b] max-w-xl mx-auto mb-12 text-base">
            Des engagements concrets pour votre tranquillité.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {trustPillars.map((p) => (
              <article key={p.title} className="group bg-[#1a2c4e] rounded-2xl p-7 text-center transition-all duration-400 hover:-translate-y-1.5 hover:shadow-[0_20px_50px_rgba(26,44,78,0.25)]">
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[#f97316] to-[#ea580c] flex items-center justify-center mx-auto mb-5 shadow-[0_8px_24px_rgba(249,115,22,0.3)] group-hover:shadow-[0_12px_32px_rgba(249,115,22,0.4)] transition-shadow">
                  <p.icon className="w-7 h-7 text-white" aria-hidden="true" />
                </div>
                <h3 className="font-display font-bold text-lg mb-3 text-white">{p.title}</h3>
                <p className="text-sm leading-relaxed text-[#94a3b8]">{p.desc}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ─── STATS SECTION ─── */}
      <section className="py-16 md:py-20 bg-[#1a2c4e]" aria-labelledby="stats-heading">
        <div className="container max-w-6xl mx-auto px-5 sm:px-6">
          <h2 id="stats-heading" className="sr-only">Nos chiffres clés</h2>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            {stats.map((s) => (
              <StatCounter key={s.label} {...s} />
            ))}
          </div>
        </div>
      </section>

      {/* ─── SERVICES SECTION ─── */}
      <section className="py-16 md:py-24 bg-white" aria-labelledby="services-heading">
        <div className="container max-w-6xl mx-auto px-5 sm:px-6">
          <h2 id="services-heading" className="font-display text-2xl sm:text-3xl md:text-4xl font-bold text-[#1a2c4e] text-center mb-3">
            Nos <span className="text-[#f97316]">services</span>
          </h2>
          <p className="text-center text-[#64748b] max-w-xl mx-auto mb-12 text-base">
            Une solution pour chaque situation d'urgence.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {services.map((s) => (
              <article key={s.title} className="group bg-[#1a2c4e] rounded-2xl p-7 relative overflow-hidden transition-all duration-400 hover:-translate-y-1.5 hover:shadow-[0_20px_50px_rgba(26,44,78,0.25)]">
                {s.badge && (
                  <span className="absolute top-4 right-4 text-xs font-bold tracking-wide uppercase px-3 py-1 rounded-full bg-[#f97316] text-white">
                    {s.badge}
                  </span>
                )}
                <div className="flex items-start gap-5">
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[#f97316] to-[#ea580c] flex items-center justify-center shrink-0 shadow-[0_8px_24px_rgba(249,115,22,0.3)] group-hover:shadow-[0_12px_32px_rgba(249,115,22,0.4)] transition-shadow">
                    <s.icon className="w-7 h-7 text-white" aria-hidden="true" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-display font-bold text-lg md:text-xl mb-2 text-white">{s.title}</h3>
                    <p className="text-sm text-[#94a3b8] leading-relaxed mb-5">{s.desc}</p>
                    <a href={PHONE_LINK} className="inline-flex items-center gap-1.5 text-[#f97316] text-sm font-semibold hover:gap-2.5 transition-all duration-300">
                      <Phone className="w-3.5 h-3.5" />
                      Appeler pour ce service
                      <ArrowRight className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ─── PROCESS SECTION ─── */}
      <section className="py-16 md:py-24" style={{ background: "#f8fafc" }} aria-labelledby="process-heading">
        <div className="container max-w-5xl mx-auto px-5 sm:px-6">
          <h2 id="process-heading" className="font-display text-2xl sm:text-3xl md:text-4xl font-bold text-[#1a2c4e] text-center mb-3">
            Comment ça <span className="text-[#f97316]">marche</span> ?
          </h2>
          <p className="text-center text-[#64748b] max-w-xl mx-auto mb-12 text-base">
            3 étapes simples pour résoudre votre problème.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-6 relative">
            <div className="hidden md:block absolute top-10 left-[16.67%] right-[16.67%] h-0.5 border-t-2 border-dashed border-[#f97316]/30" aria-hidden="true" />
            {steps.map((s) => (
              <div key={s.num} className="text-center relative">
                <div className="w-20 h-20 rounded-full bg-gradient-to-br from-[#f97316] to-[#ea580c] flex items-center justify-center mx-auto mb-6 text-white font-display text-3xl font-bold relative z-10 shadow-[0_8px_24px_rgba(249,115,22,0.3)]">
                  {s.num}
                </div>
                <div className="bg-[#1a2c4e] rounded-2xl p-6 text-left">
                  <div className="flex items-center gap-3 mb-3">
                    <s.icon className="w-5 h-5 text-[#f97316] shrink-0" />
                    <h3 className="font-display font-bold text-lg text-white">{s.title}</h3>
                  </div>
                  <p className="text-sm text-[#94a3b8] leading-relaxed">{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── ZONE D'INTERVENTION ─── */}
      <section className="py-16 md:py-24 bg-white" aria-labelledby="zone-heading">
        <div className="container max-w-5xl mx-auto px-5 sm:px-6">
          <h2 id="zone-heading" className="font-display text-2xl sm:text-3xl md:text-4xl font-bold text-[#1a2c4e] text-center mb-3">
            Nous intervenons <span className="text-[#f97316]">près de chez vous</span>
          </h2>
          <p className="text-center text-[#64748b] max-w-xl mx-auto mb-12 text-base">
            Serrurier d'urgence dans tout le Haut-Rhin (68).
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {villes.map((v) => (
              <Link
                key={v.slug}
                to={`/${v.slug}`}
                className="group flex items-center gap-4 bg-white border border-[#e2e8f0] rounded-xl px-5 py-4 hover:border-[#f97316]/40 hover:shadow-[0_4px_20px_rgba(249,115,22,0.1)] transition-all"
              >
                <div className="w-10 h-10 rounded-lg bg-[#1a2c4e] flex items-center justify-center shrink-0 group-hover:bg-[#f97316] transition-colors">
                  <MapPin className="w-5 h-5 text-white" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="font-display font-bold text-[#1a2c4e] text-sm">Serrurier {v.nom}</p>
                  <p className="text-xs text-[#94a3b8]">{v.cp}</p>
                </div>
                <ArrowRight className="w-4 h-4 text-[#94a3b8] group-hover:text-[#f97316] transition-colors shrink-0" />
              </Link>
            ))}
          </div>
          <div className="mt-10 bg-[#1a2c4e] rounded-2xl p-8 sm:p-10 text-center">
            <MapPin className="w-10 h-10 text-[#f97316] mx-auto mb-4" />
            <p className="text-[#94a3b8] max-w-2xl mx-auto mb-6 leading-relaxed text-base">
              Notre réseau de serruriers qualifiés couvre tout le département du Haut-Rhin (68). Où que vous soyez, un technicien
              peut être chez vous en <strong className="text-white">moins de 30 minutes</strong>.
            </p>
            <a href={PHONE_LINK}>
              <Button className="bg-[#f97316] hover:bg-[#ea580c] text-white font-bold rounded-xl px-8 py-3 text-base shadow-[0_8px_24px_rgba(249,115,22,0.3)]">
                <Phone className="w-4 h-4 mr-2" />
                Vérifier la disponibilité
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* ─── AVIS SECTION ─── */}
      <section className="py-16 md:py-24" style={{ background: "#f8fafc" }} aria-labelledby="avis-heading">
        <div className="container max-w-6xl mx-auto px-5 sm:px-6">
          <div className="text-center mb-12">
            <h2 id="avis-heading" className="font-display text-2xl sm:text-3xl md:text-4xl font-bold text-[#1a2c4e] mb-3">
              Avis de nos <span className="text-[#f97316]">clients</span>
            </h2>
            <div className="flex items-center justify-center gap-2 mb-2">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 text-[#f97316] fill-[#f97316]" />
              ))}
              <span className="text-[#1a2c4e] font-bold ml-1">4.8/5</span>
            </div>
            <p className="text-[#64748b] text-sm">Basé sur 127 avis vérifiés</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {reviews.map((review) => (
              <article key={review.name} className="bg-white border border-[#e2e8f0] rounded-2xl p-6 hover:shadow-[0_8px_30px_rgba(26,44,78,0.08)] transition-shadow">
                <Quote className="w-8 h-8 text-[#f97316]/20 mb-3" aria-hidden="true" />
                <p className="text-[#475569] text-sm leading-relaxed mb-5">{review.text}</p>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-[#1a2c4e] font-bold text-sm">{review.name}</p>
                    <p className="text-[#94a3b8] text-xs">{review.location}</p>
                  </div>
                  <div className="flex gap-0.5">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 text-[#f97316] fill-[#f97316]" />
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ─── FAQ SECTION ─── */}
      <section className="py-16 md:py-24 bg-white" aria-labelledby="faq-heading">
        <div className="container max-w-3xl mx-auto px-5 sm:px-6">
          <h2 id="faq-heading" className="font-display text-2xl sm:text-3xl md:text-4xl font-bold text-[#1a2c4e] text-center mb-3">
            Questions <span className="text-[#f97316]">fréquentes</span>
          </h2>
          <p className="text-center text-[#64748b] max-w-xl mx-auto mb-12 text-base">
            Tout ce que vous devez savoir avant d'appeler.
          </p>
          <Accordion type="single" collapsible className="space-y-3">
            {faqData.map((item, i) => (
              <AccordionItem
                key={i}
                value={`faq-${i}`}
                className="bg-[#f8fafc] border border-[#e2e8f0] rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow"
              >
                <AccordionTrigger className="px-6 py-5 text-left text-[#1a2c4e] font-display font-semibold text-[0.95rem] hover:no-underline [&>svg]:text-[#f97316]">
                  {item.q}
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-5 text-[#475569] leading-relaxed text-sm">
                  {item.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* ─── CTA FINAL ─── */}
      <section className="py-20 md:py-28 relative overflow-hidden bg-[#1a2c4e]" aria-labelledby="cta-heading">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#f97316]/5 rounded-full blur-[120px] pointer-events-none" aria-hidden="true" />
        <div className="container max-w-4xl mx-auto px-5 sm:px-6 text-center relative z-10">
          <h2 id="cta-heading" className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-5">
            Une urgence ?
            <br />
            <span className="text-[#f97316]">Appelez maintenant.</span>
          </h2>
          <p className="text-[#94a3b8] max-w-lg mx-auto mb-10 text-base sm:text-lg">
            Intervention rapide en moins de 30 minutes. Devis gratuit. Tarifs transparents. Ne restez pas bloqué.
          </p>
          <a href={PHONE_LINK} className="inline-block mb-10 group">
            <div className="bg-gradient-to-r from-[#f97316] to-[#ea580c] rounded-2xl px-8 py-6 sm:px-12 sm:py-7 inline-flex flex-col items-center gap-1.5 shadow-[0_8px_40px_rgba(249,115,22,0.35)] transition-all group-hover:scale-105 group-hover:shadow-[0_16px_60px_rgba(249,115,22,0.45)]">
              <span className="text-white font-display text-3xl sm:text-4xl md:text-5xl font-bold tracking-wider">
                {PHONE}
              </span>
              <span className="text-white/80 text-sm font-medium mt-1">
                Appel gratuit • Disponible maintenant
              </span>
            </div>
          </a>
          <div className="flex flex-wrap items-center justify-center gap-3">
            {[
              { icon: BadgeCheck, label: "Devis gratuit" },
              { icon: Zap, label: "30 min chrono" },
              { icon: Clock, label: "24h/24 • 7j/7" },
            ].map((b) => (
              <div key={b.label} className="flex items-center gap-2 bg-white/5 border border-white/10 rounded-full px-5 py-2.5 text-sm text-[#cbd5e1]">
                <b.icon className="w-4 h-4 text-[#f97316]" />
                {b.label}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── FOOTER ─── */}
      <footer className="bg-[#1a2c4e] py-10 pb-24 md:pb-10" role="contentinfo">
        <div className="container max-w-6xl mx-auto px-5 sm:px-6">
          <div className="border-t border-white/10 pt-8">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6 text-sm">
              <div className="flex items-center gap-2">
                <img src={logoAlbert} alt="Albert Serrurerie" className="h-8 w-auto" loading="lazy" />
                <span className="text-white font-display font-bold">Albert Serrurerie</span>
              </div>
              <div className="flex flex-wrap items-center justify-center gap-4 text-[#94a3b8]">
                <span>24h/24 • 7j/7</span>
                <span className="hidden md:inline" aria-hidden="true">•</span>
                <a href={PHONE_LINK} className="text-[#f97316] font-semibold hover:underline flex items-center gap-1">
                  <Phone className="w-3.5 h-3.5" />
                  {PHONE}
                </a>
              </div>
              <div className="flex flex-wrap items-center justify-center gap-4 text-xs text-[#64748b]">
                <Link to="/mentions-legales" className="hover:text-[#cbd5e1] transition-colors">Mentions légales</Link>
                <span aria-hidden="true">•</span>
                <Link to="/mentions-legales#rgpd" className="hover:text-[#cbd5e1] transition-colors">Politique de confidentialité</Link>
              </div>
            </div>
            <p className="text-xs text-[#475569] text-center mt-6">
              © {new Date().getFullYear()} Albert Serrurerie — Tous droits réservés — Haut-Rhin (68)
            </p>
          </div>
        </div>
      </footer>

      {/* ─── STICKY CTA MOBILE ─── */}
      <div className="fixed bottom-0 left-0 right-0 z-50 md:hidden">
        <a
          href={PHONE_LINK}
          className="flex items-center justify-center gap-2 bg-[#f97316] text-white font-bold text-base py-4 px-6 shadow-[0_-4px_20px_rgba(249,115,22,0.3)]"
        >
          <Phone className="w-5 h-5" />
          Appel d'urgence 24h/7j
        </a>
      </div>
    </div>
  );
};

export default Index;
