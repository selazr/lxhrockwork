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

  const wordmarkClassName =
    "block h-8 w-auto object-contain transition duration-300 sm:h-10";

  const SectionReveal = ({ children, delay = 0 }) => (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5, delay }}
    >
      {children}
    </motion.div>
  );

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Background accents */}
      <div className="pointer-events-none fixed inset-0 overflow-hidden">
        <div className="absolute -top-32 left-1/2 h-96 w-96 -translate-x-1/2 rounded-full bg-foreground/5 blur-3xl" />
        <div className="absolute -bottom-32 right-0 h-80 w-80 rounded-full bg-foreground/5 blur-3xl" />
        <div className="absolute left-10 top-1/3 h-56 w-56 rounded-full bg-primary/10 blur-[120px]" />
      </div>

      <header className="fixed inset-x-0 top-0 z-50 border-b border-foreground/10 bg-background/80 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center px-6 py-4">
          <nav className="flex w-full flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-3 rounded-[14px] border border-black/10 bg-black/5 px-3 py-2 shadow-[0_12px_30px_rgba(0,0,0,0.12)] backdrop-blur-[12px] dark:border-white/20 dark:bg-white/10">
              <div>
                <img
                  src={isDark ? "/lxhrockwork-dark.svg" : "/lxhrockwork.svg"}
                  alt="LXH Rockwork"
                  className={wordmarkClassName}
                />
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-foreground/60">
                  Theming · Design · Structures
                </p>
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
                href="#brands"
                className="rounded-full px-4 py-2 text-sm text-foreground/80 hover:bg-foreground/5"
              >
                Brands
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
                Theme
                {isDark ? (
                  <Moon className="h-4 w-4" aria-hidden="true" />
                ) : (
                  <Sun className="h-4 w-4" aria-hidden="true" />
                )}
                <span className="sr-only">
                  {isDark ? "Dark" : "Light"}
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
        </div>
      </header>

      <main className="relative space-y-12 pb-16 pt-32 sm:pt-28">
        <SectionReveal>
          <HeroB2B />
        </SectionReveal>
        <SectionReveal>
          <Comparison />
        </SectionReveal>
        <SectionReveal>
          <Configurator />
        </SectionReveal>
        <SectionReveal>
          <Process />
        </SectionReveal>
        <SectionReveal>
          <Portfolio />
        </SectionReveal>
        <SectionReveal>
          <CTA />
        </SectionReveal>
      </main>

      <footer className="relative mx-auto max-w-6xl px-6 py-10">
        <div className="flex flex-col gap-2 border-t border-foreground/10 pt-6 text-sm text-foreground/60 md:flex-row md:items-center md:justify-between">
          <p>© {new Date().getFullYear()} LXH Rockwork</p>
          <p>2250 Lucien Way Suite 305, 32751 - Maitlands</p>
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
