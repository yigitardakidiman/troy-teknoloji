import { Footer } from "@/components/layout/Footer";
import { ExpertiseSection } from "@/components/sections/ExpertiseSection";
import { Hero } from "@/components/sections/Hero";
import { PlaceholderSection } from "@/components/sections/PlaceholderSection";
import { siteContent } from "@/content/site";

export default function HomePage() {
  return (
    <>
      <main id="ana-icerik">
        <Hero />
        <ExpertiseSection />
        {siteContent.placeholders.map((section, index) => (
          <PlaceholderSection index={index} key={section.id} {...section} />
        ))}
      </main>
      <Footer />
    </>
  );
}
