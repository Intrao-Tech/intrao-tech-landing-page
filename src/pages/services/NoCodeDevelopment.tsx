import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ButtonArrows } from "@/components/ui/button-arrows";
import { Blocks, Zap, DollarSign, LayoutGrid, Users, BadgeCheck } from "lucide-react";

const NoCodeDevelopment = () => {
  const challenges = [
    {
      question: "Frustrated with slow traditional development?",
      answer:
        "With low-code no-code app development, you can create a fully functional digital product in weeks instead of months-without sacrificing quality.",
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
        "We leverage FlutterFlow to build visually stunning, fully functional mobile apps with native performance-without writing code. This approach speeds up development while maintaining flexibility and scalability.",
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
        "Using Webflow, we design and develop responsive, high-performance websites that combine sleek visuals with intuitive user experiences-ideal for startups, agencies, and enterprises.",
    },
  ];

  const benefits = [
    {
      icon: Zap,
      title: "Faster Time to Market",
      description:
        "With no-code application development, businesses launch products up to 70% faster than traditional development methods.",
    },
    {
      icon: DollarSign,
      title: "Cost-Effective Solutions",
      description:
        "No-code software development drastically reduces expenses associated with hiring large development teams.",
    },
    {
      icon: LayoutGrid,
      title: "Scalability & Flexibility",
      description:
        "Our low-code no-code development services ensure your app remains adaptable as your business grows.",
    },
    {
      icon: Users,
      title: "Mid-Level and Senior Experts",
      description:
        "Our team consists of mid-level and senior developers with 7+ years of expertise in your specific industry.",
    },
    {
      icon: BadgeCheck,
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
      subtitle: "Figuring out if no-code is the right fit",
      description:
        "We start by understanding what you're building, who's using it, and what integrations you need.",
    },
    {
      number: "02",
      title: "Architecture Planning",
      subtitle: "Structuring data and workflows before touching the builder",
      description:
        "We map out your database structure, user roles, and logic flows.",
    },
    {
      number: "03",
      title: "Design & Prototyping",
      subtitle: "Creating interfaces that work within platform constraints",
      description:
        "Each no-code tool has its own quirks and we design with those in mind.",
    },
    {
      number: "04",
      title: "Build & Configuration",
      subtitle: "Assembling your product in the no-code platform",
      description:
        "We build methodically: database first, then core pages, then interactions and automations.",
    },
    {
      number: "05",
      title: "Testing & Refinement",
      subtitle: "Making sure everything works across devices and scenarios",
      description:
        "No-code tools can be finicky, so thorough testing is essential.",
    },
    {
      number: "06",
      title: "Launch & Handoff",
      subtitle: "Getting you live and making sure you can manage it",
      description:
        "We handle deployment, connect your domain, set up analytics, and train your team.",
    },
  ];

  const successCards = [
    {
      label: "COMPLIANCE",
      title: "Design Meets Regulation",
      description:
        "HIPAA- and GDPR-certified expertise for Healthcare and beyond. We've gained industry certifications and recognition since 2023.",
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
        "Work directly with the doers - not a chain of account managers. Collaborate with strategists while our senior teams deliver fast results.",
    },
  ];

  return (
    <>
      <Helmet>
        <title>No-Code Development Services | Intrao Tech</title>
        <meta
          name="description"
          content="Build faster with No-Code Development. Launch scalable applications without writing a single line of code."
        />
      </Helmet>

      <Header />

      <main>
        {/* Hero Section */}
        <section data-header-theme="dark" className="bg-dark text-dark-foreground pt-32 pb-20">
          <div className="container mx-auto px-6">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-dark-muted text-sm uppercase tracking-[0.3em] mb-8"
            >
              No-Code Development
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="heading-2 mb-10 max-w-4xl"
            >
              Build faster with No-Code Development
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
                    <Blocks className="w-8 h-8" />
                  </div>
                  <p className="text-sm">No-Code Platform Preview</p>
                </div>
              </div>
              */}
              <div>
                <p className="text-xl md:text-2xl leading-relaxed text-dark-foreground">
                  Launch scalable applications without writing a single line of
                  code. Whether you're a startup or an enterprise, our no-code
                  development services accelerate your product's time-to-market
                  while keeping costs low.
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
              No-code solutions for modern business challenges
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
              className="text-3xl md:text-4xl lg:text-5xl font-bold leading-[1.1] mb-8 max-w-3xl"
            >
              No-code development services
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg text-dark-muted max-w-3xl mb-16"
            >
              We specialize in the leading no-code platforms to build your
              product faster and more affordably.
            </motion.p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
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
              Why choose our no-code development agency?
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

        {/* Platforms Section */}
        <section data-header-theme="dark" className="bg-dark text-dark-foreground py-24">
          <div className="container mx-auto px-6">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-dark-muted text-sm uppercase tracking-[0.3em] mb-6"
            >
              Platforms
            </motion.p>

            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-3xl md:text-4xl lg:text-5xl font-bold leading-[1.1] mb-8 max-w-3xl"
            >
              No-code platforms we work with
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg text-dark-muted max-w-3xl mb-16"
            >
              We leverage the best no-code tools to build your product
              efficiently.
            </motion.p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {platforms.map((platform, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="p-6 border border-dark-muted/30 rounded-lg"
                >
                  <h3 className="text-lg font-semibold mb-2">{platform.name}</h3>
                  <p className="text-dark-muted text-sm">
                    {platform.description}
                  </p>
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
              How we deliver no-code projects
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg text-muted-foreground max-w-3xl mb-16"
            >
              Our structured approach ensures your no-code product is built
              right from the start.
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
              Ready to build without code?
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-dark-muted text-lg mb-10 max-w-2xl mx-auto"
            >
              Let's create your product faster and more affordably with no-code
              development.
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

export default NoCodeDevelopment;
