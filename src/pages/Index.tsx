import { useEffect, useRef, useState, useCallback } from "react";
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
  ChevronRight,
  ArrowRight,
  BadgeCheck,
  Zap,
  HeadphonesIcon,
  Star,
  Users,
  ThumbsUp,
  Award,
  ChevronDown,
  Sparkles,
  CircleCheckBig,
  ShieldCheck,
} from "lucide-react";
import logoAlbert from "@/assets/logo-albert.jpg";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

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

/* ─── Trust Pillar Data ─── */
const trustPillars = [
  { icon: Timer, title: "Intervention < 30 min", desc: "Un technicien qualifié chez vous en moins de 30 minutes, où que vous soyez." },
  { icon: FileText, title: "Tarifs transparents", desc: "Devis gratuit et détaillé avant toute intervention. Aucune surprise sur la facture." },
  { icon: ShieldCheck, title: "Agréé assurance", desc: "Prise en charge facilitée avec votre assurance habitation. Facture conforme." },
  { icon: Clock, title: "Disponible 24h/24", desc: "Nuit, week-end, jour férié — nous sommes toujours disponibles pour vous." },
];

/* ─── Services Data ─── */
const services = [
  { icon: DoorOpen, title: "Ouverture de porte", desc: "Porte claquée ou fermée à clé ? Ouverture rapide et sans dégât grâce à nos outils de précision.", badge: "Le + demandé" },
  { icon: KeyRound, title: "Changement de serrure", desc: "Remplacement et installation de serrures de toutes marques : Vachette, Fichet, Bricard, Mul-T-Lock.", badge: null },
  { icon: ShieldAlert, title: "Sécurisation après effraction", desc: "Intervention immédiate pour sécuriser votre logement après un cambriolage. Remplacement de porte et serrure.", badge: "Urgence" },
  { icon: Lock, title: "Porte blindée & serrure renforcée", desc: "Installation de portes blindées certifiées et serrures haute sécurité multipoints.", badge: null },
];

/* ─── Stats Data ─── */
const stats = [
  { value: 2500, suffix: "+", label: "Interventions réalisées", icon: Wrench },
  { value: 98, suffix: "%", label: "Clients satisfaits", icon: ThumbsUp },
  { value: 30, suffix: "min", label: "Délai moyen d'arrivée", icon: Timer },
  { value: 24, suffix: "h/24", label: "Disponibilité", icon: Clock },
];

/* ─── Process Steps ─── */
const steps = [
  { num: "1", title: "Vous appelez", desc: "Contactez-nous au 03 74 47 47 93. Réponse immédiate, diagnostic par téléphone.", icon: PhoneCall },
  { num: "2", title: "On intervient", desc: "Un technicien qualifié arrive chez vous en moins de 30 minutes avec tout le matériel.", icon: Wrench },
  { num: "3", title: "Problème résolu", desc: "Intervention efficace, propre et garantie. Vous réglez après satisfaction.", icon: CircleCheckBig },
];

/* ─── FAQ Data ─── */
const faqData = [
  {
    q: "Combien coûte une ouverture de porte ?",
    a: "Le tarif dépend du type de serrure et de la complexité de l'intervention. Nous vous fournissons un devis gratuit et transparent par téléphone avant toute intervention. Pas de mauvaise surprise.",
  },
  {
    q: "En combien de temps intervenez-vous ?",
    a: "Notre délai moyen d'intervention est de 20 à 30 minutes. Nous disposons de techniciens répartis sur tout le secteur pour garantir une réactivité maximale, de jour comme de nuit.",
  },
  {
    q: "Intervenez-vous la nuit et le week-end ?",
    a: "Oui, nous sommes disponibles 24 heures sur 24, 7 jours sur 7, y compris les nuits, week-ends et jours fériés. Les urgences n'attendent pas.",
  },
  {
    q: "Faut-il un devis avant l'intervention ?",
    a: "Oui, un devis détaillé vous est communiqué systématiquement avant le début de l'intervention. Vous êtes libre d'accepter ou de refuser, sans engagement.",
  },
  {
    q: "Êtes-vous agréé par les assurances ?",
    a: "Oui, nous sommes agréés par la plupart des assurances habitation. Nous fournissons une facture conforme pour faciliter votre remboursement.",
  },
  {
    q: "Quelles marques de serrures installez-vous ?",
    a: "Nous travaillons avec les meilleures marques : Fichet, Vachette, Bricard, Mul-T-Lock, Mottura, Picard. Nous vous conseillons la solution la plus adaptée à votre besoin et budget.",
  },
  {
    q: "Que faire en cas d'effraction ?",
    a: "Appelez-nous immédiatement pour sécuriser votre logement. Déposez ensuite plainte au commissariat. Nous intervenons en urgence pour remplacer la serrure et renforcer votre porte.",
  },
  {
    q: "Votre intervention est-elle garantie ?",
    a: "Oui, toutes nos interventions sont garanties. Nous utilisons du matériel professionnel et des pièces de qualité pour assurer la durabilité de notre travail.",
  },
];

