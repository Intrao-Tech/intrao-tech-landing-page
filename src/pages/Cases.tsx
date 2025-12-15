import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowUpRight, ArrowRight } from "lucide-react";

const Cases = () => {
  const cases = [
    {
      title: "E-Commerce Platform Redesign",
      company: "RetailPro",
      industry: "E-Commerce",
      location: "USA",
      techStack: "React, Node.js, PostgreSQL",
      timeline: "4 months",
      results: [
        "+45% increase in conversions",
        "2x faster page load times",
        "40% reduction in cart abandonment",
      ],
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop",
    },
    {
      title: "SaaS Dashboard Development",
      company: "DataSync",
      industry: "SaaS",
      location: "Germany",
      techStack: "Next.js, TypeScript, AWS",
      timeline: "6 months",
      results: [
        "+60% user engagement",
        "3x faster data processing",
        "Enterprise-ready security",
      ],
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop",
    },
    {
      title: "FinTech Mobile App",
      company: "PayFlow",
      industry: "FinTech",
      location: "UK",
      techStack: "React Native, Firebase",
      timeline: "5 months",
      results: [
        "+35% transaction completion",
        "4.8 App Store rating",
        "100K+ downloads in 3 months",
      ],
      image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800&h=600&fit=crop",
    },
    {
      title: "Healthcare Patient Portal",
      company: "MediCare Plus",
      industry: "Healthcare",
      location: "Canada",
      techStack: "Vue.js, Python, GCP",
      timeline: "8 months",
      results: [
        "HIPAA compliant",
        "+50% patient engagement",
        "30% reduction in admin tasks",
      ],
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=800&h=600&fit=crop",
    },
    {
      title: "EdTech Learning Platform",
      company: "LearnHub",
      industry: "EdTech",
      location: "Australia",
      techStack: "Next.js, MongoDB, Vercel",
      timeline: "5 months",
      results: [
        "+70% course completion rate",
        "Gamified learning experience",
        "10K+ active learners",
      ],
      image: "https://images.unsplash.com/photo-1501504905252-473c47e087f8?w=800&h=600&fit=crop",
    },
    {
      title: "Real Estate Marketplace",
      company: "PropertyHub",
      industry: "Real Estate",
      location: "UAE",
      techStack: "React, Express, PostgreSQL",
      timeline: "7 months",
      results: [
        "+55% listing engagement",
        "Virtual tour integration",
        "Advanced search filters",
      ],
      image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&h=600&fit=crop",
    },
  ];

  return (
    <>
      <Helmet>
        <title>Cases | Intrao Tech - Our Portfolio & Success Stories</title>
        <meta
          name="description"
          content="Explore our portfolio of successful web development and design projects. See how we've helped businesses achieve their digital goals."
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
              Our Work
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.1] mb-8 max-w-4xl"
            >
              Driving change through{" "}
              <span className="text-primary">innovative projects</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-dark-muted text-xl max-w-2xl"
            >
              Explore our portfolio of successful projects and see how we've helped businesses transform their digital presence.
            </motion.p>
          </div>
        </section>

        {/* Cases Grid */}
        <section className="bg-background text-foreground py-24">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
              {cases.map((caseItem, index) => (
                <motion.div
                  key={caseItem.title}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="group"
                >
                  <div className="border border-border overflow-hidden transition-all duration-500 hover:border-primary/50 hover:shadow-lg hover:shadow-primary/5">
                    {/* Image */}
                    <div className="relative aspect-[16/10] overflow-hidden">
                      <img
                        src={caseItem.image}
                        alt={caseItem.title}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-primary/0 transition-colors duration-500 group-hover:bg-primary/10" />
                    </div>

                    {/* Content */}
                    <div className="p-8">
                      <div className="flex items-center gap-4 mb-4">
                        <span className="text-sm text-muted-foreground">
                          {caseItem.industry}
                        </span>
                        <span className="w-1 h-1 bg-muted-foreground rounded-full" />
                        <span className="text-sm text-muted-foreground">
                          {caseItem.location}
                        </span>
                      </div>

                      <h3 className="text-xl md:text-2xl font-bold mb-4 group-hover:text-primary transition-colors duration-300">
                        {caseItem.title}
                      </h3>

                      <div className="flex flex-wrap gap-4 mb-6 text-sm">
                        <div>
                          <span className="text-muted-foreground">Tech: </span>
                          <span>{caseItem.techStack}</span>
                        </div>
                        <div>
                          <span className="text-muted-foreground">Timeline: </span>
                          <span>{caseItem.timeline}</span>
                        </div>
                      </div>

                      <ul className="space-y-2 mb-6">
                        {caseItem.results.slice(0, 2).map((result, i) => (
                          <li key={i} className="flex items-center gap-2 text-sm">
                            <span className="w-1.5 h-1.5 bg-primary rounded-full" />
                            {result}
                          </li>
                        ))}
                      </ul>

                      <Link
                        to="/contacts"
                        className="inline-flex items-center gap-2 text-primary font-semibold group/link"
                      >
                        View Project
                        <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover/link:translate-x-1 group-hover/link:-translate-y-1" />
                      </Link>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-dark text-dark-foreground py-24">
          <div className="container mx-auto px-6 text-center">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-3xl md:text-4xl lg:text-5xl font-bold mb-8"
            >
              Want to be our next success story?
            </motion.h2>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Link
                to="/contacts"
                className="inline-flex items-center gap-3 bg-primary text-primary-foreground px-10 py-6 rounded-xl text-sm font-semibold uppercase tracking-wider transition-all duration-300 hover:bg-primary/90"
              >
                Start Your Project
                <ArrowRight className="w-4 h-4" />
              </Link>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default Cases;
