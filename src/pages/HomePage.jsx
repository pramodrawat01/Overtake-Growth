
import BlogInsightsSection from "../components/BlogInsightsSection";
import GrowthProcessSection from "../components/GrowthProcessSection";
import GrowthResultsSection from "../components/GrowthResultsSection";
import Hero from "../components/Hero";
import PointOfViewSection from "../components/PointOfViewSection";
import SelectedWorkSection from "../components/SelectedWorkSection";
import TestimonialsSection from "../components/TestimonialsSection";
import WhyOvertakeSection from "../components/WhyOvertakeSection";
export default function HomePage() {
  return (
    <>
      <Hero />
      <PointOfViewSection />
      <GrowthResultsSection/>
      <SelectedWorkSection/>
      <GrowthProcessSection/>
      <WhyOvertakeSection/>
      <TestimonialsSection/>

      <BlogInsightsSection/>
    </>
  );
}
