import { SectionContainer } from "@/components/ui/SectionContainer";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { siteContent } from "@/content/site";

function TechnicalMark() {
  return (
    <svg aria-hidden="true" className="size-8" fill="none" viewBox="0 0 32 32">
      <circle
        cx="16"
        cy="16"
        r="9.5"
        stroke="currentColor"
        strokeOpacity=".8"
      />
      <path d="M16 1v7M16 24v7M1 16h7M24 16h7" stroke="currentColor" />
      <circle cx="16" cy="16" r="2" fill="currentColor" />
    </svg>
  );
}

export function ExpertiseSection() {
  return (
    <section
      className="relative overflow-hidden bg-surface py-20 sm:py-24 lg:py-32"
      id="uzmanlik-alanlari"
    >
      <div className="technical-rings absolute -top-72 -right-72 size-[46rem] opacity-35" />
      <SectionContainer className="relative">
        <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
          <SectionHeading
            description="Tasarım fikrinden üretilebilir çözüme uzanan teknik disiplinler."
            eyebrow="Uzmanlık Alanları"
            title="Mühendisliğin farklı disiplinlerini tek yapıda buluşturuyoruz."
          />

          <div className="grid border-t border-l border-line sm:grid-cols-2">
            {siteContent.expertise.map((item) => (
              <article
                className="group relative min-h-52 overflow-hidden border-r border-b border-line bg-white/[0.015] p-6 transition-colors duration-500 hover:bg-white/[0.045] sm:min-h-60 sm:p-8"
                key={item.code}
              >
                <div className="flex items-start justify-between">
                  <span className="font-mono text-[0.65rem] tracking-[0.16em] text-accent">
                    {item.code}
                  </span>
                  <span className="text-technical transition-transform duration-500 group-hover:rotate-45 group-hover:text-accent">
                    <TechnicalMark />
                  </span>
                </div>
                <h3 className="absolute right-6 bottom-6 left-6 max-w-[18rem] text-xl leading-snug font-medium tracking-[-0.025em] text-text-primary sm:right-8 sm:bottom-8 sm:left-8 sm:text-2xl">
                  {item.title}
                </h3>
                <span className="absolute right-0 bottom-0 h-px w-0 bg-accent transition-[width] duration-500 group-hover:w-full" />
              </article>
            ))}
          </div>
        </div>
      </SectionContainer>
    </section>
  );
}
