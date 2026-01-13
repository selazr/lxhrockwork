import { SectionHeader } from "@/components/SectionHeader";

const clients = [
  "Parques temáticos y destinos familiares",
  "Hoteles y resorts de lujo",
  "Centros comerciales y entretenimiento",
  "Promotores inmobiliarios y master plans",
  "Restaurantes y conceptos lifestyle",
  "Municipios y espacios públicos",
];

const brands = [
  { name: "Marriott", src: "/brands/brand-marriott.svg" },
  { name: "Hilton", src: "/brands/brand-hilton.svg" },
  { name: "Four Seasons", src: "/brands/brand-four-seasons.svg" },
  { name: "Disney", src: "/brands/brand-disney.svg" },
  { name: "Hard Rock", src: "/brands/brand-hard-rock.svg" },
  { name: "MGM", src: "/brands/brand-mgm.svg" },
];

export default function Configurator() {
  return (
    <section id="configurator" className="relative mx-auto max-w-6xl px-6 py-12">
      <div className="rounded-4xl border border-foreground/10 bg-foreground/5 p-6 shadow-2xl shadow-black/20 md:p-10">
        <SectionHeader
          eyebrow="Confianza"
          title="Clientes y marcas con las que hemos trabajado"
          desc="Experiencia con proyectos de hospitalidad, entretenimiento y espacios públicos en todo tipo de escalas."
        />

        <div className="mt-8 grid gap-6 md:grid-cols-[1.1fr_0.9fr]">
          <div className="rounded-3xl border border-foreground/10 bg-background/40 p-6">
            <h3 className="text-lg font-semibold text-foreground">Clientes destacados</h3>
            <p className="mt-2 text-sm text-foreground/70">
              Colaboramos con equipos creativos, operadores y desarrolladores que buscan experiencias memorables.
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
            <h3 className="text-lg font-semibold text-foreground">Marcas aliadas</h3>
            <p className="mt-2 text-sm text-foreground/70">
              Una cinta continua con algunas de las marcas que han confiado en nuestro trabajo.
            </p>
            <div className="mt-5 overflow-hidden rounded-2xl border border-foreground/10 bg-foreground/5 py-4">
              <div className="brand-marquee flex items-center gap-8 px-6">
                {[...brands, ...brands].map((brand, index) => (
                  <img
                    key={`${brand.name}-${index}`}
                    src={brand.src}
                    alt={`${brand.name} logo`}
                    className="h-12 w-28 flex-none object-contain opacity-80 grayscale transition hover:opacity-100 hover:grayscale-0"
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
