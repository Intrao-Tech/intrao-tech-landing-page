import { SEOHead } from "@/components/SEOHead";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { articles } from "@/data/articles";

const allTags = ["ALL", ...Array.from(new Set(articles.flatMap((a) => a.tags)))];

const Insights = () => {
  const [activeTag, setActiveTag] = useState("ALL");
  const filteredArticles =
    activeTag === "ALL"
      ? articles
      : articles.filter((article) => article.tags.includes(activeTag));

  return (
    <>
      <SEOHead
        title="Insights | Intrao Tech - Web Development Blog & Resources"
        description="Explore insights from Intrao Tech on web development, startup strategy, and digital product design. Expert knowledge from our founder-led team."
        canonical="/insights"
      />

      <Header />

      <main id="main-content">
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
              className="heading-1"
            >
              Expert Insights
            </motion.h1>
          </div>
        </section>

        {/* Category Filter */}
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
              {allTags.map((tag) => (
                <Button
                  key={tag}
                  variant="tab"
                  size="sm"
                  onClick={() => setActiveTag(tag)}
                  data-active={activeTag === tag}
                  className="rounded-lg"
                >
                  {tag}
                </Button>
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
            <h2 className="sr-only">Articles</h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {filteredArticles.map((article, index) => (
                <motion.article
                  key={article.slug}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="group"
                >
                  <Link to={`/insights/${article.slug}`} className="block">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-8 h-8 rounded-full bg-foreground/10 flex items-center justify-center text-xs font-semibold">
                        {article.author.name
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </div>
                      <span className="text-xs font-semibold uppercase tracking-[0.15em] text-foreground">
                        {article.author.name}
                      </span>
                      <span className="text-muted-foreground">·</span>
                      <span className="text-xs font-semibold uppercase tracking-[0.15em] text-muted-foreground">
                        {article.date}
                      </span>
                      <span className="text-muted-foreground">·</span>
                      <span className="text-xs font-semibold uppercase tracking-[0.15em] text-muted-foreground">
                        {article.readTime}
                      </span>
                    </div>

                    <h3 className="heading-3 mb-4 group-hover:text-primary transition-colors duration-300">
                      {article.title}
                    </h3>

                    <p className="text-muted-foreground text-base leading-relaxed mb-6">
                      {article.summary.length > 200
                        ? article.summary.substring(0, 200) + "..."
                        : article.summary}
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
      </main>

      <Footer />
    </>
  );
};

export default Insights;
