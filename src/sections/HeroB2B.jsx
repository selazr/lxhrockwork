import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export default function HeroB2B() {
  return (
    <section className="relative mx-auto max-w-6xl px-6 pb-12 pt-6 md:pt-4">
      <div className="grid gap-8 md:grid-cols-2 md:items-center">
        <div>
          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-3xl font-semibold tracking-tight sm:text-4xl md:text-5xl"
          >
            Custom artificial rockwork for immersive theming, architectural design, and structural impact.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.08 }}
            className="mt-4 text-base text-foreground/70"
          >
            We fabricate lightweight, engineered rockwork pieces in the exact
            shape and size you need, optimized for fast installation, safe
            loads, and long-term durability.
          </motion.p>

          <div className="mt-6 flex flex-wrap gap-2">
            <Badge variant="secondary">B2B</Badge>
            <Badge variant="secondary">Design</Badge>
            <Badge variant="secondary">Structure</Badge>
            <Badge variant="secondary">Theming</Badge>
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            <Button asChild className="rounded-2xl">
              <a href="#comparison">See comparison</a>
            </Button>
            <Button asChild variant="secondary" className="rounded-2xl">
              <a href="#brands">Brands</a>
            </Button>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.12 }}
          className="rounded-3xl border border-foreground/10 bg-muted/60 p-4 dark:bg-foreground/5"
        >
          <div className="relative overflow-hidden rounded-2xl border border-foreground/10">
            <img
              src="/ROCK0.png"
              alt="Featured project placeholder"
              className="h-60 w-full object-cover sm:h-72 md:h-80"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent" />
            <div className="absolute bottom-4 left-4 right-4">
              <p className="text-sm font-semibold">Featured project</p>
              <p className="text-xs text-foreground/70">
                Immersive artificial rockwork environment, fully designed and fabricated by LXH Rockwork.
              </p>
            </div>
          </div>

          <div className="mt-4 grid gap-3 sm:grid-cols-3">
            <div className="rounded-2xl border border-foreground/10 bg-muted/60 p-3 sm:p-4 dark:bg-foreground/5">
              <p className="text-xs text-foreground/60">Scope</p>
              <p className="mt-1 text-base font-semibold sm:text-lg">Rockwork</p>
            </div>
            <div className="rounded-2xl border border-foreground/10 bg-muted/60 p-3 sm:p-4 dark:bg-foreground/5">
              <p className="text-xs text-foreground/60">Build</p>
              <p className="mt-1 text-base font-semibold sm:text-lg">Sculpted & painted</p>
            </div>
            <div className="rounded-2xl border border-foreground/10 bg-muted/60 p-3 sm:p-4 dark:bg-foreground/5">
              <p className="text-xs text-foreground/60">End</p>
              <p className="mt-1 text-base font-semibold sm:text-lg">Delivered & Installed</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
