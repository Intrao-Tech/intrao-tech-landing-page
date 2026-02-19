import { SEOHead } from "@/components/SEOHead";
import { generateServiceSchema, generateBreadcrumbSchema, generateFAQSchema } from "@/lib/structured-data";
import { motion } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ButtonArrows } from "@/components/ui/button-arrows";
import { Search, Lightbulb, BarChart3, TrendingUp, Users, BadgeCheck } from "lucide-react";

const UXAudit = () => {
  const challenges = [
    {
      question: "How do you identify which User Experience (UX) issues are costing me conversions?",
      answer: "We combine heuristic evaluation against Nielsen's 10 usability principles with real user-flow analysis using session recordings and analytics data. Each issue is scored by severity and conversion impact, so you know exactly where to invest first. Clients typically see a 35%+ conversion improvement after implementing our top-priority recommendations.",
    },
    {
      question: "What does a UX audit deliverable actually include?",
      answer: "You receive a detailed report covering: heuristic evaluation results, user flow analysis with annotated screenshots, a severity-ranked issue list, competitor benchmarking, and a prioritized action plan with wireframe suggestions. The report is delivered in Figma and PDF within 2 weeks of kickoff.",
    },
    {
      question: "Is a UX audit useful if we're planning a full redesign anyway?",
      answer: "Absolutely — it's the best starting point. The audit gives your redesign team an evidence-based brief instead of guesswork. It identifies which flows to preserve (the ones that already work) and which to rethink, saving weeks of design exploration and reducing the risk of breaking what already converts well.",
    },
  ];

  const services = [
    {
      number: "01",
      title: "Information Architecture Analysis",
      description:
        "Enhances navigation and refines content structure for intuitive experiences that help users find what they need.",
    },
    {
      number: "02",
      title: "Usability Analysis",
      description:
        "Uncovers pain points to optimize essential user flows and improve overall engagement with your product.",
    },
    {
      number: "03",
      title: "UI Design Analysis",
      description:
        "Evaluates consistency in typography, colors, and branding across all interface elements.",
    },
    {
      number: "04",
      title: "Solution Prioritization",
      description:
        "Ranks usability issues by impact and urgency with clear, actionable plans for improvement.",
    },
    {
      number: "05",
      title: "Competitive Analysis",
      description:
        "Identifies industry best practices and differentiation opportunities to help you stand out.",
    },
    {
      number: "06",
      title: "Metrics Insights",
      description:
        "Analyzes customer data from Google Analytics, Firebase, and similar tools to inform decisions.",
    },
  ];

  const benefits = [
    {
      icon: Lightbulb,
      title: "UX Expertise",
      description:
        "We specialize in solving UX issues with precision, creating seamless user journeys that convert.",
    },
    {
      icon: BarChart3,
      title: "Data-Driven Recommendations",
      description:
        "We use in-depth analytics and research to ensure every change enhances the user experience.",
    },
    {
      icon: TrendingUp,
      title: "Proven Results",
      description:
        "We demonstrate measurable business growth with 35%+ conversion improvements for our clients.",
    },
    {
      icon: Users,
      title: "Senior Team",
      description:
        "Mid-level and senior experts with 3+ years of expertise in your specific industry.",
    },
    {
      icon: BadgeCheck,
      title: "High Satisfaction",
      description:
        "98% client satisfaction rate reflecting our commitment to delivering excellence.",
    },
  ];

  const processSteps = [
    {
      number: "01",
      title: "Stakeholder Interview",
      subtitle: "Understanding business goals and pain points",
      description: "We define the audit scope based on your specific needs.",
      deliverable: "Stakeholder summary & audit scope document",
    },
    {
      number: "02",
      title: "Analytics Review",
      subtitle: "Analyzing traffic, conversions, and user flows",
      description: "We identify drop-offs and flag performance issues.",
      deliverable: "Metrics report with flagged issues",
    },
    {
      number: "03",
      title: "User & Competitor Research",
      subtitle: "Analyzing audience behavior and competitor solutions",
      description: "We gather insights to inform design decisions.",
      deliverable: "Audience report & competitive analysis",
    },
    {
      number: "04",
      title: "Heuristic Evaluation",
      subtitle: "Reviewing against usability principles",
      description: "We assess accessibility standards and best practices.",
      deliverable: "Heuristic evaluation report with screenshots",
    },
    {
      number: "05",
      title: "User Flow Analysis",
      subtitle: "Mapping critical journeys and friction points",
      description: "We identify where users struggle throughout the product.",
      deliverable: "Annotated user flows & problem inventory",
    },
    {
      number: "06",
      title: "Recommendations",
      subtitle: "Organizing fixes by impact and effort",
      description: "We group solutions by severity level for clear prioritization.",
      deliverable: "UX audit report with prioritized action plan",
    },
    {
      number: "07",
      title: "Implementation Plan",
      subtitle: "Creating phased rollout with resource estimates",
      description: "We provide timeline and tracking frameworks.",
      deliverable: "Implementation roadmap & tracking framework",
    },
  ];

  const successCards = [
    {
      label: "COMPLIANCE",
      title: "Compliance-Aware Design",
      description:
        "We maintain strict compliance standards for Healthcare, FinTech, and other regulated industries.",
    },
    {
      label: "LONGEVITY",
      title: "Design That Lasts",
      description:
        "We build digital products that stay relevant. Our work looks sharp today and stays usable tomorrow.",
    },
    {
      label: "DELIVERY",
      title: "Developer-Ready Output",
      description:
        "Every recommendation includes design tokens, accessibility considerations, and implementation guidance.",
    },
    {
      label: "REACH",
      title: "Global Expertise",
      description:
        "London-based founders with senior design and development teams across Europe.",
    },
  ];

  return (
    <>
      <SEOHead
        title="UX Audit Services | Intrao Tech"
        description="UX Design Audit. Boost engagement, conversions, and user satisfaction with our comprehensive UX audit."
        canonical="/services/ux-audit"
        structuredData={[
          generateServiceSchema({
            name: "UX Audit Services",
            description: "UX Design Audit. Boost engagement, conversions, and user satisfaction with our comprehensive UX audit.",
            url: "/services/ux-audit",
          }),
          generateBreadcrumbSchema([
            { name: "Home", url: "/" },
            { name: "Services", url: "/services" },
            { name: "UX Audit", url: "/services/ux-audit" },
          ]),
          generateFAQSchema(challenges),
        ]}
      />

      <Header />

      <main id="main-content">
        {/* Hero Section */}
        <section data-header-theme="dark" className="bg-dark text-dark-foreground pt-32 pb-20">
          <div className="container mx-auto px-6">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-dark-muted text-sm uppercase tracking-[0.3em] mb-8"
            >
              UX Audit
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="heading-2 mb-10 max-w-4xl"
            >
              UX Design Audit
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
                    <Search className="w-8 h-8" />
                  </div>
                  <p className="text-sm">UX Audit Preview</p>
                </div>
              </div>
              */}
              <div>
                <p className="text-xl md:text-2xl leading-relaxed text-dark-foreground">
                  Boost engagement, conversions, and user satisfaction with Intrao Tech's
                  comprehensive UX audit. We uncover usability issues, streamline
                  user flows, and create a structured plan for refining your
                  product.
                </p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Challenges Section */}
        <section data-header-theme="light" className="bg-background text-foreground py-24">
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
              Identify and solve UX problems holding your product back
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
                  <p className="text-lg leading-relaxed">
                    {challenge.answer}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Services Offered Section */}
        <section data-header-theme="dark" className="bg-dark text-dark-foreground py-24">
          <div className="container mx-auto px-6">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-dark-muted text-sm uppercase tracking-[0.3em] mb-6"
            >
              What's Included
            </motion.p>

            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-3xl md:text-4xl lg:text-5xl font-bold leading-[1.1] mb-8 max-w-3xl"
            >
              Comprehensive UX audit services
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg text-dark-muted max-w-3xl mb-16"
            >
              Our audit covers every aspect of your product's user experience to
              identify improvement opportunities.
            </motion.p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="p-8 border border-dark-muted/30 rounded-lg"
                >
                  <span className="text-dark-muted text-sm">
                    {service.number}
                  </span>
                  <h3 className="text-xl font-semibold mt-4 mb-3">
                    {service.title}
                  </h3>
                  <p className="text-dark-muted leading-relaxed">{service.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section data-header-theme="dark" className="bg-dark text-dark-foreground py-24">
          <div className="container mx-auto px-6">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-3xl md:text-4xl lg:text-5xl font-bold leading-[1.1] mb-16 max-w-3xl"
            >
              Why choose our UX audit services?
            </motion.h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {benefits.map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="p-8 border border-dark-muted/30 rounded-lg"
                >
                  <item.icon className="w-8 h-8 text-dark-muted mb-8" strokeWidth={1.5} />
                  <h3 className="text-xl font-semibold mb-4">{item.title}</h3>
                  <p className="text-dark-muted leading-relaxed">{item.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section data-header-theme="light" className="bg-background text-foreground py-24">
          <div className="container mx-auto px-6">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-muted-foreground text-sm uppercase tracking-[0.3em] mb-6"
            >
              Our Process
            </motion.p>

            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-3xl md:text-4xl lg:text-5xl font-bold leading-[1.1] mb-8 max-w-4xl"
            >
              Our 7-step UX audit process
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg text-muted-foreground max-w-3xl mb-16"
            >
              A structured approach that delivers actionable insights and clear
              implementation plans.
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
                    <span className="text-muted-foreground text-sm">{step.title}</span>
                  </div>
                  <div>
                    <h3 className="text-2xl md:text-3xl font-bold mb-4">{step.subtitle}</h3>
                    <p className="text-muted-foreground leading-relaxed mb-4 max-w-2xl">{step.description}</p>
                    <div>
                      <span className="text-sm text-muted-foreground font-medium">Deliverable: </span>
                      <span className="text-sm text-muted-foreground">{step.deliverable}</span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Success Section */}
        <section data-header-theme="light" className="bg-background text-foreground py-24">
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
        <section data-header-theme="dark" className="bg-dark text-dark-foreground py-24">
          <div className="container mx-auto px-6 text-center">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-3xl md:text-4xl lg:text-5xl font-bold mb-8"
            >
              Ready to improve your product's UX?
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-dark-muted text-lg mb-10 max-w-2xl mx-auto"
            >
              Let Intrao Tech uncover the usability issues holding your product back and
              create a clear path to better conversions.
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

export default UXAudit;
