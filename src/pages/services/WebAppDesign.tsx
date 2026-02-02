import { SEOHead } from "@/components/SEOHead";
import { generateServiceSchema, generateBreadcrumbSchema } from "@/lib/structured-data";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  ArrowUpRight,
  Crown,
  Users,
  Code,
  Sparkles,
  Heart,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { ButtonArrows } from "@/components/ui/button-arrows";

const WebAppDesign = () => {
  const challenges = [
    {
      question:
        "Is your web app frustrating users with poor navigation and low engagement?",
      answer:
        "A confusing interface, slow load times, and lack of intuitive design can drive users away. We create seamless, user-friendly experiences with clear navigation, smart UI patterns, and accessibility best practices to keep users engaged and encourage retention.",
    },
    {
      question:
        "Are inefficient workflows slowing down productivity and frustrating your team?",
      answer:
        "Poorly structured apps lead to wasted time and errors. We design streamlined workflows that minimize friction, automate repetitive tasks, and create intuitive user journeys that boost team productivity.",
    },
    {
      question: "Struggling with low conversions and high drop-off rates?",
      answer:
        "Users abandoning your app before completing key actions results in lost revenue. We optimize conversion funnels, simplify user journeys, and implement data-driven design decisions to maximize engagement and conversions.",
    },
  ];

  const industries = [
    {
      number: "01",
      title: "SaaS",
      description:
        "Scalable applications thoughtfully designed to enhance user engagement, streamline and optimize workflows, and effectively support subscription-based business models.",
    },
    {
      number: "02",
      title: "EdTech",
      description:
        "Interactive learning platforms with student dashboards, virtual classrooms, and AI-powered personalization for better educational experiences.",
    },
    {
      number: "03",
      title: "Web3 & Blockchain",
      description:
        "Decentralized applications (dApps) featuring secure transactions, transparent smart contracts, and intuitive user interfaces for blockchain-based projects.",
    },
    {
      number: "04",
      title: "FinTech",
      description:
        "Financial solutions with seamless transactions, AI-driven analytics, and compliance-ready UI/UX to improve trust and efficiency.",
    },
    {
      number: "05",
      title: "Real Estate",
      description:
        "Intuitive property listing platforms with virtual tours, mortgage calculators, and CRM-integrated solutions for agents and buyers.",
    },
    {
      number: "06",
      title: "Logistics & Supply Chain",
      description:
        "Web apps designed for real-time shipment tracking, automated inventory management, and predictive analytics for supply chain optimization.",
    },
  ];

  const whyChooseUs = [
    {
      icon: Crown,
      title: "user-friendly approach",
      description:
        "We put your users at the heart of the design process. By conducting in-depth research, usability testing, and data-driven decision-making, we craft intuitive web apps that enhance user experience and drive conversions.",
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
        "Our team consists of seasoned web designers with 3+ years of experience, specializing in your industry. This expertise ensures your web app is strategically designed to meet both business goals and user expectations.",
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
      title: "Stakeholder interview",
      subtitle: "Defining your goals, users, and technical context",
      description:
        "At our dev & design studio, we start with your goals, team structure, and tech context to shape how the product should work.",
      keySteps: [
        "Business goals",
        "Internal workflows",
        "User types and access logic",
      ],
    },
    {
      number: "02",
      title: "Market & user research",
      subtitle: "Grounding UX in category logic and user expectations",
      description:
        "We analyze your market position and user behavior to create designs that meet real expectations.",
      keySteps: [
        "Competitive audits",
        "Design benchmarks",
        "User behavior mapping",
      ],
    },
    {
      number: "03",
      title: "Feature breakdown",
      subtitle: "Defining what to design now-and what can wait",
      description:
        "We prioritize features based on user impact and business value to focus on what matters most.",
      keySteps: [
        "MVP vs. roadmap features",
        "User-impact scoring",
        "Release phasing",
      ],
    },
    {
      number: "04",
      title: "Userflow & wireframes",
      subtitle: "Structuring how users navigate your web app",
      description:
        "We map out complete user journeys and create wireframes that define the core interaction patterns.",
      keySteps: ["End-to-end journeys", "Key screens", "Interaction logic"],
    },
    {
      number: "05",
      title: "Visual direction & moodboarding",
      subtitle: "Setting the tone with focused web UI design services",
      description:
        "We establish the visual language that will define your product's identity and user experience.",
      keySteps: [
        "Color, type, spacing systems",
        "Visual mood samples",
        "Brand alignment",
      ],
    },
    {
      number: "06",
      title: "Mockups development",
      subtitle: "Designing all screens for dev-ready output",
      description:
        "We create pixel-perfect mockups with all states, variations, and responsive breakpoints.",
      keySteps: [
        "Dev-aligned screens",
        "Modular UI components",
        "Breakpoint variants",
      ],
    },
    {
      number: "07",
      title: "Testing & validation",
      subtitle:
        "Reviewing how the web-based app design performs before you build",
      description:
        "We validate designs through user testing and stakeholder reviews to ensure optimal performance.",
      keySteps: ["Usability testing", "Stakeholder reviews", "UX refinements"],
    },
    {
      number: "08",
      title: "Mockups hand-off",
      subtitle: "Supporting your team during build and QA",
      description:
        "We provide comprehensive handoff documentation and ongoing support during development.",
      keySteps: ["Figma kits", "Dev walkthroughs", "Post-build UI checks"],
    },
  ];

  const successCards = [
    {
      label: "DESIGN THAT MEETS REGULATION",
      title: "HIPAA- and GDPR-certified expertise for Healthcare and beyond.",
      description:
        "Since 2023, we've gained HIPAA and GDPR certifications and industry recognition, delivering hundreds of products in Healthcare, SaaS, FinTech, and EdTech - where compliance and UX go hand in hand.",
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
        "Every design we deliver is built with developers in mind. Design tokens, accessibility standards, and clear documentation ensure seamless implementation without endless back-and-forth.",
    },
    {
      label: "LOCAL PRESENCE. GLOBAL DELIVERY.",
      title: "Work directly with the doers - not a chain of account managers.",
      description:
        "Our team combines North American strategists with European development teams, giving you direct access to the people doing the work, with timezone-friendly communication.",
    },
  ];

  return (
    <>
      <SEOHead
        title="Web App Design Services | Intrao Tech"
        description="Web app design that drives growth & user engagement. We create intuitive, user-friendly designs that simplify workflows and boost conversions."
        canonical="/services/web-app-design"
        structuredData={[
          generateServiceSchema({
            name: "Web App Design Services",
            description: "Web app design that drives growth & user engagement. We create intuitive, user-friendly designs that simplify workflows and boost conversions.",
            url: "/services/web-app-design",
          }),
          generateBreadcrumbSchema([
            { name: "Home", url: "/" },
            { name: "Services", url: "/services" },
            { name: "Web App Design", url: "/services/web-app-design" },
          ]),
        ]}
      />

      <Header />

      <main>
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
              Web App Design
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="heading-2 mb-10 max-w-4xl"
            >
              Web app design that drives growth & user engagement
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
                    <Code className="w-8 h-8" />
                  </div>
                  <p className="text-sm">Web App Interface Preview</p>
                </div>
              </div>
              */}
              <div>
                <p className="text-xl md:text-2xl leading-relaxed text-dark-foreground">
                  We create intuitive, user-friendly designs that simplify
                  workflows, enhance usability, and boost conversions - ensuring
                  your web app is both functional and future-proof.
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
              We design web apps that solve problems, not create them
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

        {/* Industry Solutions Section */}
        <section
          data-header-theme="dark"
          className="bg-dark text-dark-foreground py-24"
        >
          <div className="container mx-auto px-6">
            <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-8 mb-16">
              <div>
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className="text-dark-muted text-sm uppercase tracking-[0.3em] mb-6"
                >
                  Tailored Web App Solutions for Your Business
                </motion.p>

                <motion.h2
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                  className="text-3xl md:text-4xl lg:text-5xl font-bold leading-[1.1] max-w-2xl"
                >
                  Industry-specific web app solutions
                </motion.h2>
              </div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <Link
                  to="/contacts"
                  className="inline-flex items-center gap-2 border border-dark-muted text-dark-foreground px-8 py-4 rounded-lg text-sm font-semibold uppercase tracking-wider transition-all duration-300 hover:bg-dark-foreground hover:text-dark"
                >
                  Get in Touch
                  <ArrowUpRight className="w-4 h-4" />
                </Link>
              </motion.div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
              {industries.map((industry, index) => (
                <motion.div
                  key={industry.number}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="p-8 border-t border-l border-dark-muted/30 first:border-l-0 [&:nth-child(3n+1)]:border-l-0 [&:nth-child(-n+3)]:border-t-0 md:[&:nth-child(-n+2)]:border-t-0 md:[&:nth-child(2n+1)]:border-l-0 md:[&:nth-child(3n+1)]:border-l lg:[&:nth-child(2n+1)]:border-l lg:[&:nth-child(3n+1)]:border-l-0 lg:[&:nth-child(-n+3)]:border-t-0"
                >
                  <span className="text-dark-muted text-sm">
                    {industry.number}
                  </span>
                  <h3 className="text-2xl font-bold mt-8 mb-4">
                    {industry.title}
                  </h3>
                  <p className="text-dark-muted leading-relaxed">
                    {industry.description}
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
              Why should you choose our web app design agency?
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
              Our Web App Interface Design Process
            </motion.p>

            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-3xl md:text-4xl lg:text-5xl font-bold leading-[1.1] mb-8 max-w-4xl"
            >
              How our dev & design studio structures design to avoid rework and ship
              your product faster
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg text-muted-foreground max-w-3xl mb-16"
            >
              Before you design screens, you need a system. We start with
              business logic, map real-world user behaviour, and design web apps
              that don't need to be rebuilt six months later. Here's how that
              looks.
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
              Ready to design your web app?
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-dark-muted text-lg mb-10 max-w-2xl mx-auto"
            >
              Let's discuss how we can help you create a web app that drives
              growth and engages users.
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

export default WebAppDesign;
