import { siteContent } from "@/content/site";

import { Logo } from "./Logo";

export function Footer() {
  return (
    <footer className="border-t border-line bg-background-deep">
      <div className="mx-auto grid w-full max-w-[1440px] gap-10 px-5 py-12 sm:px-8 lg:grid-cols-[1fr_auto] lg:items-end lg:px-12 lg:py-16 xl:px-16">
        <div>
          <a
            aria-label="Troy Teknoloji ana sayfa"
            className="inline-flex rounded-sm focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent"
            href="#ana-sayfa"
          >
            <Logo />
          </a>
          <p className="mt-5 max-w-md text-sm leading-6 text-text-muted">
            {siteContent.company.description}
          </p>
        </div>

        <nav aria-label="Alt bilgi navigasyonu">
          <ul className="flex flex-wrap gap-x-6 gap-y-3 lg:justify-end">
            {siteContent.navigation.map((item) => (
              <li key={item.href}>
                <a
                  className="text-xs tracking-[0.08em] text-text-muted uppercase transition-colors hover:text-text-primary focus-visible:rounded-sm focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent"
                  href={item.href}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      <div className="border-t border-line">
        <div className="mx-auto flex w-full max-w-[1440px] flex-col gap-2 px-5 py-5 text-[0.65rem] tracking-[0.09em] text-text-muted uppercase sm:flex-row sm:items-center sm:justify-between sm:px-8 lg:px-12 xl:px-16">
          <p>© {new Date().getFullYear()} Troy Teknoloji</p>
          <p>Mühendislik · AR-GE · İleri Teknoloji</p>
        </div>
      </div>
    </footer>
  );
}
