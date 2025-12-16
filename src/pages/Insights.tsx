import { useState } from "react";
import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Insights = () => {
  const [activeCategory, setActiveCategory] = useState("ALL");

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
        "Learn how to boost your conversion rates by focusing on UX design. Phenomenon Studio offers expert strategies to turn your UX into a conversion machine.",
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

  const filteredArticles =
    activeCategory === "ALL"
      ? articles
      : articles.filter((article) => article.category === activeCategory);

  return (
    <>
      <Helmet>
        <title>Insights | Intrao Tech - Web Development Blog & Resources</title>
        <meta
          name="description"
          content="Explore our insights on web development, UI/UX design, and digital product strategy. Learn from our experts and stay ahead of the curve."
        />
      </Helmet>

      <Header />

      <main>
        {/* Hero Section */}
        <section
          data-header-theme="light"
          className="bg-background text-foreground pt-32 pb-16"
        >
          <div className="container mx-auto px-6">
            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.1]"
            >
              Expert articles
            </motion.h1>
          </div>
        </section>

        {/* Filter Tabs */}
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
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`px-6 py-3 text-xs font-semibold uppercase tracking-[0.15em] transition-all duration-300 ${
                    activeCategory === category
                      ? "bg-foreground text-background"
                      : "bg-transparent text-foreground hover:bg-muted"
                  }`}
                >
                  {category}
                </button>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Articles Grid */}
        <section
          data-header-theme="light"
          className="bg-background text-foreground pb-24"
        >
          <div className="container mx-auto px-6">
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
                    {/* Image */}
                    <div className="relative aspect-[16/10] overflow-hidden rounded-xl mb-6">
                      <img
                        src={article.image}
                        alt={article.title}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                    </div>

                    {/* Author & Meta */}
                    <div className="flex items-center gap-3 mb-4">
                      <img
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

                    {/* Title */}
                    <h3 className="text-2xl md:text-3xl font-semibold mb-4 group-hover:text-primary transition-colors duration-300">
                      {article.title}
                    </h3>

                    {/* Excerpt */}
                    <p className="text-muted-foreground text-base leading-relaxed mb-6">
                      {article.excerpt}
                    </p>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-3 pt-4 border-t border-border">
                      {article.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-4 py-2 text-xs font-semibold uppercase tracking-[0.1em] border border-border text-foreground"
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
      </main>

      <Footer />
    </>
  );
};

export default Insights;
