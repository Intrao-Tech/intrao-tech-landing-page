import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { ArrowLink } from "@/components/ui/arrow-link";

interface Service {
  name: string;
  description: string;
}

interface ServiceCategory {
  id: string;
  name: string;
  headline: string;
  services: Service[];
}

const serviceCategories: ServiceCategory[] = [
  {
    id: "design",
    name: "Design",
    headline: "Craft beautiful, user-centered experiences",
    services: [
      {
        name: "Web app design",
        description:
          "Design intuitive interfaces that users love and that drive engagement.",
      },
      {
        name: "Mobile app design",
        description:
          "Create seamless mobile experiences optimized for iOS and Android.",
      },
      {
        name: "Website design",
        description:
          "Build stunning websites that convert visitors into customers.",
      },
      {
        name: "Website redesign",
        description:
          "Modernize your web presence with fresh design and improved UX.",
      },
      {
        name: "Branding",
        description:
          "Develop a brand identity that resonates visually and emotionally.",
      },
    ],
  },
  {
    id: "development",
    name: "Development",
    headline: "Build scalable, high-performance products",
    services: [
      {
        name: "Web development",
        description:
          "Build robust, scalable web applications with modern technologies.",
      },
      {
        name: "Mobile development",
        description:
          "Develop native and cross-platform apps for iOS and Android.",
      },
      {
        name: "Website development",
        description:
          "Launch fast, responsive websites optimized for performance.",
      },
      {
        name: "No-code development",
        description:
          "Rapidly build and iterate using powerful no-code platforms.",
      },
      {
        name: "Blockchain development",
        description: "Create decentralized applications and smart contracts.",
      },
    ],
  },
  {
    id: "research",
    name: "Research",
    headline: "Make informed decisions with deep insights",
    services: [
      {
        name: "UX audit",
        description:
          "Identify usability issues and optimize for better conversions.",
      },
      {
        name: "Product discovery",
        description:
          "Define features, user flows, and architecture to reduce risk.",
      },
      {
        name: "Technical workshop",
        description:
          "Validate your tech stack, architecture, and scalability path.",
      },
    ],
  },
];

const ServicesSection = () => {
  const [activeCategory, setActiveCategory] = useState(0);
  const sectionRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observers: IntersectionObserver[] = [];

    sectionRefs.current.forEach((ref, index) => {
      if (ref) {
        const observer = new IntersectionObserver(
          (entries) => {
            entries.forEach((entry) => {
              if (entry.isIntersecting) {
                setActiveCategory(index);
              }
            });
          },
          {
            rootMargin: "-40% 0px -40% 0px",
            threshold: 0,
          },
        );
        observer.observe(ref);
        observers.push(observer);
      }
    });

    return () => {
      observers.forEach((observer) => observer.disconnect());
    };
  }, []);

  const scrollToCategory = (index: number) => {
    sectionRefs.current[index]?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <section
      data-header-theme="dark"
      className="relative z-10 bg-dark text-dark-foreground py-24 lg:py-32"
    >
      {/* Top curve */}
      <div className="absolute top-[1px] left-0 w-full -translate-y-full pointer-events-none z-20">
        <svg
          viewBox="0 0 1440 120"
          preserveAspectRatio="none"
          className="block w-full h-[60px] md:h-[80px] lg:h-[100px]"
        >
          <path
            className="fill-dark"
            d="M0,120 L0,120 C360,120 360,40 720,40 C1080,40 1080,120 1440,120 L1440,120 Z"
          />
        </svg>
      </div>

      <div className="container mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 lg:mb-24"
        >
          <p className="label text-dark-muted mb-4">
            Design, Development & Research
          </p>
          <h2 className="heading-2 mb-6">
            Full-service digital solutions
            <br />
            for every business stage
          </h2>
          <p className="text-dark-muted text-lg max-w-3xl">
            We help businesses of all sizes - from startups to established local
            companies - bring their ideas to life through thoughtful design,
            solid development, and strategic research.
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
              {serviceCategories.map((category, index) => (
                <button
                  key={category.id}
                  onClick={() => scrollToCategory(index)}
                  className={`text-left text-lg lg:text-xl font-medium transition-colors duration-300 ${
                    activeCategory === index
                      ? "text-dark-foreground"
                      : "text-dark-muted hover:text-dark-foreground"
                  }`}
                >
                  {category.name}
                </button>
              ))}
            </nav>
            <Button asChild size="sm">
              <Link to="/services">
                Explore All
                <ArrowRight />
              </Link>
            </Button>
          </motion.div>

          {/* Content Sections */}
          <div className="flex-1">
            {serviceCategories.map((category, categoryIndex) => (
              <div
                key={category.id}
                ref={(el) => (sectionRefs.current[categoryIndex] = el)}
                className={
                  categoryIndex < serviceCategories.length - 1
                    ? "mb-24 lg:mb-32"
                    : ""
                }
              >
                <motion.h3
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                  className="heading-3 mb-12"
                >
                  {category.headline}
                </motion.h3>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8">
                  {category.services.map((service, serviceIndex) => (
                    <motion.div
                      key={service.name}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: serviceIndex * 0.1 }}
                      className="border-t border-dark-muted/30 py-8"
                    >
                      <h4 className="heading-4 mb-4">{service.name}</h4>
                      <p className="text-dark-muted text-sm leading-relaxed mb-6">
                        {service.description}
                      </p>
                      <ArrowLink to="/services" variant="light">
                        Explore
                      </ArrowLink>
                    </motion.div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom curve */}
      <div className="absolute bottom-[1px] left-0 w-full translate-y-full pointer-events-none z-20">
        <svg
          viewBox="0 0 1440 120"
          preserveAspectRatio="none"
          className="block w-full h-[60px] md:h-[80px] lg:h-[100px]"
        >
          <path
            className="fill-dark"
            d="M0,0 L0,0 C360,0 360,80 720,80 C1080,80 1080,0 1440,0 L1440,0 Z"
          />
        </svg>
      </div>
    </section>
  );
};

export default ServicesSection;
