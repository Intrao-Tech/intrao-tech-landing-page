import { SEOHead } from "@/components/SEOHead";
import {
  generateOrganizationSchema,
  generateWebSiteSchema,
  generateLocalBusinessSchema,
} from "@/lib/structured-data";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ParallaxHeroSection from "@/components/sections/ParallaxHeroSection";
import ClientsSection from "@/components/sections/ClientsSection";
import ChallengesSection from "@/components/sections/ChallengesSection";
import ServicesSection from "@/components/sections/ServicesSection";
// import CasesSection from "@/components/sections/CasesSection";
import ExpertiseSection from "@/components/sections/ExpertiseSection";
import TeamSection from "@/components/sections/TeamSection";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import ContactFormSection from "@/components/sections/ContactFormSection";

const Index = () => {
  return (
    <>
      <SEOHead
        title="Intrao Tech | Founder-Led Dev & Design Studio for Startups"
        description="Your dev team, without the payroll. Founder-led studio building MVPs, apps, and websites for high-velocity startups. One partner, no handoffs."
        canonical="/"
        structuredData={[generateOrganizationSchema(), generateWebSiteSchema(), generateLocalBusinessSchema()]}
      />

      <Header />
      
      <main>
        <ParallaxHeroSection />
        <ClientsSection />
        <ChallengesSection />
        <ServicesSection />
        {/* <CasesSection /> */}
        <ExpertiseSection />
        <TeamSection />
        <TestimonialsSection />
        <ContactFormSection />
      </main>

      <Footer />
    </>
  );
};

export default Index;