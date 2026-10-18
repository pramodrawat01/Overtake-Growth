
import AboutHero from "../components/about/AboutHero";
import AboutImageCarousel from "../components/about/AboutImageCarousel";
import AboutPrinciples from "../components/about/AboutPrinciples";
import AboutStoryStats from "../components/about/AboutStoryStats";
import ClientLogoStrip from "../components/about/ClientLogoStrip";
import TeamSection from "../components/about/TeamSection";

export default function AboutPage() {
  return (
    <main className="overflow-hidden bg-white">
      <AboutHero />
      <AboutImageCarousel />
      <AboutStoryStats/>
      <AboutPrinciples />
      <ClientLogoStrip />
      <TeamSection />
    </main>
  );
}
