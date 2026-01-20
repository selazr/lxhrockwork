import { SectionHeader } from "@/components/SectionHeader";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

export default function Process() {
  return (
    <section className="relative mx-auto max-w-6xl px-6 py-12">
      <div className="rounded-4xl border border-foreground/10 bg-muted/60 p-6 shadow-2xl shadow-black/20 dark:bg-foreground/5 md:p-10">
        <SectionHeader
          eyebrow="Methodology"
          title="Project delivery process"
          desc="Built for B2B stakeholders: clarity, deliverables, and predictable control."
        />

        <div className="rounded-3xl border border-foreground/10 bg-muted/50 p-6 dark:bg-foreground/5">
          <Accordion type="single" collapsible defaultValue="step-1">
            <AccordionItem value="step-1">
              <AccordionTrigger>1) Briefing and requirements</AccordionTrigger>
              <AccordionContent className="text-foreground/70">
                We align on goals, site conditions (indoor/outdoor/wet), dimensions, and the intended look.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="step-2">
              <AccordionTrigger>2) Design and proposal</AccordionTrigger>
              <AccordionContent className="text-foreground/70">
                We deliver a visual concept, modular breakdown if needed, finish selections, and installation criteria.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="step-3">
              <AccordionTrigger>3) Fabrication</AccordionTrigger>
              <AccordionContent className="text-foreground/70">
                We produce engineered pieces with the approved textures, geometry, and structural detailing.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="step-4">
              <AccordionTrigger>4) Installation and handoff</AccordionTrigger>
              <AccordionContent className="text-foreground/70">
                We coordinate assembly, confirm visual quality, and close out the project with documentation.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </section>
  );
}
