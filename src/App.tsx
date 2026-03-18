import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import MentionsLegales from "./pages/MentionsLegales";
import SerrurierMulhouse from "./pages/SerrurierMulhouse";
import SerrurierColmar from "./pages/SerrurierColmar";
import SerrurierSaintLouis from "./pages/SerrurierSaintLouis";
import SerrurierWittenheim from "./pages/SerrurierWittenheim";
import SerrurierIllzach from "./pages/SerrurierIllzach";
import SerrurierKingersheim from "./pages/SerrurierKingersheim";
import SerrurierRixheim from "./pages/SerrurierRixheim";
import SerrurierRiedisheim from "./pages/SerrurierRiedisheim";
import SerrurierCernay from "./pages/SerrurierCernay";
import SerrurierGuebwiller from "./pages/SerrurierGuebwiller";
import SerrurierWittelsheim from "./pages/SerrurierWittelsheim";
import SerrurierPfastatt from "./pages/SerrurierPfastatt";
import SerrurierThann from "./pages/SerrurierThann";
import SerrurierWintzenheim from "./pages/SerrurierWintzenheim";
import SerrurierSoultzHautRhin from "./pages/SerrurierSoultzHautRhin";
import SerrurierEnsisheim from "./pages/SerrurierEnsisheim";
import SerrurierHuningue from "./pages/SerrurierHuningue";
import SerrurierLutterbach from "./pages/SerrurierLutterbach";
import SerrurierBrunstattDidenheim from "./pages/SerrurierBrunstattDidenheim";
import SerrurierAltkirch from "./pages/SerrurierAltkirch";
import NotFound from "./pages/NotFound";
import CookieBanner from "./components/CookieBanner";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <CookieBanner />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/mentions-legales" element={<MentionsLegales />} />
          <Route path="/serrurier-mulhouse" element={<SerrurierMulhouse />} />
          <Route path="/serrurier-colmar" element={<SerrurierColmar />} />
          <Route path="/serrurier-saint-louis" element={<SerrurierSaintLouis />} />
          <Route path="/serrurier-wittenheim" element={<SerrurierWittenheim />} />
          <Route path="/serrurier-illzach" element={<SerrurierIllzach />} />
          <Route path="/serrurier-kingersheim" element={<SerrurierKingersheim />} />
          <Route path="/serrurier-rixheim" element={<SerrurierRixheim />} />
          <Route path="/serrurier-riedisheim" element={<SerrurierRiedisheim />} />
          <Route path="/serrurier-cernay" element={<SerrurierCernay />} />
          <Route path="/serrurier-guebwiller" element={<SerrurierGuebwiller />} />
          <Route path="/serrurier-wittelsheim" element={<SerrurierWittelsheim />} />
          <Route path="/serrurier-pfastatt" element={<SerrurierPfastatt />} />
          <Route path="/serrurier-thann" element={<SerrurierThann />} />
          <Route path="/serrurier-wintzenheim" element={<SerrurierWintzenheim />} />
          <Route path="/serrurier-soultz-haut-rhin" element={<SerrurierSoultzHautRhin />} />
          <Route path="/serrurier-ensisheim" element={<SerrurierEnsisheim />} />
          <Route path="/serrurier-huningue" element={<SerrurierHuningue />} />
          <Route path="/serrurier-lutterbach" element={<SerrurierLutterbach />} />
          <Route path="/serrurier-brunstatt-didenheim" element={<SerrurierBrunstattDidenheim />} />
          <Route path="/serrurier-altkirch" element={<SerrurierAltkirch />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
