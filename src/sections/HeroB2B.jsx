import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export default function HeroB2B() {
  return (
    <section className="relative mx-auto max-w-6xl px-6 pb-10 pt-4">
      <div className="grid gap-8 md:grid-cols-2 md:items-center">
        <div>
          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-4xl font-semibold tracking-tight md:text-5xl"
          >
            Rocas artificiales a medida para tematización, diseño y estructura.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.08 }}
            className="mt-4 text-base text-white/70"
          >
            Fabricamos piezas con la forma y el tamaño que necesite el cliente,
            optimizando el peso frente a roca real y facilitando instalación y
            requisitos estructurales.
          </motion.p>

          <div className="mt-6 flex flex-wrap gap-2">
            <Badge variant="secondary">B2B</Badge>
            <Badge variant="secondary">Diseño</Badge>
            <Badge variant="secondary">Estructura</Badge>
            <Badge variant="secondary">Tematización</Badge>
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            <Button asChild className="rounded-2xl">
              <a href="#comparativa">Ver comparativa</a>
            </Button>
            <Button asChild variant="secondary" className="rounded-2xl">
              <a href="#configurador">Configurar pieza</a>
            </Button>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.12 }}
          className="rounded-3xl border border-white/10 bg-white/5 p-4"
        >
          <div className="relative overflow-hidden rounded-2xl border border-white/10">
            <img
              src="/image.jpg"
              alt="Proyecto (placeholder)"
              className="h-72 w-full object-cover md:h-80"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/80 via-zinc-950/10 to-transparent" />
            <div className="absolute bottom-4 left-4 right-4">
              <p className="text-sm font-semibold">Proyecto destacado</p>
              <p className="text-xs text-white/70">
                Sustituye /public/image.jpg por un render o foto real.
              </p>
            </div>
          </div>

          <div className="mt-4 grid grid-cols-3 gap-3">
            <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
              <p className="text-xs text-white/60">Custom</p>
              <p className="mt-1 text-lg font-semibold">Forma / tamaño</p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
              <p className="text-xs text-white/60">Peso</p>
              <p className="mt-1 text-lg font-semibold">Optimizado</p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
              <p className="text-xs text-white/60">Entrega</p>
              <p className="mt-1 text-lg font-semibold">Instalable</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
