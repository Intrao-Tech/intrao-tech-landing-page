import { SEOHead } from "@/components/SEOHead";
import { generateServiceSchema, generateBreadcrumbSchema, generateFAQSchema } from "@/lib/structured-data";
import { motion } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ButtonArrows } from "@/components/ui/button-arrows";
import { Asterisk, Users, BadgeCheck } from "lucide-react";

const TechnicalWorkshop = () => {
  const challenges = [
    {
      question: "Is your product idea still vague?",
      answer:
        "Our high tech workshop refines your vision with expert analysis, transforming initial concepts into actionable plans.",
    },
    {
      question: "Struggling to align design with architecture?",
      answer:
        "Our technical workshop services ensure seamless integration between UX design and technical requirements, avoiding misalignment down the road.",
    },
    {
      question: "Unclear on costs and resource allocation?",
      answer:
        "Our technical resources workshop provides precise cost and timeline estimates, helping you manage budgets effectively.",
    },
  ];

  const services = [
    {
      number: "01",
      title: "Product documentation & analysis",
      description:
        "Transforming ideas into structured documentation covering core features, business logic, and tech specifications for a smooth development process.",
    },
    {
      number: "02",
      title: "Technical architecture & planning",
      description:
        "Our experts define the optimal tech stack, server setup, and integrations, creating a scalable, future-proof foundation for your product.",
    },
    {
      number: "03",
      title: "Decomposition & timeline structuring",
      description:
        "We break down your project into manageable tasks with clear timelines, ensuring efficiency and transparency.",
    },
    {
      number: "04",
      title: "Solution presentation & final strategy",
      description:
        "Receive a comprehensive presentation of your project plan, with risk assessments and strategic insights for success.",
    },
    {
      number: "05",
      title: "Cost & resource planning",
      description:
        "Understand long-term costs, including server needs and cloud services, keeping your budget under control.",
    },
    {
      number: "06",
      title: "Expert guidance every step of the way",
      description:
        "Access senior specialists with industry-specific knowledge, ensuring tailored solutions that align with your goals.",
    },
  ];

  const benefits = [
    {
      icon: Asterisk,
      title: "Clear project roadmap",
      description:
        "A structured roadmap increases project completion rates by 33%, ensuring all development steps align with your goals.",
    },
    {
      icon: Asterisk,
      title: "Reduced risk of rework",
      description:
        "Addressing challenges early lowers project costs by up to 30%, reducing unnecessary revisions and delays.",
    },
    {
      icon: Asterisk,
      title: "Accurate budget & timeline estimates",
      description:
        "Early estimations improve budget adherence by 20%, providing a realistic outlook on costs and resources.",
    },
    {
      icon: Users,
      title: "Mid-level and senior experts",
      description:
        "Our team consists of mid-level and senior web designers & developers with 7+ years of expertise in your specific industry, ensuring your website is perfectly aligned with your audience's expectations.",
    },
    {
      icon: BadgeCheck,
      title: "Proven trust and high satisfaction",
      description:
        "As a trusted website development company, we prioritize strong relationships with our clients. Our commitment to excellence has resulted in a 98% client satisfaction rate, reflecting our dedication to delivering outstanding solutions.",
    },
  ];

  const processSteps = [
    {
      number: "01",
      title: "Challenge briefing",
      subtitle: "Understanding the technical questions you need answered",
      description:
        "We start by identifying what you're trying to solve. Is this about choosing between architectures? Evaluating third-party services? Planning a complex integration? The workshop agenda is built around your specific blockers.",
      keySteps: [
        "Technical challenges and decision points",
        "Current system constraints or requirements",
        "Budget and timeline considerations",
        "Key stakeholders and decision makers",
      ],
      deliverables: "Workshop agenda, technical questions list",
    },
    {
      number: "02",
      title: "Architecture evaluation",
      subtitle: "Reviewing options and trade-offs for your tech foundation",
      description:
        "We analyze different architectural approaches for your product. Monolith vs microservices, SQL vs NoSQL, serverless vs traditional hosting. Each option gets evaluated based on your scale, budget, team capabilities, and timeline.",
      keySteps: [
        "Tech stack evaluation and comparison",
        "Architecture pattern recommendations",
        "Scalability and performance assessment",
        "Security and compliance requirements",
      ],
      deliverables: "Architecture options document, comparison matrix",
    },
    {
      number: "03",
      title: "Integration planning",
      subtitle: "Mapping out third-party services and APIs",
      description:
        "We identify which external services you'll need (payment processors, authentication, email, analytics) and how they'll connect to your system. This includes API limitations, data flow, and potential integration challenges.",
      keySteps: [
        "Required third-party services identification",
        "API capabilities and limitations review",
        "Data synchronization and workflow mapping",
        "Integration complexity assessment",
      ],
      deliverables: "Infrastructure diagram, service requirements list",
    },
    {
      number: "04",
      title: "Implementation breakdown",
      subtitle: "Structuring the build into phases and tasks",
      description:
        "We break the technical work into concrete development tasks, organized by priority and dependencies. This gives you a realistic view of what gets built when, and where the complex work lives.",
      keySteps: [
        "Feature-level technical task breakdown",
        "Development phase structuring",
        "Dependency mapping and critical path",
        "Risk identification for complex modules",
      ],
      deliverables: "Technical task breakdown, phase timeline",
    },
    {
      number: "05",
      title: "Cost modeling",
      subtitle: "Estimating infrastructure and operational expenses",
      description:
        "We calculate what it'll cost to run your product: hosting, databases, CDN, API usage, monitoring tools. You get projections for launch and at different scale levels so you can budget appropriately.",
      keySteps: [
        "Infrastructure cost estimates (servers, databases, storage)",
        "Third-party service subscription costs",
        "Scaling cost projections",
        "Development resource requirements",
      ],
      deliverables: "Cost breakdown, scaling projections",
    },
    {
      number: "06",
      title: "Technical roadmap",
      subtitle: "Delivering findings and recommendations",
      description:
        "We present everything in a working session: architectural recommendations, implementation approach, cost projections, and risk factors. You can ask questions, challenge assumptions, and leave with a technical plan you can hand to developers.",
      keySteps: [
        "Architecture and tech stack recommendations",
        "Implementation strategy and phases",
        "Cost and resource planning",
        "Risk mitigation strategies",
      ],
      deliverables: "Technical specification document, presentation deck, implementation roadmap",
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
      <SEOHead
        title="Technical Workshop Services | Intrao Tech"
        description="Turn ideas into actionable plans with our high-tech workshop. Avoid costly mistakes - reduce rework by up to 85% and ensure a smooth path from concept to execution."
        canonical="/services/technical-workshop"
        structuredData={[
          generateServiceSchema({
            name: "Technical Workshop Services",
            description: "Turn ideas into actionable plans with our high-tech workshop. Avoid costly mistakes - reduce rework by up to 85% and ensure a smooth path from concept to execution.",
            url: "/services/technical-workshop",
          }),
          generateBreadcrumbSchema([
            { name: "Home", url: "/" },
            { name: "Services", url: "/services" },
            { name: "Technical Workshop", url: "/services/technical-workshop" },
          ]),
          generateFAQSchema(challenges),
        ]}
      />

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
              Tech Workshop
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="heading-2 mb-10 max-w-4xl"
            >
              Turn ideas into actionable plans with our high-tech workshop
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-wrap gap-4 mb-16"
            >
              <Button asChild className="group">
                <Link to="/contacts">
                  Let's talk
                  <ButtonArrows />
                </Link>
              </Button>
              <Button asChild variant="outline-dark" className="group">
                <Link to="/cases">
                  View our cases
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
              <div>
                <p className="text-xl md:text-2xl leading-relaxed text-dark-foreground">
                  Avoid costly mistakes with our technical workshop. In just a few sessions, you'll get a clear plan, reducing rework by up to 85% and ensuring a smooth path from concept to execution.
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
              Start your technical journey with clarity and confidence
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
              Technical Workshop Services we provide
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg text-dark-muted max-w-3xl mb-16"
            >
              Everything you need to validate your technical approach and prepare for successful development.
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
              Benefits of Our Technical Workshop Services
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
              Our technical workshop process
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg text-muted-foreground max-w-3xl mb-16"
            >
              A structured approach that transforms your technical challenges into a detailed, actionable implementation plan.
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
                    <p className="text-muted-foreground text-sm mb-2">{step.number}</p>
                    <h3 className="text-2xl md:text-3xl font-bold mb-4">{step.subtitle}</h3>
                    <p className="text-muted-foreground leading-relaxed mb-6 max-w-2xl">{step.description}</p>
                    <div className="mb-4">
                      <span className="text-sm font-medium mb-2 block">Key steps:</span>
                      <ul className="list-none space-y-1">
                        {step.keySteps.map((keyStep, i) => (
                          <li key={i} className="text-sm text-muted-foreground flex items-start gap-2">
                            <span className="text-muted-foreground mt-1.5 w-1 h-1 bg-muted-foreground rounded-full shrink-0" />
                            {keyStep}
                          </li>
                        ))}
                      </ul>
                    </div>
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
              Ready to validate your technical approach?
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-dark-muted text-lg mb-10 max-w-2xl mx-auto"
            >
              Let's transform your technical challenges into a clear, actionable roadmap for successful development.
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

export default TechnicalWorkshop;
