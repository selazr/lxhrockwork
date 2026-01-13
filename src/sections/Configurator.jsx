import { useMemo, useState } from "react";
import { SectionHeader } from "@/components/SectionHeader";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Slider } from "@/components/ui/slider";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export default function Configurator() {
  const [shape, setShape] = useState("Wall / block");
  const [width, setWidth] = useState(200); // cm
  const [height, setHeight] = useState(120); // cm
  const [detail, setDetail] = useState([60]); // 0-100
  const [useCase, setUseCase] = useState("Outdoor");

  const summary = useMemo(() => {
    const d = detail?.[0] ?? 60;
    return {
      complexity:
        d < 35 ? "Low" : d < 70 ? "Medium" : "High",
      note:
        "This UX configurator is a concept tool (not a real calculation). It helps frame a commercial proposal.",
    };
  }, [detail]);

  return (
    <section id="configurator" className="relative mx-auto max-w-6xl px-6 py-12">
      <div className="rounded-4xl border border-foreground/10 bg-foreground/5 p-6 shadow-2xl shadow-black/20 md:p-10">
        <SectionHeader
          eyebrow="Product"
          title="Configure a piece (interactive demo)"
          desc="Help clients understand form, scale, and detail before jumping into backend and pricing."
        />

        <div className="grid gap-6 md:grid-cols-2">
          <Card className="border-foreground/10 bg-foreground/5">
            <CardHeader>
              <CardTitle>Parameters</CardTitle>
            </CardHeader>
            <CardContent className="space-y-5">
              <div>
                <Label>Shape / type</Label>
                <Input
                  value={shape}
                  onChange={(e) => setShape(e.target.value)}
                  className="mt-2"
                  placeholder="E.g., arch, boulder, wall, waterfall..."
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label>Width (cm)</Label>
                  <Input
                    type="number"
                    value={width}
                    onChange={(e) => setWidth(Number(e.target.value))}
                    className="mt-2"
                  />
                </div>
                <div>
                  <Label>Height (cm)</Label>
                  <Input
                    type="number"
                    value={height}
                    onChange={(e) => setHeight(Number(e.target.value))}
                    className="mt-2"
                  />
                </div>
              </div>

              <div>
                <Label>Detail level</Label>
                <div className="mt-3">
                  <Slider value={detail} onValueChange={setDetail} max={100} step={1} />
                </div>
                <p className="mt-2 text-xs text-foreground/60">
                  Detail: <span className="text-foreground/80">{detail[0]}</span>/100
                </p>
              </div>

              <div>
                <Label>Environment</Label>
                <div className="mt-2 flex flex-wrap gap-2">
                  {["Indoor", "Outdoor", "Wet area"].map((x) => (
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

          <Card className="border-foreground/10 bg-foreground/5">
            <CardHeader>
              <CardTitle>Summary</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="overflow-hidden rounded-2xl border border-foreground/10">
                <img src="/image.jpg" alt="Preview placeholder" className="h-52 w-full object-cover" />
              </div>

              <div className="flex flex-wrap gap-2">
                <Badge variant="secondary">{shape}</Badge>
                <Badge variant="secondary">{width}×{height} cm</Badge>
                <Badge variant="secondary">Detail: {summary.complexity}</Badge>
                <Badge variant="secondary">{useCase}</Badge>
              </div>

              <p className="text-sm text-foreground/70">{summary.note}</p>

              <Button className="w-full rounded-2xl" asChild>
                <a href="#contact">Request a proposal</a>
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
