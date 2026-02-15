import { SEOHead } from "@/components/SEOHead";
import { generateServiceSchema, generateBreadcrumbSchema, generateFAQSchema } from "@/lib/structured-data";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Code, Globe, Settings, Layout, Users, Palette, Layers, TrendingUp, Sparkles, Heart, Server, Database, Cloud } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ButtonArrows } from "@/components/ui/button-arrows";

const WebDevelopment = () => {
  const challenges = [
    {
      question: "Struggling with outdated or underperforming websites?",
      answer: "Legacy systems and outdated code can hold your business back. We modernize your web presence with cutting-edge technologies that improve performance, security, and user experience.",
    },
    {
      question: "Looking for a development partner who understands your needs?",
      answer: "Finding the right development team is crucial. We take time to understand your business goals, technical requirements, and user needs to deliver solutions that truly fit.",
    },
    {
      question: "Having trouble with your web app's performance?",
      answer: "Slow load times and poor performance hurt conversions. We optimize every aspect of your web application for speed, scalability, and reliability.",
    },
  ];

  const servicesOffered = [
    {
      icon: Code,
      title: "Custom web development",
      description: "Tailored web solutions built from scratch to meet your unique business requirements and scale with your growth.",
    },
    {
      icon: Globe,
      title: "Web application development",
      description: "Complex, feature-rich web applications with robust backends, real-time functionality, and seamless user experiences.",
    },
    {
      icon: Layout,
      title: "WordPress web development",
      description: "Custom WordPress solutions with tailored themes, plugins, and optimizations for content-driven websites.",
    },
    {
      icon: Settings,
      title: "Admin panel development",
      description: "Powerful, intuitive admin dashboards and back-office systems to manage your business operations efficiently.",
    },
    {
      icon: Users,
      title: "Dedicated development team",
      description: "Extend your team with skilled developers who integrate seamlessly with your workflow and deliver consistent results.",
    },
    {
      icon: Palette,
      title: "Web design & development",
      description: "End-to-end services combining stunning design with solid development for cohesive digital experiences.",
    },
  ];

  const benefits = [
    {
      icon: Layers,
      title: "Custom-tailored solutions",
      description: "Every project is unique. We build solutions specifically designed for your business needs, not one-size-fits-all templates.",
    },
    {
      icon: TrendingUp,
      title: "Scalability & flexibility",
      description: "Our architectures are built to grow with your business, handling increased traffic and feature additions seamlessly.",
    },
    {
      icon: Server,
      title: "Optimized performance",
      description: "Fast load times, efficient code, and optimized assets ensure your web applications perform at their best.",
    },
    {
      icon: Sparkles,
      title: "Mid-level and senior experts",
      description: "Our team consists of experienced developers with 3+ years of expertise, ensuring high-quality code and best practices.",
    },
    {
      icon: Heart,
      title: "Proven trust and satisfaction",
      description: "With a 98% client satisfaction rate, our commitment to excellence has made us a trusted partner for businesses worldwide.",
    },
  ];

  const techStack = {
    frontend: [
      { name: "React", description: "Component-based UI library" },
      { name: "Next.js", description: "Full-stack React framework" },
      { name: "TypeScript", description: "Type-safe JavaScript" },
      { name: "Tailwind CSS", description: "Utility-first CSS" },
    ],
    backend: [
      { name: "Node.js", description: "JavaScript runtime" },
      { name: "Express.js", description: "Web framework" },
      { name: "NestJS", description: "Enterprise Node.js" },
      { name: "PostgreSQL", description: "Relational database" },
    ],
    cms: [
      { name: "WordPress", description: "Content management" },
      { name: "Webflow", description: "Visual development" },
      { name: "Strapi", description: "Headless CMS" },
      { name: "Sanity", description: "Structured content" },
    ],
    infrastructure: [
      { name: "AWS", description: "Cloud services" },
      { name: "Docker", description: "Containerization" },
      { name: "Kubernetes", description: "Container orchestration" },
      { name: "Cloudflare", description: "CDN & security" },
    ],
  };

  const processSteps = [
    {
      number: "01",
      title: "Product Discovery",
      subtitle: "Requirements gathering and technical audit",
      description: "We start by understanding your business goals, technical requirements, and user needs to create a comprehensive development roadmap.",
    },
    {
      number: "02",
      title: "Design & Prototyping",
      subtitle: "User flows and interface design",
      description: "Our design team creates intuitive user interfaces and interactive prototypes that align with your brand and user expectations.",
    },
    {
      number: "03",
      title: "Backend Architecture & DevOps",
      subtitle: "Database and server setup",
      description: "We design robust backend architectures, set up databases, and configure DevOps pipelines for seamless deployment.",
    },
    {
      number: "04",
      title: "App Development",
      subtitle: "Modular front-end and backend logic",
      description: "Our developers build your application using modern frameworks, clean code practices, and modular architecture for maintainability.",
    },
    {
      number: "05",
      title: "QA & Testing",
      subtitle: "Functionality and performance validation",
      description: "Rigorous testing across devices and browsers ensures your application works flawlessly and performs optimally.",
    },
    {
      number: "06",
      title: "Post-Launch Support",
      subtitle: "Monitoring and feature additions",
      description: "We provide ongoing support, monitoring, and maintenance to keep your application running smoothly and evolving with your needs.",
    },
  ];

  const successCards = [
    {
      label: "DESIGN THAT MEETS REGULATION",
      title: "Compliance-aware design for Healthcare, FinTech, and regulated industries.",
      description: "We bring deep experience across Healthcare, SaaS, FinTech, and EdTech — delivering hundreds of products where compliance-aware design and great UX go hand in hand.",
    },
    {
      label: "DESIGN THAT LASTS BEYOND TRENDS",
      title: "We don't chase fads. We build digital products that stay relevant.",
      description: "Our work looks sharp today and stays usable tomorrow - designed around long-term value, not short-term gimmicks. Scalable systems, brand consistency, and smart UX that grows with your product.",
    },
    {
      label: "DESIGN THAT'S DEVELOPER-READY",
      title: "We design for implementation, not handoff.",
      description: "Every component is built with devs in mind: design tokens, accessibility, reusability, and real-world constraints. We collaborate with your team, reuse existing elements, and stay involved until everything's live.",
    },
    {
      label: "LOCAL PRESENCE. GLOBAL DELIVERY.",
      title: "Work directly with the doers - not a chain of account managers.",
      description: "Work directly with our London-based founders and senior design team across Europe. We integrate into your tools and workflow, delivering fast, consistent results as part of your team.",
    },
  ];

  return (
    <>
      <SEOHead
        title="Web Development Services | Intrao Tech"
        description="Building high-performance web solutions for every business. From marketing websites to custom applications, we create responsive, scalable web solutions."
        canonical="/services/web-development"
        structuredData={[
          generateServiceSchema({
            name: "Web Development Services",
            description: "Building high-performance web solutions for every business. From marketing websites to custom applications, we create responsive, scalable web solutions.",
            url: "/services/web-development",
          }),
          generateBreadcrumbSchema([
            { name: "Home", url: "/" },
            { name: "Services", url: "/services" },
            { name: "Web Development", url: "/services/web-development" },
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
              Web Development
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="heading-2 mb-10 max-w-4xl"
            >
              Building high-performance web solutions for every business
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
                  <p className="text-sm">Web Development Preview</p>
                </div>
              </div>
              */}
              <div>
                <p className="text-xl md:text-2xl leading-relaxed text-dark-foreground">
                  From sleek marketing websites to powerful custom applications, our web development services ensure your business stands out. We create responsive, scalable, and high-performing web solutions tailored to your needs.
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
              We build web solutions that solve problems, not create them
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
              Our Services
            </motion.p>

            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-3xl md:text-4xl lg:text-5xl font-bold leading-[1.1] mb-16 max-w-3xl"
            >
              Web development services we offer
            </motion.h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {servicesOffered.map((service, index) => (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="p-8 border border-dark-muted/30 rounded-lg"
                >
                  <service.icon className="w-8 h-8 text-dark-muted mb-6" strokeWidth={1.5} />
                  <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
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
              Why choose our web development services?
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

        {/* Tech Stack Section */}
        <section data-header-theme="dark" className="bg-dark text-dark-foreground py-24">
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
              className="text-3xl md:text-4xl lg:text-5xl font-bold leading-[1.1] mb-16 max-w-3xl"
            >
              Modern technologies we work with
            </motion.h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {Object.entries(techStack).map(([category, techs], categoryIndex) => (
                <motion.div
                  key={category}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
                  className="p-6 border border-dark-muted/30 rounded-lg"
                >
                  <h3 className="text-lg font-semibold mb-6 capitalize flex items-center gap-2">
                    {category === 'frontend' && <Code className="w-5 h-5" />}
                    {category === 'backend' && <Server className="w-5 h-5" />}
                    {category === 'cms' && <Database className="w-5 h-5" />}
                    {category === 'infrastructure' && <Cloud className="w-5 h-5" />}
                    {category}
                  </h3>
                  <div className="space-y-4">
                    {techs.map((tech) => (
                      <div key={tech.name}>
                        <p className="font-medium">{tech.name}</p>
                        <p className="text-dark-muted text-sm">{tech.description}</p>
                      </div>
                    ))}
                  </div>
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
              Our Development Process
            </motion.p>

            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-3xl md:text-4xl lg:text-5xl font-bold leading-[1.1] mb-8 max-w-4xl"
            >
              From concept to launch - how we build web solutions
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg text-muted-foreground max-w-3xl mb-16"
            >
              Our proven development process ensures every project is delivered on time, on budget, and exceeds expectations.
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
                    <p className="text-muted-foreground leading-relaxed max-w-2xl">{step.description}</p>
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
              Ready to build your web solution?
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-dark-muted text-lg mb-10 max-w-2xl mx-auto"
            >
              Let's discuss how we can help you build a high-performance web solution that drives results.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Button asChild size="xl" className="group">
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

export default WebDevelopment;
