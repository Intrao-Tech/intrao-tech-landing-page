import { motion } from "framer-motion";
import { useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ButtonArrows } from "@/components/ui/button-arrows";

const NoCodeDevelopment = () => {
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
      question: "Frustrated with slow traditional development?",
      answer:
        "With low-code no-code app development, you can create a fully functional digital product in weeks instead of months—without sacrificing quality.",
    },
    {
      question: "Worried about development costs?",
      answer:
        "Our no-code development services enable businesses to build apps affordably, avoiding the expenses of traditional software development.",
    },
    {
      question: "Need flexibility for future scaling?",
      answer:
        "We use top no-code development platforms to ensure your app is customizable, scalable, and ready for future expansion.",
    },
  ];

  const services = [
    {
      number: "01",
      title: "FlutterFlow Development",
      description:
        "We leverage FlutterFlow to build visually stunning, fully functional mobile apps with native performance—without writing code. This approach speeds up development while maintaining flexibility and scalability.",
    },
    {
      number: "02",
      title: "Bubble Development",
      description:
        "Our Bubble development services allow businesses to create powerful, database-driven web applications. With drag-and-drop functionality, we craft interactive platforms tailored to your unique business requirements.",
    },
    {
      number: "03",
      title: "Webflow Development",
      description:
        "Using Webflow, we design and develop responsive, high-performance websites that combine sleek visuals with intuitive user experiences—ideal for startups, agencies, and enterprises.",
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
            d="M13 10V3L4 14h7v7l9-11h-7z"
          />
        </svg>
      ),
      title: "Faster Time to Market",
      description:
        "With no-code application development, businesses launch products up to 70% faster than traditional development methods.",
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
      title: "Cost-Effective Solutions",
      description:
        "No-code software development drastically reduces expenses associated with hiring large development teams.",
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
            d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z"
          />
        </svg>
      ),
      title: "Scalability & Flexibility",
      description:
        "Our low-code no-code development services ensure your app remains adaptable as your business grows.",
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
        "Our team consists of mid-level and senior developers with 7+ years of expertise in your specific industry.",
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
        "Our commitment to excellence has resulted in a 98% client satisfaction rate, reflecting our dedication to delivering outstanding solutions.",
    },
  ];

  const platforms = [
    {
      name: "FlutterFlow",
      description:
        "Build native mobile apps visually with Flutter's power behind the scenes",
    },
    {
      name: "Bubble",
      description:
        "Create powerful, database-driven web applications with visual programming",
    },
    {
      name: "Webflow",
      description:
        "Design and develop responsive, high-performance websites visually",
    },
  ];

  const processSteps = [
    {
      number: "01",
      title: "Product Discovery",
      description:
        "Figuring out if no-code is the right fit. We start by understanding what you're building, who's using it, and what integrations you need.",
    },
    {
      number: "02",
      title: "Architecture Planning",
      description:
        "Structuring data and workflows before touching the builder. We map out your database structure, user roles, and logic flows.",
    },
    {
      number: "03",
      title: "Design & Prototyping",
      description:
        "Creating interfaces that work within platform constraints. Each no-code tool has its own quirks and we design with those in mind.",
    },
    {
      number: "04",
      title: "Build & Configuration",
      description:
        "Assembling your product in the no-code platform. We build methodically: database first, then core pages, then interactions and automations.",
    },
    {
      number: "05",
      title: "Testing & Refinement",
      description:
        "Making sure everything works across devices and scenarios. No-code tools can be finicky, so thorough testing is essential.",
    },
    {
      number: "06",
      title: "Launch & Handoff",
      description:
        "Getting you live and making sure you can manage it. We handle deployment, connect your domain, set up analytics, and train your team.",
    },
  ];

  const successCards = [
    {
      label: "COMPLIANCE",
      title: "Design Meets Regulation",
      description:
        "HIPAA- and GDPR-certified expertise for Healthcare and beyond. We've gained industry certifications and recognition since 2019.",
    },
    {
      label: "LONGEVITY",
      title: "Design That Lasts",
      description:
        "We don't chase fads. We build digital products that stay relevant. Our work looks sharp today and stays usable tomorrow.",
    },
    {
      label: "DELIVERY",
      title: "Developer-Ready Design",
      description:
        "We design for implementation, not handoff. Every component is built with devs in mind: design tokens, accessibility, and reusability.",
    },
    {
      label: "REACH",
      title: "Local Presence, Global Delivery",
      description:
        "Work directly with the doers — not a chain of account managers. Collaborate with strategists while our senior teams deliver fast results.",
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
                NO-CODE DEVELOPMENT
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                Build faster with No-Code Development
              </h1>
              <p className="text-xl text-dark-foreground/80 mb-8">
                Launch scalable applications without writing a single line of
                code. Whether you're a startup or an enterprise, our no-code
                development services accelerate your product's time-to-market
                while keeping costs low.
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
                <div className="text-9xl font-bold text-primary/30">NC</div>
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
              No-code solutions for modern business challenges
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
              No-code development services
            </h2>
            <p className="text-dark-foreground/70">
              We specialize in the leading no-code platforms to build your
              product faster and more affordably.
            </p>
          </motion.div>

          <motion.div
            {...staggerContainer}
            className="grid md:grid-cols-3 gap-8"
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
              Why choose our no-code development agency?
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

      {/* Platforms Section */}
      <section
        data-header-theme="dark"
        className="bg-dark text-dark-foreground py-24 border-t border-dark-foreground/10"
      >
        <div className="container mx-auto px-6">
          <motion.div {...fadeInUp} className="max-w-3xl mb-16">
            <span className="inline-block px-4 py-2 bg-primary/20 text-primary rounded-full text-sm font-medium mb-6">
              PLATFORMS
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              No-code platforms we work with
            </h2>
            <p className="text-dark-foreground/70">
              We leverage the best no-code tools to build your product
              efficiently.
            </p>
          </motion.div>

          <motion.div
            {...staggerContainer}
            className="grid md:grid-cols-3 gap-6"
          >
            {platforms.map((platform, index) => (
              <motion.div
                key={index}
                variants={{
                  initial: { opacity: 0, y: 20 },
                  whileInView: { opacity: 1, y: 0 },
                }}
                className="p-6 bg-dark-foreground/5 rounded-xl border border-dark-foreground/10"
              >
                <h3 className="text-lg font-semibold mb-2">{platform.name}</h3>
                <p className="text-dark-foreground/60 text-sm">
                  {platform.description}
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
              How we deliver no-code projects
            </h2>
            <p className="text-muted-foreground">
              Our structured approach ensures your no-code product is built
              right from the start.
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
              Ready to build without code?
            </h2>
            <p className="text-xl text-dark-foreground/70 mb-8">
              Let's create your product faster and more affordably with no-code
              development.
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

export default NoCodeDevelopment;
