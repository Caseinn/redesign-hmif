// import { HeroSection } from "@/components/hero-section";
import { FaqSection } from "@/components/faq-section";
import { InstagramSection } from "@/components/instagram-section";

export default function HomePage() {
  return (
    <main className="min-h-screen">
      {/* <HeroSection /> */}
      <FaqSection />
      <InstagramSection />
    </main>
  );
}
