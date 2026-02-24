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
} from "lucide-react";
import { Button } from "@/components/ui/button";

gsap.registerPlugin(ScrollTrigger);

const PHONE = "03 74 47 47 93";
const PHONE_LINK = "tel:+33374474793";

/* ─── Trust Pillar Data ─── */
const trustPillars = [
  { icon: Timer, title: "Intervention < 30 min", desc: "Un technicien qualifié chez vous en moins de 30 minutes." },
  { icon: FileText, title: "Tarifs transparents", desc: "Devis gratuit et sans surprise avant toute intervention." },
  { icon: Shield, title: "Agréé assurance", desc: "Prise en charge facilitée avec votre assurance habitation." },
  { icon: Clock, title: "Disponible 24h/24", desc: "Nuit, week-end, jour férié — nous sommes toujours là." },
];

/* ─── Services Data ─── */
const services = [
  { icon: DoorOpen, title: "Ouverture de porte", desc: "Porte claquée ou fermée à clé ? Ouverture rapide sans dégât." },
  { icon: KeyRound, title: "Changement de serrure", desc: "Remplacement et installation de serrures de toutes marques." },
  { icon: ShieldAlert, title: "Sécurisation effraction", desc: "Intervention immédiate pour sécuriser votre logement après un cambriolage." },
  { icon: Lock, title: "Porte blindée", desc: "Installation de portes blindées et serrures haute sécurité." },
];

/* ─── Process Steps ─── */
const steps = [
  { icon: PhoneCall, num: "1", title: "Vous appelez", desc: "Contactez-nous au 03 74 47 47 93. Réponse immédiate." },
  { icon: Wrench, num: "2", title: "On intervient", desc: "Un technicien arrive chez vous en moins de 30 minutes." },
  { icon: CheckCircle2, num: "3", title: "Problème résolu", desc: "Intervention efficace, propre et garantie." },
];

