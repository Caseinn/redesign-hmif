// import { HeroSection } from "@/components/hero-section";
import { BlogSection } from "@/components/blog-section";
import { DivisionSection } from "@/components/division-section";
import { FaqSection } from "@/components/faq-section";
import { HeroSection } from "@/components/hero-section";
import { InstagramSection } from "@/components/instagram-section";
import { ProfileSection } from "@/components/profile-section";

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <ProfileSection />
      <DivisionSection />
      <BlogSection />
      <FaqSection />
      <InstagramSection />
    </main>
  );
}
