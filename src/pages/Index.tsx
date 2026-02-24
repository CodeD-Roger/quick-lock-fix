import { useEffect, useRef } from "react";
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
} from "lucide-react";
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

/* ─── Trust Pillar Data ─── */
const trustPillars = [
  { icon: Timer, title: "Intervention < 30 min", desc: "Un technicien qualifié chez vous en moins de 30 minutes, où que vous soyez." },
  { icon: FileText, title: "Tarifs transparents", desc: "Devis gratuit et détaillé avant toute intervention. Aucune surprise sur la facture." },
  { icon: Shield, title: "Agréé assurance", desc: "Prise en charge facilitée avec votre assurance habitation. Facture conforme." },
  { icon: Clock, title: "Disponible 24h/24", desc: "Nuit, week-end, jour férié — nous sommes toujours disponibles pour vous." },
];

/* ─── Services Data ─── */
const services = [
  { icon: DoorOpen, title: "Ouverture de porte", desc: "Porte claquée ou fermée à clé ? Ouverture rapide et sans dégât grâce à nos outils de précision." },
  { icon: KeyRound, title: "Changement de serrure", desc: "Remplacement et installation de serrures de toutes marques : Vachette, Fichet, Bricard, Mul-T-Lock." },
  { icon: ShieldAlert, title: "Sécurisation après effraction", desc: "Intervention immédiate pour sécuriser votre logement après un cambriolage. Remplacement de porte et serrure." },
  { icon: Lock, title: "Porte blindée & serrure renforcée", desc: "Installation de portes blindées certifiées et serrures haute sécurité multipoints." },
];

