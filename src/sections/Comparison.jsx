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
  return (
    <section id="comparison" className="relative mx-auto max-w-6xl px-6 py-12">
      <div className="rounded-4xl border border-foreground/10 bg-foreground/5 p-6 shadow-2xl shadow-black/20 md:p-10">
        <SectionHeader
          eyebrow="Comparison"
          title="Natural rock vs. engineered rockwork"
          desc="Immersive realism matters, but so do structural loads, installation time, and customization."
        />

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
            <TableRow>
              <TableCell className="font-medium">Weight / load</TableCell>
              <TableCell className="text-foreground/70">Heavy, requires more support</TableCell>
              <TableCell className="text-foreground/70">
                Optimized to reduce load without losing realism
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="font-medium">Installation</TableCell>
              <TableCell className="text-foreground/70">Complex, slower</TableCell>
              <TableCell className="text-foreground/70">
                Modular and planned for efficient assembly
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="font-medium">Customization</TableCell>
              <TableCell className="text-foreground/70">Limited</TableCell>
              <TableCell className="text-foreground/70">
                Shape, scale, and texture tailored to each client
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="font-medium">Repeatability</TableCell>
              <TableCell className="text-foreground/70">Difficult (each rock is unique)</TableCell>
              <TableCell className="text-foreground/70">
                Reproducible with visual consistency
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="font-medium">Maintenance</TableCell>
              <TableCell className="text-foreground/70">Variable</TableCell>
              <TableCell className="text-foreground/70">
                Controlled based on finish and environment
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>

        <p className="mt-4 text-xs text-foreground/50">
          Note: this highlights relative advantages without committing to specific figures. We can add ranges once defined.
        </p>
      </div>
    </section>
  );
}
