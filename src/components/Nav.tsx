'use client';

import { useEffect, useState } from "react";
import { navLinks } from "../data/content";
import { cn } from "../utils/cn";
import Logo from "./Logo";

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const ids = navLinks.map((item) => item.href.slice(1));
    const elements = ids
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => Boolean(el));

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible?.target.id) setActive(`#${visible.target.id}`);
      },
      { rootMargin: "-40% 0px -45% 0px", threshold: [0.1, 0.25, 0.5] },
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-[background-color,border-color,color,backdrop-filter] duration-500",
        scrolled || open
          ? "border-b border-ivory/10 bg-ink/90 text-ivory backdrop-blur-md"
          : "border-b border-transparent bg-transparent text-ivory",
      )}
    >
      <a
        href="#alliance"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:bg-ivory focus:px-4 focus:py-2 focus:text-ink focus:outline-none"
      >
        Skip to content
      </a>

      <div className="mx-auto flex h-[4.25rem] max-w-[1440px] items-center justify-between px-5 sm:px-8 lg:px-12">
        <div className="flex items-center gap-12 xl:gap-16">
          <Logo
            onClick={() => setOpen(false)}
          />

          <nav className="hidden items-center gap-8 lg:flex xl:gap-10" aria-label="Primary">
            {navLinks.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="nav-link font-sans text-[0.72rem] font-medium uppercase tracking-[0.2em] text-current"
                aria-current={active === item.href ? "true" : undefined}
              >
                {item.label}
              </a>
            ))}
          </nav>
        </div>

        <button
          type="button"
          className="relative flex h-10 w-10 cursor-pointer items-center justify-center bg-transparent lg:hidden"
          aria-expanded={open}
          aria-controls="mobile-nav"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((value) => !value)}
        >
          <span
            className={cn(
              "absolute h-px w-5 bg-current transition-transform duration-300",
              open ? "translate-y-0 rotate-45" : "-translate-y-[4px]",
            )}
          />
          <span
            className={cn(
              "absolute h-px w-5 bg-current transition-transform duration-300",
              open ? "translate-y-0 -rotate-45" : "translate-y-[4px]",
            )}
          />
        </button>
      </div>

      <div
        id="mobile-nav"
        className={cn(
          "overflow-hidden border-t border-ivory/10 bg-ink transition-[max-height,opacity] duration-500 lg:hidden",
          open ? "max-h-screen opacity-100" : "max-h-0 opacity-0",
        )}
      >
        <nav className="flex flex-col px-5 py-8 sm:px-8" aria-label="Mobile">
          {navLinks.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className="border-b border-ivory/10 py-5 font-display text-4xl font-light tracking-tight text-ivory"
            >
              {item.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
