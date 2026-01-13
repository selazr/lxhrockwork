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
    <section id="comparativa" className="relative mx-auto max-w-6xl px-6 py-10">
      <SectionHeader
        eyebrow="Comparativa"
        title="Roca real vs roca artificial (LXH Rockwork)"
        desc="En proyectos de tematización, el realismo importa, pero también la carga estructural, la instalación y la personalización."
      />

      <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[220px] text-white/70">Factor</TableHead>
              <TableHead className="text-white/70">Roca real</TableHead>
              <TableHead className="text-white/70">
                Roca artificial <Badge className="ml-2" variant="secondary">LXH</Badge>
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell className="font-medium">Peso / carga</TableCell>
              <TableCell className="text-white/70">Alto, exige estructura</TableCell>
              <TableCell className="text-white/70">
                Optimizado para reducir carga sin perder estética
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="font-medium">Instalación</TableCell>
              <TableCell className="text-white/70">Compleja, lenta</TableCell>
              <TableCell className="text-white/70">
                Modular / planificada para montaje más eficiente
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="font-medium">Personalización</TableCell>
              <TableCell className="text-white/70">Limitada</TableCell>
              <TableCell className="text-white/70">
                Forma, tamaño y textura a medida del cliente
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="font-medium">Repetibilidad</TableCell>
              <TableCell className="text-white/70">Difícil (cada roca es única)</TableCell>
              <TableCell className="text-white/70">
                Reproducible (series con consistencia visual)
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="font-medium">Mantenimiento</TableCell>
              <TableCell className="text-white/70">Variable</TableCell>
              <TableCell className="text-white/70">
                Controlado según acabado y entorno (interior/exterior)
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>

        <p className="mt-4 text-xs text-white/50">
          Nota: aquí estamos comunicando ventajas sin prometer cifras específicas. Si luego defines rangos de peso, lo refinamos.
        </p>
      </div>
    </section>
  );
}
