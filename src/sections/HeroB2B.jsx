import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export default function HeroB2B() {
  return (
    <section className="relative mx-auto max-w-6xl px-6 pb-12 pt-4">
      <div className="grid gap-8 md:grid-cols-2 md:items-center">
        <div>
          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-4xl font-semibold tracking-tight md:text-5xl"
          >
            Custom artificial rockwork for immersive theming, design, and structural impact.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.08 }}
            className="mt-4 text-base text-foreground/70"
          >
            We fabricate modular pieces in the exact shape and size you need,
            optimized for weight, installation efficiency, and engineering
            requirements.
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
              <a href="#configurator">Configure a piece</a>
            </Button>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.12 }}
          className="rounded-3xl border border-foreground/10 bg-foreground/5 p-4"
        >
          <div className="relative overflow-hidden rounded-2xl border border-foreground/10">
            <img
              src="/image.jpg"
              alt="Featured project placeholder"
              className="h-72 w-full object-cover md:h-80"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent" />
            <div className="absolute bottom-4 left-4 right-4">
              <p className="text-sm font-semibold">Featured project</p>
              <p className="text-xs text-foreground/70">
                Replace /public/image.jpg with a real render or photo.
              </p>
            </div>
          </div>

          <div className="mt-4 grid grid-cols-3 gap-3">
            <div className="rounded-2xl border border-foreground/10 bg-foreground/5 p-4">
              <p className="text-xs text-foreground/60">Custom</p>
              <p className="mt-1 text-lg font-semibold">Shape / scale</p>
            </div>
            <div className="rounded-2xl border border-foreground/10 bg-foreground/5 p-4">
              <p className="text-xs text-foreground/60">Weight</p>
              <p className="mt-1 text-lg font-semibold">Optimized</p>
            </div>
            <div className="rounded-2xl border border-foreground/10 bg-foreground/5 p-4">
              <p className="text-xs text-foreground/60">Delivery</p>
              <p className="mt-1 text-lg font-semibold">Ready to install</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
