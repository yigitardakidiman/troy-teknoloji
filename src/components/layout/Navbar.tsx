"use client";

import { useEffect, useState } from "react";

import { siteContent } from "@/content/site";
import { cn } from "@/lib/cn";

import { Logo } from "./Logo";

function MenuIcon({ open }: { open: boolean }) {
  return (
    <span className="relative block size-5" aria-hidden="true">
      <span
        className={cn(
          "absolute left-0 h-px w-5 bg-current transition-transform duration-300",
          open ? "top-2.5 rotate-45" : "top-1.5",
        )}
      />
      <span
        className={cn(
          "absolute top-2.5 left-0 h-px w-5 bg-current transition-opacity duration-300",
          open ? "opacity-0" : "opacity-100",
        )}
      />
      <span
        className={cn(
          "absolute left-0 h-px w-5 bg-current transition-transform duration-300",
          open ? "top-2.5 -rotate-45" : "top-3.5",
        )}
      />
    </span>
  );
}

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 24);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setIsMenuOpen(false);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 border-b transition-all duration-500",
        isScrolled || isMenuOpen
          ? "border-line bg-background/88 shadow-[0_12px_40px_rgba(0,0,0,0.16)] backdrop-blur-xl"
          : "border-transparent bg-transparent",
      )}
    >
      <nav
        aria-label="Ana navigasyon"
        className="mx-auto flex h-[72px] w-full max-w-[1440px] items-center justify-between px-5 sm:h-20 sm:px-8 lg:px-12 xl:px-16"
      >
        <a
          aria-label="Troy Teknoloji ana sayfa"
          className="rounded-sm focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent"
          href="#ana-sayfa"
          onClick={() => setIsMenuOpen(false)}
        >
          <Logo />
        </a>

        <ul className="hidden items-center gap-8 lg:flex">
          {siteContent.navigation.map((item) => (
            <li key={item.href}>
              <a
                className="relative py-3 text-[0.68rem] font-medium tracking-[0.14em] text-text-secondary uppercase transition-colors after:absolute after:inset-x-0 after:bottom-1 after:h-px after:origin-right after:scale-x-0 after:bg-accent after:transition-transform hover:text-text-primary hover:after:origin-left hover:after:scale-x-100 focus-visible:rounded-sm focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent"
                href={item.href}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        <button
          aria-controls="mobile-menu"
          aria-expanded={isMenuOpen}
          aria-label={isMenuOpen ? "Menüyü kapat" : "Menüyü aç"}
          className="inline-flex size-11 items-center justify-center border border-white/20 text-text-primary transition-colors hover:border-white/40 hover:bg-white/5 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent lg:hidden"
          onClick={() => setIsMenuOpen((current) => !current)}
          type="button"
        >
          <MenuIcon open={isMenuOpen} />
        </button>
      </nav>

      <div
        className={cn(
          "grid border-t border-line bg-background/96 transition-[grid-template-rows,visibility] duration-300 lg:hidden",
          isMenuOpen ? "visible grid-rows-[1fr]" : "invisible grid-rows-[0fr]",
        )}
        id="mobile-menu"
      >
        <div className="overflow-hidden">
          <ul className="px-5 py-4 sm:px-8">
            {siteContent.navigation.map((item, index) => (
              <li
                className="border-b border-line last:border-b-0"
                key={item.href}
              >
                <a
                  className="flex items-center justify-between py-4 text-sm font-medium tracking-[0.08em] text-text-secondary uppercase transition-colors hover:text-text-primary focus-visible:outline-2 focus-visible:outline-offset-[-2px] focus-visible:outline-accent"
                  href={item.href}
                  onClick={() => setIsMenuOpen(false)}
                >
                  <span>{item.label}</span>
                  <span
                    className="font-mono text-[0.62rem] text-accent"
                    aria-hidden="true"
                  >
                    0{index + 1}
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </header>
  );
}