/* ─── Stat Counter Component ─── */
const StatCounter = ({ value, suffix, label, icon: Icon }: typeof stats[0]) => {
  const { count, ref } = useCountUp(value, 2200);
  return (
    <div ref={ref} className="stat-card p-6 md:p-8 text-center">
      <div className="icon-circle mx-auto mb-4">
        <Icon className="w-6 h-6 text-primary-foreground" />
      </div>
      <div className="font-display text-3xl md:text-4xl font-bold text-white mb-1">
        {count}<span className="text-gold-light">{suffix}</span>
      </div>
      <p className="text-sm text-slate-400">{label}</p>
    </div>
  );
};

const Index = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const trustRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);
  const servicesRef = useRef<HTMLDivElement>(null);
  const processRef = useRef<HTMLDivElement>(null);
  const zoneRef = useRef<HTMLDivElement>(null);
  const faqRef = useRef<HTMLDivElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      /* ── Hero stagger entrance ── */
      const heroTl = gsap.timeline({ defaults: { ease: "power3.out" } });
      heroTl
        .from(heroRef.current!.querySelectorAll(".hero-anim"), {
          y: 50,
          opacity: 0,
          duration: 0.9,
          stagger: 0.12,
        })
        .from(
          heroRef.current!.querySelectorAll(".hero-badge"),
          { scale: 0.8, opacity: 0, duration: 0.5, stagger: 0.08 },
          "-=0.3"
        );

      /* ── Parallax on hero decorative elements ── */
      gsap.to(".hero-deco-1", {
        scrollTrigger: { trigger: heroRef.current, start: "top top", end: "bottom top", scrub: 1 },
        y: -80,
        opacity: 0.3,
      });
      gsap.to(".hero-deco-2", {
        scrollTrigger: { trigger: heroRef.current, start: "top top", end: "bottom top", scrub: 1 },
        y: -50,
        opacity: 0.2,
      });

      /* ── Section title reveals ── */
      document.querySelectorAll(".section-title-anim").forEach((el) => {
        gsap.from(el, {
          scrollTrigger: { trigger: el, start: "top 90%", once: true },
          y: 35,
          opacity: 0,
          duration: 0.7,
          ease: "power3.out",
        });
      });

      /* ── Trust cards ── */
      gsap.from(trustRef.current!.querySelectorAll(".trust-card"), {
        scrollTrigger: { trigger: trustRef.current, start: "top 82%", once: true },
        y: 60,
        opacity: 0,
        duration: 0.7,
        stagger: 0.1,
        ease: "power3.out",
      });

      /* ── Stats ── */
      gsap.from(statsRef.current!.querySelectorAll(".stat-card"), {
        scrollTrigger: { trigger: statsRef.current, start: "top 85%", once: true },
        y: 40,
        scale: 0.9,
        opacity: 0,
        duration: 0.6,
        stagger: 0.08,
        ease: "back.out(1.2)",
      });

      /* ── Services with clip reveal ── */
      gsap.from(servicesRef.current!.querySelectorAll(".service-card"), {
        scrollTrigger: { trigger: servicesRef.current, start: "top 82%", once: true },
        y: 60,
        opacity: 0,
        duration: 0.8,
        stagger: 0.12,
        ease: "power3.out",
      });

      /* ── Process steps ── */
      const processSteps = processRef.current!.querySelectorAll(".process-step");
      gsap.from(processSteps, {
        scrollTrigger: { trigger: processRef.current, start: "top 82%", once: true },
        y: 50,
        opacity: 0,
        duration: 0.7,
        stagger: 0.15,
        ease: "power3.out",
      });

      /* ── Process connector line draw ── */
      const connectorLine = processRef.current!.querySelector(".connector-line");
      if (connectorLine) {
        gsap.from(connectorLine, {
          scrollTrigger: { trigger: processRef.current, start: "top 82%", once: true },
          scaleX: 0,
          transformOrigin: "left center",
          duration: 1.2,
          delay: 0.3,
          ease: "power2.out",
        });
      }

      /* ── Zone ── */
      gsap.from(zoneRef.current!, {
        scrollTrigger: { trigger: zoneRef.current, start: "top 85%", once: true },
        y: 50,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out",
      });

      /* ── FAQ items ── */
      gsap.from(faqRef.current!.querySelectorAll(".faq-item"), {
        scrollTrigger: { trigger: faqRef.current, start: "top 85%", once: true },
        y: 30,
        opacity: 0,
        duration: 0.5,
        stagger: 0.06,
        ease: "power3.out",
      });

      /* ── CTA final ── */
      gsap.from(ctaRef.current!, {
        scrollTrigger: { trigger: ctaRef.current, start: "top 85%", once: true },
        scale: 0.92,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out",
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      {/* ─── STICKY BAR ─── */}
      <nav className="fixed bottom-0 left-0 right-0 z-50 md:top-0 md:bottom-auto" aria-label="Contact rapide">
        <div className="gradient-gold px-4 py-3 flex items-center justify-between md:justify-center gap-3">
          <div className="flex items-center gap-2 text-primary-foreground font-display font-bold text-sm md:text-base">
            <img src={logoAlbert} alt="Albert Serrurerie" className="h-7 w-auto hidden md:block" loading="lazy" />
            <Phone className="w-4 h-4 md:hidden" aria-hidden="true" />
            <span className="hidden md:inline" aria-hidden="true">—</span>
            <a href={PHONE_LINK} className="underline decoration-2 underline-offset-2 tracking-wide focus-gold">
              {PHONE}
            </a>
          </div>
          <a href={PHONE_LINK} className="md:ml-4">
            <Button
              size="sm"
              className="bg-primary-foreground text-primary hover:bg-primary-foreground/90 font-bold text-xs md:text-sm rounded-full px-5"
            >
              <Phone className="w-3.5 h-3.5 mr-1" aria-hidden="true" />
              Appeler
            </Button>
          </a>
        </div>
      </nav>

      {/* ─── HERO SECTION ─── */}
      <header ref={heroRef} className="hero-pattern geometric-pattern min-h-screen flex items-center justify-center relative pt-0 md:pt-14 pb-24 md:pb-0">
        {/* Decorative elements for parallax */}
        <div className="hero-deco-1 absolute top-[15%] left-[8%] w-32 h-32 md:w-56 md:h-56 rounded-full bg-primary/5 blur-3xl pointer-events-none" aria-hidden="true" />
        <div className="hero-deco-2 absolute bottom-[20%] right-[10%] w-40 h-40 md:w-64 md:h-64 rounded-full bg-primary/4 blur-3xl pointer-events-none" aria-hidden="true" />

        <div className="container max-w-4xl mx-auto px-5 sm:px-6 text-center relative z-10">
          <div className="hero-anim inline-flex items-center gap-2 bg-secondary/60 backdrop-blur-sm border border-border/50 rounded-full px-4 py-1.5 mb-8">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" aria-hidden="true" />
            <span className="text-sm text-muted-foreground font-medium">Disponible maintenant — 24h/24 • 7j/7</span>
          </div>

          <div className="hero-anim mb-6">
            <img src={logoAlbert} alt="Albert Serrurerie — Serrurier d'urgence" className="h-24 sm:h-28 md:h-32 w-auto mx-auto" width="128" height="128" />
          </div>

          <h1 className="hero-anim font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.1] mb-6 text-balance">
            Votre Serrurier
            <br />
            <span className="text-gradient-gold">d'Urgence 24h/24</span>
          </h1>

          <p className="hero-anim text-base sm:text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed text-balance">
            Porte claquée, serrure cassée, effraction ? <strong className="text-foreground">Albert Serrurerie</strong> intervient
            en <strong className="text-foreground">moins de 30 minutes</strong>, partout et à tout moment.
          </p>

          <div className="hero-anim mb-10">
            <a href={PHONE_LINK} className="inline-block group focus-gold">
              <div className="gradient-gold shine-effect animate-pulse-gold rounded-2xl px-8 py-5 sm:px-10 sm:py-6 md:px-12 md:py-7 inline-flex flex-col items-center gap-1.5 transition-transform group-hover:scale-105 duration-300">
                <span className="text-primary-foreground text-sm font-semibold tracking-widest uppercase">Appelez maintenant</span>
                <span className="text-primary-foreground font-display text-3xl sm:text-4xl md:text-5xl font-bold tracking-wider">
                  {PHONE}
                </span>
              </div>
            </a>
          </div>

          <div className="hero-anim flex flex-wrap items-center justify-center gap-x-5 gap-y-3 text-sm text-muted-foreground">
            {["Devis gratuit", "Sans surprise", "Agréé assurance"].map((label) => (
              <span key={label} className="hero-badge flex items-center gap-1.5 bg-secondary/40 rounded-full px-4 py-1.5 border border-border/30">
                <CheckCircle2 className="w-4 h-4 text-primary" aria-hidden="true" />
                {label}
              </span>
            ))}
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-2 text-muted-foreground/50 animate-float" aria-hidden="true">
          <span className="text-xs tracking-widest uppercase">Défiler</span>
          <ChevronDown className="w-5 h-5" />
        </div>
      </header>

      {/* ─── TRUST SECTION ─── */}
      <section ref={trustRef} className="section-light section-divider pt-24 pb-20 md:pt-32 md:pb-28" aria-labelledby="trust-heading">
        <div className="container max-w-6xl mx-auto px-5 sm:px-6">
          <h2 id="trust-heading" className="section-title-anim font-display text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-4 text-balance">
            Pourquoi nous <span className="text-gradient-gold">faire confiance</span> ?
          </h2>
          <p className="section-title-anim text-center max-w-xl mx-auto mb-14 text-base" style={{ color: 'hsl(var(--section-muted))' }}>
            Des engagements concrets pour votre tranquillité.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-6">
            {trustPillars.map((p) => (
              <article
                key={p.title}
                className="trust-card navy-card p-7 md:p-8 text-center group"
              >
                <div className="icon-circle mx-auto mb-5 group-hover:shadow-[0_12px_32px_hsl(38_92%_55%/0.35)] transition-shadow duration-400">
                  <p.icon className="w-6 h-6 text-primary-foreground" aria-hidden="true" />
                </div>
                <h3 className="font-display font-bold text-lg mb-3 text-white">{p.title}</h3>
                <p className="text-sm leading-relaxed text-slate-300">{p.desc}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ─── STATS SECTION ─── */}
      <section ref={statsRef} className="py-16 md:py-20" style={{ background: 'hsl(var(--card-navy))' }} aria-labelledby="stats-heading">
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
      <section ref={servicesRef} className="section-light-alt py-20 md:py-28" aria-labelledby="services-heading">
        <div className="container max-w-6xl mx-auto px-5 sm:px-6">
          <h2 id="services-heading" className="section-title-anim font-display text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-4 text-balance">
            Nos <span className="text-gradient-gold">services</span>
          </h2>
          <p className="section-title-anim text-center max-w-xl mx-auto mb-14 text-base" style={{ color: 'hsl(var(--section-muted))' }}>
            Une solution pour chaque situation d'urgence.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 md:gap-6">
            {services.map((s) => (
              <article
                key={s.title}
                className="service-card navy-card p-7 md:p-8 relative overflow-hidden group"
              >
                {s.badge && (
                  <span className="absolute top-4 right-4 text-xs font-bold tracking-wide uppercase px-3 py-1 rounded-full gradient-gold text-primary-foreground">
                    {s.badge}
                  </span>
                )}
                <div className="flex items-start gap-5">
                  <div className="icon-circle icon-circle-lg shrink-0 group-hover:shadow-[0_12px_32px_hsl(38_92%_55%/0.35)] transition-shadow duration-400">
                    <s.icon className="w-7 h-7 text-primary-foreground" aria-hidden="true" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-display font-bold text-lg md:text-xl mb-2 text-white">{s.title}</h3>
                    <p className="text-sm text-slate-300 leading-relaxed mb-5">{s.desc}</p>
                    <a
                      href={PHONE_LINK}
                      className="inline-flex items-center gap-1.5 text-gold-light text-sm font-semibold hover:gap-2.5 transition-all duration-300 focus-gold"
                    >
                      <Phone className="w-3.5 h-3.5" aria-hidden="true" />
                      Appeler pour ce service
                      <ArrowRight className="w-3.5 h-3.5" aria-hidden="true" />
                    </a>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ─── PROCESS SECTION ─── */}
      <section ref={processRef} className="section-light py-20 md:py-28" aria-labelledby="process-heading">
        <div className="container max-w-5xl mx-auto px-5 sm:px-6">
          <h2 id="process-heading" className="section-title-anim font-display text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-4 text-balance">
            Comment ça <span className="text-gradient-gold">marche</span> ?
          </h2>
          <p className="section-title-anim text-center max-w-xl mx-auto mb-14 text-base" style={{ color: 'hsl(var(--section-muted))' }}>
            3 étapes simples pour résoudre votre problème.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-6 relative">
            {/* Connector line (desktop) */}
            <div className="connector-line hidden md:block absolute top-10 left-[16.67%] right-[16.67%] h-0.5 border-t-2 border-dashed border-primary/40" aria-hidden="true" />

            {steps.map((s) => (
              <div key={s.num} className="process-step text-center relative">
                <div className="w-20 h-20 rounded-full gradient-gold flex items-center justify-center mx-auto mb-6 text-primary-foreground font-display text-3xl font-bold relative z-10 shadow-lg">
                  {s.num}
                </div>
                <div className="navy-card p-6 text-left">
                  <div className="flex items-center gap-3 mb-3">
                    <s.icon className="w-5 h-5 text-gold-light shrink-0" aria-hidden="true" />
                    <h3 className="font-display font-bold text-lg text-white">{s.title}</h3>
                  </div>
                  <p className="text-sm text-slate-300 leading-relaxed">{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── ZONE D'INTERVENTION ─── */}
      <section ref={zoneRef} className="section-light-alt py-20 md:py-28" aria-labelledby="zone-heading">
        <div className="container max-w-4xl mx-auto px-5 sm:px-6">
          <h2 id="zone-heading" className="section-title-anim font-display text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-14 text-balance">
            Nous intervenons <span className="text-gradient-gold">près de chez vous</span>
          </h2>
          <div className="navy-card p-8 sm:p-10 md:p-14 text-center">
            <div className="icon-circle icon-circle-lg mx-auto mb-6">
              <MapPin className="w-8 h-8 text-primary-foreground" aria-hidden="true" />
            </div>
            <p className="text-slate-300 max-w-2xl mx-auto mb-8 leading-relaxed text-base sm:text-lg">
              Notre réseau de serruriers qualifiés couvre votre secteur. Où que vous soyez, un technicien
              peut être chez vous en <strong className="text-white">moins de 30 minutes</strong>.
              Disponibilité garantie, même les nuits, week-ends et jours fériés.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 max-w-md mx-auto mb-8">
              {[
                "Intervention rapide garantie",
                "Couverture large zone",
                "Techniciens de proximité",
                "Disponible 24h/24 7j/7",
              ].map((item) => (
                <div key={item} className="flex items-center gap-2.5 text-sm text-slate-200">
                  <CheckCircle2 className="w-4 h-4 text-gold-light shrink-0" aria-hidden="true" />
                  {item}
                </div>
              ))}
            </div>
            <a href={PHONE_LINK}>
              <Button className="gradient-gold text-primary-foreground font-bold rounded-full px-8 py-3 text-base hover:opacity-90 transition-opacity">
                <Phone className="w-4 h-4 mr-2" aria-hidden="true" />
                Vérifier la disponibilité
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* ─── FAQ SECTION ─── */}
      <section ref={faqRef} className="section-light py-20 md:py-28" aria-labelledby="faq-heading">
        <div className="container max-w-3xl mx-auto px-5 sm:px-6">
          <h2 id="faq-heading" className="section-title-anim font-display text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-4 text-balance">
            Questions <span className="text-gradient-gold">fréquentes</span>
          </h2>
          <p className="section-title-anim text-center max-w-xl mx-auto mb-14 text-base" style={{ color: 'hsl(var(--section-muted))' }}>
            Tout ce que vous devez savoir avant d'appeler.
          </p>
          <Accordion type="single" collapsible className="space-y-3">
            {faqData.map((item, i) => (
              <AccordionItem
                key={i}
                value={`faq-${i}`}
                className="faq-item navy-card border-none overflow-hidden"
              >
                <AccordionTrigger className="px-6 py-5 text-left text-white font-display font-semibold text-base hover:no-underline [&>svg]:text-gold-light">
                  {item.q}
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-5 text-slate-300 leading-relaxed text-sm">
                  {item.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* ─── CTA FINAL ─── */}
      <section ref={ctaRef} className="py-20 md:py-28 relative overflow-hidden" style={{ background: 'hsl(var(--card-navy))' }} aria-labelledby="cta-heading">
        {/* Decorative glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary/5 rounded-full blur-3xl pointer-events-none" aria-hidden="true" />

        <div className="container max-w-4xl mx-auto px-5 sm:px-6 text-center relative z-10">
          <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 rounded-full px-4 py-1.5 mb-6">
            <Sparkles className="w-4 h-4 text-primary" aria-hidden="true" />
            <span className="text-sm text-gold-light font-medium">Disponible 24h/24 — 7j/7</span>
          </div>

          <h2 id="cta-heading" className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-5 text-white text-balance">
            Une urgence ?
            <br />
            <span className="text-gradient-gold">Appelez maintenant.</span>
          </h2>
          <p className="text-slate-400 max-w-lg mx-auto mb-10 text-base sm:text-lg">
            Intervention rapide, devis gratuit, tarifs transparents. Ne restez pas bloqué.
          </p>

          <a href={PHONE_LINK} className="inline-block mb-10 group focus-gold">
            <div className="gradient-gold shine-effect animate-pulse-gold rounded-2xl px-8 py-6 sm:px-10 sm:py-7 inline-flex flex-col items-center gap-1.5 transition-transform group-hover:scale-105 duration-300">
              <span className="text-primary-foreground font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-wider">
                {PHONE}
              </span>
              <span className="text-primary-foreground/80 text-sm font-medium mt-1">
                Appel gratuit • Disponible maintenant
              </span>
            </div>
          </a>

          <div className="flex flex-wrap items-center justify-center gap-3 md:gap-4">
            {[
              { icon: BadgeCheck, label: "Devis gratuit" },
              { icon: Zap, label: "Intervention rapide" },
              { icon: HeadphonesIcon, label: "24h/24 • 7j/7" },
            ].map((b) => (
              <div key={b.label} className="flex items-center gap-2 bg-white/5 border border-white/10 rounded-full px-5 py-2.5 text-sm text-slate-200">
                <b.icon className="w-4 h-4 text-gold-light" aria-hidden="true" />
                {b.label}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── FOOTER ─── */}
      <footer className="py-10 pb-24 md:pb-10" style={{ background: 'hsl(var(--card-navy))' }} role="contentinfo">
        <div className="border-t border-white/10 pt-10">
          <div className="container max-w-6xl mx-auto px-5 sm:px-6">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6 text-sm">
              <div className="flex items-center gap-2">
                <img src={logoAlbert} alt="Albert Serrurerie" className="h-8 w-auto" loading="lazy" />
              </div>
              <div className="flex flex-wrap items-center justify-center gap-4 text-slate-400">
                <span>24h/24 • 7j/7</span>
                <span className="hidden md:inline" aria-hidden="true">•</span>
                <a href={PHONE_LINK} className="text-gold-light font-semibold hover:underline focus-gold">{PHONE}</a>
              </div>
              <div className="flex flex-wrap items-center justify-center gap-4 text-xs text-slate-500">
                <a href="/mentions-legales" className="hover:text-slate-300 transition-colors focus-gold">Mentions légales</a>
                <span aria-hidden="true">•</span>
                <a href="/mentions-legales#rgpd" className="hover:text-slate-300 transition-colors focus-gold">Politique de confidentialité</a>
              </div>
            </div>
            <p className="text-xs text-slate-600 text-center mt-6">
              © {new Date().getFullYear()} Albert Serrurerie — Tous droits réservés
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
