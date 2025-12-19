import { motion } from "framer-motion";
import { useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ButtonArrows } from "@/components/ui/button-arrows";

const ProductDiscovery = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 },
  };

  const staggerContainer = {
    initial: {},
    whileInView: {
      transition: {
        staggerChildren: 0.1,
      },
    },
    viewport: { once: true },
  };

  const challenges = [
    {
      question: "Do you struggle with defining essential features?",
      answer:
        "Skipping the discovery phase can lead to unnecessary costs and inefficiencies. We help you focus on critical features that drive real value for your users and business.",
    },
    {
      question: "Do you lack technical clarity for development?",
      answer:
        "Architectural and system specification gaps create confusion. Our discovery services ensure architectural clarity, outlining system requirements, integrations, and scalability solutions.",
    },
    {
      question: "Need an accurate cost estimation?",
      answer:
        "With our discovery service, you'll receive a detailed cost breakdown, enabling you to plan your budget effectively and avoid unexpected expenses.",
    },
  ];

  const services = [
    {
      number: "01",
      title: "Technical & Product Documentation",
      description:
        "Our Solution Architects define server specifications, integrations, and tech stack, ensuring alignment with your business ideas.",
    },
    {
      number: "02",
      title: "Technical Feasibility Assessment",
      description:
        "We assess the technical feasibility of your product, analyzing resource needs and potential challenges to ensure smooth development.",
    },
    {
      number: "03",
      title: "Feature Prioritization",
      description:
        "We help you focus on key features based on user needs, business goals, and technical feasibility for efficient development.",
    },
    {
      number: "04",
      title: "Solution Discovery",
      description:
        "We analyze and define the best approach to building your product, balancing feasibility and business objectives.",
    },
    {
      number: "05",
      title: "UX Discovery Phase",
      description:
        "We create user flows to map intuitive interactions ensuring all user actions align with the product vision and business goals.",
    },
    {
      number: "06",
      title: "Competitor & Trends Analysis",
      description:
        "We conduct an in-depth evaluation of industry trends and competitor strategies to inform product decisions.",
    },
  ];

  const benefits = [
    {
      icon: (
        <svg
          className="w-8 h-8"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
          />
        </svg>
      ),
      title: "Technical Expertise",
      description:
        "Every product is built with a strong architectural foundation, optimal performance, and seamless integration with existing systems.",
    },
    {
      icon: (
        <svg
          className="w-8 h-8"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      ),
      title: "Cost Efficiency",
      description:
        "By prioritizing essential features, we help you minimize wasted resources and optimize development efficiency.",
    },
    {
      icon: (
        <svg
          className="w-8 h-8"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
          />
        </svg>
      ),
      title: "Comprehensive Documentation",
      description:
        "Structured documentation that captures every technical and functional requirement for seamless transition to development.",
    },
    {
      icon: (
        <svg
          className="w-8 h-8"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
          />
        </svg>
      ),
      title: "Mid-Level and Senior Experts",
      description:
        "Product designers & developers with 7+ years of expertise ensuring your product aligns with audience expectations.",
    },
    {
      icon: (
        <svg
          className="w-8 h-8"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
          />
        </svg>
      ),
      title: "Proven Trust",
      description:
        "Our commitment to excellence has resulted in a 98% client satisfaction rate.",
    },
  ];

  const processSteps = [
    {
      number: "01",
      title: "Stakeholder Interview",
      description:
        "Getting everyone aligned on goals and constraints. We understand your vision, business model, and success metrics.",
      deliverables: "Business objectives, target users, technical requirements, timeline & budget",
    },
    {
      number: "02",
      title: "Product Documentation",
      description:
        "Defining how the product works in detail. We document every feature, user role, and piece of business logic.",
      deliverables: "Feature specifications, business logic, module breakdown, integration requirements",
    },
    {
      number: "03",
      title: "Feature Prioritization",
      description:
        "Deciding what gets built when. Not everything can launch in version one.",
      deliverables: "Impact/effort assessments, MVP scope, roadmaps, dependency mapping",
    },
    {
      number: "04",
      title: "Technical Architecture",
      description:
        "Planning the infrastructure and system design. We map out database structure, API architecture, and hosting requirements.",
      deliverables: "Architecture diagrams, technical specifications, cost breakdowns",
    },
    {
      number: "05",
      title: "User Flows & UX Discovery",
      description:
        "Mapping how people move through the product. We create flow diagrams for core user journeys and edge cases.",
      deliverables: "User flow diagrams, interaction specifications",
    },
    {
      number: "06",
      title: "Project Estimation",
      description:
        "Providing realistic timelines and costs. With everything documented, we estimate development time and cost.",
      deliverables: "Project proposals, cost estimates, timelines",
    },
  ];

  const successCards = [
    {
      label: "COMPLIANCE",
      title: "Regulatory Expertise",
      description:
        "HIPAA- and GDPR-certified expertise for Healthcare, FinTech, and other regulated industries.",
    },
    {
      label: "LONGEVITY",
      title: "Design That Lasts",
      description:
        "We don't chase fads. We build digital products that stay relevant and deliver long-term value.",
    },
    {
      label: "DELIVERY",
      title: "Developer Integration",
      description:
        "Every component is built with devs in mind: design tokens, accessibility, reusability, and real-world constraints.",
    },
    {
      label: "COLLABORATION",
      title: "Direct Access",
      description:
        "Work directly with the doers — not a chain of account managers. Get answers and decisions fast.",
    },
  ];

  return (
    <div className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section
        data-header-theme="dark"
        className="bg-dark text-dark-foreground pt-32 pb-20 md:pt-40 md:pb-32 relative overflow-hidden"
      >
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl"></div>
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div {...fadeInUp}>
              <span className="inline-block px-4 py-2 bg-primary/20 text-primary rounded-xl text-sm font-medium mb-6">
                PRODUCT DISCOVERY
              </span>
              <h1 className="heading-2 mb-6">
                Product Discovery
              </h1>
              <p className="text-xl text-dark-foreground/80 mb-8">
                Transform your app idea into a launch-ready roadmap. We help you
                define critical features to ensure your app meets market needs,
                saving development costs by preventing wasted resources on
                unnecessary features.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild className="group">
                  <Link to="/contacts">
                    LET'S TALK
                    <ButtonArrows />
                  </Link>
                </Button>
                <Button asChild variant="outline-dark" className="group">
                  <Link to="/cases">
                    VIEW OUR CASES
                    <ButtonArrows />
                  </Link>
                </Button>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="aspect-square bg-gradient-to-br from-primary/20 to-primary/5 rounded-xl flex items-center justify-center">
                <div className="text-9xl font-bold text-primary/30">PD</div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Challenges Section */}
      <section
        data-header-theme="light"
        className="bg-background text-foreground py-24"
      >
        <div className="container mx-auto px-6">
          <motion.div {...fadeInUp} className="max-w-3xl mb-16">
            <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-xl text-sm font-medium mb-6">
              CHALLENGES
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Start your product journey with clarity and confidence
            </h2>
          </motion.div>

          <motion.div
            {...staggerContainer}
            className="grid md:grid-cols-1 gap-8"
          >
            {challenges.map((challenge, index) => (
              <motion.div
                key={index}
                variants={{
                  initial: { opacity: 0, y: 20 },
                  whileInView: { opacity: 1, y: 0 },
                }}
                className="grid md:grid-cols-2 gap-8 py-8 border-b border-border last:border-0"
              >
                <h3 className="text-xl font-semibold">{challenge.question}</h3>
                <p className="text-muted-foreground">{challenge.answer}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Services Offered Section */}
      <section
        data-header-theme="dark"
        className="bg-dark text-dark-foreground py-24"
      >
        <div className="container mx-auto px-6">
          <motion.div {...fadeInUp} className="max-w-3xl mb-16">
            <span className="inline-block px-4 py-2 bg-primary/20 text-primary rounded-xl text-sm font-medium mb-6">
              WHAT'S INCLUDED
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Comprehensive product discovery services
            </h2>
            <p className="text-dark-foreground/70">
              Everything you need to validate your idea and prepare for
              successful development.
            </p>
          </motion.div>

          <motion.div
            {...staggerContainer}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {services.map((service, index) => (
              <motion.div
                key={index}
                variants={{
                  initial: { opacity: 0, y: 20 },
                  whileInView: { opacity: 1, y: 0 },
                }}
                className="p-8 bg-dark-foreground/5 rounded-xl border border-dark-foreground/10 hover:border-primary/50 transition-colors"
              >
                <span className="text-primary text-sm font-medium">
                  {service.number}
                </span>
                <h3 className="text-xl font-semibold mt-4 mb-3">
                  {service.title}
                </h3>
                <p className="text-dark-foreground/70">{service.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Benefits Section */}
      <section
        data-header-theme="dark"
        className="bg-dark text-dark-foreground py-24 border-t border-dark-foreground/10"
      >
        <div className="container mx-auto px-6">
          <motion.div {...fadeInUp} className="max-w-3xl mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Why choose our product discovery services?
            </h2>
          </motion.div>

          <motion.div
            {...staggerContainer}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                variants={{
                  initial: { opacity: 0, y: 20 },
                  whileInView: { opacity: 1, y: 0 },
                }}
                className="p-8 bg-dark-foreground/5 rounded-xl"
              >
                <div className="text-primary mb-4">{benefit.icon}</div>
                <h3 className="text-xl font-semibold mb-3">{benefit.title}</h3>
                <p className="text-dark-foreground/70">{benefit.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Process Section */}
      <section
        data-header-theme="light"
        className="bg-background text-foreground py-24"
      >
        <div className="container mx-auto px-6">
          <motion.div {...fadeInUp} className="max-w-3xl mb-16">
            <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-xl text-sm font-medium mb-6">
              OUR PROCESS
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Our product discovery process
            </h2>
            <p className="text-muted-foreground">
              A structured approach that transforms your idea into a detailed,
              actionable development roadmap.
            </p>
          </motion.div>

          <motion.div {...staggerContainer} className="space-y-6">
            {processSteps.map((step, index) => (
              <motion.div
                key={index}
                variants={{
                  initial: { opacity: 0, y: 20 },
                  whileInView: { opacity: 1, y: 0 },
                }}
                className="grid md:grid-cols-12 gap-6 p-6 bg-muted/30 rounded-xl items-center"
              >
                <div className="md:col-span-1">
                  <span className="text-4xl font-bold text-primary/30">
                    {step.number}
                  </span>
                </div>
                <div className="md:col-span-3">
                  <h3 className="text-xl font-semibold">{step.title}</h3>
                </div>
                <div className="md:col-span-4">
                  <p className="text-muted-foreground">{step.description}</p>
                </div>
                <div className="md:col-span-4">
                  <span className="text-sm text-primary font-medium">
                    Deliverables:
                  </span>
                  <p className="text-sm text-muted-foreground">
                    {step.deliverables}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Success Cards Section */}
      <section
        data-header-theme="light"
        className="bg-background text-foreground py-24 border-t border-border"
      >
        <div className="container mx-auto px-6">
          <motion.div {...fadeInUp} className="max-w-3xl mb-16">
            <h2 className="text-3xl md:text-4xl font-bold">
              Your success is our priority
            </h2>
          </motion.div>

          <motion.div
            {...staggerContainer}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {successCards.map((card, index) => (
              <motion.div
                key={index}
                variants={{
                  initial: { opacity: 0, y: 20 },
                  whileInView: { opacity: 1, y: 0 },
                }}
                className="p-6 bg-muted/30 rounded-xl"
              >
                <span className="text-xs font-medium text-primary">
                  {card.label}
                </span>
                <h3 className="text-lg font-semibold mt-2 mb-3">
                  {card.title}
                </h3>
                <p className="text-muted-foreground text-sm">
                  {card.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section
        data-header-theme="dark"
        className="bg-dark text-dark-foreground py-24"
      >
        <div className="container mx-auto px-6">
          <motion.div {...fadeInUp} className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Ready to validate your product idea?
            </h2>
            <p className="text-xl text-dark-foreground/70 mb-8">
              Let's transform your vision into a clear, actionable roadmap for
              successful development.
            </p>
            <Button asChild className="group">
              <Link to="/contacts">
                GET IN TOUCH
                <ButtonArrows />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ProductDiscovery;
