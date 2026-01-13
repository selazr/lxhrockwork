import { useMemo, useState } from "react";
import { SectionHeader } from "@/components/SectionHeader";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Slider } from "@/components/ui/slider";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export default function Configurator() {
  const [shape, setShape] = useState("Bloque / pared");
  const [width, setWidth] = useState(200); // cm
  const [height, setHeight] = useState(120); // cm
  const [detail, setDetail] = useState([60]); // 0-100
  const [useCase, setUseCase] = useState("Exterior");

  const summary = useMemo(() => {
    const d = detail?.[0] ?? 60;
    return {
      complexity:
        d < 35 ? "Baja" : d < 70 ? "Media" : "Alta",
      note:
        "Esto es un configurador UX (no cálculo real). Sirve para guiar una propuesta comercial.",
    };
  }, [detail]);

  return (
    <section id="configurador" className="relative mx-auto max-w-6xl px-6 py-10">
      <SectionHeader
        eyebrow="Producto"
        title="Configura una pieza (demo interactiva)"
        desc="El objetivo es que el cliente entienda posibilidades: forma, escala y nivel de detalle, sin hablar aún de backend."
      />

      <div className="grid gap-6 md:grid-cols-2">
        <Card className="border-white/10 bg-white/5">
          <CardHeader>
            <CardTitle>Parámetros</CardTitle>
          </CardHeader>
          <CardContent className="space-y-5">
            <div>
              <Label>Forma / tipo</Label>
              <Input
                value={shape}
                onChange={(e) => setShape(e.target.value)}
                className="mt-2"
                placeholder="Ej.: arco, roca suelta, pared, cascada..."
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <Label>Ancho (cm)</Label>
                <Input
                  type="number"
                  value={width}
                  onChange={(e) => setWidth(Number(e.target.value))}
                  className="mt-2"
                />
              </div>
              <div>
                <Label>Alto (cm)</Label>
                <Input
                  type="number"
                  value={height}
                  onChange={(e) => setHeight(Number(e.target.value))}
                  className="mt-2"
                />
              </div>
            </div>

            <div>
              <Label>Nivel de detalle</Label>
              <div className="mt-3">
                <Slider value={detail} onValueChange={setDetail} max={100} step={1} />
              </div>
              <p className="mt-2 text-xs text-white/60">
                Detalle: <span className="text-white/80">{detail[0]}</span>/100
              </p>
            </div>

            <div>
              <Label>Uso</Label>
              <div className="mt-2 flex flex-wrap gap-2">
                {["Interior", "Exterior", "Húmedo"].map((x) => (
                  <Button
                    key={x}
                    type="button"
                    variant={useCase === x ? "default" : "secondary"}
                    className="rounded-2xl"
                    onClick={() => setUseCase(x)}
                  >
                    {x}
                  </Button>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="border-white/10 bg-white/5">
          <CardHeader>
            <CardTitle>Resumen</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="overflow-hidden rounded-2xl border border-white/10">
              <img src="/image.jpg" alt="Preview (placeholder)" className="h-52 w-full object-cover" />
            </div>

            <div className="flex flex-wrap gap-2">
              <Badge variant="secondary">{shape}</Badge>
              <Badge variant="secondary">{width}×{height} cm</Badge>
              <Badge variant="secondary">Detalle: {summary.complexity}</Badge>
              <Badge variant="secondary">{useCase}</Badge>
            </div>

            <p className="text-sm text-white/70">{summary.note}</p>

            <Button className="w-full rounded-2xl" asChild>
              <a href="#cta">Solicitar propuesta</a>
            </Button>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
