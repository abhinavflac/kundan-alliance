'use client';

import { useEffect, useRef, type CSSProperties, type ReactNode } from "react";
import { cn } from "../utils/cn";

type RevealProps = {
  children: ReactNode;
  className?: string;
  /** stagger delay in ms */
  delay?: number;
  as?: "div" | "span" | "figure" | "li";
  /** "fade" (default) rises the block itself; "mask" only toggles the class so inner .mask-line children animate */
  mode?: "fade" | "mask";
};

/**
 * Reveals content once it enters the viewport.
 * Fully disabled under prefers-reduced-motion via CSS.
 */
export function Reveal({ children, className, delay = 0, as = "div", mode = "fade" }: RevealProps) {
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-revealed");
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -8% 0px" },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  const Tag = as as "div";

  return (
    <Tag
      ref={ref}
      {...(mode === "fade" ? { "data-reveal": "" } : {})}
      className={cn(className)}
      style={{ "--reveal-delay": `${delay}ms` } as CSSProperties}
    >
      {children}
    </Tag>
  );
}
