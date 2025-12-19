import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Code, Palette, Rocket, Users, Zap, Target } from "lucide-react";
import { Button } from "@/components/ui/button";

const Services = () => {
  const services = [
    {
      icon: Palette,
      title: "UI/UX Design",
      description:
        "Create intuitive, beautiful interfaces that delight users and drive conversions. From wireframes to high-fidelity prototypes.",
      features: [
        "User Research & Analysis",
        "Wireframing & Prototyping",
        "Visual Design",
        "Design Systems",
        "Usability Testing",
      ],
    },
    {
      icon: Code,
      title: "Web Development",
      description:
        "Build fast, scalable, and maintainable web applications using modern technologies and best practices.",
      features: [
        "Frontend Development",
        "Backend Development",
        "API Integration",
        "Database Design",
        "Performance Optimization",
      ],
    },
    {
      icon: Rocket,
      title: "MVP Development",
      description:
        "Launch your product faster with our lean MVP development approach. Validate your idea and get to market quickly.",
      features: [
        "Product Discovery",
        "Rapid Prototyping",
        "Agile Development",
        "Launch Support",
        "Iteration & Feedback",
      ],
    },
    {
      icon: Users,
      title: "Team Extension",
      description:
        "Scale your team instantly with dedicated designers and developers who integrate seamlessly with your workflow.",
      features: [
        "Dedicated Resources",
        "Flexible Engagement",
        "Direct Communication",
        "Skill Matching",
        "Quick Onboarding",
      ],
    },
    {
      icon: Zap,
      title: "Product Redesign",
      description:
        "Upgrade legacy interfaces with modern, scalable UX and UI that improves engagement and conversions.",
      features: [
        "UX Audit",
        "Competitive Analysis",
        "Information Architecture",
        "Visual Refresh",
        "Implementation Support",
      ],
    },
    {
      icon: Target,
      title: "Branding",
      description:
        "Develop a brand that resonates — visually, emotionally, and strategically. Stand out in a crowded market.",
      features: [
        "Brand Strategy",
        "Visual Identity",
        "Brand Guidelines",
        "Marketing Collateral",
        "Brand Voice",
      ],
    },
  ];

  return (
    <>
      <Helmet>
        <title>Services | Intrao Tech - Web Development & Design Services</title>
        <meta
          name="description"
          content="Explore our web development, UI/UX design, MVP development, and team extension services. We help businesses launch, scale, and succeed."
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
              Our Services
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.1] mb-8 max-w-4xl"
            >
              Tailored solutions for your{" "}
              <span className="text-primary">digital success</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-dark-muted text-xl max-w-2xl"
            >
              From design to development, we offer comprehensive services to help you build and scale your digital products.
            </motion.p>
          </div>
        </section>

        {/* Services Grid */}
        <section data-header-theme="light" className="bg-background text-foreground py-24">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="group"
                >
                  <div className="border border-border p-8 h-full flex flex-col transition-all duration-500 hover:border-primary/50 hover:shadow-lg hover:shadow-primary/5">
                    <service.icon className="w-12 h-12 text-primary mb-6" />
                    <h3 className="text-2xl font-semibold mb-4 group-hover:text-primary transition-colors duration-300">
                      {service.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed mb-6">
                      {service.description}
                    </p>
                    <ul className="space-y-2 flex-1 mb-6">
                      {service.features.map((feature) => (
                        <li
                          key={feature}
                          className="flex items-center gap-2 text-sm text-muted-foreground"
                        >
                          <span className="w-1.5 h-1.5 bg-primary rounded-full" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <Link
                      to="/contacts"
                      className="inline-flex items-center gap-2 text-primary font-semibold group/link"
                    >
                      Get Started
                      <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover/link:translate-x-1" />
                    </Link>
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
              Ready to start your project?
            </motion.h2>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Button asChild size="lg">
                <Link to="/contacts">
                  Get in Touch
                  <ArrowRight />
                </Link>
              </Button>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default Services;
