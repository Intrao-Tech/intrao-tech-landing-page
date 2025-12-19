import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, ArrowUpRight, RefreshCw, Award, Accessibility, TrendingUp, Sparkles, Heart, Building2, ShoppingBag, Store, Users, Search, FileCode } from "lucide-react";
import { Button } from "@/components/ui/button";

const WebsiteRedesign = () => {
  const challenges = [
    {
      question: "Is your website outdated and misaligned with your brand?",
      answer: "A modern, professional look builds trust. Our website redesign agency ensures your website stays relevant, visually appealing, and competitive.",
    },
    {
      question: "Are you struggling with low conversion rates?",
      answer: "If your visitors aren't converting, our UX website redesign process is designed to streamline user journeys and boost engagement effectively.",
    },
    {
      question: "Is mobile usability a problem?",
      answer: "Over 60% of web traffic comes from mobile devices. Our website redesign specialists create responsive designs to ensure seamless experiences across all screens.",
    },
  ];

  const benefits = [
    {
      icon: Award,
      title: "Elevated brand perception",
      description: "75% of users judge credibility based on website design. A fresh look enhances trust.",
    },
    {
      icon: Accessibility,
      title: "Enhanced accessibility & inclusivity",
      description: "An inclusive design ensures usability for all users, improving engagement.",
    },
    {
      icon: TrendingUp,
      title: "Higher conversion rates",
      description: "Improved layouts not only attract visitors but also engage them, turning browsers into customers.",
    },
    {
      icon: Sparkles,
      title: "Mid-level and senior experts",
      description: "Our team consists of mid-level and senior web designers & developers with 7+ years of expertise in your specific industry, ensuring your website is perfectly aligned with your audience's expectations.",
    },
    {
      icon: Heart,
      title: "Proven trust and high satisfaction",
      description: "As a trusted website development company, we prioritize strong relationships with our clients. Our commitment to excellence has resulted in a 98% client satisfaction rate.",
    },
  ];

  const servicesOffered = [
    {
      icon: Building2,
      title: "B2B website redesign",
      description: "Custom-tailored redesign solutions for B2B businesses, focusing on lead generation, authority building, and market positioning.",
    },
    {
      icon: ShoppingBag,
      title: "B2C website redesign",
      description: "Optimized product pages, user experiences, and checkout processes to enhance engagement and increase conversions for consumer-facing brands.",
    },
    {
      icon: Store,
      title: "Small business website redesign",
      description: "Cost-effective redesign solutions to elevate credibility, enhance visibility, and improve customer trust for small businesses.",
    },
    {
      icon: Users,
      title: "UX website redesign",
      description: "A deep focus on user experience improvements to streamline navigation, enhance engagement, and boost customer retention.",
    },
    {
      icon: Search,
      title: "SEO-optimized redesign",
      description: "A strategic redesign that integrates website redesign SEO best practices, improving search engine rankings and organic traffic.",
    },
    {
      icon: FileCode,
      title: "WordPress website redesign",
      description: "Fully customized WordPress website redesigns, improving speed, security, and functionality while maintaining brand identity.",
    },
  ];

  const processSteps = [
    {
      number: "01",
      title: "Discovery & Research",
      subtitle: "Understanding where growth is blocked",
      description: "We start by auditing your current site's UX, performance, and architecture to understand where users drop off and where growth is blocked. This forms the foundation for everything that follows.",
    },
    {
      number: "02",
      title: "Strategy & Planning",
      subtitle: "Defining your new structure and priorities",
      description: "We define your new structure, core user flows, and feature priorities — aligning with both business goals and technical feasibility. This phase ends with clear documentation and actionable prototypes.",
    },
    {
      number: "03",
      title: "UX/UI Design",
      subtitle: "Building component-based UI libraries",
      description: "We build structured, component-based UI libraries — visually aligned with your brand and optimized for clean developer execution.",
    },
    {
      number: "04",
      title: "SEO-ready architecture",
      subtitle: "Preserving your organic visibility",
      description: "We preserve your organic visibility with a structure that supports Core Web Vitals, semantic HTML, and a bug-free transition from old to new.",
    },
    {
      number: "05",
      title: "Developer collaboration",
      subtitle: "Embedding design into your development flow",
      description: "We embed design into your development flow from day one — whether you use React, Webflow, WordPress, or a headless CMS. No disconnect between vision and execution.",
    },
    {
      number: "06",
      title: "QA, launch, & support",
      subtitle: "Testing and post-launch refinement",
      description: "We test your site across environments, support your team during launch, and stay available for refinement post-launch.",
    },
  ];

  const successCards = [
    {
      label: "DESIGN THAT MEETS REGULATION",
      title: "HIPAA- and GDPR-certified expertise for Healthcare and beyond.",
      description: "Since 2019, we've gained HIPAA and GDPR certifications and industry recognition, delivering hundreds of products in Healthcare, SaaS, FinTech, and EdTech — where compliance and UX go hand in hand.",
    },
    {
      label: "DESIGN THAT LASTS BEYOND TRENDS",
      title: "We don't chase fads. We build digital products that stay relevant.",
      description: "Our work looks sharp today and stays usable tomorrow — designed around long-term value, not short-term gimmicks. Scalable systems, brand consistency, and smart UX that grows with your product.",
    },
    {
      label: "DESIGN THAT'S DEVELOPER-READY",
      title: "We design for implementation, not handoff.",
      description: "Every component is built with devs in mind: design tokens, accessibility, reusability, and real-world constraints. We collaborate with your team, reuse existing elements, and stay involved until everything's live.",
    },
    {
      label: "LOCAL PRESENCE. GLOBAL DELIVERY.",
      title: "Work directly with the doers — not a chain of account managers.",
      description: "Collaborate with UX strategists in North America, while our senior design and development teams in Europe deliver fast, consistent results. We integrate into your tools and workflow, working as part of your team.",
    },
  ];

  return (
    <>
      <Helmet>
        <title>Website Redesign Services | Intrao Tech</title>
        <meta
          name="description"
          content="Transform your website into a high-performing digital asset. Increase traffic, generate leads, and boost revenue with our website redesign services."
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
              Website Redesign
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.1] mb-10 max-w-4xl"
            >
              Transform your website into a high-performing digital asset
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-wrap gap-4 mb-16"
            >
              <Button asChild>
                <Link to="/contacts">
                  Let's Talk
                  <ArrowUpRight />
                </Link>
              </Button>
              <Button asChild variant="outline-dark">
                <Link to="/cases">
                  View Our Cases
                  <ArrowUpRight />
                </Link>
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
            >
              <div className="bg-dark-muted/20 rounded-2xl p-8 aspect-video flex items-center justify-center">
                <div className="text-dark-muted text-center">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-xl bg-dark-muted/30 flex items-center justify-center">
                    <RefreshCw className="w-8 h-8" />
                  </div>
                  <p className="text-sm">Website Redesign Preview</p>
                </div>
              </div>
              <div>
                <p className="text-xl md:text-2xl leading-relaxed text-dark-foreground">
                  Increase traffic, generate leads, and boost revenue with our website redesign services. We transform your site into a powerful tool for conversions.
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
              We redesign websites that solve problems, not create them
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
              Why should you choose our website redesign agency?
            </motion.h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {benefits.map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="p-8 border border-dark-muted/30 rounded-2xl"
                >
                  <item.icon className="w-8 h-8 text-dark-muted mb-8" strokeWidth={1.5} />
                  <h3 className="text-xl font-semibold mb-4">{item.title}</h3>
                  <p className="text-dark-muted leading-relaxed">{item.description}</p>
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
              Our Website Redesign Services
            </motion.p>

            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-3xl md:text-4xl lg:text-5xl font-bold leading-[1.1] mb-16 max-w-3xl"
            >
              Tailored redesign solutions for every business
            </motion.h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {servicesOffered.map((service, index) => (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="p-8 border border-dark-muted/30 rounded-2xl"
                >
                  <service.icon className="w-8 h-8 text-dark-muted mb-6" strokeWidth={1.5} />
                  <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                  <p className="text-dark-muted leading-relaxed">{service.description}</p>
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
              Our Website Redesign Process
            </motion.p>

            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-3xl md:text-4xl lg:text-5xl font-bold leading-[1.1] mb-8 max-w-4xl"
            >
              From audit to launch — how we transform your website
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg text-muted-foreground max-w-3xl mb-16"
            >
              Our proven redesign process ensures your new website outperforms your old one in every metric that matters.
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
                  className="bg-muted/50 p-8 rounded-2xl"
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
              Ready to transform your website?
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-dark-muted text-lg mb-10 max-w-2xl mx-auto"
            >
              Let's discuss how we can help you redesign your website into a high-performing digital asset.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Button asChild size="lg">
                <Link to="/contacts">
                  Get in Touch
                  <ArrowRight />
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

export default WebsiteRedesign;
