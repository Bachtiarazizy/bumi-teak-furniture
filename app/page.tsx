import CraftsmanshipSection from "@/components/crafmanship-card-section";
import CraftingStorySection from "@/components/crafting-story-section";
import FAQSection from "@/components/faq-section";
import HeroSection from "@/components/hero-section";
import QualityVideoSection from "@/components/quality-video-section";
import SignaturePiecesSection from "@/components/signature-pieces-section";
import TransformLivingCTA from "@/components/transform-living-CTA-section";
import TransformingWoodSection from "@/components/transforming-wood-section";

export default function Home() {
  return (
    <div className="">
      <HeroSection />
      <CraftsmanshipSection />
      <QualityVideoSection videoThumbnail="/images/video-thumbnail.jpg" videoUrl="https://www.pexels.com/download/video/3773486" />
      <SignaturePiecesSection />
      <CraftingStorySection imagePath="/images/crafting-story.jpg" />
      <TransformingWoodSection imagePath="/images/transforming-wood.jpg" />
      <TransformLivingCTA imagePath="/images/hero-image.jpg" />
      <FAQSection />
    </div>
  );
}
