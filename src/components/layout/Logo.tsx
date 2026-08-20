"use client";

import Image from "next/image";
import { useState } from "react";

import { siteContent } from "@/content/site";
import { cn } from "@/lib/cn";

type LogoProps = {
  className?: string;
};

export function Logo({ className }: LogoProps) {
  const [imageReady, setImageReady] = useState(false);
  const [imageFailed, setImageFailed] = useState(false);

  return (
    <span
      className={cn(
        "relative inline-flex h-10 min-w-36 items-center text-text-primary",
        className,
      )}
    >
      {!imageReady || imageFailed ? (
        <span
          className="flex items-center gap-3"
          aria-label={siteContent.company.name}
        >
          <span className="h-6 w-[3px] bg-accent" aria-hidden="true" />
          <span className="text-[0.72rem] leading-tight font-semibold tracking-[0.19em] uppercase">
            Troy
            <span className="block text-[0.56rem] font-medium tracking-[0.26em] text-text-secondary">
              Teknoloji
            </span>
          </span>
        </span>
      ) : null}

      {!imageFailed ? (
        <Image
          alt="Troy Teknoloji"
          className={cn(
            "absolute inset-y-0 left-0 h-10 w-auto object-contain object-left transition-opacity",
            imageReady ? "opacity-100" : "opacity-0",
          )}
          height={40}
          onError={() => setImageFailed(true)}
          onLoad={() => setImageReady(true)}
          priority
          src={siteContent.media.logo}
          unoptimized
          width={176}
        />
      ) : null}
    </span>
  );
}