/* ─── Process Steps ─── */
const steps = [
  { num: "1", title: "Vous appelez", desc: "Contactez-nous au 03 74 47 47 93. Réponse immédiate, diagnostic par téléphone." },
  { num: "2", title: "On intervient", desc: "Un technicien qualifié arrive chez vous en moins de 30 minutes avec tout le matériel." },
  { num: "3", title: "Problème résolu", desc: "Intervention efficace, propre et garantie. Vous réglez après satisfaction." },
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

const Index = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const trustRef = useRef<HTMLDivElement>(null);
  const servicesRef = useRef<HTMLDivElement>(null);
  const processRef = useRef<HTMLDivElement>(null);
  const zoneRef = useRef<HTMLDivElement>(null);
  const faqRef = useRef<HTMLDivElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Hero
      gsap.from(heroRef.current!.querySelectorAll(".hero-anim"), {
        y: 40,
        opacity: 0,
        duration: 0.8,
        stagger: 0.15,
        ease: "power3.out",
      });

      // Sections with scroll trigger
      const sections = [
        { ref: trustRef, selector: ".trust-card" },
        { ref: servicesRef, selector: ".service-card" },
        { ref: processRef, selector: ".process-step" },
        { ref: faqRef, selector: ".faq-item" },
      ];

      sections.forEach(({ ref, selector }) => {
        gsap.from(ref.current!.querySelectorAll(selector), {
          scrollTrigger: {
            trigger: ref.current,
            start: "top 85%",
            once: true,
          },
          y: 50,
          opacity: 0,
          duration: 0.7,
          stagger: 0.12,
          ease: "power3.out",
        });
      });

      // Section titles
      document.querySelectorAll(".section-title").forEach((el) => {
        gsap.from(el, {
          scrollTrigger: { trigger: el, start: "top 88%", once: true },
          y: 30,
          opacity: 0,
          duration: 0.6,
          ease: "power3.out",
        });
      });

      // Zone
      gsap.from(zoneRef.current!, {
        scrollTrigger: { trigger: zoneRef.current, start: "top 85%", once: true },
        y: 40,
        opacity: 0,
        duration: 0.7,
        ease: "power3.out",
      });

      // CTA
      gsap.from(ctaRef.current!, {
        scrollTrigger: { trigger: ctaRef.current, start: "top 85%", once: true },
        scale: 0.95,
        opacity: 0,
        duration: 0.7,
        ease: "power3.out",
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      {/* ─── STICKY BAR ─── */}
      <div className="fixed bottom-0 left-0 right-0 z-50 md:top-0 md:bottom-auto">
        <div className="gradient-gold px-4 py-3 flex items-center justify-between md:justify-center gap-3">
          <div className="flex items-center gap-2 text-primary-foreground font-display font-bold text-sm md:text-base">
            <Phone className="w-4 h-4" />
            <span className="hidden md:inline">Urgence Serrurier —</span>
            <a href={PHONE_LINK} className="underline decoration-2 underline-offset-2 tracking-wide">
              {PHONE}
            </a>
          </div>
          <a href={PHONE_LINK} className="md:ml-4">
            <Button
              size="sm"
              className="bg-primary-foreground text-primary hover:bg-primary-foreground/90 font-bold text-xs md:text-sm rounded-full px-5"
            >
              <Phone className="w-3.5 h-3.5 mr-1" />
              Appeler
            </Button>
          </a>
        </div>
      </div>

      {/* ─── HERO SECTION (inchangé) ─── */}
      <section ref={heroRef} className="hero-pattern geometric-pattern min-h-screen flex items-center justify-center relative pt-0 md:pt-14 pb-20 md:pb-0">
        <div className="container max-w-4xl mx-auto px-4 text-center">
          <div className="hero-anim inline-flex items-center gap-2 bg-secondary/60 backdrop-blur-sm border border-border/50 rounded-full px-4 py-1.5 mb-8">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            <span className="text-sm text-muted-foreground font-medium">Disponible maintenant — 24h/24 • 7j/7</span>
          </div>

          <h1 className="hero-anim font-display text-4xl sm:text-5xl md:text-7xl font-bold leading-tight mb-6">
            Serrurier d'Urgence
            <br />
            <span className="text-gradient-gold">Intervention Rapide</span>
          </h1>

          <p className="hero-anim text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
            Porte claquée, serrure cassée, effraction ? Notre équipe de serruriers qualifiés intervient
            en <strong className="text-foreground">moins de 30 minutes</strong>, partout et à tout moment.
          </p>

          <div className="hero-anim mb-8">
            <a href={PHONE_LINK} className="inline-block">
              <div className="gradient-gold animate-pulse-gold rounded-2xl px-8 py-5 md:px-12 md:py-6 inline-flex flex-col items-center gap-1 transition-transform hover:scale-105">
                <span className="text-primary-foreground text-sm font-medium tracking-wider uppercase">Appelez maintenant</span>
                <span className="text-primary-foreground font-display text-3xl md:text-5xl font-bold tracking-wider">
                  {PHONE}
                </span>
              </div>
            </a>
          </div>

          <div className="hero-anim flex flex-wrap items-center justify-center gap-4 text-sm text-muted-foreground">
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-primary" />
              Devis gratuit
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-primary" />
              Sans surprise
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-primary" />
              Agréé assurance
            </span>
          </div>
        </div>
      </section>

      {/* ─── TRUST SECTION ─── */}
      <section ref={trustRef} className="section-light py-20 md:py-28">
        <div className="container max-w-6xl mx-auto px-4">
          <h2 className="section-title font-display text-3xl md:text-4xl font-bold text-center mb-4">
            Pourquoi nous <span className="text-gradient-gold">faire confiance</span> ?
          </h2>
          <p className="section-title text-center max-w-xl mx-auto mb-14" style={{ color: 'hsl(var(--section-muted))' }}>
            Des engagements concrets pour votre tranquillité.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {trustPillars.map((p) => (
              <div
                key={p.title}
                className="trust-card navy-card p-8 text-center"
              >
                <div className="w-16 h-16 rounded-2xl gradient-gold flex items-center justify-center mx-auto mb-5">
                  <p.icon className="w-8 h-8 text-primary-foreground" />
                </div>
                <h3 className="font-display font-bold text-lg mb-3 text-white">{p.title}</h3>
                <p className="text-sm leading-relaxed text-slate-300">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── SERVICES SECTION ─── */}
      <section ref={servicesRef} className="section-light-alt py-20 md:py-28">
        <div className="container max-w-6xl mx-auto px-4">
          <h2 className="section-title font-display text-3xl md:text-4xl font-bold text-center mb-4">
            Nos <span className="text-gradient-gold">services</span>
          </h2>
          <p className="section-title text-center max-w-xl mx-auto mb-14" style={{ color: 'hsl(var(--section-muted))' }}>
            Une solution pour chaque situation d'urgence.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {services.map((s) => (
              <div
                key={s.title}
                className="service-card navy-card p-8"
              >
                <div className="flex items-start gap-5">
                  <div className="w-[60px] h-[60px] min-w-[60px] rounded-2xl gradient-gold flex items-center justify-center">
                    <s.icon className="w-7 h-7 text-primary-foreground" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-display font-bold text-lg mb-2 text-white">{s.title}</h3>
                    <p className="text-sm text-slate-300 leading-relaxed mb-4">{s.desc}</p>
                    <a href={PHONE_LINK} className="inline-flex items-center gap-1.5 text-gold-light text-sm font-semibold hover:gap-2.5 transition-all">
                      <Phone className="w-3.5 h-3.5" />
                      Appeler pour ce service
                      <ArrowRight className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── PROCESS SECTION ─── */}
      <section ref={processRef} className="section-light py-20 md:py-28">
        <div className="container max-w-5xl mx-auto px-4">
          <h2 className="section-title font-display text-3xl md:text-4xl font-bold text-center mb-4">
            Comment ça <span className="text-gradient-gold">marche</span> ?
          </h2>
          <p className="section-title text-center max-w-xl mx-auto mb-14" style={{ color: 'hsl(var(--section-muted))' }}>
            3 étapes simples pour résoudre votre problème.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
            {/* Connector line (desktop) */}
            <div className="hidden md:block absolute top-10 left-[16.67%] right-[16.67%] h-0.5 border-t-2 border-dashed border-primary/40" />
            {steps.map((s) => (
              <div key={s.num} className="process-step text-center relative">
                <div className="w-20 h-20 rounded-full gradient-gold flex items-center justify-center mx-auto mb-6 text-primary-foreground font-display text-3xl font-bold relative z-10 shadow-lg">
                  {s.num}
                </div>
                <div className="navy-card p-5 text-left">
                  <h3 className="font-display font-bold text-lg mb-2 text-white">{s.title}</h3>
                  <p className="text-sm text-slate-300 leading-relaxed">{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── ZONE D'INTERVENTION ─── */}
      <section ref={zoneRef} className="section-light-alt py-20 md:py-28">
        <div className="container max-w-4xl mx-auto px-4">
          <h2 className="section-title font-display text-3xl md:text-4xl font-bold text-center mb-14">
            Nous intervenons <span className="text-gradient-gold">près de chez vous</span>
          </h2>
          <div className="navy-card p-10 md:p-14 text-center">
            <div className="w-16 h-16 rounded-2xl gradient-gold flex items-center justify-center mx-auto mb-6">
              <MapPin className="w-8 h-8 text-primary-foreground" />
            </div>
            <p className="text-slate-300 max-w-2xl mx-auto mb-8 leading-relaxed text-base">
              Notre réseau de serruriers qualifiés couvre votre secteur. Où que vous soyez, un technicien
              peut être chez vous en <strong className="text-white">moins de 30 minutes</strong>.
              Disponibilité garantie, même les nuits, week-ends et jours fériés.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-md mx-auto mb-8">
              {[
                "Intervention rapide garantie",
                "Couverture large zone",
                "Techniciens de proximité",
                "Disponible 24h/24 7j/7",
              ].map((item) => (
                <div key={item} className="flex items-center gap-2 text-sm text-slate-200">
                  <CheckCircle2 className="w-4 h-4 text-gold-light shrink-0" />
                  {item}
                </div>
              ))}
            </div>
            <a href={PHONE_LINK}>
              <Button className="gradient-gold text-primary-foreground font-bold rounded-full px-8 py-3 text-base hover:opacity-90 transition-opacity">
                <Phone className="w-4 h-4 mr-2" />
                Vérifier la disponibilité
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* ─── FAQ SECTION ─── */}
      <section ref={faqRef} className="section-light py-20 md:py-28">
        <div className="container max-w-3xl mx-auto px-4">
          <h2 className="section-title font-display text-3xl md:text-4xl font-bold text-center mb-4">
            Questions <span className="text-gradient-gold">fréquentes</span>
          </h2>
          <p className="section-title text-center max-w-xl mx-auto mb-14" style={{ color: 'hsl(var(--section-muted))' }}>
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
      <section ref={ctaRef} className="py-20 md:py-28" style={{ background: 'hsl(var(--card-navy))' }}>
        <div className="container max-w-4xl mx-auto px-4 text-center">
          <h2 className="font-display text-3xl md:text-5xl font-bold mb-4 text-white">
            Une urgence ?
            <br />
            <span className="text-gradient-gold">Appelez maintenant.</span>
          </h2>
          <p className="text-slate-400 max-w-lg mx-auto mb-10">
            Intervention rapide, devis gratuit, tarifs transparents. Ne restez pas bloqué.
          </p>
          <a href={PHONE_LINK} className="inline-block mb-8">
            <div className="gradient-gold animate-pulse-gold rounded-2xl px-10 py-6 inline-flex flex-col items-center gap-1 transition-transform hover:scale-105">
              <span className="text-primary-foreground font-display text-4xl md:text-6xl font-bold tracking-wider">
                {PHONE}
              </span>
              <span className="text-primary-foreground/80 text-sm font-medium mt-1">
                Appel gratuit • Disponible 24h/24
              </span>
            </div>
          </a>
          <div className="flex flex-wrap items-center justify-center gap-4">
            {[
              { icon: BadgeCheck, label: "Devis gratuit" },
              { icon: Zap, label: "Intervention rapide" },
              { icon: HeadphonesIcon, label: "24h/24 • 7j/7" },
            ].map((b) => (
              <div key={b.label} className="flex items-center gap-2 bg-white/5 border border-white/10 rounded-full px-5 py-2.5 text-sm text-slate-200">
                <b.icon className="w-4 h-4 text-gold-light" />
                {b.label}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── FOOTER ─── */}
      <footer className="py-10 pb-24 md:pb-10" style={{ background: 'hsl(var(--card-navy))' }}>
        <div className="border-t border-white/10 pt-10">
          <div className="container max-w-6xl mx-auto px-4">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6 text-sm">
              <div className="flex items-center gap-2">
                <Lock className="w-4 h-4 text-gold-light" />
                <span className="font-display font-bold text-white">Serrurier d'Urgence</span>
              </div>
              <div className="flex flex-wrap items-center justify-center gap-4 text-slate-400">
                <span>24h/24 • 7j/7</span>
                <span className="hidden md:inline">•</span>
                <a href={PHONE_LINK} className="text-gold-light font-semibold hover:underline">{PHONE}</a>
              </div>
              <div className="flex flex-wrap items-center justify-center gap-4 text-xs text-slate-500">
                <span>Mentions légales</span>
                <span>•</span>
                <span>Politique de confidentialité</span>
              </div>
            </div>
            <p className="text-xs text-slate-600 text-center mt-6">
              © {new Date().getFullYear()} Serrurier d'Urgence — Tous droits réservés
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
