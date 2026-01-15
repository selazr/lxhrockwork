import { SectionHeader } from "@/components/SectionHeader";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const ITEMS = [
  { title: "Theme park", tag: "Outdoor" },
  { title: "Hotel / resort", tag: "Premium" },
  { title: "Experiential retail", tag: "Indoor" },
  { title: "Event / booth", tag: "Temporary" },
  { title: "Museum exhibit", tag: "Detail" },
  { title: "Wellness zone", tag: "Wet area" },
];

export default function Portfolio() {
  return (
    <section className="relative mx-auto max-w-6xl px-6 py-12">
      <div className="rounded-4xl border border-foreground/10 bg-foreground/5 p-6 shadow-2xl shadow-black/20 md:p-10">
        <SectionHeader
          eyebrow="Portfolio"
          title="Use cases and applications"
          desc="Replace these placeholders with real projects when available."
        />

        <div className="grid gap-4 md:grid-cols-3">
          {ITEMS.map((it) => (
            <Card key={it.title} className="overflow-hidden border-foreground/10 bg-foreground/5">
              <img src="/ROCK3.png" alt="Case study placeholder" className="h-40 w-full object-cover" />
              <CardContent className="p-5">
                <div className="flex items-start justify-between gap-3">
                  <p className="font-semibold">{it.title}</p>
                  <Badge variant="secondary">{it.tag}</Badge>
                </div>
                <p className="mt-2 text-sm text-foreground/70">
                  Short case summary: objective, environment, and aesthetic/functional result.
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
