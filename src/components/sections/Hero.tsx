"use client";

import { useEffect, useState, useSyncExternalStore } from "react";

import { Button } from "@/components/ui/Button";
import { SectionContainer } from "@/components/ui/SectionContainer";
import { siteContent } from "@/content/site";
import { cn } from "@/lib/cn";

function usePrefersReducedMotion() {
  return useSyncExternalStore(
    (callback) => {
      const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
      mediaQuery.addEventListener("change", callback);
      return () => mediaQuery.removeEventListener("change", callback);
    },
    () =>
      typeof window !== "undefined"
        ? window.matchMedia("(prefers-reduced-motion: reduce)").matches
        : false,
    () => false,
  );
}

function HeroBackground({ onReady }: { onReady: () => void }) {
  const [videoReady, setVideoReady] = useState(false);

  useEffect(() => {
    const timer = window.setTimeout(() => {
      setVideoReady(true);
      onReady();
    }, 400);
    return () => window.clearTimeout(timer);
  }, [onReady]);

  const handleVideoLoaded = () => {
    setVideoReady(true);
    onReady();
  };

  return (
    <div
      className="absolute inset-0 overflow-hidden bg-background-deep"
      aria-hidden="true"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_72%_42%,rgba(41,87,119,0.34),transparent_34%),linear-gradient(145deg,#07111c_0%,#0a1723_45%,#101820_100%)]" />

      <video
        autoPlay
        className={cn(
          "absolute inset-0 size-full object-cover object-[62%_center] transition-opacity duration-1000",
          videoReady ? "opacity-100" : "opacity-0",
        )}
        loop
        muted
        onCanPlay={handleVideoLoaded}
        onError={handleVideoLoaded}
        onLoadedData={handleVideoLoaded}
        onPlay={handleVideoLoaded}
        playsInline
        preload="auto"
        src={siteContent.media.heroVideo}
      />

      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(3,10,17,0.94)_0%,rgba(3,10,17,0.75)_42%,rgba(3,10,17,0.26)_72%,rgba(3,10,17,0.42)_100%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(3,9,15,0.46)_0%,transparent_22%,transparent_67%,rgba(3,9,15,0.88)_100%)]" />
      <div className="hero-grid absolute inset-0 opacity-40" />
      <div className="absolute top-0 bottom-0 left-[calc(50%-1px)] hidden w-px bg-white/[0.045] xl:block" />
    </div>
  );
}

function ScrollIndicator() {
  return (
    <a
      aria-label="Uzmanlık alanlarına ilerle"
      className="group absolute right-5 bottom-7 z-10 flex items-center gap-3 text-[0.6rem] font-medium tracking-[0.2em] text-text-muted uppercase transition-colors hover:text-text-primary focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent sm:right-8 lg:right-12 lg:bottom-10 xl:right-16"
      href="#uzmanlik-alanlari"
    >
      <span className="hidden sm:inline">Keşfet</span>
      <span
        className="relative block h-12 w-px overflow-hidden bg-white/20"
        aria-hidden="true"
      >
        <span className="scroll-line absolute inset-x-0 top-0 h-5 bg-accent" />
      </span>
    </a>
  );
}

export function Hero() {
  const prefersReducedMotion = usePrefersReducedMotion();
  const [contentReady, setContentReady] = useState(false);

  useEffect(() => {
    const fallbackTimer = window.setTimeout(
      () => setContentReady(true),
      prefersReducedMotion ? 0 : 150,
    );
    return () => window.clearTimeout(fallbackTimer);
  }, [prefersReducedMotion]);

  const isVisible = contentReady || prefersReducedMotion;

  return (
    <section
      className="relative isolate flex min-h-[100svh] items-center overflow-hidden"
      id="ana-sayfa"
    >
      <HeroBackground onReady={() => setContentReady(true)} />

      <SectionContainer className="relative z-10 pt-28 pb-28 sm:pt-36 lg:pt-32">
        <div className="max-w-4xl">
          <div
            className={cn(
              "mb-6 flex items-center gap-3 transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] sm:mb-8",
              isVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-6 opacity-0",
            )}
          >
            <span className="h-px w-8 bg-accent" aria-hidden="true" />
            <p className="text-[0.62rem] font-semibold tracking-[0.19em] text-text-secondary uppercase sm:text-[0.7rem] sm:tracking-[0.24em]">
              {siteContent.hero.eyebrow}
            </p>
          </div>

          <h1
            className={cn(
              "max-w-[17ch] text-[clamp(2.7rem,8vw,6.75rem)] leading-[0.96] font-medium tracking-[-0.055em] whitespace-pre-line text-text-primary transition-all duration-700 delay-100 ease-[cubic-bezier(0.22,1,0.36,1)]",
              isVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-6 opacity-0",
            )}
          >
            {siteContent.hero.title}
          </h1>

          <p
            className={cn(
              "mt-7 max-w-2xl border-l border-white/20 pl-5 text-sm leading-7 text-text-secondary transition-all duration-700 delay-200 ease-[cubic-bezier(0.22,1,0.36,1)] sm:mt-9 sm:pl-6 sm:text-base lg:text-lg lg:leading-8",
              isVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-6 opacity-0",
            )}
          >
            {siteContent.hero.description}
          </p>

          <div
            className={cn(
              "mt-8 flex flex-col items-stretch gap-3 transition-all duration-700 delay-300 ease-[cubic-bezier(0.22,1,0.36,1)] sm:mt-10 sm:flex-row sm:items-center",
              isVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-6 opacity-0",
            )}
          >
            <Button href={siteContent.hero.primaryAction.href}>
              {siteContent.hero.primaryAction.label}
            </Button>
            <Button
              href={siteContent.hero.secondaryAction.href}
              variant="secondary"
            >
              {siteContent.hero.secondaryAction.label}
            </Button>
          </div>
        </div>
      </SectionContainer>

      <ScrollIndicator />
      <div
        className="absolute right-0 bottom-0 left-0 z-10 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent"
        aria-hidden="true"
      />
    </section>
  );
}
