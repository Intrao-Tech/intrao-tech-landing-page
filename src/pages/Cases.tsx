import { SEOHead } from "@/components/SEOHead";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
// import { useState } from "react";
// import { Button } from "@/components/ui/button";
// import { ButtonArrows } from "@/components/ui/button-arrows";

/* ========================================
   ORIGINAL CONTENT - COMMENTED OUT
   ======================================== */

/*
type Category = "all" | "web-app" | "mobile-app" | "website" | "branding";

interface CaseItem {
  title: string;
  company: string;
  location: string;
  locationFlag: string;
  tags: string[];
  category: Exclude<Category, "all">;
  techStack: string;
  timeline: string;
  results: string[];
  image: string;
  link: string;
}

const casesData: CaseItem[] = [
  {
    title: "RetailPro - transforming online shopping with seamless e-commerce experience",
    company: "RETAILPRO",
    location: "USA",
    locationFlag: "🇺🇸",
    tags: ["UX AUDIT", "PRODUCT REDESIGN", "WEB DEVELOPMENT"],
    category: "website",
    techStack: "React, Node.js, PostgreSQL",
    timeline: "4 months",
    results: [
      "+45% increase in conversions",
      "2x faster page load times",
      "40% reduction in cart abandonment",
    ],
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop",
    link: "#",
  },
  {
    title: "DataSync - enterprise-grade analytics dashboard for data-driven decisions",
    company: "DATASYNC",
    location: "GERMANY",
    locationFlag: "🇩🇪",
    tags: ["SAAS", "DASHBOARD", "DATA VISUALIZATION"],
    category: "web-app",
    techStack: "Next.js, TypeScript, AWS",
    timeline: "6 months",
    results: [
      "+60% user engagement",
      "3x faster data processing",
      "Enterprise-ready security",
    ],
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop",
    link: "#",
  },
  {
    title: "PayFlow - revolutionizing mobile payments for modern consumers",
    company: "PAYFLOW",
    location: "UK",
    locationFlag: "🇬🇧",
    tags: ["FINTECH", "MOBILE APP", "UX DESIGN"],
    category: "mobile-app",
    techStack: "React Native, Firebase",
    timeline: "5 months",
    results: [
      "+35% transaction completion",
      "4.8 App Store rating",
      "100K+ downloads in 3 months",
    ],
    image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800&h=600&fit=crop",
    link: "#",
  },
  {
    title: "MediCare Plus - Secure patient portal for healthcare providers",
    company: "MEDICARE PLUS",
    location: "CANADA",
    locationFlag: "🇨🇦",
    tags: ["HEALTHCARE", "PATIENT PORTAL", "WEB DEVELOPMENT"],
    category: "web-app",
    techStack: "Vue.js, Python, GCP",
    timeline: "8 months",
    results: [
      "Compliance-ready",
      "+50% patient engagement",
      "30% reduction in admin tasks",
    ],
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=800&h=600&fit=crop",
    link: "#",
  },
  {
    title: "LearnHub - gamified learning platform for modern education",
    company: "LEARNHUB",
    location: "AUSTRALIA",
    locationFlag: "🇦🇺",
    tags: ["EDTECH", "LEARNING PLATFORM", "GAMIFICATION"],
    category: "web-app",
    techStack: "Next.js, MongoDB, Vercel",
    timeline: "5 months",
    results: [
      "+70% course completion rate",
      "Gamified learning experience",
      "10K+ active learners",
    ],
    image: "https://images.unsplash.com/photo-1501504905252-473c47e087f8?w=800&h=600&fit=crop",
    link: "#",
  },
  {
    title: "PropertyHub - comprehensive real estate marketplace with virtual tours",
    company: "PROPERTYHUB",
    location: "UAE",
    locationFlag: "🇦🇪",
    tags: ["REAL ESTATE", "MARKETPLACE", "VIRTUAL TOURS"],
    category: "website",
    techStack: "React, Express, PostgreSQL",
    timeline: "7 months",
    results: [
      "+55% listing engagement",
      "Virtual tour integration",
      "Advanced search filters",
    ],
    image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&h=600&fit=crop",
    link: "#",
  },
];

const categories: { id: Category; label: string }[] = [
  { id: "all", label: "ALL PROJECTS" },
  { id: "web-app", label: "WEB APP" },
  { id: "mobile-app", label: "MOBILE APP" },
  { id: "website", label: "WEBSITE" },
  { id: "branding", label: "BRANDING" },
];
*/

