import { motion } from "framer-motion";
import { useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ButtonArrows } from "@/components/ui/button-arrows";

const WebsiteDevelopment = () => {
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
      question: "Struggling with online visibility?",
      answer:
        "Poorly designed websites hinder customer discovery. Our custom development services enhance brand visibility, making it easy for customers to find and engage with your business online.",
    },
    {
      question: "Losing credibility with visitors?",
      answer:
        "75% of consumers judge a company's credibility based on its website. We create professional, trustworthy digital experiences that establish trust and convert visitors into customers.",
    },
    {
      question: "Finding it hard to scale and maintain?",
      answer:
        "Managing and updating websites shouldn't be difficult. Our solutions keep sites secure, efficient, and easy to scale as your business grows.",
    },
  ];

  const services = [
    {
      number: "01",
      title: "UX/UI Design",
      description:
        "Intuitive, visually captivating interfaces that elevate user engagement and create memorable digital experiences.",
    },
    {
      number: "02",
      title: "Webflow Development",
      description:
        "Dynamic, no-code websites featuring responsive animations and seamless content management capabilities.",
    },
    {
      number: "03",
      title: "WordPress Development",
      description:
        "Scalable, high-performing sites leveraging WordPress's flexibility with custom themes and plugins.",
    },
    {
      number: "04",
      title: "Custom Development",
      description:
        "Unique functionality solutions built from scratch to align perfectly with your specific business needs.",
    },
    {
      number: "05",
      title: "Illustrations & Motion",
      description:
        "Custom graphics and animations that enhance user experience and bring your brand personality to life.",
    },
    {
      number: "06",
      title: "SEO Optimization",
      description:
        "Improved search rankings and organic traffic amplification through technical SEO best practices.",
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
      title: "Expert-Led Execution",
      description:
        "Design and development collaboration ensuring precision and creativity in meeting your goals.",
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
      title: "Growth Optimization",
      description:
        "Solutions scalable from landing pages to enterprise systems, designed for business expansion.",
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
            d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      ),
      title: "Seamless UX",
      description:
        "User-friendly designs with intuitive navigation and engaging visuals delivering high conversion rates.",
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
      title: "Senior Expertise",
      description:
        "Mid-level and senior professionals with 7+ years of industry-specific experience.",
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
        "98% client satisfaction rate reflecting our commitment to delivering outstanding solutions.",
    },
  ];

  const techStack = [
    {
      name: "Webflow",
      description: "Visual-first platform for SEO-friendly development",
    },
    {
      name: "WordPress",
      description: "Versatile CMS with extensive plugins and themes",
    },
    {
      name: "Astro",
      description: "High-performance framework for static-site generation",
    },
    {
      name: "React",
      description: "Component-based architecture for fast, scalable sites",
    },
    {
      name: "Headless CMS",
      description: "API-driven content distribution solution",
    },
  ];

  const processSteps = [
    {
      number: "01",
      title: "Discovery",
      description:
        "Stakeholder interviews, user analysis, technical requirements, and success metrics planning.",
    },
    {
      number: "02",
      title: "Design & Prototyping",
      description:
        "Information architecture, responsive UX/UI, component libraries, and interactive prototypes.",
    },
    {
      number: "03",
      title: "Backend Architecture",
      description:
        "Server setup, database structure, API integration, and deployment pipelines.",
    },
    {
      number: "04",
      title: "Development",
      description:
        "Front-end/back-end implementation, CMS configuration, animation integration, and sprint-based delivery.",
    },
    {
      number: "05",
      title: "QA & Testing",
      description:
        "Functional testing, cross-browser validation, accessibility audits, and security testing.",
    },
    {
      number: "06",
      title: "Post-Launch Support",
      description:
        "Live monitoring, analytics setup, maintenance, and continuous optimization.",
    },
  ];

  const successCards = [
    {
      label: "COMPLIANCE",
      title: "HIPAA & GDPR Certified",
      description:
        "We maintain strict compliance standards serving Healthcare, SaaS, FinTech, and EdTech sectors with confidence.",
    },
    {
      label: "QUALITY",
      title: "Long-Term Value",
      description:
        "We focus on creating lasting value rather than chasing trends, ensuring your website stands the test of time.",
    },
    {
      label: "DELIVERY",
      title: "Developer-Ready Output",
      description:
        "Clean, well-documented code with accessibility standards built in for seamless handoffs and maintenance.",
    },
    {
      label: "REACH",
      title: "Global Presence",
      description:
        "Direct collaboration available across Poland, Estonia, Switzerland, Canada, and USA.",
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
              <span className="inline-block px-4 py-2 bg-primary/20 text-primary rounded-full text-sm font-medium mb-6">
                WEBSITE DEVELOPMENT
              </span>
              <h1 className="heading-2 mb-6">
                Website Development Agency
              </h1>
              <p className="text-xl text-dark-foreground/80 mb-8">
                Get a custom website to engage your audience and boost
                conversions
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
              <div className="aspect-square bg-gradient-to-br from-primary/20 to-primary/5 rounded-3xl flex items-center justify-center">
                <div className="text-9xl font-bold text-primary/30">WD</div>
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
            <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-6">
              CHALLENGES
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              We build websites that solve problems, not create them
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
            <span className="inline-block px-4 py-2 bg-primary/20 text-primary rounded-full text-sm font-medium mb-6">
              OUR SERVICES
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Full-cycle website development services
            </h2>
            <p className="text-dark-foreground/70">
              We create custom solutions that captivate audiences and boost
              functionality using advanced technologies and user-centric design.
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
                className="p-8 bg-dark-foreground/5 rounded-2xl border border-dark-foreground/10 hover:border-primary/50 transition-colors"
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
              Why choose our website development agency?
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
                className="p-8 bg-dark-foreground/5 rounded-2xl"
              >
                <div className="text-primary mb-4">{benefit.icon}</div>
                <h3 className="text-xl font-semibold mb-3">{benefit.title}</h3>
                <p className="text-dark-foreground/70">{benefit.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Tech Stack Section */}
      <section
        data-header-theme="dark"
        className="bg-dark text-dark-foreground py-24 border-t border-dark-foreground/10"
      >
        <div className="container mx-auto px-6">
          <motion.div {...fadeInUp} className="max-w-3xl mb-16">
            <span className="inline-block px-4 py-2 bg-primary/20 text-primary rounded-full text-sm font-medium mb-6">
              TECHNOLOGY STACK
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Technologies we use
            </h2>
            <p className="text-dark-foreground/70">
              We leverage modern frameworks and platforms to build fast,
              scalable, and maintainable websites.
            </p>
          </motion.div>

          <motion.div
            {...staggerContainer}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {techStack.map((tech, index) => (
              <motion.div
                key={index}
                variants={{
                  initial: { opacity: 0, y: 20 },
                  whileInView: { opacity: 1, y: 0 },
                }}
                className="p-6 bg-dark-foreground/5 rounded-xl border border-dark-foreground/10"
              >
                <h3 className="text-lg font-semibold mb-2">{tech.name}</h3>
                <p className="text-dark-foreground/60 text-sm">
                  {tech.description}
                </p>
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
            <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-6">
              OUR PROCESS
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              How we deliver website projects
            </h2>
            <p className="text-muted-foreground">
              Our structured approach ensures quality delivery while keeping you
              informed at every stage.
            </p>
          </motion.div>

          <motion.div
            {...staggerContainer}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {processSteps.map((step, index) => (
              <motion.div
                key={index}
                variants={{
                  initial: { opacity: 0, y: 20 },
                  whileInView: { opacity: 1, y: 0 },
                }}
                className="relative"
              >
                <div className="text-6xl font-bold text-primary/10 mb-4">
                  {step.number}
                </div>
                <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
                <p className="text-muted-foreground">{step.description}</p>
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
                className="p-6 bg-muted/30 rounded-2xl"
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
              Ready to build your website?
            </h2>
            <p className="text-xl text-dark-foreground/70 mb-8">
              Let's create a custom website that engages your audience and
              drives conversions.
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

export default WebsiteDevelopment;
