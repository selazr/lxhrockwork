import { SectionHeader } from "@/components/SectionHeader";

const clients = [
  "Theme parks and family destinations",
  "Luxury hotels and resorts",
  "Retail and entertainment centers",
  "Real estate developers and master plans",
  "Restaurants and lifestyle concepts",
  "Municipalities and public spaces",
];

const brands = [
  {
    name: "Marriott",
    src: "/brands/iberostar.svg",
  },
  {
    name: "Hilton",
    src: "/brands/KatmanduPark.png",
  },
  {
    name: "Four Seasons",
    src: "/brands/RCI_Flag.svg",
  },
  {
    name: "Disney",
    src: "/brands/santguli.svg",
  },
  {
    name: "Hard Rock",
    src: "/brands/Pairi.png",
  },
  {
    name: "MGM",
    src: "/brands/central-forest-logo.png",
  },
];

export default function Configurator() {
  return (
    <section id="brands" className="relative mx-auto max-w-6xl px-6 py-12">
      <div className="rounded-4xl border border-foreground/10 bg-muted/60 p-6 shadow-2xl shadow-black/20 dark:bg-foreground/5 md:p-10">
        <SectionHeader
          eyebrow="Trusted by"
          title="Clients and brands we have partnered with"
          desc="Experience across hospitality, entertainment, and public-space projects at every scale."
        />

        <div className="mt-8 grid gap-6 md:grid-cols-[1.05fr_0.95fr]">
          <div className="rounded-3xl border border-foreground/10 bg-muted/40 p-6 dark:bg-background/40">
            <h3 className="text-lg font-semibold text-foreground">Featured clients</h3>
            <p className="mt-2 text-sm text-foreground/70">
              We partner with creative teams, operators, and developers to deliver memorable guest experiences.
            </p>
            <ul className="mt-4 space-y-3 text-sm text-foreground/80">
              {clients.map((client) => (
                <li key={client} className="flex items-start gap-3">
                  <span className="mt-1 h-2 w-2 rounded-full bg-primary" />
                  <span>{client}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-3xl border border-foreground/10 bg-muted/40 p-6 dark:bg-background/40">
            <h3 className="text-lg font-semibold text-foreground">Partner brands</h3>
            <p className="mt-2 text-sm text-foreground/70">
              A selection of recognized brands that have trusted us to bring unique experiences to life.
            </p>
            <div className="mt-5 grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4">
              {brands.map((brand) => (
                <div
                  key={brand.name}
                  className={`flex items-center justify-center rounded-2xl border border-foreground/10 bg-muted/70 px-3 py-4 shadow-sm transition hover:-translate-y-0.5 hover:border-foreground/20 hover:bg-muted/80 dark:bg-white/10 dark:hover:bg-white/15 sm:px-4 sm:py-6 ${
                    brand.tileClassName ?? ""
                  }`}
                >
                  <img
                    src={brand.src}
                    alt={`${brand.name} logo`}
                    className="h-8 w-24 object-contain opacity-90 grayscale transition hover:opacity-100 filter brightness-0 contrast-100 dark:invert dark:brightness-200 dark:contrast-100 sm:h-10 sm:w-28"
                  />
                </div>
              ))}
            </div>
            <div className="mt-6 rounded-2xl border border-foreground/10 bg-muted/60 p-4 dark:bg-background/60">
              <div className="flex flex-wrap items-center justify-between gap-3 text-xs text-foreground/70">
                <span className="font-semibold text-foreground">120+ projects delivered</span>
                <span>Hospitality, leisure, and public spaces</span>
                <span>Latin America and the U.S.</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
