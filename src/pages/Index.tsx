import { SEOHead } from "@/components/SEOHead";
import {
  generateOrganizationSchema,
  generateWebSiteSchema,
  generateLocalBusinessSchema,
  generateWebPageSchema,
  generateHowToSchema,
} from "@/lib/structured-data";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ParallaxHeroSection from "@/components/sections/ParallaxHeroSection";
import HomepageSummarySection from "@/components/sections/HomepageSummarySection";
// import HomepageProcessSection from "@/components/sections/HomepageProcessSection";
import ClientsSection from "@/components/sections/ClientsSection";
import ChallengesSection from "@/components/sections/ChallengesSection";
import ServicesSection from "@/components/sections/ServicesSection";
// import CasesSection from "@/components/sections/CasesSection";
import ExpertiseSection from "@/components/sections/ExpertiseSection";
// import TeamSection from "@/components/sections/TeamSection";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import ContactFormSection from "@/components/sections/ContactFormSection";

const Index = () => {
  return (
    <>
      <SEOHead
        title="Intrao Tech | Founder-Led Dev & Design Studio for Startups"
        description="Your dev team, without the payroll. Founder-led studio building MVPs, apps, and websites for high-velocity startups. One partner, no handoffs."
        canonical="/"
        structuredData={[
          generateOrganizationSchema(),
          generateWebSiteSchema(),
          generateLocalBusinessSchema(),
          generateWebPageSchema({
            name: "Intrao Tech - Founder-Led Dev & Design Studio",
            description:
              "Your dev team, without the payroll. Founder-led studio building MVPs, apps, and websites for high-velocity startups.",
            url: "/",
          }),
          generateHowToSchema({
            name: "How Intrao Tech works - from first call to live product",
            description:
              "Our four-step process takes your project from discovery call to launched product.",
            steps: [
              {
                name: "Discovery call (Day 1)",
                text: "90-minute call with our founders to understand your goals, users, and constraints. You receive a scoped proposal within 24 hours.",
              },
              {
                name: "Design sprint (Weeks 1–2)",
                text: "Wireframes and high-fidelity mockups delivered in Figma, with two feedback rounds built into the schedule.",
              },
              {
                name: "Development sprint (Weeks 2–8)",
                text: "Built in React, Next.js, or no-code tools depending on your needs. Weekly demos keep you in the loop at every stage.",
              },
              {
                name: "Launch and iterate",
                text: "QA, deployment, and launch support included. First post-launch iteration ensures you ship with confidence.",
              },
            ],
          }),
        ]}
      />

      <Header />

      <main id="main-content">
        <ParallaxHeroSection />
        <HomepageSummarySection />
        {/* <HomepageProcessSection /> */}
        <ClientsSection />
        <ChallengesSection />
        <ServicesSection />
        {/* <CasesSection /> */}
        <ExpertiseSection />
        {/* <TeamSection /> */}
        <TestimonialsSection />
        <ContactFormSection />
      </main>

      <Footer />
    </>
  );
};

export default Index;
