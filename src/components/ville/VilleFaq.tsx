import { VilleData } from "@/data/types";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const VilleFaq = ({ data }: { data: VilleData }) => (
  <section className="py-16 md:py-24" style={{ background: "#f8fafc" }} aria-labelledby="faq-heading">
    <div className="container max-w-3xl mx-auto px-5 sm:px-6">
      <h2 id="faq-heading" className="font-display text-2xl sm:text-3xl md:text-4xl font-bold text-[#1a2c4e] text-center mb-3">
        Questions fréquentes — <span className="text-[#f97316]">{data.nom}</span>
      </h2>
      <p className="text-center text-[#64748b] max-w-xl mx-auto mb-12 text-base">
        Tout ce que vous devez savoir avant de faire appel à un serrurier à {data.nom}.
      </p>

      <Accordion type="single" collapsible className="space-y-3">
        {data.faq.map((item, i) => (
          <AccordionItem
            key={i}
            value={`faq-${i}`}
            className="bg-white border border-[#e2e8f0] rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow"
          >
            <AccordionTrigger className="px-6 py-5 text-left text-[#1a2c4e] font-display font-semibold text-[0.95rem] hover:no-underline [&>svg]:text-[#f97316]">
              {item.question}
            </AccordionTrigger>
            <AccordionContent className="px-6 pb-5 text-[#475569] leading-relaxed text-sm">
              {item.answer}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  </section>
);

export default VilleFaq;
