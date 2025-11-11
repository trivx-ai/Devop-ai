import CallToActionSection from "@/components/landing/cta-section";
import FeaturesSection from "@/components/landing/features-section";
import { UseCases } from "@/components/landing/use-cases";
import HeroSection from "@/components/landing/hero-section";
import PricingSection from "@/components/landing/pricing-section";
import Particles from "@/components/magicui/particles";
import { SphereMask } from "@/components/magicui/sphere-mask";
import WorkflowSection from "@/components/landing/workflow-section";

export default async function Page() {
  return (
    <>
      <HeroSection />
      <FeaturesSection />
      <WorkflowSection />
      <UseCases />
      <SphereMask />
      <PricingSection />
      <CallToActionSection />
      <Particles
        className="absolute inset-0 -z-10"
        quantity={50}
        ease={70}
        size={0.05}
        staticity={40}
        color={"#ffffff"}
      />
    </>
  );
}
