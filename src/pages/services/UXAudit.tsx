import { motion } from "framer-motion";
import { useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ButtonArrows } from "@/components/ui/button-arrows";

const UXAudit = () => {
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
      question: "Are users finding it difficult to navigate your product?",
      answer:
        "Poor UX causes frustration and reduces conversions. Our audit identifies navigation issues and delivers recommendations for seamless user journeys that boost engagement.",
    },
    {
      question: "Does your interface feel outdated or lack consistency?",
      answer:
        "Our UI/UX evaluation ensures your product meets modern standards with brand consistency and visual clarity for an exceptional user experience.",
    },
    {
      question: "Are your engagement rates and conversions falling short?",
      answer:
        "Our audits uncover usability gaps and provide actionable insights to enhance interactions, improving retention and conversion rates.",
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
            d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
          />
        </svg>
      ),
      title: "UX Expertise",
      description:
        "We specialize in solving UX issues with precision, creating seamless user journeys that convert.",
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
            d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
          />
        </svg>
      ),
      title: "Data-Driven Recommendations",
      description:
        "We use in-depth analytics and research to ensure every change enhances the user experience.",
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
            d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
          />
        </svg>
      ),
      title: "Proven Results",
      description:
        "We demonstrate measurable business growth with 35%+ conversion improvements for our clients.",
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
      title: "Senior Team",
      description:
        "Mid-level and senior experts with 7+ years of expertise in your specific industry.",
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
      title: "High Satisfaction",
      description:
        "98% client satisfaction rate reflecting our commitment to delivering excellence.",
    },
  ];

  const processSteps = [
    {
      number: "01",
      title: "Stakeholder Interview",
      description:
        "Understanding business goals and pain points to define audit scope.",
      deliverable: "Stakeholder summary & audit scope document",
    },
    {
      number: "02",
      title: "Analytics Review",
      description:
        "Analyzing traffic, conversions, and user flow drop-offs to identify issues.",
      deliverable: "Metrics report with flagged issues",
    },
    {
      number: "03",
      title: "User & Competitor Research",
      description:
        "Analyzing audience behavior and competitor solutions for insights.",
      deliverable: "Audience report & competitive analysis",
    },
    {
      number: "04",
      title: "Heuristic Evaluation",
      description:
        "Reviewing product against usability principles and accessibility standards.",
      deliverable: "Heuristic evaluation report with screenshots",
    },
    {
      number: "05",
      title: "User Flow Analysis",
      description:
        "Mapping critical journeys and identifying friction points throughout.",
      deliverable: "Annotated user flows & problem inventory",
    },
    {
      number: "06",
      title: "Recommendations",
      description:
        "Organizing fixes by impact and effort, grouped by severity level.",
      deliverable: "UX audit report with prioritized action plan",
    },
    {
      number: "07",
      title: "Implementation Plan",
      description:
        "Creating phased rollout with resource and timeline estimates.",
      deliverable: "Implementation roadmap & tracking framework",
    },
  ];

  const successCards = [
    {
      label: "COMPLIANCE",
      title: "HIPAA & GDPR Certified",
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
        "Local presence in North America with senior design and development teams in Europe.",
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
              <span className="inline-block px-4 py-2 bg-primary/20 text-primary rounded-lg text-sm font-medium mb-6">
                UX AUDIT
              </span>
              <h1 className="heading-2 mb-6">
                UX Design Audit
              </h1>
              <p className="text-xl text-dark-foreground/80 mb-8">
                Boost engagement, conversions, and user satisfaction with our
                comprehensive UX audit. We uncover usability issues, streamline
                user flows, and create a structured plan for refining your
                product.
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
              <div className="aspect-square bg-gradient-to-br from-primary/20 to-primary/5 rounded-lg flex items-center justify-center">
                <div className="text-9xl font-bold text-primary/30">UX</div>
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
            <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-lg text-sm font-medium mb-6">
              CHALLENGES
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Identify and solve UX problems holding your product back
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
            <span className="inline-block px-4 py-2 bg-primary/20 text-primary rounded-lg text-sm font-medium mb-6">
              WHAT'S INCLUDED
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Comprehensive UX audit services
            </h2>
            <p className="text-dark-foreground/70">
              Our audit covers every aspect of your product's user experience to
              identify improvement opportunities.
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
                className="p-8 bg-dark-foreground/5 rounded-lg border border-dark-foreground/10 hover:border-primary/50 transition-colors"
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
              Why choose our UX audit services?
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
                className="p-8 bg-dark-foreground/5 rounded-lg"
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
            <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-lg text-sm font-medium mb-6">
              OUR PROCESS
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Our 7-step UX audit process
            </h2>
            <p className="text-muted-foreground">
              A structured approach that delivers actionable insights and clear
              implementation plans.
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
                className="grid md:grid-cols-12 gap-6 p-6 bg-muted/30 rounded-lg items-center"
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
                    Deliverable:
                  </span>
                  <p className="text-sm text-muted-foreground">
                    {step.deliverable}
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
                className="p-6 bg-muted/30 rounded-lg"
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
              Ready to improve your product's UX?
            </h2>
            <p className="text-xl text-dark-foreground/70 mb-8">
              Let's uncover the usability issues holding your product back and
              create a clear path to better conversions.
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

export default UXAudit;
