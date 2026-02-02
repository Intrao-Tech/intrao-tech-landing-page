import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ButtonArrows } from "@/components/ui/button-arrows";
import { Link2, Puzzle, FileText, DollarSign, Users, BadgeCheck, Globe, Coins, Wrench } from "lucide-react";

const BlockchainDevelopment = () => {
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
      icon: Puzzle,
      title: "Custom-Tailored Solutions",
      description:
        "Business-specific blockchain applications designed for optimal performance and your unique requirements.",
    },
    {
      icon: FileText,
      title: "Smart Contract Development",
      description:
        "Automating processes with secure, audited, and reliable smart contracts that execute flawlessly.",
    },
    {
      icon: DollarSign,
      title: "Cost-Effective Development",
      description:
        "Minimizing costs while maximizing efficiency and security through optimized development processes.",
    },
    {
      icon: Users,
      title: "Expert Team",
      description:
        "Mid-level and senior blockchain developers with 7+ years of industry experience in Web3 technologies.",
    },
    {
      icon: BadgeCheck,
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
      subtitle: "Evaluating use cases and selecting the right blockchain",
      description:
        "We review tokenomics and assess your project requirements to ensure the best foundation for your project.",
    },
    {
      number: "02",
      title: "Architecture Design",
      subtitle: "Designing smart contract logic and data structures",
      description:
        "We create efficient architectures that scale with your application's needs.",
    },
    {
      number: "03",
      title: "Protocol Design",
      subtitle: "Writing and testing smart contracts",
      description:
        "Comprehensive unit and integration testing on testnets to ensure reliability.",
    },
    {
      number: "04",
      title: "Security Audit",
      subtitle: "Conducting internal reviews and third-party audits",
      description:
        "We identify and fix vulnerabilities before deployment to mainnet.",
    },
    {
      number: "05",
      title: "Frontend & Wallet Integration",
      subtitle: "Creating user interfaces that connect to smart contracts",
      description:
        "Intuitive wallet experiences and seamless blockchain interactions.",
    },
    {
      number: "06",
      title: "Deployment & Monitoring",
      subtitle: "Launching on mainnet and implementing monitoring",
      description:
        "We track contract activity and performance post-launch.",
    },
  ];

  const successCards = [
    {
      label: "COMPLIANCE",
      title: "Design That Meets Regulation",
      description:
        "HIPAA and GDPR certifications since 2023. We build compliant blockchain solutions for regulated industries.",
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
    <>
      <Helmet>
        <title>Blockchain Development Services | Intrao Tech</title>
        <meta
          name="description"
          content="Blockchain Development Services. Build decentralized applications, secure enterprise solutions, and blockchain-based platforms."
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
              Blockchain Development
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="heading-2 mb-10 max-w-4xl"
            >
              Blockchain Development Services
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
                    <Link2 className="w-8 h-8" />
                  </div>
                  <p className="text-sm">Blockchain Platform Preview</p>
                </div>
              </div>
              */}
              <div>
                <p className="text-xl md:text-2xl leading-relaxed text-dark-foreground">
                  Unlock the potential of blockchain for your business. We build
                  decentralized applications, secure enterprise solutions, and
                  blockchain-based platforms with seamless execution.
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
              We build blockchain solutions that solve real problems
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
              Blockchain development services
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg text-dark-muted max-w-3xl mb-16"
            >
              From DeFi platforms to NFT marketplaces, we deliver end-to-end
              blockchain solutions.
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
              Why choose our blockchain development company?
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
              Blockchain technologies we work with
            </motion.h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="p-6 border border-dark-muted/30 rounded-lg"
              >
                <h3 className="text-lg font-semibold mb-6 flex items-center gap-2">
                  <Globe className="w-5 h-5" />
                  Networks
                </h3>
                <div className="space-y-4">
                  {techStack.networks.map((tech) => (
                    <div key={tech.name}>
                      <p className="font-medium">{tech.name}</p>
                      <p className="text-dark-muted text-sm">{tech.description}</p>
                    </div>
                  ))}
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="p-6 border border-dark-muted/30 rounded-lg"
              >
                <h3 className="text-lg font-semibold mb-6 flex items-center gap-2">
                  <Coins className="w-5 h-5" />
                  Token Standards
                </h3>
                <div className="space-y-4">
                  {techStack.tokens.map((tech) => (
                    <div key={tech.name}>
                      <p className="font-medium">{tech.name}</p>
                      <p className="text-dark-muted text-sm">{tech.description}</p>
                    </div>
                  ))}
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="p-6 border border-dark-muted/30 rounded-lg"
              >
                <h3 className="text-lg font-semibold mb-6 flex items-center gap-2">
                  <Wrench className="w-5 h-5" />
                  Development Tools
                </h3>
                <div className="space-y-4">
                  {techStack.tools.map((tech) => (
                    <div key={tech.name}>
                      <p className="font-medium">{tech.name}</p>
                      <p className="text-dark-muted text-sm">{tech.description}</p>
                    </div>
                  ))}
                </div>
              </motion.div>
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
              How we deliver blockchain projects
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg text-muted-foreground max-w-3xl mb-16"
            >
              Our structured approach ensures secure, scalable blockchain
              solutions from concept to deployment.
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
              Ready to build on blockchain?
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-dark-muted text-lg mb-10 max-w-2xl mx-auto"
            >
              Let's unlock the potential of decentralized technology for your
              business.
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

export default BlockchainDevelopment;