/* ========================================
   END OF ORIGINAL CONTENT
   ======================================== */

// Floating shapes for background animation
const FloatingShape = ({
  delay,
  duration,
  size,
  left,
  top,
  color
}: {
  delay: number;
  duration: number;
  size: number;
  left: string;
  top: string;
  color: string;
}) => (
  <motion.div
    className="absolute rounded-full opacity-20 blur-sm"
    style={{
      width: size,
      height: size,
      left,
      top,
      background: color,
    }}
    animate={{
      y: [0, -30, 0],
      x: [0, 15, 0],
      scale: [1, 1.1, 1],
    }}
    transition={{
      duration,
      delay,
      repeat: Infinity,
      ease: "easeInOut",
    }}
  />
);

const Cases = () => {
  // const [activeCategory, setActiveCategory] = useState<Category>("all");
  // const filteredCases = activeCategory === "all"
  //   ? casesData
  //   : casesData.filter((c) => c.category === activeCategory);

  return (
    <>
      <SEOHead
        title="Cases | Intrao Tech - Our Portfolio & Success Stories"
        description="Explore our portfolio of successful web development and design projects. See how we've helped businesses achieve their digital goals."
        canonical="/cases"
      />

      <Header />

      <main id="main-content">
        {/* Coming Soon Section */}
        <section
          data-header-theme="light"
          className="relative min-h-screen bg-background text-foreground flex items-center justify-center overflow-hidden"
        >
          {/* Animated Background Shapes */}
          <div className="absolute inset-0 overflow-hidden">
            <FloatingShape delay={0} duration={6} size={300} left="10%" top="20%" color="hsl(var(--primary))" />
            <FloatingShape delay={1} duration={8} size={200} left="70%" top="10%" color="hsl(var(--primary))" />
            <FloatingShape delay={2} duration={7} size={150} left="80%" top="60%" color="hsl(var(--primary))" />
            <FloatingShape delay={0.5} duration={9} size={250} left="5%" top="70%" color="hsl(var(--primary))" />
            <FloatingShape delay={1.5} duration={6} size={180} left="50%" top="80%" color="hsl(var(--primary))" />
            <FloatingShape delay={3} duration={10} size={120} left="30%" top="5%" color="hsl(var(--primary))" />
          </div>

          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-background/50 via-transparent to-background/80" />

          {/* Content */}
          <div className="container mx-auto px-6 relative z-10 text-center">
            {/* Main Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="heading-1 mb-6"
            >
              Case Studies
              <br />
              Coming Soon
            </motion.h1>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto mb-12"
            >
              We're putting the finishing touches on our portfolio.
              Our latest projects and success stories will be showcased here soon.
            </motion.p>

            {/* Progress Indicator */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-col items-center gap-4"
            >
              <div className="flex items-center gap-3">
                <motion.div
                  className="w-3 h-3 rounded-full bg-primary"
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 1, repeat: Infinity, delay: 0 }}
                />
                <motion.div
                  className="w-3 h-3 rounded-full bg-primary"
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 1, repeat: Infinity, delay: 0.2 }}
                />
                <motion.div
                  className="w-3 h-3 rounded-full bg-primary"
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 1, repeat: Infinity, delay: 0.4 }}
                />
              </div>
              <p className="text-sm font-medium tracking-wider text-muted-foreground uppercase">
                In Progress
              </p>
            </motion.div>

          </div>

          {/* Bottom Gradient Fade */}
          <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
        </section>

        {/* ========================================
           ORIGINAL SECTIONS - COMMENTED OUT
           ======================================== */}

        {/*
        <section data-header-theme="light" className="bg-background text-foreground pt-32 pb-4">
          <div className="container mx-auto px-6">
            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="heading-2 mb-12"
            >
              Explore our projects
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex flex-wrap gap-2"
            >
              {categories.map((cat) => (
                <Button
                  key={cat.id}
                  variant="tab"
                  size="sm"
                  onClick={() => setActiveCategory(cat.id)}
                  data-active={activeCategory === cat.id}
                  className="rounded-lg"
                >
                  {cat.label}
                </Button>
              ))}
            </motion.div>
          </div>
        </section>

        <section data-header-theme="light" className="bg-background text-foreground">
          <div className="container mx-auto px-6">
            {filteredCases.map((caseItem, index) => (
              <motion.div
                key={caseItem.title}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className={index > 0 ? "border-t border-border" : ""}
              >
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 py-16 lg:py-24">
                  <div className="lg:sticky lg:top-24 lg:self-start">
                    <motion.div
                      initial={{ opacity: 0, scale: 0.95 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: 0.1 }}
                      className="relative aspect-[4/3] overflow-hidden bg-muted rounded-lg"
                    >
                      <img
                        loading="lazy"
                        src={caseItem.image}
                        alt={caseItem.title}
                        className="w-full h-full object-cover"
                      />
                    </motion.div>
                  </div>

                  <div className="flex flex-col justify-center">
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: 0.1 }}
                      className="flex flex-wrap gap-3 mb-6"
                    >
                      {caseItem.tags.map((tag) => (
                        <span
                          key={tag}
                          className="text-xs font-medium tracking-wider text-muted-foreground"
                        >
                          #{tag}
                        </span>
                      ))}
                    </motion.div>

                    <motion.h2
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: 0.15 }}
                      className="heading-3 mb-6"
                    >
                      {caseItem.title}
                    </motion.h2>

                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: 0.2 }}
                      className="flex flex-wrap gap-3 mb-8"
                    >
                      <span className="inline-flex items-center px-4 py-2 bg-foreground text-background text-xs font-semibold tracking-wider rounded-lg">
                        {caseItem.company}
                      </span>
                      <span className="inline-flex items-center gap-2 px-4 py-2 bg-foreground text-background text-xs font-semibold tracking-wider rounded-lg">
                        <span>{caseItem.locationFlag}</span>
                        {caseItem.location}
                      </span>
                    </motion.div>

                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: 0.25 }}
                      className="mb-8"
                    >
                      <div className="grid grid-cols-2">
                        <div className="pb-2 border-b border-border">
                          <p className="text-xs font-semibold tracking-wider text-muted-foreground">
                            TECH STACK
                          </p>
                        </div>
                        <div className="pb-2 border-b border-l border-border pl-6">
                          <p className="text-xs font-semibold tracking-wider text-muted-foreground">
                            TIMELINE
                          </p>
                        </div>
                      </div>
                      <div className="grid grid-cols-2 pt-4">
                        <div>
                          <p className="text-sm font-medium">{caseItem.techStack}</p>
                        </div>
                        <div className="border-l border-border pl-6">
                          <p className="text-sm font-medium">{caseItem.timeline}</p>
                        </div>
                      </div>
                    </motion.div>

                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: 0.3 }}
                      className="mb-8"
                    >
                      <p className="text-xs font-semibold tracking-wider text-muted-foreground pb-2 border-b border-border mb-4">
                        RESULTS
                      </p>
                      <ul className="space-y-3">
                        {caseItem.results.map((result, i) => (
                          <li key={i} className="text-sm font-medium">
                            {result}
                          </li>
                        ))}
                      </ul>
                    </motion.div>

                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: 0.35 }}
                    >
                      <Button asChild className="group">
                        <a href={caseItem.link} target="_blank" rel="noopener noreferrer">
                          EXPLORE
                          <ButtonArrows />
                        </a>
                      </Button>
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </section>
        */}

        {/* ========================================
           END OF ORIGINAL SECTIONS
           ======================================== */}
      </main>

      <Footer />
    </>
  );
};

export default Cases;
