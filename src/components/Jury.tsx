'use client';

import { useEffect, useState } from "react";
import { jury } from "../data/content";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

function JuryModal({ index, onClose }: { index: number; onClose: () => void }) {
  const m = jury[index];

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prev;
    };
  }, [onClose]);

  return (
    <div
      className="fixed inset-0 z-[80] flex items-center justify-center p-4 md:p-10"
      role="dialog"
      aria-modal="true"
      aria-label={`Dossier of ${m.name}`}
    >
      <div
        className="absolute inset-0 bg-ink/90 backdrop-blur-sm"
        onClick={onClose}
        aria-hidden="true"
      />
      <div className="relative max-h-[88vh] w-full max-w-3xl overflow-y-auto border border-brass-lite/35 bg-ink-soft">
        <button
          type="button"
          onClick={onClose}
          aria-label="Close dossier"
          className="absolute right-3 top-3 z-10 grid h-10 w-10 place-items-center border border-ivory/20 bg-ink/70 text-ivory transition-all duration-300 hover:rotate-90 hover:border-brass-lite/60 hover:text-brass-lite"
        >
          <svg
            viewBox="0 0 20 20"
            className="h-4 w-4"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            aria-hidden="true"
          >
            <path d="m5 5 10 10M15 5 5 15" />
          </svg>
        </button>
        <div className="grid md:grid-cols-[260px_1fr]">
          <div className="relative h-64 md:h-auto">
            <img src={m.img} alt={m.name} className="h-full w-full object-cover object-top" />
            <div className="absolute inset-0 bg-gradient-to-t from-ink-soft via-transparent to-transparent md:bg-gradient-to-r" />
          </div>
          <div className="p-7 md:p-9">
            <p className="text-[9px] uppercase tracking-luxe text-brass-lite">{m.house}</p>
            <h3 className="mt-2.5 font-display text-3xl font-semibold text-ivory md:text-4xl">
              {m.name}
            </h3>
            <p className="mt-2 font-display italic text-lg text-ivory-dim">{m.role}</p>
            <div className="my-5 h-px w-full bg-gradient-to-r from-brass-lite/50 via-ivory/15 to-transparent" />
            <p className="text-sm leading-relaxed text-ivory/85">{m.bio}</p>
            <blockquote className="mt-6 border-l-2 border-brass-lite/60 pl-4 font-display italic text-xl leading-snug text-brass-lite">
              “{m.quote}”
            </blockquote>
            <ul className="mt-6 flex flex-wrap gap-2">
              {m.creds.map((c) => (
                <li
                  key={c}
                  className="border border-ivory/15 px-3 py-1.5 text-[9px] uppercase tracking-luxe text-ivory-dim"
                >
                  {c}
                </li>
              ))}
            </ul>
            <p className="mt-7 flex items-center gap-2.5 text-[9px] uppercase tracking-luxe text-ivory-dim/70">
              <span className="h-1.5 w-1.5 rotate-45 bg-brass-lite/70" />
              Sealed at judging · Hash-verified dossier
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export function Jury() {
  const [selected, setSelected] = useState<number | null>(null);

  return (
    <section id="jury" className="relative mx-auto max-w-[1440px] px-6 py-24 md:px-12 md:py-36">
      <SectionHeading
        index="03"
        eyebrow="Chief Guest & Jury Council"
        kicker="Statesmen, stewards and strategists. Four eminences preside over the 2026 register — adjudicating on audited evidence alone."
      >
        The <em className="text-brass-lite">Council of Honour</em>
      </SectionHeading>

      <div className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {jury.map((j, i) => (
          <Reveal key={j.name} delay={i * 120} className="h-full">
            <button
              type="button"
              onClick={() => setSelected(i)}
              className="group relative block h-full w-full overflow-hidden border border-ivory/10 bg-ink-soft text-left transition-all duration-500 hover:-translate-y-1.5 hover:border-brass-lite/50"
            >
              <div className="relative h-72 overflow-hidden">
                <img
                  src={j.img}
                  alt={j.name}
                  className="h-full w-full object-cover object-top grayscale transition-all duration-700 group-hover:scale-[1.04] group-hover:grayscale-0"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink-soft via-ink-soft/20 to-transparent" />
                <span className="absolute right-3 top-3 border border-brass-lite/40 bg-ink/70 px-2.5 py-1 text-[8px] uppercase tracking-luxe text-brass-lite opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                  Open Dossier
                </span>
              </div>
              <div className="p-5">
                <h3 className="font-display text-xl font-semibold text-ivory">{j.name}</h3>
                <p className="mt-1.5 text-[9px] uppercase tracking-luxe text-brass-lite">{j.role}</p>
                <p className="mt-3 flex items-center gap-2 text-[10px] uppercase tracking-luxe text-ivory-dim transition-colors duration-300 group-hover:text-brass-lite">
                  Read the dossier
                  <svg
                    viewBox="0 0 20 20"
                    className="h-3 w-3 transition-transform duration-300 group-hover:translate-x-1"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    aria-hidden="true"
                  >
                    <path d="M3 10h13m0 0-4.5-4.5M16 10l-4.5 4.5" />
                  </svg>
                </p>
              </div>
            </button>
          </Reveal>
        ))}
      </div>

      <Reveal className="mt-16 text-center">
        <p className="mx-auto max-w-xl font-display italic text-base leading-relaxed text-ivory-dim md:text-lg">
          “The Council votes on sealed, anonymised dossiers. Identity is revealed only after the
          register is signed.”
        </p>
      </Reveal>

      {selected !== null && <JuryModal index={selected} onClose={() => setSelected(null)} />}
    </section>
  );
}
