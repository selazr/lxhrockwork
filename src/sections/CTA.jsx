import { SectionHeader } from "@/components/SectionHeader";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function CTA() {
  return (
    <section id="cta" className="relative mx-auto max-w-6xl px-6 py-10">
      <div className="rounded-3xl border border-white/10 bg-white/5 p-6 md:p-10">
        <SectionHeader
          eyebrow="Contacto"
          title="Solicita propuesta"
          desc="Formulario sin backend (por ahora). Luego lo conectamos a email, CRM o lo que uses."
        />

        <div className="grid gap-6 md:grid-cols-2">
          <Card className="border-white/10 bg-white/5">
            <CardContent className="p-6 space-y-4">
              <div>
                <Label>Empresa</Label>
                <Input className="mt-2" placeholder="Nombre de empresa" />
              </div>
              <div>
                <Label>Email</Label>
                <Input className="mt-2" placeholder="correo@empresa.com" />
              </div>
              <div>
                <Label>Resumen</Label>
                <Input className="mt-2" placeholder="Qué necesitas tematizar, medidas aproximadas, entorno..." />
              </div>

              <Button className="w-full rounded-2xl">Enviar (demo)</Button>

              <p className="text-xs text-white/50">
                En una SPA sin backend, esto puede abrir mailto:, guardar en localStorage o integrarse luego.
              </p>
            </CardContent>
          </Card>

          <div className="rounded-3xl border border-white/10 bg-zinc-950/40 p-6">
            <p className="text-sm font-semibold">Qué incluir en tu solicitud</p>
            <ul className="mt-3 space-y-2 text-sm text-white/70">
              <li>• Ubicación: interior/exterior/húmedo</li>
              <li>• Medidas aproximadas</li>
              <li>• Referencias visuales (estilo de roca)</li>
              <li>• Plazo estimado</li>
            </ul>

            <div className="mt-6">
              <Button asChild variant="secondary" className="rounded-2xl">
                <a href="#configurador">Volver al configurador</a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
