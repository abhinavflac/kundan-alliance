import type { ReactNode } from "react";
import { cn } from "../utils/cn";
import { Reveal } from "./Reveal";

type Props = {
  index: string;
  eyebrow: string;
  children: ReactNode;
  dark?: boolean;
  kicker?: string;
  className?: string;
};

/**
 * Consistent editorial section opener:
 * a hairline carrying the index, then a large display statement.
 */
export function SectionHeading({ index, eyebrow, children, dark, kicker, className }: Props) {
  return (
    <div className={cn("mb-14 md:mb-20", className)}>
      <Reveal>
        <div className="flex items-baseline justify-between border-t border-ivory/15 pt-5">
          <span className={cn("micro-label", dark ? "text-brass-lite" : "text-brass")}>
            {index} — {eyebrow}
          </span>
          <span className="micro-label hidden text-ivory-dim sm:block">
            Kundan Alliance
          </span>
        </div>
      </Reveal>
      <Reveal delay={120}>
        <h2 className="display-tight mt-10 max-w-4xl text-[clamp(2.4rem,5.4vw,4.6rem)] font-normal text-ivory md:mt-14">
          {children}
        </h2>
      </Reveal>
      {kicker && (
        <Reveal delay={200}>
          <p className="mt-6 max-w-2xl text-[15px] leading-relaxed text-ivory-dim">{kicker}</p>
        </Reveal>
      )}
    </div>
  );
}
