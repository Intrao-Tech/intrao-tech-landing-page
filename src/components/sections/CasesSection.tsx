import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, ArrowUpRight } from "lucide-react";

const CasesSection = () => {
  const cases = [
    {
      title: "E-Commerce Platform Redesign",
      company: "RetailPro",
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
  ];

  return (
    <section className="bg-background text-foreground py-24 lg:py-32">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 lg:mb-24"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
            Discover how we're driving change
            <br />
            <span className="text-muted-foreground">through innovative projects</span>
          </h2>
        </motion.div>

        {/* Cases */}
        <div className="space-y-16 lg:space-y-24">
          {cases.map((caseItem, index) => (
            <motion.div
              key={caseItem.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group"
            >
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
                {/* Image */}
                <div className={`relative overflow-hidden ${index % 2 === 1 ? "lg:order-2" : ""}`}>
                  <div className="aspect-[4/3] overflow-hidden">
                    <img
                      src={caseItem.image}
                      alt={caseItem.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>
                  <div className="absolute inset-0 bg-primary/0 transition-colors duration-500 group-hover:bg-primary/10" />
                </div>

                {/* Content */}
                <div className={index % 2 === 1 ? "lg:order-1" : ""}>
                  <div className="flex items-center gap-4 mb-4">
                    <span className="text-sm text-muted-foreground">{caseItem.company}</span>
                    <span className="w-1 h-1 bg-muted-foreground rounded-full" />
                    <span className="text-sm text-muted-foreground">{caseItem.location}</span>
                  </div>

                  <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-6 group-hover:text-primary transition-colors duration-300">
                    {caseItem.title}
                  </h3>

                  <div className="grid grid-cols-2 gap-6 mb-8">
                    <div>
                      <p className="text-sm text-muted-foreground mb-1">Tech Stack</p>
                      <p className="font-medium">{caseItem.techStack}</p>
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground mb-1">Timeline</p>
                      <p className="font-medium">{caseItem.timeline}</p>
                    </div>
                  </div>

                  <div className="mb-8">
                    <p className="text-sm text-muted-foreground mb-3">Results</p>
                    <ul className="space-y-2">
                      {caseItem.results.map((result, i) => (
                        <li key={i} className="flex items-center gap-3">
                          <span className="w-2 h-2 bg-primary rounded-full" />
                          <span className="font-medium">{result}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <Link
                    to="/cases"
                    className="inline-flex items-center gap-2 text-primary font-semibold group/link"
                  >
                    Explore
                    <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover/link:translate-x-1 group-hover/link:-translate-y-1" />
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-16 lg:mt-24 text-center"
        >
          <Link
            to="/cases"
            className="inline-flex items-center gap-2 border border-foreground text-foreground px-8 py-4 rounded-full text-sm font-semibold uppercase tracking-wider transition-all duration-300 hover:bg-foreground hover:text-background"
          >
            Explore All Cases
            <ArrowRight className="w-4 h-4" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default CasesSection;
