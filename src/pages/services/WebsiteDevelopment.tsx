import { SEOHead } from "@/components/SEOHead";
import { generateServiceSchema, generateBreadcrumbSchema } from "@/lib/structured-data";
import { motion } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ButtonArrows } from "@/components/ui/button-arrows";
import {
  Globe,
  Lightbulb,
  TrendingUp,
  Smile,
  Users,
  BadgeCheck,
} from "lucide-react";

const WebsiteDevelopment = () => {
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
      icon: Lightbulb,
      title: "Expert-Led Execution",
      description:
        "Design and development collaboration ensuring precision and creativity in meeting your goals.",
    },
    {
      icon: TrendingUp,
      title: "Growth Optimization",
      description:
        "Solutions scalable from landing pages to enterprise systems, designed for business expansion.",
    },
    {
      icon: Smile,
      title: "Seamless UX",
      description:
        "User-friendly designs with intuitive navigation and engaging visuals delivering high conversion rates.",
    },
    {
      icon: Users,
      title: "Senior Expertise",
      description:
        "Mid-level and senior professionals with 3+ years of industry-specific experience.",
    },
    {
      icon: BadgeCheck,
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
      subtitle: "Stakeholder interviews and requirements planning",
      description:
        "User analysis, technical requirements, and success metrics planning.",
    },
    {
      number: "02",
      title: "Design & Prototyping",
      subtitle: "Information architecture and responsive UX/UI",
      description: "Component libraries and interactive prototypes for review.",
    },
    {
      number: "03",
      title: "Backend Architecture",
      subtitle: "Server setup and database structure",
      description: "API integration and deployment pipelines configuration.",
    },
    {
      number: "04",
      title: "Development",
      subtitle: "Front-end/back-end implementation",
      description:
        "CMS configuration, animation integration, and sprint-based delivery.",
    },
    {
      number: "05",
      title: "QA & Testing",
      subtitle: "Functional testing and cross-browser validation",
      description: "Accessibility audits and security testing before launch.",
    },
    {
      number: "06",
      title: "Post-Launch Support",
      subtitle: "Live monitoring and analytics setup",
      description:
        "Maintenance and continuous optimization for ongoing success.",
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
    <>
      <SEOHead
        title="Website Development Services | Intrao Tech"
        description="Website Development Agency. Get a custom website to engage your audience and boost conversions."
        canonical="/services/website-development"
        structuredData={[
          generateServiceSchema({
            name: "Website Development Services",
            description: "Website Development Agency. Get a custom website to engage your audience and boost conversions.",
            url: "/services/website-development",
          }),
          generateBreadcrumbSchema([
            { name: "Home", url: "/" },
            { name: "Services", url: "/services" },
            { name: "Website Development", url: "/services/website-development" },
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
              Website Development
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="heading-2 mb-10 max-w-4xl"
            >
              Website Development Agency
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
                    <Globe className="w-8 h-8" />
                  </div>
                  <p className="text-sm">Website Preview</p>
                </div>
              </div>
              */}
              <div>
                <p className="text-xl md:text-2xl leading-relaxed text-dark-foreground">
                  Get a custom website to engage your audience and boost
                  conversions. We create professional, high-performing websites
                  that establish trust and drive business growth.
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
              We build websites that solve problems, not create them
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

        {/* Services Offered Section */}
        <section
          data-header-theme="dark"
          className="bg-dark text-dark-foreground py-24"
        >
          <div className="container mx-auto px-6">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-dark-muted text-sm uppercase tracking-[0.3em] mb-6"
            >
              Our Services
            </motion.p>

            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-3xl md:text-4xl lg:text-5xl font-bold leading-[1.1] mb-8 max-w-3xl"
            >
              Full-cycle website development services
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg text-dark-muted max-w-3xl mb-16"
            >
              We create custom solutions that captivate audiences and boost
              functionality using advanced technologies and user-friendly
              design.
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
                  <p className="text-dark-muted leading-relaxed">
                    {service.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
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
              Why choose our website development agency?
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

        {/* Tech Stack Section */}
        <section
          data-header-theme="dark"
          className="bg-dark text-dark-foreground py-24"
        >
          <div className="container mx-auto px-6">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-dark-muted text-sm uppercase tracking-[0.3em] mb-6"
            >
              Technology Stack
            </motion.p>

            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-3xl md:text-4xl lg:text-5xl font-bold leading-[1.1] mb-8 max-w-3xl"
            >
              Technologies we use
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg text-dark-muted max-w-3xl mb-16"
            >
              We leverage modern frameworks and platforms to build fast,
              scalable, and maintainable websites.
            </motion.p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {techStack.map((tech, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="p-6 border border-dark-muted/30 rounded-lg"
                >
                  <h3 className="text-lg font-semibold mb-2">{tech.name}</h3>
                  <p className="text-dark-muted text-sm">{tech.description}</p>
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
              Our Process
            </motion.p>

            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-3xl md:text-4xl lg:text-5xl font-bold leading-[1.1] mb-8 max-w-4xl"
            >
              How we deliver website projects
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg text-muted-foreground max-w-3xl mb-16"
            >
              Our structured approach ensures quality delivery while keeping you
              informed at every stage.
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
                    <p className="text-muted-foreground leading-relaxed max-w-2xl">
                      {step.description}
                    </p>
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
              Ready to build your website?
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-dark-muted text-lg mb-10 max-w-2xl mx-auto"
            >
              Let's create a custom website that engages your audience and
              drives conversions.
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

export default WebsiteDevelopment;
