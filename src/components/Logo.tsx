import { cn } from "../utils/cn";

type LogoProps = {
  className?: string;
  inverted?: boolean;
  onClick?: () => void;
};

export default function Logo({ className, onClick }: LogoProps) {
  return (
    <a
      href="#top"
      onClick={onClick}
      className={cn("inline-flex items-center", className)}
      aria-label="Kundan Alliance, home"
    >
      <img
        src="/images/kundan-alliance.svg"
        alt="Kundan Alliance"
        className="h-6 w-auto md:h-7"
      />
    </a>
  );
}
