import Link from "next/link";
import type { ReactNode } from "react";

import { cn } from "@/lib/cn";

type ButtonProps = {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary";
  className?: string;
};

function ArrowIcon() {
  return (
    <svg
      aria-hidden="true"
      className="size-4 transition-transform duration-300 group-hover:translate-x-1"
      fill="none"
      viewBox="0 0 16 16"
    >
      <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  );
}

export function Button({
  href,
  children,
  variant = "primary",
  className,
}: ButtonProps) {
  return (
    <Link
      className={cn(
        "group inline-flex min-h-12 items-center justify-center gap-3 px-5 text-[0.72rem] font-semibold tracking-[0.13em] uppercase transition duration-300 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent sm:px-6",
        variant === "primary" &&
          "border border-accent bg-accent text-ink shadow-[0_12px_36px_rgba(239,106,46,0.22)] hover:border-accent-bright hover:bg-accent-bright",
        variant === "secondary" &&
          "border border-white/28 bg-white/[0.03] text-text-primary backdrop-blur-sm hover:border-white/55 hover:bg-white/[0.08]",
        className,
      )}
      href={href}
    >
      <span>{children}</span>
      <ArrowIcon />
    </Link>
  );
}
