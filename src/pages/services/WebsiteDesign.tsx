import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Globe, TrendingUp, Layers, DollarSign, Sparkles, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ButtonArrows } from "@/components/ui/button-arrows";

const WebsiteDesign = () => {
  const challenges = [
    {
      question: "Is your website struggling with a poor user experience and high bounce rates?",
      answer: "Our website design services focus on giving your website a makeover to boost conversions, ensuring it aligns with your business objectives and appeals to your target audience.",
    },
    {
      question: "Are you facing challenges with weak branding and low visitor trust?",
      answer: "We design professional, reliable websites that seamlessly blend aesthetics and functionality to deliver an exceptional user experience. Each design is tailored to showcase your brand's unique identity, inspiring trust and confidence in your audience.",
    },
    {
      question: "Looking to boost your conversion rates?",
      answer: "We specialize in website optimization, crafting intuitive navigation and persuasive calls-to-action to deliver a seamless user experience that maximizes results on every device.",
    },
  ];

  const benefits = [
    {
      icon: TrendingUp,
      title: "Optimizing for conversions",
      description: "Our designs are strategically crafted to encourage visitor engagement and drive desired actions, boosting your conversion rates.",
    },
    {
      icon: Layers,
      title: "Scalability & flexibility",
      description: "We create websites that evolve with your business, making updates and expansions seamless as you grow.",
    },
    {
      icon: DollarSign,
      title: "Cost-effectiveness",
      description: "Investing in high-quality web design today prevents costly redesigns later and minimizes revenue loss caused by poor user experiences.",
    },
    {
      icon: Sparkles,
      title: "Mid-level and senior experts",
      description: "Our team consists of mid-level and senior web designers with 7+ years of expertise in your specific industry, ensuring your website is perfectly aligned with your audience's expectations.",
    },
    {
      icon: Heart,
      title: "Proven trust and high satisfaction",
      description: "As a trusted website design company, we prioritize strong relationships with our clients. Our commitment to excellence has resulted in a 98% client satisfaction rate, reflecting our dedication to delivering outstanding solutions.",
    },
  ];

  const processSteps = [
    {
      number: "01",
      title: "Stakeholder interview",
      subtitle: "Aligning goals and defining the product vision",
      description: "Every project starts with clarity. We align with your team to define business objectives, technical limits, and the key success metrics the website must achieve.",
    },
    {
      number: "02",
      title: "Discovery & research",
      subtitle: "Turning market data into strategic design direction",
      description: "Our research team maps user behaviour, market dynamics, and SEO-CRO opportunities to uncover how your website can outperform competitors and meet user expectations.",
    },
    {
      number: "03",
      title: "Wireframes",
      subtitle: "Structuring user journeys for engagement and clarity",
      description: "At this stage, structure takes shape. We map user journeys, define page hierarchy, and create responsive wireframes that guide visitors naturally toward key actions and goals.",
    },
    {
      number: "04",
      title: "UI/UX design",
      subtitle: "Building the complete website experience",
      description: "Here, strategy becomes design. We create the full visual experience - responsive, accessible, and brand-consistent - ready for launch or direct implementation.",
    },
    {
      number: "05",
      title: "Development/design handoff",
      subtitle: "From finished design to working website",
      description: "Depending on your setup, we either collaborate with your developers or handle the entire build ourselves, using Webflow, WordPress, or a custom environment.",
    },
    {
      number: "06",
      title: "Post-launch optimization",
      subtitle: "Turning data into continuous improvement",
      description: "We track how users interact with your website, identify friction points, and optimize key pages for conversion and engagement.",
    },
  ];

  const successCards = [
    {
      label: "DESIGN THAT MEETS REGULATION",
      title: "HIPAA- and GDPR-certified expertise for Healthcare and beyond.",
      description: "Since 2023, we've gained HIPAA and GDPR certifications and industry recognition, delivering hundreds of products in Healthcare, SaaS, FinTech, and EdTech - where compliance and UX go hand in hand.",
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
      description: "Collaborate with UX strategists in North America, while our senior design and development teams in Europe deliver fast, consistent results. We integrate into your tools and workflow, working as part of your team.",
    },
  ];

  return (
    <>
      <Helmet>
        <title>Website Design Services | Intrao Tech</title>
        <meta
          name="description"
          content="Creating exciting websites that generate profit. We specialize in crafting websites that balance business needs with creativity."
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
              Website Design
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="heading-2 mb-10 max-w-4xl"
            >
              Creating exciting websites that generate profit
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
                  <p className="text-sm">Website Design Preview</p>
                </div>
              </div>
              */}
              <div>
                <p className="text-xl md:text-2xl leading-relaxed text-dark-foreground">
                  We specialize in crafting websites that balance business needs with creativity, ensuring your online presence not only looks impressive but also drives conversions and growth.
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
              We design websites that solve problems, not create them
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
              Why should you choose our website design agency?
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
              Our Website Design Process
            </motion.p>

            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-3xl md:text-4xl lg:text-5xl font-bold leading-[1.1] mb-8 max-w-4xl"
            >
              From strategy to launch - how we build websites that perform
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg text-muted-foreground max-w-3xl mb-16"
            >
              Our proven process ensures every website we create is strategically designed, beautifully executed, and optimized for results.
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
              Ready to create your website?
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-dark-muted text-lg mb-10 max-w-2xl mx-auto"
            >
              Let's discuss how we can help you create a website that drives conversions and grows your business.
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

export default WebsiteDesign;
