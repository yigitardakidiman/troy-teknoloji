import { cn } from "@/lib/cn";

type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description?: string;
  className?: string;
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  className,
}: SectionHeadingProps) {
  return (
    <div className={cn("max-w-3xl", className)}>
      <div className="mb-5 flex items-center gap-3 text-accent">
        <span className="h-px w-7 bg-current" aria-hidden="true" />
        <p className="text-[0.68rem] font-semibold tracking-[0.24em] uppercase">
          {eyebrow}
        </p>
      </div>
      <h2 className="text-balance text-3xl leading-tight font-medium tracking-[-0.035em] text-text-primary sm:text-4xl lg:text-5xl">
        {title}
      </h2>
      {description ? (
        <p className="mt-5 max-w-2xl text-sm leading-7 text-text-secondary sm:text-base">
          {description}
        </p>
      ) : null}
    </div>
  );
}
