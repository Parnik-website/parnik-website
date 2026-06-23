import Hero from "@/components/home/Hero";
import TrustIndicators from "@/components/home/TrustIndicators";
import AboutPreview from "@/components/home/AboutPreview";
import ServicesPreview from "@/components/home/ServicesPreview";
import GlobalNetworkPreview from "@/components/home/GlobalNetworkPreview";
import ProductCategories from "@/components/home/ProductCategories";
import WhyParnik from "@/components/home/WhyParnik";
import CTA from "@/components/home/CTA";

export default function HomePage() {
  return (
    <>
      <Hero />
      <TrustIndicators />
      <AboutPreview />
      <ServicesPreview />
      <GlobalNetworkPreview />
      <ProductCategories />
      <WhyParnik />
      <CTA />
    </>
  );
}