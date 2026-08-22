import { marqueeItems } from "../data/content";

export function Marquee() {
  return (
    <div className="overflow-hidden border-y border-ivory/10 py-4" aria-hidden="true">
      <div className="marquee-track flex w-max items-center">
        {[0, 1].map((half) => (
          <div key={half} className="flex items-center">
            {marqueeItems.map((item) => (
              <span key={`${half}-${item}`} className="flex items-center">
                <span className="micro-label whitespace-nowrap px-8 text-ivory-dim/80">
                  {item}
                </span>
                <span className="inline-block h-1.5 w-1.5 rotate-45 bg-brass-lite/60" />
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
