import { motion } from "framer-motion";
import { useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ButtonArrows } from "@/components/ui/button-arrows";

const BlockchainDevelopment = () => {
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
      question: "Struggling to find a reliable blockchain development company?",
      answer:
        "We specialize in building decentralized applications with proven expertise. Our team delivers secure, scalable blockchain solutions tailored to your specific business needs.",
    },
    {
      question: "Concerned about blockchain scalability and security?",
      answer:
        "We implement battle-tested security practices and choose the right blockchain architecture to ensure your application scales efficiently while maintaining robust security.",
    },
    {
      question: "Looking to integrate blockchain into your enterprise ecosystem?",
      answer:
        "Our enterprise blockchain solutions seamlessly integrate with your existing infrastructure, bringing transparency and efficiency to your business processes.",
    },
  ];

  const services = [
    {
      number: "01",
      title: "Cryptocurrency & Token Development",
      description:
        "Creating secure digital assets including cryptocurrencies, stablecoins, and utility tokens with robust smart contract foundations.",
    },
    {
      number: "02",
      title: "Decentralized Finance (DeFi)",
      description:
        "Building secure financial applications, exchanges, lending protocols, and staking solutions that operate without intermediaries.",
    },
    {
      number: "03",
      title: "NFT Marketplace Development",
      description:
        "End-to-end solutions for buying, selling, and minting digital assets with seamless user experiences and secure transactions.",
    },
    {
      number: "04",
      title: "Blockchain Gaming & P2E",
      description:
        "Creating play-to-earn ecosystems with NFT integration, in-game economies, and smart contract-powered game mechanics.",
    },
    {
      number: "05",
      title: "Supply Chain & Logistics",
      description:
        "Enhancing transparency and traceability in logistics operations with immutable blockchain-based tracking systems.",
    },
    {
      number: "06",
      title: "Identity & Authentication",
      description:
        "Decentralized, privacy-focused authentication solutions that give users control over their digital identity.",
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
            d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z"
          />
        </svg>
      ),
      title: "Custom-Tailored Solutions",
      description:
        "Business-specific blockchain applications designed for optimal performance and your unique requirements.",
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
            d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
          />
        </svg>
      ),
      title: "Smart Contract Development",
      description:
        "Automating processes with secure, audited, and reliable smart contracts that execute flawlessly.",
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
      title: "Cost-Effective Development",
      description:
        "Minimizing costs while maximizing efficiency and security through optimized development processes.",
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
      title: "Expert Team",
      description:
        "Mid-level and senior blockchain developers with 7+ years of industry experience in Web3 technologies.",
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
        "98% client satisfaction rate reflecting our commitment to delivering outstanding blockchain solutions.",
    },
  ];

  const techStack = {
    networks: [
      { name: "Ethereum", description: "Leading smart contract platform" },
      { name: "Binance Smart Chain", description: "Fast and low-cost transactions" },
      { name: "Polygon", description: "Ethereum scaling solution" },
      { name: "Solana", description: "High-performance blockchain" },
      { name: "Polkadot", description: "Multi-chain interoperability" },
    ],
    tokens: [
      { name: "ERC-20", description: "Fungible token standard" },
      { name: "ERC-721", description: "NFT standard" },
      { name: "ERC-1155", description: "Multi-token standard" },
      { name: "BEP-20", description: "BSC token standard" },
    ],
    tools: [
      { name: "Solidity", description: "Smart contract language" },
      { name: "Truffle", description: "Development framework" },
      { name: "IPFS", description: "Decentralized storage" },
      { name: "MetaMask", description: "Wallet integration" },
    ],
  };

  const processSteps = [
    {
      number: "01",
      title: "Product Discovery",
      description:
        "Evaluating use cases, selecting the right blockchain, and reviewing tokenomics to ensure the best foundation for your project.",
    },
    {
      number: "02",
      title: "Architecture Design",
      description:
        "Designing smart contract logic and efficient data structures that scale with your application's needs.",
    },
    {
      number: "03",
      title: "Protocol Design",
      description:
        "Writing and testing smart contracts with comprehensive unit and integration testing on testnets.",
    },
    {
      number: "04",
      title: "Security Audit",
      description:
        "Conducting internal reviews and third-party audits to identify and fix vulnerabilities before deployment.",
    },
    {
      number: "05",
      title: "Frontend & Wallet Integration",
      description:
        "Creating user interfaces that seamlessly connect to smart contracts with intuitive wallet experiences.",
    },
    {
      number: "06",
      title: "Deployment & Monitoring",
      description:
        "Launching on mainnet and implementing monitoring systems to track contract activity and performance.",
    },
  ];

  const successCards = [
    {
      label: "COMPLIANCE",
      title: "Design That Meets Regulation",
      description:
        "HIPAA and GDPR certifications since 2019. We build compliant blockchain solutions for regulated industries.",
    },
    {
      label: "LONGEVITY",
      title: "Design That Lasts",
      description:
        "Building products with long-term value over trends. Our blockchain solutions are built to evolve with the ecosystem.",
    },
    {
      label: "DELIVERY",
      title: "Developer-Ready Design",
      description:
        "Creating implementation-focused designs with proper documentation, tokens, and accessibility standards.",
    },
    {
      label: "REACH",
      title: "Local Presence, Global Delivery",
      description:
        "Direct collaboration with strategists and development teams across multiple locations worldwide.",
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
                BLOCKCHAIN DEVELOPMENT
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                Blockchain Development Services
              </h1>
              <p className="text-xl text-dark-foreground/80 mb-8">
                Unlock the potential of blockchain for your business. We build
                decentralized applications, secure enterprise solutions, and
                blockchain-based platforms with seamless execution.
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
                <div className="text-9xl font-bold text-primary/30">BC</div>
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
              We build blockchain solutions that solve real problems
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
              Blockchain development services
            </h2>
            <p className="text-dark-foreground/70">
              From DeFi platforms to NFT marketplaces, we deliver end-to-end
              blockchain solutions.
            </p>
          </motion.div>

          <motion.div
            {...staggerContainer}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
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
              Why choose our blockchain development company?
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

      {/* Tech Stack Section */}
      <section
        data-header-theme="dark"
        className="bg-dark text-dark-foreground py-24 border-t border-dark-foreground/10"
      >
        <div className="container mx-auto px-6">
          <motion.div {...fadeInUp} className="max-w-3xl mb-16">
            <span className="inline-block px-4 py-2 bg-primary/20 text-primary rounded-full text-sm font-medium mb-6">
              TECHNOLOGY STACK
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Blockchain technologies we work with
            </h2>
          </motion.div>

          <div className="space-y-12">
            <motion.div {...fadeInUp}>
              <h3 className="text-xl font-semibold mb-6 text-primary">
                Networks
              </h3>
              <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-4">
                {techStack.networks.map((tech, index) => (
                  <div
                    key={index}
                    className="p-4 bg-dark-foreground/5 rounded-xl border border-dark-foreground/10"
                  >
                    <h4 className="font-semibold mb-1">{tech.name}</h4>
                    <p className="text-dark-foreground/60 text-sm">
                      {tech.description}
                    </p>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div {...fadeInUp}>
              <h3 className="text-xl font-semibold mb-6 text-primary">
                Token Standards
              </h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                {techStack.tokens.map((tech, index) => (
                  <div
                    key={index}
                    className="p-4 bg-dark-foreground/5 rounded-xl border border-dark-foreground/10"
                  >
                    <h4 className="font-semibold mb-1">{tech.name}</h4>
                    <p className="text-dark-foreground/60 text-sm">
                      {tech.description}
                    </p>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div {...fadeInUp}>
              <h3 className="text-xl font-semibold mb-6 text-primary">
                Development Tools
              </h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                {techStack.tools.map((tech, index) => (
                  <div
                    key={index}
                    className="p-4 bg-dark-foreground/5 rounded-xl border border-dark-foreground/10"
                  >
                    <h4 className="font-semibold mb-1">{tech.name}</h4>
                    <p className="text-dark-foreground/60 text-sm">
                      {tech.description}
                    </p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
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
              How we deliver blockchain projects
            </h2>
            <p className="text-muted-foreground">
              Our structured approach ensures secure, scalable blockchain
              solutions from concept to deployment.
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
              Ready to build on blockchain?
            </h2>
            <p className="text-xl text-dark-foreground/70 mb-8">
              Let's unlock the potential of decentralized technology for your
              business.
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

export default BlockchainDevelopment;
