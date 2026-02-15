import { SEOHead } from "@/components/SEOHead";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
// import { useState } from "react";
// import { Link } from "react-router-dom";
// import { Button } from "@/components/ui/button";

/* ========================================
   ORIGINAL CONTENT - COMMENTED OUT
   ======================================== */

/*
const categories = [
  "ALL",
  "ANALYTICS",
  "BUSINESS INTELLIGENCE",
  "DESIGN",
  "DEVELOPMENT",
  "NEWS",
];

const articles = [
  {
    title: "How to prioritize features for an MVP?",
    category: "DEVELOPMENT",
    date: "Dec 10, 2025",
    readTime: "8 min read",
    excerpt:
      "Learn how to prioritize MVP features with proven frameworks like RICE and MoSCoW. Our guide helps you make data-driven decisions for a successful product launch.",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=500&fit=crop",
    author: "Anastasiia Yemelianova",
    authorAvatar: "https://ui-avatars.com/api/?name=Anastasiia+Yemelianova&background=f0f0f0&color=333",
    tags: ["DEVELOPMENT", "CROSS-PLATFORM DEVELOPMENT"],
  },
  {
    title: "How to improve conversion through UX?",
    category: "DESIGN",
    date: "Dec 10, 2025",
    readTime: "6 min read",
    excerpt:
      "Learn how to boost your conversion rates by focusing on UX design. Intrao Tech offers expert strategies to turn your UX into a conversion machine.",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=500&fit=crop",
    author: "Anastasiia Yemelianova",
    authorAvatar: "https://ui-avatars.com/api/?name=Anastasiia+Yemelianova&background=f0f0f0&color=333",
    tags: ["DESIGN", "DESIGN SYSTEM"],
  },
  {
    title: "Why Design Systems Matter for Scaling Products",
    category: "DESIGN",
    date: "Dec 5, 2025",
    readTime: "6 min read",
    excerpt:
      "Discover how implementing a design system can improve consistency and speed up your development process.",
    image:
      "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&h=500&fit=crop",
    author: "Michael Chen",
    authorAvatar: "https://ui-avatars.com/api/?name=Michael+Chen&background=f0f0f0&color=333",
    tags: ["DESIGN", "DESIGN SYSTEM"],
  },
  {
    title: "The Power of Analytics in Modern Business",
    category: "ANALYTICS",
    date: "Nov 28, 2025",
    readTime: "5 min read",
    excerpt:
      "Discover how data analytics can transform your decision-making process and drive business growth.",
    image:
      "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&h=500&fit=crop",
    author: "Sarah Johnson",
    authorAvatar: "https://ui-avatars.com/api/?name=Sarah+Johnson&background=f0f0f0&color=333",
    tags: ["ANALYTICS", "DATA"],
  },
  {
    title: "Business Intelligence Trends for 2025",
    category: "BUSINESS INTELLIGENCE",
    date: "Nov 20, 2025",
    readTime: "10 min read",
    excerpt:
      "A comprehensive guide to the latest BI trends that will shape enterprise decision-making.",
    image:
      "https://images.unsplash.com/photo-1557683316-973673baf926?w=800&h=500&fit=crop",
    author: "David Park",
    authorAvatar: "https://ui-avatars.com/api/?name=David+Park&background=f0f0f0&color=333",
    tags: ["BUSINESS INTELLIGENCE", "TRENDS"],
  },
  {
    title: "Intrao Tech Launches New Partnership Program",
    category: "NEWS",
    date: "Nov 15, 2025",
    readTime: "4 min read",
    excerpt:
      "Exciting news about our expanded partner network and new collaboration opportunities.",
    image:
      "https://images.unsplash.com/photo-1573164713988-8665fc963095?w=800&h=500&fit=crop",
    author: "Emma Wilson",
    authorAvatar: "https://ui-avatars.com/api/?name=Emma+Wilson&background=f0f0f0&color=333",
    tags: ["NEWS", "PARTNERSHIP"],
  },
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

const Insights = () => {
  // const [activeCategory, setActiveCategory] = useState("ALL");
  // const filteredArticles =
  //   activeCategory === "ALL"
  //     ? articles
  //     : articles.filter((article) => article.category === activeCategory);

  return (
    <>
      <SEOHead
        title="Insights | Intrao Tech - Web Development Blog & Resources"
        description="Explore our insights on web development, UI/UX design, and digital product strategy. Learn from our experts and stay ahead of the curve."
        canonical="/insights"
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
              Expert Insights
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
              We're crafting insightful articles and resources.
              Expert knowledge on development, design, and digital strategy will be shared here soon.
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
        <section
          data-header-theme="light"
          className="bg-background text-foreground pt-32 pb-16"
        >
          <div className="container mx-auto px-6">
            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="heading-1"
            >
              Expert articles
            </motion.h1>
          </div>
        </section>

        <section
          data-header-theme="light"
          className="bg-background text-foreground pb-12"
        >
          <div className="container mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex flex-wrap gap-3"
            >
              {categories.map((category) => (
                <Button
                  key={category}
                  variant="tab"
                  size="sm"
                  onClick={() => setActiveCategory(category)}
                  data-active={activeCategory === category}
                  className="rounded-lg"
                >
                  {category}
                </Button>
              ))}
            </motion.div>
          </div>
        </section>

        <section
          data-header-theme="light"
          className="bg-background text-foreground pb-24"
        >
          <div className="container mx-auto px-6">
            <h2 className="sr-only">Articles</h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {filteredArticles.map((article, index) => (
                <motion.article
                  key={article.title}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="group"
                >
                  <Link to="#" className="block">
                    <div className="relative aspect-[16/10] overflow-hidden rounded-lg mb-6">
                      <img
                        loading="lazy"
                        src={article.image}
                        alt={article.title}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                    </div>

                    <div className="flex items-center gap-3 mb-4">
                      <img
                        loading="lazy"
                        src={article.authorAvatar}
                        alt={article.author}
                        className="w-8 h-8 rounded-full object-cover"
                      />
                      <span className="text-xs font-semibold uppercase tracking-[0.15em] text-foreground">
                        {article.author}
                      </span>
                      <span className="text-muted-foreground">•</span>
                      <span className="text-xs font-semibold uppercase tracking-[0.15em] text-muted-foreground">
                        {article.date}
                      </span>
                      <span className="text-muted-foreground">•</span>
                      <span className="text-xs font-semibold uppercase tracking-[0.15em] text-muted-foreground">
                        {article.readTime}
                      </span>
                    </div>

                    <h3 className="heading-3 mb-4 group-hover:text-primary transition-colors duration-300">
                      {article.title}
                    </h3>

                    <p className="text-muted-foreground text-base leading-relaxed mb-6">
                      {article.excerpt}
                    </p>

                    <div className="flex flex-wrap gap-3 pt-4 border-t border-border">
                      {article.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-4 py-2 text-xs font-semibold uppercase tracking-[0.1em] bg-input text-foreground rounded-lg"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </Link>
                </motion.article>
              ))}
            </div>
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

export default Insights;
