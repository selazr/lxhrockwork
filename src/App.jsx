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
        <div className="absolute -top-32 left-1/2 h-96 w-96 -translate-x-1/2 rounded-full bg-white/5 blur-3xl" />
        <div className="absolute -bottom-32 right-0 h-80 w-80 rounded-full bg-white/5 blur-3xl" />
        <div className="absolute left-10 top-1/3 h-56 w-56 rounded-full bg-emerald-400/10 blur-[120px]" />
      </div>

      <header className="relative mx-auto max-w-6xl px-6 py-8">
        <nav className="flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="h-11 w-11 rounded-2xl border border-white/10 bg-white/5 p-2 shadow-lg shadow-black/30">
              <img
                src="/image.jpg"
                alt="LXH Rockwork logo"
                className="h-full w-full rounded-xl object-cover"
              />
            </div>
            <div>
              <p className="text-sm font-semibold leading-none">LXH Rockwork</p>
              <p className="text-xs text-white/60">Theming · Design · Structures</p>
            </div>
          </div>

          <div className="hidden items-center gap-2 md:flex">
            <a href="#comparison" className="rounded-full px-4 py-2 text-sm text-white/80 hover:bg-white/5">
              Comparison
            </a>
            <a href="#configurator" className="rounded-full px-4 py-2 text-sm text-white/80 hover:bg-white/5">
              Configurator
            </a>
            <a href="#contact" className="rounded-full px-4 py-2 text-sm text-white/80 hover:bg-white/5">
              Contact
            </a>
          </div>

          <a
            href="#contact"
            className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white hover:bg-white/10"
          >
            Request a proposal
          </a>
        </nav>
      </header>

      <main className="relative space-y-12 pb-16">
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
        Back to top
      </motion.a>
    </div>
  );
}
