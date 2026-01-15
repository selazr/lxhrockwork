import { SectionHeader } from "@/components/SectionHeader";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

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
          <Card className="overflow-hidden border-foreground/10 bg-foreground/5">
            <img src="/ROCK3.png" alt="Theme park case study" className="h-40 w-full object-cover" />
            <CardContent className="p-5">
              <div className="flex items-start justify-between gap-3">
                <p className="font-semibold">Theme park</p>
                <Badge variant="secondary">Outdoor</Badge>
              </div>
              <p className="mt-2 text-sm text-foreground/70">
                Short case summary: objective, environment, and aesthetic/functional result.
              </p>
            </CardContent>
          </Card>
          <Card className="overflow-hidden border-foreground/10 bg-foreground/5">
            <img src="/ROCK2.png" alt="Hotel resort case study" className="h-40 w-full object-cover" />
            <CardContent className="p-5">
              <div className="flex items-start justify-between gap-3">
                <p className="font-semibold">Hotel / resort</p>
                <Badge variant="secondary">Premium</Badge>
              </div>
              <p className="mt-2 text-sm text-foreground/70">
                Short case summary: objective, environment, and aesthetic/functional result.
              </p>
            </CardContent>
          </Card>
          <Card className="overflow-hidden border-foreground/10 bg-foreground/5">
            <img src="/ROCK.jpeg" alt="Experiential retail case study" className="h-40 w-full object-cover" />
            <CardContent className="p-5">
              <div className="flex items-start justify-between gap-3">
                <p className="font-semibold">Experiential retail</p>
                <Badge variant="secondary">Indoor</Badge>
              </div>
              <p className="mt-2 text-sm text-foreground/70">
                Short case summary: objective, environment, and aesthetic/functional result.
              </p>
            </CardContent>
          </Card>
          <Card className="overflow-hidden border-foreground/10 bg-foreground/5">
            <img src="/image.jpg" alt="Event booth case study" className="h-40 w-full object-cover" />
            <CardContent className="p-5">
              <div className="flex items-start justify-between gap-3">
                <p className="font-semibold">Event / booth</p>
                <Badge variant="secondary">Temporary</Badge>
              </div>
              <p className="mt-2 text-sm text-foreground/70">
                Short case summary: objective, environment, and aesthetic/functional result.
              </p>
            </CardContent>
          </Card>
          <Card className="overflow-hidden border-foreground/10 bg-foreground/5">
            <img src="/image.jpg" alt="Museum exhibit case study" className="h-40 w-full object-cover" />
            <CardContent className="p-5">
              <div className="flex items-start justify-between gap-3">
                <p className="font-semibold">Museum exhibit</p>
                <Badge variant="secondary">Detail</Badge>
              </div>
              <p className="mt-2 text-sm text-foreground/70">
                Short case summary: objective, environment, and aesthetic/functional result.
              </p>
            </CardContent>
          </Card>
          <Card className="overflow-hidden border-foreground/10 bg-foreground/5">
            <img src="/image.jpg" alt="Wellness zone case study" className="h-40 w-full object-cover" />
            <CardContent className="p-5">
              <div className="flex items-start justify-between gap-3">
                <p className="font-semibold">Wellness zone</p>
                <Badge variant="secondary">Wet area</Badge>
              </div>
              <p className="mt-2 text-sm text-foreground/70">
                Short case summary: objective, environment, and aesthetic/functional result.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
