import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { useState, useEffect, useRef } from "react";

interface Service {
  name: string;
  description: string;
}

interface Stage {
  id: string;
  name: string;
  headline: string;
  services: Service[];
}

const stages: Stage[] = [
  {
    id: "pre-seed",
    name: "Pre-seed",
    headline: "Validate your idea & attract early investors",
    services: [
      {
        name: "Design prototype",
        description: "Test product ideas fast with clickable user journeys and visual flows.",
      },
      {
        name: "Product discovery",
        description: "Map out key features, user flows, and architecture to align your team and reduce risks.",
      },
      {
        name: "Website development",
        description: "Launch a fast, scalable site that converts and supports product growth.",
      },
    ],
  },
  {
    id: "seed",
    name: "Seed",
    headline: "Build your product & gain market traction",
    services: [
      {
        name: "Branding",
        description: "Develop a brand that resonates — visually, emotionally, and strategically.",
      },
      {
        name: "Technical workshop",
        description: "Validate your tech stack, architecture, and scalability path.",
      },
      {
        name: "Custom MVP development",
        description: "Expand your prototype into a fully functional, production-ready product.",
      },
      {
        name: "Rapid MVP development",
        description: "Get your MVP 50% faster with lean sprints and pre-built frameworks.",
      },
      {
        name: "Dedicated team",
        description: "Access a team of experts to fuel your product's growth.",
      },
    ],
  },
  {
    id: "series-a",
    name: "Series A & beyond",
    headline: "Scale, optimize & reach more users",
    services: [
      {
        name: "UX audit",
        description: "Identify usability bottlenecks, improve engagement, and optimize for conversions.",
      },
      {
        name: "Product redesign",
        description: "Upgrade legacy interfaces with scalable, business-driven UX and UI from a top-notch design agency.",
      },
      {
        name: "Team extension",
        description: "Instantly scale with dedicated designers and developers ready to start.",
      },
      {
        name: "Website redesign",
        description: "Modernize your web presence with a digital product design agency that drives engagement and brand authority.",
      },
    ],
  },
];

const ServicesSection = () => {
  const [activeStage, setActiveStage] = useState(0);
  const sectionRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observers: IntersectionObserver[] = [];

    sectionRefs.current.forEach((ref, index) => {
      if (ref) {
        const observer = new IntersectionObserver(
          (entries) => {
            entries.forEach((entry) => {
              if (entry.isIntersecting) {
                setActiveStage(index);
              }
            });
          },
          {
            rootMargin: "-40% 0px -40% 0px",
            threshold: 0,
          }
        );
        observer.observe(ref);
        observers.push(observer);
      }
    });

    return () => {
      observers.forEach((observer) => observer.disconnect());
    };
  }, []);

  const scrollToStage = (index: number) => {
    sectionRefs.current[index]?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <section data-header-theme="dark" className="bg-dark text-dark-foreground py-24 lg:py-32">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 lg:mb-24"
        >
          <p className="text-dark-muted text-sm uppercase tracking-wider mb-4">
            Product Design and Development Agency Services
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-6">
            Tailored support from first prototype
            <br />
            <span className="text-dark-muted">to long-term scale</span>
          </h2>
          <p className="text-dark-muted text-lg max-w-3xl">
            Great products don't happen by accident. As a digital product design agency, we help startups grow through smart strategy, solid UX, and scalable development from day one.
          </p>
        </motion.div>

        {/* Main Content */}
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16">
          {/* Sidebar - Sticky on desktop */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:w-48 lg:sticky lg:top-32 lg:self-start"
          >
            <nav className="flex flex-row lg:flex-col gap-2 lg:gap-4 mb-8 lg:mb-12">
              {stages.map((stage, index) => (
                <button
                  key={stage.id}
                  onClick={() => scrollToStage(index)}
                  className={`text-left text-lg lg:text-xl font-medium transition-colors duration-300 ${
                    activeStage === index
                      ? "text-dark-foreground"
                      : "text-dark-muted hover:text-dark-foreground"
                  }`}
                >
                  {stage.name}
                </button>
              ))}
            </nav>
            <Link
              to="/services"
              className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-4 rounded-lg text-sm font-semibold uppercase tracking-wider transition-all duration-300 hover:opacity-90"
            >
              Explore All
              <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>

          {/* Content Sections */}
          <div className="flex-1">
            {stages.map((stage, stageIndex) => (
              <div
                key={stage.id}
                ref={(el) => (sectionRefs.current[stageIndex] = el)}
                className={stageIndex < stages.length - 1 ? "mb-24 lg:mb-32" : ""}
              >
                <motion.h3
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                  className="text-2xl md:text-3xl lg:text-4xl font-bold mb-12"
                >
                  {stage.headline}
                </motion.h3>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8">
                  {stage.services.map((service, serviceIndex) => (
                    <motion.div
                      key={service.name}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: serviceIndex * 0.1 }}
                      className="border-t border-dark-muted/30 py-8"
                    >
                      <h4 className="text-lg font-medium mb-4">{service.name}</h4>
                      <p className="text-dark-muted text-sm leading-relaxed mb-6">
                        {service.description}
                      </p>
                      <Link
                        to="/services"
                        className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-dark-muted hover:text-dark-foreground transition-colors duration-300"
                      >
                        Explore
                        <ArrowRight className="w-3 h-3" />
                      </Link>
                    </motion.div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
