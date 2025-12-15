import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import HeroSection from "@/components/sections/HeroSection";
import ClientsSection from "@/components/sections/ClientsSection";
import ChallengesSection from "@/components/sections/ChallengesSection";
import ServicesSection from "@/components/sections/ServicesSection";
import CasesSection from "@/components/sections/CasesSection";
import ExpertiseSection from "@/components/sections/ExpertiseSection";
import TeamSection from "@/components/sections/TeamSection";
import WhyUsSection from "@/components/sections/WhyUsSection";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import ContactFormSection from "@/components/sections/ContactFormSection";

const Index = () => {
  return (
    <>
      <Helmet>
        <title>Intrao Tech | Web Development Agency - Launch, Scale, Succeed</title>
        <meta
          name="description"
          content="Intrao Tech is a web development agency helping startups and businesses launch, scale, and succeed faster with custom web development, UI/UX design, and MVP development."
        />
        <meta
          name="keywords"
          content="web development, UI/UX design, MVP development, startup agency, digital product agency"
        />
      </Helmet>

      <Header />
      
      <main>
        <HeroSection />
        <div className="relative z-10 bg-background">
          <ClientsSection />
          <ChallengesSection />
          <ServicesSection />
          <CasesSection />
          <ExpertiseSection />
          <TeamSection />
          <WhyUsSection />
          <TestimonialsSection />
          <ContactFormSection />
        </div>
      </main>

      <Footer />
    </>
  );
};

export default Index;
