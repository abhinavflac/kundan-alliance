import { categories, tiers, type Tier } from "../data/content";
import { cn } from "../utils/cn";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

function Medallion({ tone }: { tone: Tier["tone"] }) {
  const color =
    tone === "gold" ? "text-brass-lite" : tone === "silver" ? "text-ivory" : "text-[#c98a5a]";
  return (
    <svg
      viewBox="0 0 48 48"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.4"
      className={cn("h-12 w-12", color)}
      aria-hidden="true"
    >
      <circle cx="24" cy="20" r="12" />
      <circle cx="24" cy="20" r="8" opacity="0.6" />
      <path
        d="m24 14 1.9 3.8 4.2.6-3 3 .7 4.2-3.8-2-3.8 2 .7-4.2-3-3 4.2-.6L24 14Z"
        fill="currentColor"
        stroke="none"
      />
      <path d="m17 30-4 13 7-4 4 5 4-5 7 4-4-13" strokeLinejoin="round" />
    </svg>
  );
}

function Podium({ tier, tall }: { tier: Tier; tall?: boolean }) {
  const tone = tier.tone;
  return (
    <div
      className={cn(
        "relative flex flex-col border bg-ink-soft p-7 transition-all duration-500",
        tone === "gold" && "border-brass-lite/50",
        tone === "silver" && "border-ivory/30",
        tone === "bronze" && "border-[#b0723a]/40",
        tall ? "md:h-[430px]" : "md:h-[360px]",
      )}
    >
      <span
        className={cn(
          "mx-auto text-[9px] uppercase tracking-luxe",
          tone === "gold" ? "text-brass-lite" : tone === "silver" ? "text-ivory" : "text-[#c98a5a]",
        )}
      >
        {tier.rank}
      </span>
      <div className="mt-4 flex justify-center">
        <Medallion tone={tone} />
      </div>
      <h3 className="mt-4 text-center font-display text-2xl font-semibold text-ivory">
        {tier.name}
      </h3>
      <p className="mt-3 text-center font-display text-4xl font-bold text-brass-gradient">
        {tier.cash}
      </p>
      <p className="mt-1 text-center text-[9px] uppercase tracking-luxe text-ivory-dim">in cash</p>
      <div className="mx-auto my-5 h-px w-16 bg-gradient-to-r from-transparent via-ivory/40 to-transparent" />
      <ul className="space-y-3.5">
        {tier.rewards.map((r) => (
          <li key={r} className="flex items-start gap-3 text-sm text-ivory-dim">
            <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rotate-45 bg-brass-lite" />
            {r}
          </li>
        ))}
      </ul>
    </div>
  );
}

const TROPHY_SPECS = [
  ["Finish", "24K gold vermeil over a sterling core, 210 grams of plated depth"],
  ["Engraving", "Forty-eight hours of hand filigree by the Jaipur atelier"],
  ["Base", "Black Makrana marble, weighted and burnished to a mirror"],
  ["Provenance", "Serial-numbered by the Secretariat. Presented at the dais, never resold"],
] as const;

