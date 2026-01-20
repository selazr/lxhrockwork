import { SectionHeader } from "@/components/SectionHeader";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";

export default function Comparison() {
  const comparisonRows = [
    {
      factor: "Weight / load",
      natural: "Heavy, requires more support",
      engineered: "Optimized to reduce load without losing realism",
    },
    {
      factor: "Installation",
      natural: "Complex, slower",
      engineered: "Modular and planned for efficient assembly",
    },
    {
      factor: "Customization",
      natural: "Limited",
      engineered: "Shape, scale, and texture tailored to each client",
    },
    {
      factor: "Repeatability",
      natural: "Difficult (each rock is unique)",
      engineered: "Reproducible with visual consistency",
    },
    {
      factor: "Maintenance",
      natural: "Variable",
      engineered: "Controlled based on finish and environment",
    },
  ];

  return (
    <section id="comparison" className="relative mx-auto max-w-6xl px-6 py-12">
      <div className="rounded-4xl border border-foreground/10 bg-muted/60 p-6 shadow-2xl shadow-black/20 dark:bg-foreground/5 md:p-10">
        <SectionHeader
          eyebrow="Comparison"
          title="Natural rock vs. engineered rockwork"
          desc="Immersive realism matters, but so do structural loads, installation time, and customization."
        />

        <div className="mt-6 space-y-4 md:hidden">
          {comparisonRows.map((row) => (
            <div
              key={row.factor}
              className="rounded-2xl border border-foreground/10 bg-background/60 p-4 shadow-sm"
            >
              <p className="text-sm font-semibold text-foreground">{row.factor}</p>
              <div className="mt-3 space-y-3 text-sm text-foreground/70">
                <div className="flex items-start justify-between gap-4">
                  <span className="text-xs font-semibold uppercase tracking-wide text-foreground/50">
                    Natural rock
                  </span>
                  <span className="text-right">{row.natural}</span>
                </div>
                <div className="flex items-start justify-between gap-4">
                  <span className="text-xs font-semibold uppercase tracking-wide text-foreground/50">
                    Engineered <Badge className="ml-1 align-middle" variant="secondary">LXH</Badge>
                  </span>
                  <span className="text-right">{row.engineered}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="hidden md:block">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="w-[220px] text-foreground/70">Factor</TableHead>
                <TableHead className="text-foreground/70">Natural rock</TableHead>
                <TableHead className="text-foreground/70">
                  Engineered rockwork <Badge className="ml-2" variant="secondary">LXH</Badge>
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {comparisonRows.map((row) => (
                <TableRow key={row.factor}>
                  <TableCell className="font-medium">{row.factor}</TableCell>
                  <TableCell className="text-foreground/70">{row.natural}</TableCell>
                  <TableCell className="text-foreground/70">{row.engineered}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>

        <p className="mt-4 text-xs text-foreground/50">
          Note: this highlights relative advantages without committing to specific figures. We can add ranges once defined.
        </p>
      </div>
    </section>
  );
}
