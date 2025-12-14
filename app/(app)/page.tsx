import CraftsmanshipSection from "@/components/home-page/crafmanship-card-section";
import CraftingStorySection from "@/components/home-page/crafting-story-section";
import FAQSection from "@/components/home-page/faq-section";
import AnimatedSection from "@/components/layout/animated-section";
import QualityVideoSection from "@/components/home-page/quality-video-section";
import { LocalBusinessSchema, OrganizationSchema } from "@/components/seo/StructuredData";
import SignaturePiecesSection from "@/components/home-page/signature-pieces-section";
import TransformLivingCTA from "@/components/home-page/transform-living-CTA-section";
import HomeClientWrapper from "@/components/home-page/home-client-wrapper";

export default function Home() {
  return (
    <HomeClientWrapper>
      <OrganizationSchema />
      <LocalBusinessSchema />

      <AnimatedSection threshold={0.2}>
        <CraftsmanshipSection />
      </AnimatedSection>

      <AnimatedSection threshold={0.2}>
        <QualityVideoSection videoThumbnail="/images/video-thumbnail.jpg" videoUrl="https://www.pexels.com/download/video/3773486" />
      </AnimatedSection>

      <AnimatedSection threshold={0.2}>
        <SignaturePiecesSection />
      </AnimatedSection>

      <AnimatedSection threshold={0.2}>
        <CraftingStorySection imagePath="/images/quality.jpg" />
      </AnimatedSection>

      <AnimatedSection threshold={0.2}>
        <TransformLivingCTA imagePath="/images/craftman.webp" />
      </AnimatedSection>

      <AnimatedSection threshold={0.2}>
        <FAQSection />
      </AnimatedSection>
    </HomeClientWrapper>
  );
}
