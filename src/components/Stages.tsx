import { stages } from "../data/content";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

export function Stages() {
  return (
    <section id="stages" className="border-y border-ivory/10 bg-ink-soft">
      <div className="mx-auto max-w-[1440px] px-6 py-24 md:px-12 md:py-36">
        <SectionHeading
          index="02"
          eyebrow="Key Dates & Gala Calendar"
          kicker="Four immovable milestones govern the 2026 cycle. Mark them, and lodge your portfolio well before the register seals."
        >
          The Road to the <em className="text-brass-lite">Gala Night</em>
        </SectionHeading>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {stages.map((s, i) => (
            <Reveal key={s.stage} delay={i * 120} className="h-full">
              <article className="group flex h-full flex-col border border-ivory/10 bg-ink p-7 transition-all duration-500 hover:-translate-y-1 hover:border-brass-lite/40 md:p-8">
                <div className="flex items-baseline">
                  <span className="font-display text-4xl font-semibold text-brass-lite md:text-5xl">
                    {s.day}
                  </span>
                  <div className="ml-3">
                    <span className="block font-display text-xl leading-none text-ivory">
                      {s.month}
                    </span>
                    <span className="mt-1 block text-[10px] uppercase tracking-widest text-ivory-dim/70">
                      {s.year}
                    </span>
                  </div>
                </div>
                <div className="mt-4 h-px w-full bg-ivory/10" />
                <p className="mt-5 text-[9px] uppercase tracking-luxe text-brass-lite">{s.stage}</p>
                <h3 className="mt-2 font-display text-xl font-semibold text-ivory md:text-2xl">
                  {s.title}
                </h3>
                <p className="mt-3.5 text-xs leading-relaxed text-ivory-dim/80">{s.copy}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
