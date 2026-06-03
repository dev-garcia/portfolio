import { PageRevealMotion } from "@/components/motion/page-reveal-motion";
import { PortfolioNav } from "@/components/portfolio/portfolio-nav";
import { ContactSection } from "@/components/portfolio/sections/contact-section";
import { EducationSection } from "@/components/portfolio/sections/education-section";
import { ExperienceSection } from "@/components/portfolio/sections/experience-section";
import { HeroSection } from "@/components/portfolio/sections/hero-section";
import { ProductSection } from "@/components/portfolio/sections/product-section";
import { StackSection } from "@/components/portfolio/sections/stack-section";
import { StructuredData } from "@/components/seo/structured-data";
import { educationGroups } from "@/data/portfolio/education";
import { experiences } from "@/data/portfolio/experience";
import { heroStats } from "@/data/portfolio/hero";
import { productFeatures } from "@/data/portfolio/product";
import { profile } from "@/data/portfolio/profile";
import { stackGroups } from "@/data/portfolio/stack";

export default function Home() {
  return (
    <>
      <StructuredData />
      <PortfolioNav />

      <main className="min-h-screen overflow-x-clip pb-24 md:pb-0" id="main">
        <PageRevealMotion rootSelector="#main" />
        <HeroSection profile={profile} stats={heroStats} />
        <ProductSection features={productFeatures} profile={profile} />
        <ExperienceSection experiences={experiences} />
        <EducationSection groups={educationGroups} />
        <StackSection groups={stackGroups} />
        <ContactSection profile={profile} />
      </main>
    </>
  );
}
