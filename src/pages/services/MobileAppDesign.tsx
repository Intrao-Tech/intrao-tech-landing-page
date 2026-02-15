import { SEOHead } from "@/components/SEOHead";
import { generateServiceSchema, generateBreadcrumbSchema, generateFAQSchema } from "@/lib/structured-data";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  Crown,
  Users,
  Code,
  Sparkles,
  Heart,
  Smartphone,
  Navigation,
  Layers,
  Accessibility,
  TrendingUp,
  Zap,
  UserCheck,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { ButtonArrows } from "@/components/ui/button-arrows";

const MobileAppDesign = () => {
  const challenges = [
    {
      question: "Users drop off before converting?",
      answer:
        "A confusing design can lead to low engagement and high churn rates. We craft mobile app UI that guides users seamlessly through your app, increasing retention and conversions.",
    },
    {
      question: "Struggling to differentiate in a crowded market?",
      answer:
        "A well-designed app is your competitive edge. Our mobile app design and development services ensure your app is visually compelling and functionally superior.",
    },
    {
      question: "Does your app feel outdated or clunky?",
      answer:
        "UI/UX trends evolve, and so do user expectations. If your app needs a modern, user-friendly redesign, we'll enhance its usability and visual appeal to match today's standards.",
    },
  ];

  const mobileUIFeatures = [
    {
      icon: Navigation,
      title: "Intuitive navigation",
      description:
        "Users should never feel lost. We design clear, easy-to-follow pathways for every action.",
    },
    {
      icon: Layers,
      title: "Cross-platform consistency",
      description:
        "Whether iOS or Android, your app will feel native while maintaining a unified brand experience.",
    },
    {
      icon: Accessibility,
      title: "Accessibility & inclusivity",
      description:
        "We ensure your app is easy to use for all users, including those with disabilities.",
    },
    {
      icon: TrendingUp,
      title: "Design for growth",
      description:
        "We create scalable mobile app UI components so your product can evolve easily.",
    },
    {
      icon: Zap,
      title: "Performance optimization",
      description:
        "Our designs prioritize speed and responsiveness to ensure a seamless user experience.",
    },
    {
      icon: UserCheck,
      title: "User-centered approach",
      description:
        "Every design decision is backed by user research to meet your audience's needs effectively.",
    },
  ];

  const whyChooseUs = [
    {
      icon: Crown,
      title: "user-friendly approach",
      description:
        "We put your users at the heart of the design process. By conducting in-depth research, usability testing, and data-driven decision-making, we craft intuitive mobile apps that enhance user experience and drive conversions.",
    },
    {
      icon: Users,
      title: "Seamless collaboration & transparency",
      description:
        "We integrate smoothly with your team, offering real-time updates, direct communication channels, and a collaborative workflow. This ensures you're involved in every step, with full transparency and control over the process.",
    },
    {
      icon: Code,
      title: "Design with development in mind",
      description:
        "Our designs are not just visually stunning-they are built for seamless implementation. We create scalable, development-ready designs that follow UX best practices, ensuring smooth integration, faster development cycles, and reduced rework.",
    },
    {
      icon: Sparkles,
      title: "Mid-level and senior experts",
      description:
        "Our team consists of seasoned designers with 3+ years of experience, specializing in your industry. This expertise ensures your mobile app is strategically designed to meet both business goals and user expectations.",
    },
    {
      icon: Heart,
      title: "Proven trust and high satisfaction",
      description:
        "We prioritize long-term relationships and client satisfaction. With a 98% satisfaction rate, our commitment to quality, reliability, and results-driven design has made us a trusted partner for businesses worldwide.",
    },
  ];

  const processSteps = [
    {
      number: "01",
      title: "Stakeholder deep dive",
      subtitle: "Defining your goals, users, and technical context",
      description:
        "As a client-trusted mobile application design company, we start by understanding your product vision, user types, and business model to design mobile app UI and UX that fits your goals.",
      keySteps: [
        "Business and product goals",
        "Internal team workflows",
        "Audience roles and platform needs",
      ],
    },
    {
      number: "02",
      title: "Market & user research",
      subtitle:
        "Grounding design decisions in competitor logic and user behaviour",
      description:
        "Our mobile app design services include competitor reviews, audience expectation mapping, and market alignment to uncover what users actually need and what your product must outperform.",
      keySteps: [
        "Feature analysis across competitors",
        "UX/UI patterns in your category",
        "Platform-specific insights (iOS, Android)",
      ],
    },
    {
      number: "03",
      title: "Feature prioritization",
      subtitle: "Structuring what to build - now vs. next",
      description:
        "We help you avoid bloat and dead features. Using business impact and dev feasibility, we define a roadmap-ready feature set for your mobile app MVP or V1 release.",
      keySteps: [
        "MVP vs. full-scope breakdown",
        "Core flow logic",
        "Feature release pipeline",
      ],
    },
    {
      number: "04",
      title: "UX mapping & wireframes",
      subtitle: "Structuring how users move through the app",
      description:
        "As a mobile app design company focused on retention, we map user journeys and translate them into wireframes that solve user goals across devices and user types.",
      keySteps: [
        "Multi-role user flows",
        "Key screen wireframes",
        "Navigation structure",
      ],
    },
    {
      number: "05",
      title: "Visual direction & moodboarding",
      subtitle: "Setting the design tone before committing pixels",
      description:
        "Before UI starts, we define a mobile-first visual direction aligned with your brand, product category, and user psychology, making approval cycles faster and output more consistent.",
      keySteps: [
        "Style exploration (colour, type, motion)",
        "Visual benchmarks by industry",
        "Brand-system alignment",
      ],
    },
    {
      number: "06",
      title: "UI design & screen delivery",
      subtitle: "We design mobile app UI ready for development",
      description:
        "We deliver mobile app responsive design that's easy to build, scale, and hand off. From edge cases to empty states, our mobile app UI/UX design services cover every screen that impacts user flow.",
      keySteps: [
        "High-fidelity mockups (iOS, Android)",
        "Systemized components and spacing logic",
        "Responsive variants for different resolutions",
      ],
    },
    {
      number: "07",
      title: "Testing & validation",
      subtitle: "Making sure the design performs before you build it",
      description:
        "We test key flows with real users or stakeholders to validate navigation clarity, interaction behaviour, and overall UX quality before developers touch it.",
      keySteps: [
        "Usability feedback loops",
        "Clickable prototype testing",
        "UX pain point refinement",
      ],
    },
    {
      number: "08",
      title: "Dev handoff & support",
      subtitle:
        "Delivering production-ready assets and staying involved post-handoff",
      description:
        "Our mobile app UI/UX design services don't stop at Figma. We provide your dev team with the tools, logic, and support they need to execute cleanly and launch on time.",
      keySteps: [
        "Dev-ready specs and annotations",
        "Component naming + asset prep",
        "QA support during implementation",
      ],
    },
  ];

  const successCards = [
    {
      label: "DESIGN THAT MEETS REGULATION",
      title: "Compliance-aware design for Healthcare, FinTech, and regulated industries.",
      description:
        "We bring deep experience across Healthcare, SaaS, FinTech, and EdTech — delivering hundreds of products where compliance-aware design and great UX go hand in hand.",
    },
    {
      label: "DESIGN THAT LASTS BEYOND TRENDS",
      title:
        "We don't chase fads. We build digital products that stay relevant.",
      description:
        "Our work looks sharp today and stays usable tomorrow - designed around long-term value, not short-term gimmicks. Scalable systems, brand consistency, and smart UX that grows with your product.",
    },
    {
      label: "DESIGN THAT'S DEVELOPER-READY",
      title: "We design for implementation, not handoff.",
      description:
        "Every component is built with devs in mind: design tokens, accessibility, reusability, and real-world constraints. We collaborate with your team, reuse existing elements, and stay involved until everything's live.",
    },
    {
      label: "LOCAL PRESENCE. GLOBAL DELIVERY.",
      title: "Work directly with the doers - not a chain of account managers.",
      description:
        "Work directly with our London-based founders and senior design team across Europe. We integrate into your tools and workflow, delivering fast, consistent results as part of your team.",
    },
  ];

  return (
    <>
      <SEOHead
        title="Mobile App Design Services | Intrao Tech"
        description="Mobile app design that keeps users engaged & drives business growth. We create intuitive, scalable, and visually striking mobile apps."
        canonical="/services/mobile-app-design"
        structuredData={[
          generateServiceSchema({
            name: "Mobile App Design Services",
            description: "Mobile app design that keeps users engaged & drives business growth. We create intuitive, scalable, and visually striking mobile apps.",
            url: "/services/mobile-app-design",
          }),
          generateBreadcrumbSchema([
            { name: "Home", url: "/" },
            { name: "Services", url: "/services" },
            { name: "Mobile App Design", url: "/services/mobile-app-design" },
          ]),
          generateFAQSchema(challenges),
        ]}
      />

      <Header />

      <main id="main-content">
        {/* Hero Section */}
        <section
          data-header-theme="dark"
          className="bg-dark text-dark-foreground pt-32 pb-20"
        >
          <div className="container mx-auto px-6">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-dark-muted text-sm uppercase tracking-[0.3em] mb-8"
            >
              Mobile App Design
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="heading-2 mb-10 max-w-4xl"
            >
              Mobile App Design that keeps users engaged & drives business
              growth
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-wrap gap-4 mb-16"
            >
              <Button asChild className="group">
                <Link to="/contacts">
                  Let's Talk
                  <ButtonArrows />
                </Link>
              </Button>
              <Button asChild variant="outline-dark" className="group">
                <Link to="/cases">
                  View Our Cases
                  <ButtonArrows />
                </Link>
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
            >
              {/*
              <div className="bg-dark-muted/20 rounded-lg p-8 aspect-video flex items-center justify-center">
                <div className="text-dark-muted text-center">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-lg bg-dark-muted/30 flex items-center justify-center">
                    <Smartphone className="w-8 h-8" />
                  </div>
                  <p className="text-sm">Mobile App Interface Preview</p>
                </div>
              </div>
              */}
              <div>
                <p className="text-xl md:text-2xl leading-relaxed text-dark-foreground">
                  We help businesses create mobile apps that users love. Our
                  mobile app design company blends strategy, UI/UX expertise,
                  and industry best practices to deliver intuitive, scalable,
                  and visually striking products.
                </p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Challenges Section */}
        <section
          data-header-theme="light"
          className="bg-background text-foreground py-24"
        >
          <div className="container mx-auto px-6">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-muted-foreground text-sm uppercase tracking-[0.3em] mb-6"
            >
              Challenges
            </motion.p>

            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-3xl md:text-4xl lg:text-5xl font-bold leading-[1.1] mb-16 max-w-3xl"
            >
              We design mobile apps that solve problems, not create them
            </motion.h2>

            <div className="space-y-0">
              {challenges.map((challenge, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="grid grid-cols-1 lg:grid-cols-2 gap-8 py-12 border-t border-border"
                >
                  <p className="text-lg text-muted-foreground">
                    {challenge.question}
                  </p>
                  <p className="text-lg leading-relaxed">{challenge.answer}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Mobile App UI Section */}
        <section
          data-header-theme="dark"
          className="bg-dark text-dark-foreground py-24"
        >
          <div className="container mx-auto px-6">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-3xl md:text-4xl lg:text-5xl font-bold leading-[1.1] mb-6 max-w-3xl"
            >
              Mobile App Design UI: Beautiful, Functional & Scalable
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-dark-muted text-lg mb-16 max-w-2xl"
            >
              Here's how we craft the best mobile app design
            </motion.p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {mobileUIFeatures.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="p-8 border border-dark-muted/30 rounded-lg"
                >
                  <feature.icon
                    className="w-8 h-8 text-dark-muted mb-6"
                    strokeWidth={1.5}
                  />
                  <h3 className="text-xl font-semibold mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-dark-muted leading-relaxed">
                    {feature.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section
          data-header-theme="dark"
          className="bg-dark text-dark-foreground py-24"
        >
          <div className="container mx-auto px-6">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-3xl md:text-4xl lg:text-5xl font-bold leading-[1.1] mb-16 max-w-3xl"
            >
              Why should you choose our mobile app design agency?
            </motion.h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {whyChooseUs.map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="p-8 border border-dark-muted/30 rounded-lg"
                >
                  <item.icon
                    className="w-8 h-8 text-dark-muted mb-8"
                    strokeWidth={1.5}
                  />
                  <h3 className="text-xl font-semibold mb-4">{item.title}</h3>
                  <p className="text-dark-muted leading-relaxed">
                    {item.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section
          data-header-theme="light"
          className="bg-background text-foreground py-24"
        >
          <div className="container mx-auto px-6">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-muted-foreground text-sm uppercase tracking-[0.3em] mb-6"
            >
              Inside Our Mobile App Design Services
            </motion.p>

            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-3xl md:text-4xl lg:text-5xl font-bold leading-[1.1] mb-8 max-w-4xl"
            >
              How our mobile app design company moves you from raw idea to
              dev-ready product
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg text-muted-foreground max-w-3xl mb-16"
            >
              From initial strategy to final handoff, we follow a proven process
              that ensures your mobile app is designed for success from day one.
            </motion.p>

            <div className="space-y-0">
              {processSteps.map((step, index) => (
                <motion.div
                  key={step.number}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.05 }}
                  className="grid grid-cols-1 lg:grid-cols-[200px_1fr] gap-8 py-12 border-t border-border"
                >
                  <div>
                    <span className="text-muted-foreground text-sm">
                      {step.title}
                    </span>
                  </div>
                  <div>
                    <h3 className="text-2xl md:text-3xl font-bold mb-4">
                      {step.subtitle}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed mb-6 max-w-2xl">
                      {step.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      <span className="text-sm text-muted-foreground">
                        Key steps:
                      </span>
                      {step.keySteps.map((keyStep, i) => (
                        <span key={i} className="text-sm">
                          {keyStep}
                          {i < step.keySteps.length - 1 ? "," : ""}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Success Section */}
        <section
          data-header-theme="light"
          className="bg-background text-foreground py-24"
        >
          <div className="container mx-auto px-6">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-3xl md:text-4xl lg:text-5xl font-bold leading-[1.1] mb-16 max-w-2xl"
            >
              Your success is our priority
            </motion.h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {successCards.map((card, index) => (
                <motion.div
                  key={card.label}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-muted/50 p-8 rounded-lg"
                >
                  <p className="text-muted-foreground text-xs uppercase tracking-[0.2em] mb-4">
                    {card.label}
                  </p>
                  <h3 className="text-xl md:text-2xl font-bold mb-6 leading-tight">
                    {card.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {card.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section
          data-header-theme="dark"
          className="bg-dark text-dark-foreground py-24"
        >
          <div className="container mx-auto px-6 text-center">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-3xl md:text-4xl lg:text-5xl font-bold mb-8"
            >
              Ready to design your mobile app?
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-dark-muted text-lg mb-10 max-w-2xl mx-auto"
            >
              Let's discuss how we can help you create a mobile app that keeps
              users engaged and drives business growth.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Button asChild size="lg" className="group">
                <Link to="/contacts">
                  Get in Touch
                  <ButtonArrows />
                </Link>
              </Button>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default MobileAppDesign;
