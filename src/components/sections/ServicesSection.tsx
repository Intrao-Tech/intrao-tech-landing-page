import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Code, Palette, Rocket, Users } from "lucide-react";
import { useState } from "react";

const ServicesSection = () => {
  const [activeTab, setActiveTab] = useState(0);

  const tabs = ["Pre-launch", "Growth", "Scale"];

  const services = {
    0: [
      {
        icon: Palette,
        name: "Design Prototype",
        description: "Test product ideas fast with clickable user journeys and visual flows.",
      },
      {
        icon: Rocket,
        name: "Product Discovery",
        description: "Map out key features, user flows, and architecture to align your team.",
      },
      {
        icon: Code,
        name: "Website Development",
        description: "Launch a fast, scalable site that converts and supports product growth.",
      },
    ],
    1: [
      {
        icon: Palette,
        name: "Branding",
        description: "Develop a brand that resonates — visually, emotionally, and strategically.",
      },
      {
        icon: Rocket,
        name: "Custom MVP Development",
        description: "Expand your prototype into a fully functional, production-ready product.",
      },
      {
        icon: Users,
        name: "Dedicated Team",
        description: "Access a team of experts to fuel your product's growth.",
      },
    ],
    2: [
      {
        icon: Palette,
        name: "UX Audit",
        description: "Identify usability bottlenecks and optimize for conversions.",
      },
      {
        icon: Rocket,
        name: "Product Redesign",
        description: "Upgrade legacy interfaces with scalable, business-driven UX and UI.",
      },
      {
        icon: Users,
        name: "Team Extension",
        description: "Instantly scale with dedicated designers and developers ready to start.",
      },
    ],
  };

  return (
    <section className="bg-dark text-dark-foreground py-24 lg:py-32">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-6">
            Tailored support from first prototype
            <br />
            <span className="text-dark-muted">to long-term scale</span>
          </h2>
          <p className="text-dark-muted text-lg max-w-2xl">
            Great products don't happen by accident. We help startups grow through smart strategy, solid UX, and scalable development from day one.
          </p>
        </motion.div>

        {/* Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap gap-4 mb-12"
        >
          {tabs.map((tab, index) => (
            <button
              key={tab}
              onClick={() => setActiveTab(index)}
              className={`px-8 py-4 rounded-xl text-sm font-semibold uppercase tracking-wider transition-all duration-300 ${
                activeTab === index
                  ? "bg-primary text-primary-foreground"
                  : "border border-dark-muted text-dark-muted hover:text-dark-foreground hover:border-dark-foreground"
              }`}
            >
              {tab}
            </button>
          ))}
        </motion.div>

        {/* Services Grid */}
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12"
        >
          {services[activeTab as keyof typeof services].map((service, index) => (
            <motion.div
              key={service.name}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="group border border-dark-muted/30 p-8 transition-all duration-500 hover:border-primary/50"
            >
              <service.icon className="w-10 h-10 text-primary mb-6" />
              <h3 className="text-xl font-semibold mb-4 group-hover:text-primary transition-colors duration-300">
                {service.name}
              </h3>
              <p className="text-dark-muted leading-relaxed mb-6">
                {service.description}
              </p>
              <Link
                to="/services"
                className="inline-flex items-center gap-2 text-sm text-dark-foreground hover:text-primary transition-colors duration-300"
              >
                Explore
                <ArrowRight className="w-4 h-4" />
              </Link>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <Link
            to="/services"
            className="inline-flex items-center gap-2 border border-dark-muted text-dark-foreground px-10 py-5 rounded-xl text-sm font-semibold uppercase tracking-wider transition-all duration-300 hover:bg-dark-foreground hover:text-dark"
          >
            Explore All Services
            <ArrowRight className="w-4 h-4" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection;
