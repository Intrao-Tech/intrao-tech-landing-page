import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, MapPin, Clock } from "lucide-react";

const Careers = () => {
  const openPositions = [
    {
      title: "Senior Frontend Developer",
      department: "Engineering",
      location: "Remote",
      type: "Full-time",
    },
    {
      title: "UI/UX Designer",
      department: "Design",
      location: "Remote",
      type: "Full-time",
    },
    {
      title: "Project Manager",
      department: "Operations",
      location: "Remote",
      type: "Full-time",
    },
    {
      title: "Backend Developer",
      department: "Engineering",
      location: "Remote",
      type: "Full-time",
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
        <section data-header-theme="dark" className="bg-dark text-dark-foreground pt-32 pb-20">
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
              className="text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.1] mb-8 max-w-4xl"
            >
              Build your career with{" "}
              <span className="text-primary">Intrao Tech</span>
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
        </section>

        {/* Open Positions Section */}
        <section data-header-theme="light" className="bg-background text-foreground py-24">
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
                  className="group border border-border rounded-xl p-6 hover:border-primary transition-colors duration-300"
                >
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                    <div>
                      <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
                        {position.title}
                      </h3>
                      <p className="text-muted-foreground">{position.department}</p>
                    </div>
                    <div className="flex flex-wrap items-center gap-4">
                      <span className="flex items-center gap-2 text-sm text-muted-foreground">
                        <MapPin className="w-4 h-4" />
                        {position.location}
                      </span>
                      <span className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Clock className="w-4 h-4" />
                        {position.type}
                      </span>
                      <Link
                        to="/contacts"
                        className="inline-flex items-center gap-2 text-primary font-medium hover:underline"
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
        <section data-header-theme="dark" className="bg-dark text-dark-foreground py-24">
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
              <Link
                to="/contacts"
                className="inline-flex items-center gap-3 bg-primary text-primary-foreground px-10 py-6 rounded-xl text-sm font-semibold uppercase tracking-wider transition-all duration-300 hover:bg-primary/90"
              >
                Get in Touch
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

export default Careers;
