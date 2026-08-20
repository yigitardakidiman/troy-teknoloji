import { SectionContainer } from "@/components/ui/SectionContainer";
import { SectionHeading } from "@/components/ui/SectionHeading";

type PlaceholderSectionProps = {
  id: string;
  eyebrow: string;
  title: string;
  index: number;
};

export function PlaceholderSection({
  id,
  eyebrow,
  title,
  index,
}: PlaceholderSectionProps) {
  return (
    <section
      className="border-t border-line bg-background py-20 sm:py-24"
      id={id}
    >
      <SectionContainer>
        <div className="grid gap-10 lg:grid-cols-[1fr_1.15fr] lg:items-end">
          <SectionHeading eyebrow={eyebrow} title={title} />

          <div
            aria-label={`${title} içeriği için yer tutucu`}
            className="relative min-h-44 overflow-hidden border border-line bg-surface/50 p-6 sm:min-h-52 sm:p-8"
          >
            <div className="absolute inset-0 placeholder-grid opacity-50" />
            <div className="relative flex h-full min-h-32 flex-col justify-between">
              <span className="font-mono text-[0.62rem] tracking-[0.18em] text-technical uppercase">
                Bölüm / 0{index + 1}
              </span>
              <p className="max-w-sm text-sm leading-6 text-text-muted">
                Bu bölüm, doğrulanmış kurumsal içerik hazır olduğunda merkezi
                içerik yapısı üzerinden güncellenecektir.
              </p>
            </div>
          </div>
        </div>
      </SectionContainer>
    </section>
  );
}
