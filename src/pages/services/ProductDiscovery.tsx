import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ButtonArrows } from "@/components/ui/button-arrows";
import { Compass, Settings, DollarSign, FileText, Users, BadgeCheck } from "lucide-react";

const ProductDiscovery = () => {
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
      icon: Settings,
      title: "Technical Expertise",
      description:
        "Every product is built with a strong architectural foundation, optimal performance, and seamless integration with existing systems.",
    },
    {
      icon: DollarSign,
      title: "Cost Efficiency",
      description:
        "By prioritizing essential features, we help you minimize wasted resources and optimize development efficiency.",
    },
    {
      icon: FileText,
      title: "Comprehensive Documentation",
      description:
        "Structured documentation that captures every technical and functional requirement for seamless transition to development.",
    },
    {
      icon: Users,
      title: "Mid-Level and Senior Experts",
      description:
        "Product designers & developers with 7+ years of expertise ensuring your product aligns with audience expectations.",
    },
    {
      icon: BadgeCheck,
      title: "Proven Trust",
      description:
        "Our commitment to excellence has resulted in a 98% client satisfaction rate.",
    },
  ];

  const processSteps = [
    {
      number: "01",
      title: "Stakeholder Interview",
      subtitle: "Getting everyone aligned on goals and constraints",
      description: "We understand your vision, business model, and success metrics.",
      deliverables: "Business objectives, target users, technical requirements, timeline & budget",
    },
    {
      number: "02",
      title: "Product Documentation",
      subtitle: "Defining how the product works in detail",
      description: "We document every feature, user role, and piece of business logic.",
      deliverables: "Feature specifications, business logic, module breakdown, integration requirements",
    },
    {
      number: "03",
      title: "Feature Prioritization",
      subtitle: "Deciding what gets built when",
      description: "Not everything can launch in version one.",
      deliverables: "Impact/effort assessments, MVP scope, roadmaps, dependency mapping",
    },
    {
      number: "04",
      title: "Technical Architecture",
      subtitle: "Planning the infrastructure and system design",
      description: "We map out database structure, API architecture, and hosting requirements.",
      deliverables: "Architecture diagrams, technical specifications, cost breakdowns",
    },
    {
      number: "05",
      title: "User Flows & UX Discovery",
      subtitle: "Mapping how people move through the product",
      description: "We create flow diagrams for core user journeys and edge cases.",
      deliverables: "User flow diagrams, interaction specifications",
    },
    {
      number: "06",
      title: "Project Estimation",
      subtitle: "Providing realistic timelines and costs",
      description: "With everything documented, we estimate development time and cost.",
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
        "Work directly with the doers - not a chain of account managers. Get answers and decisions fast.",
    },
  ];

  return (
    <>
      <Helmet>
        <title>Product Discovery Services | Intrao Tech</title>
        <meta
          name="description"
          content="Product Discovery. Transform your app idea into a launch-ready roadmap with our product discovery services."
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
              Product Discovery
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="heading-2 mb-10 max-w-4xl"
            >
              Product Discovery
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
                    <Compass className="w-8 h-8" />
                  </div>
                  <p className="text-sm">Discovery Process Preview</p>
                </div>
              </div>
              */}
              <div>
                <p className="text-xl md:text-2xl leading-relaxed text-dark-foreground">
                  Transform your app idea into a launch-ready roadmap. We help you
                  define critical features to ensure your app meets market needs,
                  saving development costs by preventing wasted resources on
                  unnecessary features.
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
              Start your product journey with clarity and confidence
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
              Comprehensive product discovery services
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg text-dark-muted max-w-3xl mb-16"
            >
              Everything you need to validate your idea and prepare for
              successful development.
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
              Why choose our product discovery services?
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
              Our product discovery process
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg text-muted-foreground max-w-3xl mb-16"
            >
              A structured approach that transforms your idea into a detailed,
              actionable development roadmap.
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
                      <span className="text-sm text-muted-foreground font-medium">Deliverables: </span>
                      <span className="text-sm text-muted-foreground">{step.deliverables}</span>
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
              Ready to validate your product idea?
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-dark-muted text-lg mb-10 max-w-2xl mx-auto"
            >
              Let's transform your vision into a clear, actionable roadmap for
              successful development.
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

export default ProductDiscovery;
