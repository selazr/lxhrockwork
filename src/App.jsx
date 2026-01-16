import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Moon, Sun } from "lucide-react";
import HeroB2B from "@/sections/HeroB2B";
import Comparison from "@/sections/Comparison";
import Configurator from "@/sections/Configurator";
import Process from "@/sections/Process";
import Portfolio from "@/sections/Portfolio";
import CTA from "@/sections/CTA";

export default function App() {
  const [theme, setTheme] = useState(() => {
    if (typeof window === "undefined") {
      return "dark";
    }
    return window.localStorage.getItem("lxh-theme") ?? "dark";
  });

  useEffect(() => {
    if (typeof window === "undefined") {
      return;
    }
    window.localStorage.setItem("lxh-theme", theme);
  }, [theme]);

  const isDark = theme === "dark";
  useEffect(() => {
    if (typeof window === "undefined") {
      return;
    }
    window.document.documentElement.classList.toggle("dark", isDark);
  }, [isDark]);

  const wordmarkClassName = [
    "block h-7 w-auto object-contain transition duration-300 sm:h-9",
    isDark ? "brightness-110 contrast-110" : "brightness-100 contrast-105",
  ].join(" ");

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Background accents */}
      <div className="pointer-events-none fixed inset-0 overflow-hidden">
        <div className="absolute -top-32 left-1/2 h-96 w-96 -translate-x-1/2 rounded-full bg-foreground/5 blur-3xl" />
        <div className="absolute -bottom-32 right-0 h-80 w-80 rounded-full bg-foreground/5 blur-3xl" />
        <div className="absolute left-10 top-1/3 h-56 w-56 rounded-full bg-primary/10 blur-[120px]" />
      </div>

      <header className="relative mx-auto max-w-6xl px-6 py-8">
        <nav className="flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center rounded-[10px] border border-black/10 bg-black/5 px-2 py-1.5 shadow-[0_6px_18px_rgba(0,0,0,0.08)] backdrop-blur-[10px] dark:border-white/15 dark:bg-white/10 sm:rounded-[12px] sm:px-2.5 sm:py-2">
            <div>
              <img
                src="/lxhrockwork.svg"
                alt="LXH Rockwork"
                className={wordmarkClassName}
              />
              <p className="text-xs text-foreground/60">Theming · Design · Structures</p>
            </div>
          </div>

          <div className="hidden items-center gap-2 md:flex">
            <a
              href="#comparison"
              className="rounded-full px-4 py-2 text-sm text-foreground/80 hover:bg-foreground/5"
            >
              Comparison
            </a>
            <a
              href="#configurator"
              className="rounded-full px-4 py-2 text-sm text-foreground/80 hover:bg-foreground/5"
            >
              Configurator
            </a>
            <a
              href="#contact"
              className="rounded-full px-4 py-2 text-sm text-foreground/80 hover:bg-foreground/5"
            >
              Contact
            </a>
          </div>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => setTheme(isDark ? "light" : "dark")}
              className="flex items-center gap-2 rounded-full border border-foreground/10 bg-foreground/5 px-3 py-2 text-xs font-semibold uppercase tracking-wide text-foreground/80 hover:bg-foreground/10"
            >
              Tema
              {isDark ? (
                <Moon className="h-4 w-4" aria-hidden="true" />
              ) : (
                <Sun className="h-4 w-4" aria-hidden="true" />
              )}
              <span className="sr-only">
                {isDark ? "Oscuro" : "Claro"}
              </span>
            </button>
            <a
              href="#contact"
              className="rounded-full border border-foreground/10 bg-foreground/5 px-4 py-2 text-sm text-foreground hover:bg-foreground/10"
            >
              Request a proposal
            </a>
          </div>
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
        <div className="flex flex-col gap-2 border-t border-foreground/10 pt-6 text-sm text-foreground/60 md:flex-row md:items-center md:justify-between">
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
        className="fixed bottom-6 right-6 rounded-2xl border border-foreground/10 bg-foreground/5 px-4 py-3 text-sm text-foreground/80 hover:bg-foreground/10"
      >
        Back to top
      </motion.a>
    </div>
  );
}
