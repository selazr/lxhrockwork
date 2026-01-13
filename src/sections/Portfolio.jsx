import { SectionHeader } from "@/components/SectionHeader";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const ITEMS = [
  { title: "Parque temático", tag: "Exterior" },
  { title: "Hotel / resort", tag: "Premium" },
  { title: "Retail experiencial", tag: "Interior" },
  { title: "Evento / stand", tag: "Temporal" },
  { title: "Museografía", tag: "Detalle" },
  { title: "Zona wellness", tag: "Húmedo" },
];

export default function Portfolio() {
  return (
    <section className="relative mx-auto max-w-6xl px-6 py-10">
      <SectionHeader
        eyebrow="Portfolio"
        title="Casos y aplicaciones"
        desc="Sustituye estos placeholders por proyectos reales cuando los tengas."
      />

      <div className="grid gap-4 md:grid-cols-3">
        {ITEMS.map((it) => (
          <Card key={it.title} className="border-white/10 bg-white/5 overflow-hidden">
            <img src="/image.jpg" alt="Caso (placeholder)" className="h-40 w-full object-cover" />
            <CardContent className="p-5">
              <div className="flex items-start justify-between gap-3">
                <p className="font-semibold">{it.title}</p>
                <Badge variant="secondary">{it.tag}</Badge>
              </div>
              <p className="mt-2 text-sm text-white/70">
                Descripción breve del caso: objetivo, entorno, y resultado estético/funcional.
              </p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
