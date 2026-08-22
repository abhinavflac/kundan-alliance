import type { CSSProperties } from "react";
import { ArrowRight } from "lucide-react";
// import { performers } from "../data/content";
import { Reveal } from "./Reveal";

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden">
      {/* ballroom backdrop */}
      <div className="absolute inset-0" aria-hidden="true">
        <img
          src="/images/ballroom.jpg"
          alt=""
          className="h-full w-full object-cover opacity-45"
          draggable={false}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-ink/70 via-ink/45 to-ink" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_55%_45%_at_50%_35%,rgba(176,138,74,0.10),transparent_65%)]" />
      </div>

      <div className="relative z-10 mx-auto max-w-6xl px-6">
        {/* logo + presents */}
        <div className="mx-auto flex w-full max-w-md items-center justify-center gap-4 pt-32 md:pt-40">
          <span className="h-px flex-1 bg-gradient-to-r from-transparent to-brass-lite/70" />
          <span className="flex items-center gap-3 sm:gap-5">
            <img
              src="/images/kundan-alliance.svg"
              alt="Kundan Alliance"
              className="h-6 w-auto md:h-7"
            />
            <span className="h-4 w-px bg-brass-lite/30" />
            <span className="font-display text-sm italic tracking-wide text-brass-gradient md:text-base">
              Presents
            </span>
          </span>
          <span className="h-px flex-1 bg-gradient-to-l from-transparent to-brass-lite/70" />
        </div>

        {/* headline */}
        <h1 className="mt-8 text-center font-display font-black leading-[1.08] text-ivory">
          <span className="line-mask text-[clamp(2.6rem,9.5vw,7rem)]">
            <span style={{ "--d": "0.05s" } as CSSProperties}>Channel Partner</span>
          </span>
          <span className="line-mask text-[clamp(2.6rem,9.5vw,7rem)]">
            <span style={{ "--d": "0.2s" } as CSSProperties}>
              Awards <em className="text-brass-gradient">2026</em>
            </span>
          </span>
        </h1>

        {/* association bar */}
        <div className="mx-auto mt-8 flex w-full max-w-md items-center gap-4">
          <span className="h-px flex-1 bg-gradient-to-r from-transparent to-brass-lite/70" />
          <span className="flex items-center gap-3 sm:gap-5">
            <span className="whitespace-nowrap text-[9px] uppercase tracking-[0.32em] text-ivory-dim md:text-[10px]">
              In Association with
            </span>
            <span className="h-4 w-px bg-brass-lite/30" />
            <span className="whitespace-nowrap font-display text-sm tracking-wide text-brass-gradient md:text-base">
              The Times of India
            </span>
          </span>
          <span className="h-px flex-1 bg-gradient-to-l from-transparent to-brass-lite/70" />
        </div>

        <Reveal delay={350}>
          <p className="mx-auto mt-8 max-w-2xl text-center font-display text-sm font-light leading-relaxed tracking-[0.12em] text-ivory-dim md:text-base">
            Honouring the Architects of Real Estate Excellence
          </p>
          <p className="mx-auto mt-6 max-w-xl text-center font-display italic text-xl leading-snug text-brass-gradient md:text-2xl">
            “The market remembers its truest partners long after the ink dries.”
          </p>
        </Reveal>

        {/* CTAs */}
        <Reveal delay={500}>
          <div className="mt-11 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href="#secretariat"
              className="group inline-flex w-full items-center justify-center gap-3 bg-gradient-to-r from-brass via-brass-lite to-brass px-10 py-4 text-[11px] font-semibold uppercase tracking-luxe text-ink shadow-[0_10px_30px_-12px_rgba(217,182,118,0.6)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_16px_40px_-12px_rgba(217,182,118,0.85)] sm:w-auto"
            >
              Submit Nomination
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </a>
            <a
              href="#jury"
              className="group inline-flex w-full items-center justify-center gap-3 border border-brass-lite/35 bg-brass-lite/5 px-10 py-4 text-[11px] uppercase tracking-luxe text-ivory backdrop-blur-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-brass-lite hover:bg-brass-lite/10 hover:text-brass-lite sm:w-auto"
            >
              Meet the Jury Council
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </a>
          </div>
        </Reveal>

        {/* scroll cue */}
        <div className="mt-14 flex justify-center">
          <span className="scroll-cue relative block h-16 w-px overflow-hidden bg-ivory/10" />
        </div>

        {/* weekly salute — hidden for now */}
        {/* <div className="mt-6 pb-24 text-center">
          <Reveal>
            <p className="text-[10px] uppercase tracking-luxe text-brass-lite">The Weekly Salute</p>
            <h2 className="mt-3 font-display text-3xl font-semibold text-ivory md:text-4xl">
              Front Page of Performance
            </h2>
          </Reveal>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {performers.map((p, i) => (
              <Reveal key={p.name} delay={i * 120}>
                <article className="group h-full overflow-hidden border border-ivory/10 bg-ink-soft text-left">
                  <div className="relative h-56 overflow-hidden md:h-64">
                    <img
                      src={p.img}
                      alt={p.name}
                      className="h-full w-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                      draggable={false}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-ink via-transparent to-transparent" />
                    <span className="absolute bottom-2.5 right-3.5 inline-flex items-center gap-1.5 rounded-full bg-ink/80 px-2.5 py-1 backdrop-blur-sm">
                      <span className="h-1.5 w-1.5 rotate-45 bg-brass-lite" />
                      <span className="text-[8px] uppercase tracking-luxe text-brass-lite">
                        EY Verified
                      </span>
                    </span>
                  </div>
                  <div className="px-5 pb-6 pt-4">
                    <p className="text-[9px] uppercase tracking-luxe text-brass-lite">{p.week}</p>
                    <h3 className="mt-2 font-display text-2xl font-semibold text-ivory">{p.name}</h3>
                    <p className="mt-1 text-[10px] uppercase tracking-luxe text-ivory-dim">
                      {p.agency}
                    </p>
                    <p className="mt-3 font-display italic text-[15px] leading-snug text-ivory-dim/90">
                      “{p.line}”
                    </p>
                    <div className="mt-4 grid grid-cols-2 divide-x divide-ivory/10 border-t border-ivory/10 pt-4">
                      <div>
                        <p className="text-[9px] uppercase tracking-luxe text-ivory-dim">Units Closed</p>
                        <p className="mt-1 font-display text-3xl font-bold text-ivory">{p.units}</p>
                      </div>
                      <div className="pl-4">
                        <p className="text-[9px] uppercase tracking-luxe text-ivory-dim">Audited Value</p>
                        <p className="mt-1 font-display text-3xl font-bold text-brass-gradient">{p.value}</p>
                      </div>
                    </div>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div> */}
      </div>
    </section>
  );
}
