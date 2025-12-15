import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";

const Insights = () => {
  const articles = [
    {
      title: "The Ultimate Guide to MVP Development in 2024",
      category: "Development",
      date: "Dec 10, 2024",
      readTime: "8 min read",
      excerpt: "Learn how to build and launch your MVP faster while avoiding common pitfalls that delay startups.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=500&fit=crop",
    },
    {
      title: "Why Design Systems Matter for Scaling Products",
      category: "Design",
      date: "Dec 5, 2024",
      readTime: "6 min read",
      excerpt: "Discover how implementing a design system can improve consistency and speed up your development process.",
      image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&h=500&fit=crop",
    },
    {
      title: "5 UX Mistakes That Kill Your Conversion Rate",
      category: "UX",
      date: "Nov 28, 2024",
      readTime: "5 min read",
      excerpt: "Avoid these common UX pitfalls that drive users away and hurt your bottom line.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=500&fit=crop",
    },
    {
      title: "How to Choose the Right Tech Stack for Your Startup",
      category: "Development",
      date: "Nov 20, 2024",
      readTime: "10 min read",
      excerpt: "A comprehensive guide to selecting technologies that will scale with your business.",
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&h=500&fit=crop",
    },
    {
      title: "The Psychology of Color in Web Design",
      category: "Design",
      date: "Nov 15, 2024",
      readTime: "7 min read",
      excerpt: "Understanding how color choices impact user behavior and brand perception.",
      image: "https://images.unsplash.com/photo-1557683316-973673baf926?w=800&h=500&fit=crop",
    },
    {
      title: "Building Accessible Web Applications",
      category: "Development",
      date: "Nov 8, 2024",
      readTime: "9 min read",
      excerpt: "Best practices for creating inclusive digital experiences that work for everyone.",
      image: "https://images.unsplash.com/photo-1573164713988-8665fc963095?w=800&h=500&fit=crop",
    },
  ];

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
        <section className="bg-dark text-dark-foreground pt-32 pb-20">
          <div className="container mx-auto px-6">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-dark-muted text-sm uppercase tracking-[0.3em] mb-8"
            >
              Insights
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.1] mb-8 max-w-4xl"
            >
              Ideas, guides, and{" "}
              <span className="text-primary">industry insights</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-dark-muted text-xl max-w-2xl"
            >
              Stay updated with the latest trends, best practices, and expert opinions from our team.
            </motion.p>
          </div>
        </section>

        {/* Articles Grid */}
        <section className="bg-background text-foreground py-24">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {articles.map((article, index) => (
                <motion.article
                  key={article.title}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="group"
                >
                  <Link to="#" className="block">
                    <div className="border border-border overflow-hidden transition-all duration-500 hover:border-primary/50 hover:shadow-lg hover:shadow-primary/5">
                      {/* Image */}
                      <div className="relative aspect-[16/10] overflow-hidden">
                        <img
                          src={article.image}
                          alt={article.title}
                          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                        <div className="absolute top-4 left-4">
                          <span className="px-3 py-1 rounded-full bg-primary text-primary-foreground text-xs font-semibold uppercase tracking-wider">
                            {article.category}
                          </span>
                        </div>
                      </div>

                      {/* Content */}
                      <div className="p-6">
                        <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                          <span>{article.date}</span>
                          <span className="w-1 h-1 bg-muted-foreground rounded-full" />
                          <span>{article.readTime}</span>
                        </div>

                        <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors duration-300">
                          {article.title}
                        </h3>

                        <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                          {article.excerpt}
                        </p>

                        <span className="inline-flex items-center gap-2 text-primary font-semibold text-sm">
                          Read More
                          <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
                        </span>
                      </div>
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
