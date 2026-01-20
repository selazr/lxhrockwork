import { SectionHeader } from "@/components/SectionHeader";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function Portfolio() {
  return (
    <section className="relative mx-auto max-w-6xl px-6 py-12">
      <div className="rounded-4xl border border-foreground/10 bg-muted/60 p-6 shadow-2xl shadow-black/20 dark:bg-foreground/5 md:p-10">
        <SectionHeader
          eyebrow="Portfolio"
          title="Use cases for artificial rockwork"
          desc="From themed attractions to hospitality, see how engineered rockwork elevates guest experiences."
        />

        <div className="grid gap-4 md:grid-cols-3">
          <Card className="overflow-hidden border-foreground/10 bg-muted/50 dark:bg-foreground/5">
            <img
              src="/ROCK6.png"
              alt="Theme park case study"
              className="aspect-[4/3] w-full h-auto object-cover"
            />
            <CardContent className="p-5">
              <div className="flex items-start justify-between gap-3">
                <p className="font-semibold">Theme park</p>
                <Badge variant="secondary">Outdoor</Badge>
              </div>
              <p className="mt-2 text-sm text-foreground/70">
                Immersive rockwork integrated with rides, water features, and high-traffic outdoor environments.
              </p>
            </CardContent>
          </Card>
          <Card className="overflow-hidden border-foreground/10 bg-muted/50 dark:bg-foreground/5">
            <img
              src="/ROCK4.png"
              alt="Hotel resort case study"
              className="aspect-[4/3] w-full h-auto object-cover"
            />
            <CardContent className="p-5">
              <div className="flex items-start justify-between gap-3">
                <p className="font-semibold">Hotel / resort</p>
                <Badge variant="secondary">Premium</Badge>
              </div>
              <p className="mt-2 text-sm text-foreground/70">
                Architectural rockwork and themed façades designed to enhance premium leisure experiences.
              </p>
            </CardContent>
          </Card>
          <Card className="overflow-hidden border-foreground/10 bg-muted/50 dark:bg-foreground/5">
            <img
              src="/ROCK.jpeg"
              alt="Experiential retail case study"
              className="aspect-[4/3] w-full h-auto object-cover"
            />
            <CardContent className="p-5">
              <div className="flex items-start justify-between gap-3">
                <p className="font-semibold">Experiential retail</p>
                <Badge variant="secondary">Indoor</Badge>
              </div>
              <p className="mt-2 text-sm text-foreground/70">
                Indoor themed environments that transform retail spaces into engaging brand experiences.
              </p>
            </CardContent>
          </Card>
          <Card className="overflow-hidden border-foreground/10 bg-muted/50 dark:bg-foreground/5">
            <img
              src="/ROCK2.png"
              alt="Event booth case study"
              className="aspect-[4/3] w-full h-auto object-cover"
            />
            <CardContent className="p-5">
              <div className="flex items-start justify-between gap-3">
                <p className="font-semibold">Event / Restaurant</p>
                <Badge variant="secondary">Temporary</Badge>
              </div>
              <p className="mt-2 text-sm text-foreground/70">
                Custom rockwork walls and themed figures created for temporary or seasonal installations.
              </p>
            </CardContent>
          </Card>
          <Card className="overflow-hidden border-foreground/10 bg-muted/50 dark:bg-foreground/5">
            <img
              src="/ROCK5.png"
              alt="Minigolf & Mountains"
              className="aspect-[4/3] w-full h-auto object-cover"
            />
            <CardContent className="p-5">
              <div className="flex items-start justify-between gap-3">
                <p className="font-semibold">Minigolf / Mountain</p>
                <Badge variant="secondary">Detail</Badge>
              </div>
              <p className="mt-2 text-sm text-foreground/70">
                Large-scale sculpted landscapes combining visual impact, durability, and walkable detail.
              </p>
            </CardContent>
          </Card>
          <Card className="overflow-hidden border-foreground/10 bg-muted/50 dark:bg-foreground/5">
            <img
              src="/ROCK3.png"
              alt="Wellness zone case study"
              className="aspect-[4/3] w-full h-auto object-cover"
            />
            <CardContent className="p-5">
              <div className="flex items-start justify-between gap-3">
                <p className="font-semibold">Wellness zone</p>
                <Badge variant="secondary">Wet area</Badge>
              </div>
              <p className="mt-2 text-sm text-foreground/70">
                Artificial rock environments designed for spas, pools, and controlled wet areas.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
