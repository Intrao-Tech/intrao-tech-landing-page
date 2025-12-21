import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, MapPin, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ButtonArrows } from "@/components/ui/button-arrows";

const Careers = () => {
  const openPositions = [
    {
      title: "React Developer (Mid-Level)",
      department: "Engineering",
      description: "Build interactive interfaces for fintech and e-commerce clients",
      location: "Remote",
      type: "Full-time",
      isNew: true,
    },
    {
      title: "Product Designer",
      department: "Design",
      description: "Own the end-to-end design process from research to handoff",
      location: "Remote",
      type: "Full-time",
      isNew: true,
    },
    {
      title: "Motion Designer",
      department: "Design",
      description: "Create micro-interactions and animations that delight users",
      location: "Remote",
      type: "Contract",
      isNew: false,
    },
    {
      title: "Full Stack Engineer",
      department: "Engineering",
      description: "Work across Node.js backends and React frontends",
      location: "Remote / Kyiv",
      type: "Full-time",
      isNew: false,
    },
    {
      title: "Account Manager",
      department: "Client Services",
      description: "Be the bridge between our team and growing startup clients",
      location: "Remote",
      type: "Full-time",
      isNew: false,
    },
  ];

  return (
    <>
      <Helmet>
        <title>Careers | Intrao Tech - Join Our Team</title>
        <meta
          name="description"
          content="Join Intrao Tech and be part of a team that's shaping the future of digital products. Explore our open positions and start your journey with us."
        />
      </Helmet>

      <Header />

      <main>
        {/* Hero Section */}
        <section data-header-theme="dark" className="relative bg-dark text-dark-foreground pt-32 pb-20">
          <div className="container mx-auto px-6">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-dark-muted text-sm uppercase tracking-[0.3em] mb-8"
            >
              Careers
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="heading-1 mb-8 max-w-4xl"
            >
              Build your career with Intrao Tech
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-dark-muted text-xl max-w-2xl"
            >
              We're always looking for talented individuals who share our passion for creating exceptional digital experiences.
            </motion.p>
          </div>

          {/* Bottom wave */}
          <div className="absolute bottom-0 left-0 w-full translate-y-full pointer-events-none z-20">
            <svg
              viewBox="0 0 1440 120"
              preserveAspectRatio="none"
              className="w-full h-[60px] md:h-[80px] lg:h-[100px]"
            >
              <path
                className="fill-dark"
                d="M0,0 L0,0 C360,0 360,80 720,80 C1080,80 1080,0 1440,0 L1440,0 Z"
              />
            </svg>
          </div>
        </section>

        {/* Open Positions Section */}
        <section data-header-theme="light" className="bg-background text-foreground py-24 pb-32">
          <div className="container mx-auto px-6">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-3xl md:text-4xl font-bold mb-12"
            >
              Open Positions
            </motion.h2>

            <div className="space-y-4">
              {openPositions.map((position, index) => (
                <motion.div
                  key={position.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="group border border-border rounded-lg p-6 hover:border-primary hover:border-l-primary hover:border-l-4 transition-all duration-300"
                >
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">
                          {position.title}
                        </h3>
                        {position.isNew && (
                          <span className="px-2 py-0.5 text-xs font-medium bg-primary/10 text-primary rounded-full">
                            New
                          </span>
                        )}
                      </div>
                      <p className="text-muted-foreground">{position.description}</p>
                    </div>
                    <div className="flex flex-wrap items-center gap-4 md:flex-nowrap">
                      <span className="flex items-center gap-2 text-sm text-muted-foreground whitespace-nowrap">
                        <MapPin className="w-4 h-4" />
                        {position.location}
                      </span>
                      <span className="flex items-center gap-2 text-sm text-muted-foreground whitespace-nowrap">
                        <Clock className="w-4 h-4" />
                        {position.type}
                      </span>
                      <Link
                        to="/contacts"
                        className="inline-flex items-center gap-2 text-primary font-medium hover:underline whitespace-nowrap"
                      >
                        Apply
                        <ArrowRight className="w-4 h-4" />
                      </Link>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section data-header-theme="dark" className="relative bg-dark text-dark-foreground py-24">
          {/* Top curve */}
          <div className="absolute top-0 left-0 w-full -translate-y-full pointer-events-none z-20">
            <svg
              viewBox="0 0 1440 120"
              preserveAspectRatio="none"
              className="w-full h-[60px] md:h-[80px] lg:h-[100px]"
            >
              <path
                className="fill-dark"
                d="M0,120 L0,120 C360,120 360,40 720,40 C1080,40 1080,120 1440,120 L1440,120 Z"
              />
            </svg>
          </div>
          <div className="container mx-auto px-6 text-center">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-3xl md:text-4xl lg:text-5xl font-bold mb-8"
            >
              Don't see a role that fits?
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-dark-muted text-lg mb-8 max-w-xl mx-auto"
            >
              We're always interested in meeting talented people. Send us your resume and let's talk.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Button asChild size="lg" className="group">
                <Link to="/contacts">
                  Get in Touch
                  <ButtonArrows />
                </Link>
              </Button>
            </motion.div>
          </div>

          {/* Bottom curve */}
          <div className="absolute bottom-0 left-0 w-full translate-y-full pointer-events-none z-20">
            <svg
              viewBox="0 0 1440 120"
              preserveAspectRatio="none"
              className="w-full h-[60px] md:h-[80px] lg:h-[100px]"
            >
              <path
                className="fill-dark"
                d="M0,0 L0,0 C360,0 360,80 720,80 C1080,80 1080,0 1440,0 L1440,0 Z"
              />
            </svg>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default Careers;
