import { useId } from "react";
import { milestones, pillars, stats } from "../data/content";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

function EySeal() {
  const uid = useId().replace(/:/g, "");
  const circ = `eyc-${uid}`;
  return (
    <div className="relative mx-auto h-44 w-44 md:mx-0">
      <svg viewBox="0 0 120 120" className="spin-slow h-full w-full">
        <defs>
          <path id={circ} d="M60,60 m-44,0 a44,44 0 1,1 88,0 a44,44 0 1,1 -88,0" />
        </defs>
        <circle cx="60" cy="60" r="58" fill="none" stroke="rgba(217,182,118,0.22)" />
        <circle
          cx="60"
          cy="60"
          r="55"
          fill="none"
          stroke="rgba(217,182,118,0.35)"
          strokeDasharray="1 3"
        />
        <circle cx="60" cy="60" r="31" fill="none" stroke="rgba(217,182,118,0.3)" />
        <text fontSize="8.6" letterSpacing="2.6" fill="#d9b676">
          <textPath href={`#${circ}`}>INDEPENDENTLY AUDITED BY EY • SEALED • VERIFIED •</textPath>
        </text>
      </svg>
      <div className="absolute inset-0 grid place-items-center">
        <div className="text-center">
          <p className="font-display text-4xl font-bold text-ivory">EY</p>
          <p className="mt-1 text-[8px] uppercase tracking-luxe text-brass-lite">Est. 1913</p>
        </div>
      </div>
    </div>
  );
}

export function Legacy() {
  return (
    <section id="legacy" className="relative mx-auto max-w-[1440px] px-6 py-24 md:px-12 md:py-36">
      <SectionHeading
        index="01"
        eyebrow="The Agenda & The Legacy"
        kicker="Kundan Spaces has spent three and a half decades raising addresses that endure. Not one of them was raised alone. The Alliance Awards exist to place on permanent record the advisors, agencies and dealmakers who carried our name to the families who now call it home."
      >
        Three Decades. <span className="text-brass-gradient">One Standard.</span>
      </SectionHeading>

      {/* stats */}
      <div className="mt-16 grid gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
        {stats.map((s, i) => (
          <Reveal key={s.label} delay={i * 120}>
            <div className="border-l border-brass-lite/25 pl-5 md:pl-7">
              <p className="font-display text-5xl font-semibold leading-none text-ivory md:text-6xl">
                {s.value.toLocaleString("en-IN")}
                <span className="text-brass-gradient">{s.suffix}</span>
              </p>
              <p className="mt-4 text-[10px] uppercase tracking-luxe text-brass-lite">{s.label}</p>
            </div>
          </Reveal>
        ))}
      </div>

      {/* EY audit feature */}
      <Reveal className="mt-20">
        <div className="relative border border-brass-lite/25 bg-ink-soft p-8 md:p-12">
          <span className="absolute left-0 top-0 h-6 w-6 border-l-2 border-t-2 border-brass-lite/70" />
          <span className="absolute right-0 top-0 h-6 w-6 border-r-2 border-t-2 border-brass-lite/70" />
          <span className="absolute bottom-0 left-0 h-6 w-6 border-b-2 border-l-2 border-brass-lite/70" />
          <span className="absolute bottom-0 right-0 h-6 w-6 border-b-2 border-r-2 border-brass-lite/70" />
          <div className="grid items-center gap-10 md:grid-cols-[auto_1fr] md:gap-14">
            <EySeal />
            <div>
              <p className="text-[10px] uppercase tracking-luxe text-brass-lite">
                Independent Assurance
              </p>
              <h3 className="mt-4 font-display text-3xl font-semibold text-ivory md:text-5xl">
                Audited by <span className="text-brass-lite">Ernst &amp; Young (EY)</span>
              </h3>
              <p className="mt-5 max-w-2xl text-sm leading-relaxed text-ivory-dim md:text-base">
                Every nomination is subjected to a sealed, third-party verification of sales ledgers,
                registration records and MahaRERA compliance. The jury receives audited data only —
                never names, never relationships.
              </p>
            </div>
          </div>
        </div>
      </Reveal>

      {/* three pillars */}
      <div className="mt-20 grid gap-6 md:grid-cols-3">
        {pillars.map((p, i) => (
          <Reveal key={p.title} delay={i * 140} className="h-full">
            <article className="group flex h-full flex-col border border-ivory/10 bg-ink-soft p-7 transition-all duration-500 hover:-translate-y-1 hover:border-brass-lite/40 md:p-9">
              <span className="font-display text-2xl font-normal text-ivory-dim/40">{p.numeral}</span>
              <h3 className="mt-6 font-display text-2xl font-normal leading-snug text-ivory">
                {p.title}
              </h3>
              <div className="mt-3.5 h-px w-full bg-ivory/10" />
              <p className="mt-4 text-sm leading-relaxed text-ivory-dim">{p.copy}</p>
            </article>
          </Reveal>
        ))}
      </div>

      {/* milestones timeline */}
      <Reveal className="mt-28">
        <div className="text-center">
          <p className="text-[10px] uppercase tracking-luxe text-brass-lite">Architectural Milestones</p>
        </div>
        <div className="relative mt-16">
          <div className="absolute top-4 left-[10%] right-[10%] hidden h-px bg-ivory/15 md:block" />
          <div className="grid gap-12 sm:grid-cols-2 md:grid-cols-5 md:gap-4">
            {milestones.map((m, i) => (
              <Reveal key={m.year} delay={i * 120} className="flex flex-col items-center text-center">
                <div className="relative z-10 flex h-8 w-8 items-center justify-center rounded-full border border-brass-lite/60 bg-ink">
                  <span className="h-2 w-2 rounded-full bg-brass-lite" />
                </div>
                <p className="mt-5 font-display text-2xl font-semibold text-ivory md:text-3xl">
                  {m.year}
                </p>
                <p className="mt-1.5 text-[9px] uppercase tracking-luxe text-brass-lite">{m.label}</p>
                <p className="mt-3 max-w-[200px] text-xs leading-relaxed text-ivory-dim/80">{m.copy}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </Reveal>
    </section>
  );
}
