import { motion, useScroll, useTransform } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { useRef } from "react";
import { Button } from "@/components/ui/button";
import { ButtonArrows } from "@/components/ui/button-arrows";

interface CaseItem {
  tags: string[];
  title: string;
  subtitle: string;
  company: string;
  location: string;
  locationFlag: string;
  techStack: string;
  timeline: string;
  results: string[];
  image: string;
}

const CasesSection = () => {
  const cases: CaseItem[] = [
    {
      tags: ["WEBSITE DESIGN", "WEBSITE DEVELOPMENT"],
      title: "Shaga Odyssey",
      subtitle: "an award-winning web3 gamepad platform",
      company: "SHAGA.XYZ",
      location: "USA",
      locationFlag: "🇺🇸",
      techStack: "Webflow",
      timeline: "5 months",
      results: [
        "+40% increase in user engagement",
        "3x faster platform navigation",
        "Awwwards \"Site of the Day\" for Best Interactive Design",
      ],
      image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=800&h=600&fit=crop",
    },
    {
      tags: ["UX AUDIT", "PRODUCT REDESIGN", "WEB DEVELOPMENT"],
      title: "KlickEx",
      subtitle: "frictionless cross-border payments for the Pacific Island communities",
      company: "NOMUPAY",
      location: "NEW ZEALAND",
      locationFlag: "🇳🇿",
      techStack: "Next.js, TypeScript, React Redux",
      timeline: "6 months",
      results: [
        "+35% \"Add Money\" conversion rate",
        "+30% \"Money Transfer\" completion rate",
        "Raised $1M in additional funding within 6 months",
      ],
      image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800&h=600&fit=crop",
    },
    {
      tags: ["UX AUDIT", "PRODUCT REDESIGN", "WEB DEVELOPMENT", "TEAM EXTENSION"],
      title: "Isora",
      subtitle: "optimizing governance, risk & compliance for top institutions",
      company: "SALTYCLOUD",
      location: "TEXAS, USA",
      locationFlag: "🇺🇸",
      techStack: "React, Python, AWS",
      timeline: "12 months, ongoing",
      results: [
        "2x faster user workflows",
        "50% shorter time-to-market",
        "Nominated for UX Design Award 2024",
      ],
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop",
    },
  ];

  return (
    <section data-header-theme="light" className="bg-light text-light-foreground py-24 lg:py-32">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 lg:mb-24"
        >
          <p className="label text-light-muted-foreground mb-6">
            Featured Cases
          </p>
          <h2 className="heading-1 max-w-5xl text-light-foreground">
            Discover how we're driving change through innovative projects, strong partnerships, and measurable outcomes
          </h2>
        </motion.div>

        {/* Stacking Cases */}
        <div className="relative">
          {cases.map((caseItem, index) => (
            <StackingCard
              key={caseItem.title}
              caseItem={caseItem}
              index={index}
              totalCards={cases.length}
            />
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-4 lg:mt-6 text-center"
        >
          <Link
            to="/cases"
            className="inline-flex items-center gap-2 text-light-foreground font-semibold uppercase tracking-wider text-sm border-b-2 border-light-foreground pb-1 transition-all duration-300 hover:opacity-70"
          >
            Explore All Cases
            <ArrowRight className="w-4 h-4" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

interface StackingCardProps {
  caseItem: CaseItem;
  index: number;
  totalCards: number;
}

const StackingCard = ({ caseItem, index, totalCards }: StackingCardProps) => {
  const cardRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ["start end", "end start"],
  });

  // Opacity fades as card scrolls past center (for stacking effect)
  const opacity = useTransform(
    scrollYProgress,
    [0, 0.3, 0.5, 0.7, 1],
    [0.3, 1, 1, index === totalCards - 1 ? 1 : 0.3, 0.3]
  );

  // Scale down slightly as card is passed
  const scale = useTransform(
    scrollYProgress,
    [0, 0.3, 0.5, 0.7, 1],
    [0.95, 1, 1, index === totalCards - 1 ? 1 : 0.98, 0.95]
  );

  return (
    <motion.div
      ref={cardRef}
      style={{
        opacity,
        scale,
        top: "100px",
        zIndex: index + 1,
      }}
      className="sticky bg-light"
    >
      {/* Top border (skip for first item) */}
      {index > 0 && <div className="border-t border-light-border" />}

      <div className="py-12 lg:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative aspect-[4/3] overflow-hidden rounded-lg"
          >
            <img
              src={caseItem.image}
              alt={caseItem.title}
              className="w-full h-full object-cover"
            />
          </motion.div>

          {/* Content */}
          <div className="flex flex-col">
            {/* Tags */}
            <div className="flex flex-wrap gap-2 mb-6">
              {caseItem.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-xs font-medium uppercase tracking-wider text-light-muted-foreground"
                >
                  #{tag}
                </span>
              ))}
            </div>

            {/* Title */}
            <h3 className="heading-3 text-light-foreground mb-6">
              {caseItem.title} – {caseItem.subtitle}
            </h3>

            {/* Company & Location Pills */}
            <div className="flex flex-wrap gap-3 mb-8">
              <span className="inline-flex items-center px-4 py-2 bg-dark text-dark-foreground text-sm font-medium rounded-lg">
                {caseItem.company}
              </span>
              <span className="inline-flex items-center gap-2 px-4 py-2 bg-dark text-dark-foreground text-sm font-medium rounded-lg">
                <span>{caseItem.locationFlag}</span>
                {caseItem.location}
              </span>
            </div>

            {/* Tech Stack & Timeline */}
            <div className="mb-8">
              {/* Labels row with bottom border */}
              <div className="grid grid-cols-2">
                <div className="pb-2 border-b border-light-border">
                  <p className="text-xs font-medium uppercase tracking-wider text-light-muted-foreground">
                    Tech Stack
                  </p>
                </div>
                <div className="pb-2 border-b border-l border-light-border pl-6">
                  <p className="text-xs font-medium uppercase tracking-wider text-light-muted-foreground">
                    Timeline
                  </p>
                </div>
              </div>
              {/* Values row */}
              <div className="grid grid-cols-2 pt-4">
                <div>
                  <p className="text-light-foreground font-medium">{caseItem.techStack}</p>
                </div>
                <div className="border-l border-light-border pl-6">
                  <p className="text-light-foreground font-medium">{caseItem.timeline}</p>
                </div>
              </div>
            </div>

            {/* Results */}
            <div className="mb-8">
              <p className="text-xs font-medium uppercase tracking-wider text-light-muted-foreground pb-2 border-b border-light-border mb-4">
                Results
              </p>
              <ul className="space-y-2">
                {caseItem.results.map((result, i) => (
                  <li key={i} className="text-light-foreground">
                    {result}
                  </li>
                ))}
              </ul>
            </div>

            {/* Explore Button */}
            <Button asChild className="self-start group">
              <Link to="/cases">
                Explore
                <ButtonArrows />
              </Link>
            </Button>
          </div>
        </div>
      </div>

    </motion.div>
  );
};

export default CasesSection;
