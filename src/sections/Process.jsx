import { SectionHeader } from "@/components/SectionHeader";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

export default function Process() {
  return (
    <section className="relative mx-auto max-w-6xl px-6 py-10">
      <SectionHeader
        eyebrow="Metodología"
        title="Proceso de proyecto"
        desc="Enfocado a cliente empresa: claridad, entregables y control."
      />

      <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
        <Accordion type="single" collapsible defaultValue="step-1">
          <AccordionItem value="step-1">
            <AccordionTrigger>1) Briefing y requisitos</AccordionTrigger>
            <AccordionContent className="text-white/70">
              Definimos objetivo, ubicación, entorno (interior/exterior/húmedo), dimensiones, y look deseado.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="step-2">
            <AccordionTrigger>2) Diseño y propuesta</AccordionTrigger>
            <AccordionContent className="text-white/70">
              Concepto visual, despiece si aplica, acabados y criterios de instalación.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="step-3">
            <AccordionTrigger>3) Fabricación</AccordionTrigger>
            <AccordionContent className="text-white/70">
              Producción de piezas artificiales con textura y geometría según diseño aprobado.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="step-4">
            <AccordionTrigger>4) Instalación y entrega</AccordionTrigger>
            <AccordionContent className="text-white/70">
              Montaje planificado, control de calidad visual y cierre de proyecto.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </section>
  );
}
