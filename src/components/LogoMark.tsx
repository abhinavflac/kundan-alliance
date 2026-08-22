import { cn } from "../utils/cn";

/**
 * The Kundan Alliance mark — a faceted stone, drawn in fine lines.
 * `facet` inherits the brass accent; the outline follows `currentColor`.
 */
export function LogoMark({
  className,
  withFacets = true,
}: {
  className?: string;
  withFacets?: boolean;
}) {
  return (
    <svg
      viewBox="0 0 32 32"
      fill="none"
      aria-hidden="true"
      className={cn("h-7 w-7", className)}
    >
      <path
        d="M16 3.5 L27.5 12.5 L16 28.5 L4.5 12.5 Z"
        stroke="currentColor"
        strokeWidth="1.3"
        strokeLinejoin="round"
      />
      {withFacets && (
        <path
          d="M4.5 12.5 H27.5 M16 3.5 L11 12.5 L16 28.5 M16 3.5 L21 12.5 L16 28.5"
          stroke="var(--color-brass-lite)"
          strokeWidth="0.85"
          strokeLinejoin="round"
        />
      )}
    </svg>
  );
}
