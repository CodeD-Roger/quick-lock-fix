import { useState, useEffect } from "react";
import { Shield } from "lucide-react";
import { Link } from "react-router-dom";

type ConsentStatus = "accepted" | "refused" | null;

const CONSENT_KEY = "cookie_consent";

/** Load gtag.js dynamically only when consent is given */
const loadGtag = () => {
  if (document.getElementById("gtag-script")) return;

  const script = document.createElement("script");
  script.id = "gtag-script";
  script.async = true;
  script.src = "https://www.googletagmanager.com/gtag/js?id=AW-17679788787";
  document.head.appendChild(script);

  window.dataLayer = window.dataLayer || [];
  function gtag(...args: unknown[]) {
    window.dataLayer.push(args);
  }
  gtag("js", new Date());
  gtag("config", "AW-17679788787");
};

/** Remove gtag cookies and scripts */
const removeGtag = () => {
  // Remove cookies that start with _ga or _gid
  document.cookie.split(";").forEach((c) => {
    const name = c.trim().split("=")[0];
    if (name.startsWith("_ga") || name.startsWith("_gid") || name.startsWith("_gcl")) {
      document.cookie = `${name}=;expires=Thu, 01 Jan 1970 00:00:00 GMT;path=/;domain=${window.location.hostname}`;
      document.cookie = `${name}=;expires=Thu, 01 Jan 1970 00:00:00 GMT;path=/`;
    }
  });

  const script = document.getElementById("gtag-script");
  if (script) script.remove();
};

export const getConsentStatus = (): ConsentStatus => {
  return localStorage.getItem(CONSENT_KEY) as ConsentStatus;
};

export const initConsentBasedScripts = () => {
  if (getConsentStatus() === "accepted") {
    loadGtag();
  }
};

const CookieBanner = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consent = getConsentStatus();
    if (!consent) {
      setVisible(true);
    } else if (consent === "accepted") {
      loadGtag();
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem(CONSENT_KEY, "accepted");
    loadGtag();
    setVisible(false);
  };

  const handleRefuse = () => {
    localStorage.setItem(CONSENT_KEY, "refused");
    removeGtag();
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="fixed bottom-16 md:bottom-0 left-0 right-0 z-[60] p-4 md:p-6">
      <div
        className="max-w-2xl mx-auto rounded-2xl border border-border/50 p-5 md:p-6 shadow-2xl"
        style={{ background: "hsl(var(--card-navy))" }}
      >
        <div className="flex items-start gap-4">
          <div className="w-10 h-10 min-w-[40px] rounded-xl gradient-gold flex items-center justify-center">
            <Shield className="w-5 h-5 text-primary-foreground" />
          </div>
          <div className="flex-1">
            <h3 className="font-display font-bold text-white text-sm mb-1">
              🍪 Gestion des cookies
            </h3>
            <p className="text-xs text-slate-300 leading-relaxed mb-4">
              Ce site utilise des cookies de mesure d'audience (Google Ads) pour améliorer votre
              expérience. Vous pouvez accepter ou refuser ces cookies.{" "}
              <Link
                to="/mentions-legales#rgpd"
                className="text-gradient-gold hover:underline font-medium"
                style={{
                  background: "linear-gradient(135deg, hsl(38 92% 70%), hsl(38 92% 55%))",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                En savoir plus
              </Link>
            </p>
            <div className="flex items-center gap-3">
              <button
                onClick={handleRefuse}
                className="px-4 py-2 text-xs font-semibold rounded-lg border border-border/50 text-slate-300 hover:text-white hover:border-slate-400 transition-colors"
              >
                Refuser
              </button>
              <button
                onClick={handleAccept}
                className="px-5 py-2 text-xs font-bold rounded-lg gradient-gold text-primary-foreground hover:opacity-90 transition-opacity"
              >
                Accepter
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CookieBanner;

// Extend Window for dataLayer
declare global {
  interface Window {
    dataLayer: unknown[];
  }
}
