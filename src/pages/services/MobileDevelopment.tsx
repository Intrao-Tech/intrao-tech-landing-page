import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Smartphone, Apple, Bot, Layers, TrendingUp, Server, Sparkles, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ButtonArrows } from "@/components/ui/button-arrows";

const MobileDevelopment = () => {
  const challenges = [
    {
      question: "Struggling to find the best mobile app development company?",
      answer: "Finding the right development partner is crucial for success. We combine technical expertise with industry knowledge to deliver mobile apps that exceed expectations and drive real business results.",
    },
    {
      question: "Uncertain about mobile app development costs?",
      answer: "We provide transparent pricing and detailed project scopes upfront. Our agile approach allows for flexibility while keeping your budget on track throughout the development process.",
    },
    {
      question: "Looking for cross-platform efficiency?",
      answer: "Why build twice when you can build once? Our cross-platform solutions deliver native-like experiences on both iOS and Android, reducing development time and costs without sacrificing quality.",
    },
  ];

  const servicesOffered = [
    {
      icon: Apple,
      title: "iOS mobile app development",
      description: "Custom apps designed specifically for Apple's ecosystem, leveraging Swift and the latest iOS frameworks for optimal performance and user experience.",
    },
    {
      icon: Bot,
      title: "Android mobile app development",
      description: "Powerful, scalable Android applications designed to deliver smooth and reliable performance across the diverse Android device landscape.",
    },
    {
      icon: Layers,
      title: "Cross-platform mobile app development",
      description: "Streamline app deployment across multiple platforms with React Native or Flutter, maintaining native performance while maximizing code reuse.",
    },
  ];

  const benefits = [
    {
      icon: Layers,
      title: "Custom-tailored solutions",
      description: "Every mobile app we build is designed specifically for your business needs, target audience, and growth objectives.",
    },
    {
      icon: TrendingUp,
      title: "Scalability & flexibility",
      description: "Our architectures are built to handle growth, from hundreds to millions of users, with the flexibility to add features as you scale.",
    },
    {
      icon: Server,
      title: "Optimized performance",
      description: "Fast load times, smooth animations, and efficient battery usage ensure your app delivers an exceptional user experience.",
    },
    {
      icon: Sparkles,
      title: "Mid-level and senior experts",
      description: "Our team consists of experienced mobile developers with 7+ years of expertise in iOS, Android, and cross-platform development.",
    },
    {
      icon: Heart,
      title: "Proven trust and satisfaction",
      description: "With a 98% client satisfaction rate, our commitment to excellence has made us a trusted partner for mobile app development worldwide.",
    },
  ];

  const techStack = [
    {
      name: "Swift",
      description: "Native iOS development",
      category: "iOS",
    },
    {
      name: "Kotlin",
      description: "Native Android development",
      category: "Android",
    },
    {
      name: "React Native",
      description: "Cross-platform framework",
      category: "Cross-platform",
    },
    {
      name: "Flutter",
      description: "Google's UI toolkit",
      category: "Cross-platform",
    },
  ];

  const processSteps = [
    {
      number: "01",
      title: "Stakeholder Interview",
      subtitle: "Understanding your users, market, and success metrics",
      description: "We dive deep into your business goals, target audience, and competitive landscape to create a solid foundation for your mobile app strategy.",
    },
    {
      number: "02",
      title: "Design & Prototyping",
      subtitle: "Designing intuitive, on-brand mobile experiences",
      description: "Our designers create beautiful, user-centered interfaces with interactive prototypes that bring your app vision to life before development begins.",
    },
    {
      number: "03",
      title: "Backend Architecture & DevOps",
      subtitle: "Laying the technical foundation for speed and scalability",
      description: "We design robust backend systems, APIs, and cloud infrastructure that power your mobile app with reliability and performance.",
    },
    {
      number: "04",
      title: "App Development",
      subtitle: "Building a fast, stable, and scalable mobile product",
      description: "Our developers build your app using modern frameworks, clean code practices, and thorough documentation for long-term maintainability.",
    },
    {
      number: "05",
      title: "QA & Testing",
      subtitle: "Making sure your mobile app works on every device",
      description: "Comprehensive testing across devices, OS versions, and network conditions ensures your app delivers a flawless experience to every user.",
    },
    {
      number: "06",
      title: "Post-Launch Support",
      subtitle: "Deploying, monitoring, and evolving your mobile app",
      description: "We handle app store submissions, monitor performance, and provide ongoing support to keep your app running smoothly and evolving with user needs.",
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
        <title>Mobile App Development Services | Intrao Tech</title>
        <meta
          name="description"
          content="Launch a high-impact mobile app with confidence. iOS, Android, and cross-platform development services with seamless UX and scalable solutions."
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
              Mobile App Development
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="heading-2 mb-10 max-w-4xl"
            >
              Mobile App Development Services
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
              <div className="bg-dark-muted/20 rounded-2xl p-8 aspect-video flex items-center justify-center">
                <div className="text-dark-muted text-center">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-xl bg-dark-muted/30 flex items-center justify-center">
                    <Smartphone className="w-8 h-8" />
                  </div>
                  <p className="text-sm">Mobile App Development Preview</p>
                </div>
              </div>
              <div>
                <p className="text-xl md:text-2xl leading-relaxed text-dark-foreground">
                  Launch a high-impact mobile app with confidence. Whether you're launching a new app or improving an existing one, our mobile app development services ensure high performance, seamless user experience, and scalable solutions tailored to your needs.
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
              We build mobile apps that solve problems, not create them
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
              Mobile app development services we offer
            </motion.h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {servicesOffered.map((service, index) => (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="p-8 border border-dark-muted/30 rounded-2xl"
                >
                  <service.icon className="w-10 h-10 text-dark-muted mb-6" strokeWidth={1.5} />
                  <h3 className="text-xl font-semibold mb-4">{service.title}</h3>
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
              Why choose our mobile app development services?
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
              Technologies we use for mobile development
            </motion.h2>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {techStack.map((tech, index) => (
                <motion.div
                  key={tech.name}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="p-6 border border-dark-muted/30 rounded-2xl text-center"
                >
                  <p className="text-xs text-dark-muted uppercase tracking-wider mb-2">{tech.category}</p>
                  <h3 className="text-xl font-semibold mb-2">{tech.name}</h3>
                  <p className="text-dark-muted text-sm">{tech.description}</p>
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
              From idea to app store — how we build mobile apps
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg text-muted-foreground max-w-3xl mb-16"
            >
              Our proven mobile development process ensures your app is built right the first time, with quality baked in at every stage.
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
              Ready to build your mobile app?
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-dark-muted text-lg mb-10 max-w-2xl mx-auto"
            >
              Let's discuss how we can help you build a high-performance mobile app that engages users and drives growth.
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

export default MobileDevelopment;
