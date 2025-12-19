import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, ArrowUpRight, Palette, Eye, Heart, Trophy, Target, MessageSquare, TrendingUp, Users, Search, PenTool, FolderOpen, BookOpen } from "lucide-react";
import { Button } from "@/components/ui/button";

const Branding = () => {
  const challenges = [
    {
      question: "Is inconsistent branding hurting your credibility?",
      answer: "A clear and consistent brand image is essential for building trust and credibility. We create cohesive visual systems that reinforce your brand at every touchpoint.",
    },
    {
      question: "Struggling to differentiate from competitors?",
      answer: "When your visual identity resembles competitors too closely, you become forgettable. We craft unique brand identities that set you apart and make a lasting impression.",
    },
    {
      question: "Preparing for growth or entering new markets?",
      answer: "Rebranding is a key step when entering new markets or scaling your business. We help you evolve your brand to match your ambitions while maintaining brand equity.",
    },
    {
      question: "Need stronger market positioning?",
      answer: "Brands need a strong visual presence to stand out in their industries. We build brand identities that position you as a leader and command attention.",
    },
  ];

  const benefits = [
    {
      icon: Eye,
      title: "Enhanced recognition",
      description: "A clear and cohesive brand identity helps improve recognition by 23%. We create memorable visual systems that stick in your audience's minds.",
    },
    {
      icon: Heart,
      title: "Improved customer loyalty",
      description: "Strong brands create emotional connections. We design identities that resonate with your audience and foster long-term loyalty.",
    },
    {
      icon: Trophy,
      title: "Competitive advantage",
      description: "Stand out in crowded markets with a distinctive brand that communicates your unique value proposition clearly and consistently.",
    },
    {
      icon: Target,
      title: "Stronger market positioning",
      description: "Position your brand as an industry leader with a professional identity that commands respect and builds authority.",
    },
    {
      icon: MessageSquare,
      title: "Consistent brand messaging",
      description: "Unified messaging across all platforms reinforces your brand story and builds trust with every interaction.",
    },
    {
      icon: TrendingUp,
      title: "Increased brand equity",
      description: "A well-designed brand increases perceived value, allowing you to command premium pricing and attract better opportunities.",
    },
  ];

  const processSteps = [
    {
      number: "01",
      title: "Stakeholder interview",
      subtitle: "Aligning on business context and brand goals",
      description: "We start by understanding your business, target audience, competitive landscape, and brand aspirations to establish a solid foundation for the branding process.",
      icon: Users,
    },
    {
      number: "02",
      title: "Research & analysis",
      subtitle: "Uncovering opportunities through data",
      description: "Our team conducts thorough market research, competitor analysis, and audience insights to identify opportunities for differentiation and positioning.",
      icon: Search,
    },
    {
      number: "03",
      title: "Moodboard",
      subtitle: "Defining visual direction and aesthetics",
      description: "We explore visual directions through moodboards, establishing the tone, style, and aesthetic that will guide the entire brand identity development.",
      icon: Palette,
    },
    {
      number: "04",
      title: "Logo & visual identity",
      subtitle: "Designing the core branding system",
      description: "We craft your logo and core visual elements — typography, color palette, imagery style — that form the foundation of your brand identity.",
      icon: PenTool,
    },
    {
      number: "05",
      title: "Brand assets",
      subtitle: "Creating templates and tools for team use",
      description: "We develop all the brand assets your team needs — business cards, social media templates, presentation decks, and marketing collateral.",
      icon: FolderOpen,
    },
    {
      number: "06",
      title: "Brand guidelines & delivery",
      subtitle: "Documenting everything for long-term use",
      description: "We compile comprehensive brand guidelines that ensure consistency across all applications, empowering your team to maintain brand integrity.",
      icon: BookOpen,
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
        <title>Branding & Identity Services | Intrao Tech</title>
        <meta
          name="description"
          content="Engage your audience with a brand that stands out, builds trust, and makes an impact. Professional branding and identity design services."
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
              Branding & Identity
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.1] mb-10 max-w-4xl"
            >
              Branding and Identity Agency
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
                    <Palette className="w-8 h-8" />
                  </div>
                  <p className="text-sm">Brand Identity Preview</p>
                </div>
              </div>
              <div>
                <p className="text-xl md:text-2xl leading-relaxed text-dark-foreground">
                  Engage your audience with a brand that stands out, builds trust, and makes an impact. We create distinctive brand identities that resonate with your target audience and drive business growth.
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
              We build brands that solve problems, not create them
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
              Why invest in professional branding?
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
              Our Branding Process
            </motion.p>

            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-3xl md:text-4xl lg:text-5xl font-bold leading-[1.1] mb-8 max-w-4xl"
            >
              From strategy to launch — how we build memorable brands
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg text-muted-foreground max-w-3xl mb-16"
            >
              Our proven branding process ensures every element of your brand identity works together to create a cohesive, impactful presence.
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
              Ready to build your brand?
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-dark-muted text-lg mb-10 max-w-2xl mx-auto"
            >
              Let's discuss how we can help you create a brand identity that stands out and drives business growth.
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

export default Branding;
