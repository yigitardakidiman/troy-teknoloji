import type { ComponentPropsWithoutRef, ElementType, ReactNode } from "react";

import { cn } from "@/lib/cn";

type SectionContainerProps<T extends ElementType = "div"> = {
  as?: T;
  children: ReactNode;
  className?: string;
} & Omit<ComponentPropsWithoutRef<T>, "as" | "children" | "className">;

export function SectionContainer<T extends ElementType = "div">({
  as,
  children,
  className,
  ...props
}: SectionContainerProps<T>) {
  const Component = as ?? "div";

  return (
    <Component
      className={cn(
        "mx-auto w-full max-w-[1440px] px-5 sm:px-8 lg:px-12 xl:px-16",
        className,
      )}
      {...props}
    >
      {children}
    </Component>
  );
}