export function Honours() {
  return (
    <section id="honours" className="border-t border-ivory/10 bg-ink-soft">
      <div className="mx-auto max-w-[1440px] px-6 py-24 md:px-12 md:py-36">
        <SectionHeading
          index="04"
          eyebrow="Eighteen Categories of Distinction"
          kicker="Eighteen disciplines of excellence. Each adjudicated independently, each crowned across three ceremonial tiers."
        >
          The <span className="text-brass-gradient">Register of Honours</span>
        </SectionHeading>

        {/* 18 categories */}
        <div className="mt-14 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6">
          {categories.map((c, i) => (
            <Reveal key={c.no} delay={(i % 6) * 70} className="h-full">
              <div className="group relative h-full overflow-hidden border border-ivory/10 bg-ink p-5 transition-all duration-500 hover:-translate-y-1 hover:border-brass-lite/50">
                <span className="absolute left-0 top-0 h-px w-0 bg-brass-lite transition-all duration-700 group-hover:w-full" />
                <p className="font-display text-2xl font-semibold text-ivory/25 transition-colors duration-500 group-hover:text-brass-lite">
                  {c.no}
                </p>
                <h3 className="mt-3 font-display text-[1.05rem] font-semibold leading-snug text-ivory">
                  {c.name}
                </h3>
                <p className="mt-2 text-xs leading-relaxed text-ivory-dim">{c.blurb}</p>
              </div>
            </Reveal>
          ))}
        </div>

        {/* podium */}
        <Reveal className="mt-24">
          <p className="text-center text-[10px] uppercase tracking-luxe text-brass-lite">
            The Three-Tier Podium
          </p>
          <h3 className="mt-3 text-center font-display text-3xl font-semibold text-ivory md:text-4xl">
            Rewards Befitting the <span className="text-brass-gradient">Victors</span>
          </h3>
        </Reveal>
        <div className="mt-10 flex flex-col items-stretch justify-center gap-4 md:flex-row md:items-end md:gap-6">
          <Reveal delay={200} className="w-full md:flex-1">
            <Podium tier={tiers[2]} />
          </Reveal>
          <Reveal delay={60} className="w-full md:flex-[1.25]">
            <Podium tier={tiers[0]} tall />
          </Reveal>
          <Reveal delay={320} className="w-full md:flex-1">
            <Podium tier={tiers[1]} />
          </Reveal>
        </div>
        <Reveal delay={150}>
          <p className="mx-auto mt-8 max-w-2xl text-center font-display italic text-lg text-ivory-dim">
            “A Silver Laureate in one discipline outranks a Bronze in four. The Alliance rewards
            peaks, not plateaus.”
          </p>
        </Reveal>

        {/* trophy showcase */}
        <div className="mt-24 grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <Reveal>
            <div className="relative">
              <div className="relative border border-brass-lite/35 p-3 md:p-4">
                <div className="relative overflow-hidden border border-brass-lite/15 bg-ink/90">
                  <img
                    src="/images/trophy.jpg"
                    alt="The hand-engraved 24K Gold Vermeil Jaipur trophy"
                    className="h-[420px] w-full object-contain p-2 md:h-[480px]"
                  />
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink/40 via-transparent to-transparent" />
                </div>
                <span className="absolute left-0 top-0 h-8 w-8 border-l-2 border-t-2 border-brass-lite" />
                <span className="absolute right-0 top-0 h-8 w-8 border-r-2 border-t-2 border-brass-lite" />
                <span className="absolute bottom-0 left-0 h-8 w-8 border-b-2 border-l-2 border-brass-lite" />
                <span className="absolute bottom-0 right-0 h-8 w-8 border-b-2 border-r-2 border-brass-lite" />
              </div>
            </div>
          </Reveal>
          <Reveal delay={150}>
            <p className="text-[10px] uppercase tracking-luxe text-brass-lite">The Object of Honour</p>
            <h3 className="mt-4 font-display text-4xl font-semibold leading-tight text-ivory md:text-5xl">
              The Jaipur <span className="text-brass-gradient">Vermeil</span>
            </h3>
            <p className="mt-6 max-w-xl text-sm leading-relaxed text-ivory-dim md:text-base">
              No factory piece. No imported urn. The Gold Master&apos;s trophy is carved for the
              Alliance in a Jaipur atelier, where the filigree is laid by hand over four full weeks
              — a palatial silhouette in low relief, each motif tracing an address on the Kundan
              register. When the Secretariat numbers it, the season is officially over for everyone
              else.
            </p>
            <dl className="mt-8">
              {TROPHY_SPECS.map(([t, d]) => (
                <div
                  key={t}
                  className="flex flex-col gap-1 border-t border-ivory/10 py-4 sm:flex-row sm:items-baseline sm:gap-6"
                >
                  <dt className="w-28 shrink-0 text-[10px] uppercase tracking-luxe text-brass-lite">
                    {t}
                  </dt>
                  <dd className="text-sm text-ivory-dim">{d}</dd>
                </div>
              ))}
            </dl>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