const Index = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const trustRef = useRef<HTMLDivElement>(null);
  const servicesRef = useRef<HTMLDivElement>(null);
  const processRef = useRef<HTMLDivElement>(null);
  const zoneRef = useRef<HTMLDivElement>(null);
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

      {/* ─── HERO SECTION ─── */}
      <section ref={heroRef} className="hero-pattern geometric-pattern min-h-screen flex items-center justify-center relative pt-0 md:pt-14 pb-20 md:pb-0">
        <div className="container max-w-4xl mx-auto px-4 text-center">
          <div className="hero-anim inline-flex items-center gap-2 bg-secondary/60 backdrop-blur-sm border border-border/50 rounded-full px-4 py-1.5 mb-8">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
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
      <section ref={trustRef} className="py-20 md:py-28 bg-card">
        <div className="container max-w-6xl mx-auto px-4">
          <h2 className="section-title font-display text-3xl md:text-4xl font-bold text-center mb-4">
            Pourquoi nous <span className="text-gradient-gold">faire confiance</span> ?
          </h2>
          <p className="section-title text-muted-foreground text-center max-w-xl mx-auto mb-14">
            Des engagements concrets pour votre tranquillité.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {trustPillars.map((p) => (
              <div
                key={p.title}
                className="trust-card glass-card p-6 text-center group hover:glow-gold transition-all duration-300 hover:-translate-y-1"
              >
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                  <p.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="font-display font-bold text-lg mb-2">{p.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── SERVICES SECTION ─── */}
      <section ref={servicesRef} className="py-20 md:py-28">
        <div className="container max-w-6xl mx-auto px-4">
          <h2 className="section-title font-display text-3xl md:text-4xl font-bold text-center mb-4">
            Nos <span className="text-gradient-gold">services</span>
          </h2>
          <p className="section-title text-muted-foreground text-center max-w-xl mx-auto mb-14">
            Une solution pour chaque situation d'urgence.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {services.map((s) => (
              <div
                key={s.title}
                className="service-card glass-card p-7 group hover:glow-gold transition-all duration-300 hover:-translate-y-1"
              >
                <div className="flex items-start gap-5">
                  <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary/20 transition-colors">
                    <s.icon className="w-7 h-7 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-display font-bold text-lg mb-2">{s.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed mb-4">{s.desc}</p>
                    <a href={PHONE_LINK} className="inline-flex items-center gap-1.5 text-primary text-sm font-semibold hover:gap-2.5 transition-all">
                      <Phone className="w-3.5 h-3.5" />
                      Appeler pour ce service
                      <ChevronRight className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── PROCESS SECTION ─── */}
      <section ref={processRef} className="py-20 md:py-28 bg-card">
        <div className="container max-w-5xl mx-auto px-4">
          <h2 className="section-title font-display text-3xl md:text-4xl font-bold text-center mb-4">
            Comment ça <span className="text-gradient-gold">marche</span> ?
          </h2>
          <p className="section-title text-muted-foreground text-center max-w-xl mx-auto mb-14">
            3 étapes simples pour résoudre votre problème.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
            {/* Connector line (desktop) */}
            <div className="hidden md:block absolute top-[3.5rem] left-[16.67%] right-[16.67%] h-0.5 bg-border">
              <div className="absolute inset-0 gradient-gold opacity-30" />
            </div>
            {steps.map((s) => (
              <div key={s.num} className="process-step text-center relative">
                <div className="w-16 h-16 rounded-full gradient-gold flex items-center justify-center mx-auto mb-5 text-primary-foreground font-display text-2xl font-bold relative z-10">
                  {s.num}
                </div>
                <h3 className="font-display font-bold text-xl mb-2">{s.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed max-w-xs mx-auto">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── ZONE D'INTERVENTION ─── */}
      <section ref={zoneRef} className="py-20 md:py-28">
        <div className="container max-w-4xl mx-auto px-4 text-center">
          <div className="glass-card p-10 md:p-14">
            <div className="w-16 h-16 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-6">
              <MapPin className="w-8 h-8 text-primary" />
            </div>
            <h2 className="section-title font-display text-3xl md:text-4xl font-bold mb-4">
              Nous intervenons <span className="text-gradient-gold">près de chez vous</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto mb-6 leading-relaxed">
              Notre réseau de serruriers qualifiés couvre votre secteur. Où que vous soyez, un technicien
              peut être chez vous en <strong className="text-foreground">moins de 30 minutes</strong>.
              Disponibilité garantie, même les nuits, week-ends et jours fériés.
            </p>
            <a href={PHONE_LINK} className="inline-flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all">
              <Phone className="w-4 h-4" />
              Vérifier la disponibilité dans votre zone
              <ChevronRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </section>

      {/* ─── CTA FINAL ─── */}
      <section ref={ctaRef} className="py-20 md:py-28 relative overflow-hidden">
        <div className="absolute inset-0 gradient-gold opacity-[0.07]" />
        <div className="container max-w-4xl mx-auto px-4 text-center relative z-10">
          <h2 className="font-display text-3xl md:text-5xl font-bold mb-4">
            Une urgence ?
            <br />
            <span className="text-gradient-gold">Appelez maintenant.</span>
          </h2>
          <p className="text-muted-foreground max-w-lg mx-auto mb-8">
            Intervention rapide, devis gratuit, tarifs transparents. Ne restez pas bloqué.
          </p>
          <a href={PHONE_LINK} className="inline-block">
            <div className="gradient-gold animate-pulse-gold rounded-2xl px-10 py-6 inline-flex flex-col items-center gap-1 transition-transform hover:scale-105">
              <span className="text-primary-foreground font-display text-4xl md:text-6xl font-bold tracking-wider">
                {PHONE}
              </span>
              <span className="text-primary-foreground/80 text-sm font-medium mt-1">
                Appel gratuit • Disponible 24h/24
              </span>
            </div>
          </a>
        </div>
      </section>

      {/* ─── FOOTER ─── */}
      <footer className="border-t border-border py-10 pb-24 md:pb-10">
        <div className="container max-w-6xl mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <Lock className="w-4 h-4 text-primary" />
              <span className="font-display font-bold text-foreground">Serrurier d'Urgence</span>
            </div>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <span>24h/24 • 7j/7</span>
              <span className="hidden md:inline">•</span>
              <a href={PHONE_LINK} className="text-primary font-semibold hover:underline">{PHONE}</a>
            </div>
            <p className="text-xs text-muted-foreground/60">
              © {new Date().getFullYear()} Tous droits réservés
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
