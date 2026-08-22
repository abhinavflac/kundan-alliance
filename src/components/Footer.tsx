import { ArrowUp } from "lucide-react";
import { navLinks } from "../data/content";
import { Reveal } from "./Reveal";

export function Footer() {
  return (
    <footer className="bg-ink-soft text-ivory">
      <div className="mx-auto max-w-[1440px] px-6 py-20 md:px-12 md:py-28">
        <Reveal>
          <div className="flex flex-col items-start justify-between gap-10 pb-6 md:flex-row md:items-end">
            <div>
              <img
                src="/images/kundan-alliance.svg"
                alt="Kundan Alliance"
                className="h-12 w-auto md:h-14"
              />
            </div>
            <p className="max-w-xs font-display text-sm leading-relaxed text-ivory-dim">
              The channel partner ecosystem of{" "}
              <a
                href="https://kundans.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-brass-lite underline-offset-4 transition-colors duration-300 hover:underline"
              >
                Kundan Spaces
              </a>
              {". "}
              Built on performance, trust, collaboration and long term mutual
              growth.
            </p>
          </div>
        </Reveal>

        <Reveal delay={120}>
          <div className="flex flex-col-reverse items-start justify-between gap-10 pt-6 md:flex-row md:items-center">
            <p className="font-display text-xs tracking-wide text-ivory-dim">
              © 2026 Kundan Alliance. All rights reserved.
            </p>

            <nav aria-label="Footer" className="flex flex-wrap items-center gap-x-8 gap-y-3">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="micro-label text-ivory-dim transition-colors duration-300 hover:text-ivory"
                >
                  {link.label}
                </a>
              ))}
              <a
                href="#top"
                className="group micro-label inline-flex items-center gap-2 text-brass-lite transition-colors duration-300 hover:text-ivory"
              >
                Top
                <ArrowUp className="h-3.5 w-3.5 transition-transform duration-300 group-hover:-translate-y-0.5" />
              </a>
            </nav>
          </div>
        </Reveal>
      </div>
    </footer>
  );
}
