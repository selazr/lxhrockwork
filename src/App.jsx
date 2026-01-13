import { motion } from "framer-motion";
import HeroB2B from "@/sections/HeroB2B";
import Comparison from "@/sections/Comparison";
import Configurator from "@/sections/Configurator";
import Process from "@/sections/Process";
import Portfolio from "@/sections/Portfolio";
import CTA from "@/sections/CTA";

export default function App() {
  return (
    <div className="min-h-screen bg-zinc-950 text-white">
      {/* Background accents */}
      <div className="pointer-events-none fixed inset-0 overflow-hidden">
        <div className="absolute -top-24 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-white/5 blur-3xl" />
        <div className="absolute -bottom-24 right-0 h-72 w-72 rounded-full bg-white/5 blur-3xl" />
      </div>

      <header className="relative mx-auto max-w-6xl px-6 py-8">
        <nav className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="h-10 w-10 rounded-2xl border border-white/10 bg-white/5 p-2">
              <img
                src="/image.jpg"
                alt="LXH Rockwork logo"
                className="h-full w-full rounded-xl object-cover"
              />
            </div>
            <div>
              <p className="text-sm font-semibold leading-none">LXH Rockwork</p>
              <p className="text-xs text-white/60">Theming · Design · Structure</p>
            </div>
          </div>

          <div className="hidden items-center gap-2 md:flex">
            <a href="#comparativa" className="rounded-full px-4 py-2 text-sm text-white/80 hover:bg-white/5">
              Comparativa
            </a>
            <a href="#configurador" className="rounded-full px-4 py-2 text-sm text-white/80 hover:bg-white/5">
              Configurador
            </a>
            <a href="#cta" className="rounded-full px-4 py-2 text-sm text-white/80 hover:bg-white/5">
              Contacto
            </a>
          </div>

          <a
            href="#cta"
            className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white hover:bg-white/10"
          >
            Solicitar propuesta
          </a>
        </nav>
      </header>

      <main className="relative">
        <HeroB2B />
        <Comparison />
        <Configurator />
        <Process />
        <Portfolio />
        <CTA />
      </main>

      <footer className="relative mx-auto max-w-6xl px-6 py-10">
        <div className="flex flex-col gap-2 border-t border-white/10 pt-6 text-sm text-white/60 md:flex-row md:items-center md:justify-between">
          <p>© {new Date().getFullYear()} LXH Rockwork</p>
          <p>React SPA · Tailwind · Framer Motion · shadcn/ui</p>
        </div>
      </footer>

      <motion.a
        href="#"
        onClick={(e) => {
          e.preventDefault();
          window.scrollTo({ top: 0, behavior: "smooth" });
        }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="fixed bottom-6 right-6 rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white/80 hover:bg-white/10"
      >
        Arriba
      </motion.a>
    </div>
  );
}
