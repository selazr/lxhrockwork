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
  { name: "Marriott", src: "/brands/iberostar.svg" },
  {
    name: "Hilton",
    src: "/brands/KatmanduPark.png",
    className: "brightness-60 contrast-125 dark:brightness-110",
  },
  { name: "Four Seasons", src: "/brands/RCI_Flag.svg" },
  { name: "Disney", src: "/brands/santguli.svg" },
  { name: "Hard Rock", src: "/brands/Pairi.png" },
  {
    name: "MGM",
    src: "/brands/central-forest-logo.png",
    className: "brightness-60 contrast-125 dark:brightness-110",
  },
];

export default function Configurator() {
  return (
    <section id="configurator" className="relative mx-auto max-w-6xl px-6 py-12">
      <div className="rounded-4xl border border-foreground/10 bg-foreground/5 p-6 shadow-2xl shadow-black/20 md:p-10">
        <SectionHeader
          eyebrow="Trusted by"
          title="Clients and brands we have partnered with"
          desc="Experience across hospitality, entertainment, and public-space projects at every scale."
        />

        <div className="mt-8 grid gap-6 md:grid-cols-[1.05fr_0.95fr]">
          <div className="rounded-3xl border border-foreground/10 bg-background/40 p-6">
            <h3 className="text-lg font-semibold text-foreground">Featured clients</h3>
            <p className="mt-2 text-sm text-foreground/70">
              We collaborate with creative teams, operators, and developers who pursue memorable experiences.
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

          <div className="rounded-3xl border border-foreground/10 bg-background/40 p-6">
            <h3 className="text-lg font-semibold text-foreground">Partner brands</h3>
            <p className="mt-2 text-sm text-foreground/70">
              A selection of recognized brands we have helped deliver unique experiences for.
            </p>
            <div className="mt-5 grid gap-4 sm:grid-cols-2">
              {brands.map((brand) => (
                <div
                  key={brand.name}
                  className="flex items-center justify-center rounded-2xl border border-foreground/10 bg-foreground/5 px-4 py-6 shadow-sm transition hover:-translate-y-0.5 hover:border-foreground/20 hover:bg-foreground/10"
                >
                  <img
                    src={brand.src}
                    alt={`${brand.name} logo`}
                    className={`h-10 w-28 object-contain opacity-90 grayscale-0 transition hover:opacity-100 filter brightness-100 contrast-100 dark:brightness-110 dark:contrast-100 ${
                      brand.className ?? ""
                    }`}
                  />
                </div>
              ))}
            </div>
            <div className="mt-6 rounded-2xl border border-foreground/10 bg-background/60 p-4">
              <div className="flex flex-wrap items-center justify-between gap-3 text-xs text-foreground/70">
                <span className="font-semibold text-foreground">120+ projects delivered</span>
                <span>Hospitality, leisure, and public spaces</span>
                <span>LatAm and U.S.</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
