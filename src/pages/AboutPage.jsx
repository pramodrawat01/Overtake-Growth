
import AboutHero from "../components/about/AboutHero";
import AboutImageCarousel from "../components/about/AboutImageCarousel";
import AboutPrinciples from "../components/about/AboutPrinciples";
import ClientLogoStrip from "../components/about/ClientLogoStrip";
import TeamSection from "../components/about/TeamSection";

export default function AboutPage() {
  return (
    <main className="overflow-hidden bg-white">
      <AboutHero />
      <AboutImageCarousel />
      <AboutPrinciples />
      <ClientLogoStrip />
      <TeamSection />
    </main>
  );
}
