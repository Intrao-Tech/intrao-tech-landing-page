import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle } from "lucide-react";

const About = () => {
  const values = [
    {
      title: "Excellence",
      description: "We strive for excellence in every project, delivering top-quality solutions that exceed expectations.",
    },
    {
      title: "Innovation",
      description: "We embrace new technologies and approaches to solve complex problems creatively.",
    },
    {
      title: "Collaboration",
      description: "We work as an extension of your team, fostering open communication and transparency.",
    },
    {
      title: "Results",
      description: "We focus on delivering measurable outcomes that drive real business growth.",
    },
  ];

  const teamImages = [
    "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&h=400&fit=crop",
    "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=400&fit=crop",
    "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&h=400&fit=crop",
    "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=400&fit=crop",
    "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop",
    "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop",
    "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop",
    "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&h=400&fit=crop",
  ];

  return (
    <>
      <Helmet>
        <title>About Us | Intrao Tech - Our Story & Team</title>
        <meta
          name="description"
          content="Learn about Intrao Tech, our mission, values, and the talented team behind our success. We're a web development agency dedicated to your digital success."
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
              About Us
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.1] mb-8 max-w-4xl"
            >
              We're passionate about{" "}
              <span className="text-primary">digital innovation</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-dark-muted text-xl max-w-2xl"
            >
              Intrao Tech was founded with one goal — to become the leading digital product agency for businesses looking to launch, scale, and innovate.
            </motion.p>
          </div>
        </section>

        {/* Story Section */}
        <section className="bg-background text-foreground py-24">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Story</h2>
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <p>
                    We started as a small team of designers and developers with a shared vision: to create digital products that make a real difference. Over the years, we've grown into a full-service agency serving clients across the globe.
                  </p>
                  <p>
                    Our team combines strategic thinking with technical expertise to deliver solutions that not only look great but also drive measurable results. We've helped startups launch their MVPs, enterprises modernize their platforms, and everything in between.
                  </p>
                  <p>
                    Today, we're proud to be trusted partners for businesses in SaaS, FinTech, Healthcare, EdTech, and beyond.
                  </p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="grid grid-cols-2 gap-8"
              >
                <div className="text-center">
                  <div className="text-5xl font-bold text-primary mb-2">50+</div>
                  <p className="text-muted-foreground">Team Members</p>
                </div>
                <div className="text-center">
                  <div className="text-5xl font-bold text-primary mb-2">100+</div>
                  <p className="text-muted-foreground">Projects Delivered</p>
                </div>
                <div className="text-center">
                  <div className="text-5xl font-bold text-primary mb-2">5+</div>
                  <p className="text-muted-foreground">Countries</p>
                </div>
                <div className="text-center">
                  <div className="text-5xl font-bold text-primary mb-2">98%</div>
                  <p className="text-muted-foreground">Client Satisfaction</p>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="bg-dark text-dark-foreground py-24">
          <div className="container mx-auto px-6">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-3xl md:text-4xl font-bold mb-12"
            >
              Our Values
            </motion.h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {values.map((value, index) => (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="flex items-start gap-4"
                >
                  <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-xl font-semibold mb-2">{value.title}</h3>
                    <p className="text-dark-muted">{value.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="bg-background text-foreground py-24">
          <div className="container mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Team</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Meet the talented individuals who bring your digital visions to life.
              </p>
            </motion.div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {teamImages.map((image, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="relative overflow-hidden group"
                >
                  <div className="aspect-square">
                    <img
                      src={image}
                      alt={`Team member ${index + 1}`}
                      className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                    />
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
              Want to work with us?
            </motion.h2>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Link
                to="/contacts"
                className="inline-flex items-center gap-3 bg-primary text-primary-foreground px-8 py-5 rounded-xl text-sm font-semibold uppercase tracking-wider transition-all duration-300 hover:bg-primary/90"
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

export default About;
