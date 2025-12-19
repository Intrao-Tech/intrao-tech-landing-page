import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowDownRight, Quote, Building2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ButtonArrows } from "@/components/ui/button-arrows";

const About = () => {
  const principles = [
    {
      number: "01",
      title: "Passion and personality",
      description: "Our team is made up of people with personality, and one thing they have in common is passion for what they do.",
    },
    {
      number: "02",
      title: "Measure twice, code once",
      description: "Our dedication and attention to detail allow us to deliver products and services of the highest quality.",
    },
    {
      number: "03",
      title: "Unconventional — and highly effective",
      description: "We work as true partners, not just vendors. Our unconventional approach delivers exceptional results.",
    },
    {
      number: "04",
      title: "Fresh design, smart business processes",
      description: "Flexible methodology adapted to each project's needs, combining fresh design with smart processes.",
    },
  ];

  const stats = [
    { value: "500M+", label: "Investments raised by clients" },
    { value: "120+", label: "Launched products" },
    { value: "60+", label: "Team members" },
    { value: "5", label: "Years in the market" },
  ];

  const testimonials = [
    {
      quote: "They designed great UX/UI and were easy to work with. Intrao Tech has demonstrated great work. The visual look and feel of the new site architecture conveys a mature and professional aesthetic. Their agile communication has allowed for continuous feedback, which has led to a successful collaboration.",
      name: "Oliver Ahad",
      company: "Airportr Technologies",
      role: "CRO",
    },
    {
      quote: "I am blown away by the quality of work done by Intrao Tech. They successfully delivered a consumer-level iOS app. The team had a smooth workflow and communicated via Slack. The client was impressed by the quality output and the quick turnaround time set by the team.",
      name: "Mike Abbott",
      company: "Polyform Studio",
      role: "Co-Founder",
    },
  ];

  const awards = [
    {
      platform: "Clutch",
      achievements: [
        "Top Product Design Company 2024",
        "Top User Research Company 2024",
        "Top React Developers 2024",
      ],
    },
    {
      platform: "Webflow",
      achievements: [
        "Webflow 101 certification",
        "Webflow CMS certification",
        "Webflow experts certification",
      ],
    },
    {
      platform: "Upwork",
      achievements: ["Top Rated Agency"],
    },
    {
      platform: "Red Dot",
      achievements: ["Nomination"],
    },
    {
      platform: "UX Design Awards",
      achievements: ["Nomination"],
    },
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
        <section data-header-theme="dark" className="bg-dark text-dark-foreground pt-32 pb-24">
          <div className="container mx-auto px-6">
            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="heading-1 mb-8 max-w-5xl"
            >
              International full-cycle product development company
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-dark-muted text-lg md:text-xl max-w-2xl mb-10"
            >
              A team of top-performers who leverage their expertise in Business Analysis, UI&UX Design, and Development to build products that 'wow' users.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <Button asChild className="group">
                <Link to="/contacts">
                  Let's talk
                  <ButtonArrows />
                </Link>
              </Button>
            </motion.div>
          </div>
        </section>

        {/* Mission Section */}
        <section data-header-theme="light" className="bg-background text-foreground py-24">
          <div className="container mx-auto px-6">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="label text-muted-foreground mb-8"
            >
              Mission
            </motion.p>

            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="heading-1 mb-16 max-w-5xl"
            >
              Delivering innovative digital products and solutions, which users do want, for our clients worldwide.
            </motion.h2>

            <motion.h3
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="heading-2 mb-10"
            >
              How did we get here?
            </motion.h3>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="grid grid-cols-1 md:grid-cols-2 gap-12"
            >
              <p className="text-muted-foreground text-lg leading-relaxed">
                Since 2019, Intrao Tech has grown into a top-tier global design and development studio, with teams based in Switzerland, Poland, Ukraine, Estonia, US, and Canada.
              </p>
              <p className="text-muted-foreground text-lg leading-relaxed">
                Over the past five years, we've built a lean, expert team that thrives on speed, clarity, and measurable impact. Our mission is simple: to help fast-moving startups turn ideas into well-crafted, user-loved products — from brand to build.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Principles Section */}
        <section data-header-theme="light" className="bg-background text-foreground py-24 border-t border-border">
          <div className="container mx-auto px-6">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="label text-muted-foreground mb-8"
            >
              Principles
            </motion.p>

            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="heading-2 mb-16 max-w-4xl"
            >
              We work with startups & established businesses to help them meet today's evolving business challenges
            </motion.h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {principles.map((principle, index) => (
                <motion.div
                  key={principle.number}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="relative bg-muted/30 border border-border rounded-xl p-8 min-h-[200px]"
                >
                  <span className="absolute top-6 right-6 bg-foreground text-background text-xs font-semibold px-3 py-1.5 rounded-xl">
                    {principle.number}
                  </span>
                  <h3 className="text-2xl font-bold mb-4 pr-16">{principle.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{principle.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Reviews Section */}
        <section data-header-theme="dark" className="bg-dark text-dark-foreground py-24">
          <div className="container mx-auto px-6">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="label text-dark-muted mb-8"
            >
              Reviews
            </motion.p>

            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="heading-1 mb-16"
            >
              What do people say about us?
            </motion.h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {testimonials.map((testimonial, index) => (
                <motion.div
                  key={testimonial.name}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-dark-foreground/5 border border-dark-foreground/10 rounded-xl p-8"
                >
                  <div className="flex justify-center mb-6">
                    <div className="w-14 h-14 rounded-full bg-background flex items-center justify-center">
                      <Building2 className="w-6 h-6 text-foreground" />
                    </div>
                  </div>

                  <Quote className="w-8 h-8 text-primary mb-4" />

                  <p className="text-dark-foreground mb-8 leading-relaxed">
                    {testimonial.quote}
                  </p>

                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-12 rounded-full bg-dark-muted/30 flex items-center justify-center text-sm font-semibold">
                      {testimonial.name.split(' ').map(n => n[0]).join('')}
                    </div>
                    <div>
                      <p className="font-semibold">{testimonial.name}</p>
                      <p className="text-dark-muted text-sm">
                        {testimonial.role} {testimonial.company}
                      </p>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-4 text-sm">
                    <Link
                      to="/cases"
                      className="inline-flex items-center gap-2 text-primary hover:underline uppercase tracking-wider font-medium"
                    >
                      <span className="text-primary">*</span> Explore Case Study
                    </Link>
                    <span className="inline-flex items-center gap-2 text-dark-muted uppercase tracking-wider font-medium cursor-pointer hover:text-dark-foreground">
                      <span>C</span> See Full Review
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Get a Quote CTA */}
        <section data-header-theme="dark" className="bg-dark text-dark-foreground py-12">
          <div className="container mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <Link
                to="/contacts"
                className="block border-2 border-primary rounded-xl py-16 text-center hover:bg-primary/5 transition-colors duration-300"
              >
                <span className="text-3xl md:text-4xl font-bold">Get a quote</span>
              </Link>
            </motion.div>
          </div>
        </section>

        {/* Awards Section */}
        <section data-header-theme="dark" className="bg-dark text-dark-foreground py-24">
          <div className="container mx-auto px-6">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="label text-dark-muted mb-8"
            >
              Awards
            </motion.p>

            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="heading-1 mb-16"
            >
              Intrao is facts and figures
            </motion.h2>

            {/* Stats Row */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20"
            >
              {stats.map((stat, index) => (
                <div key={stat.label} className="text-left">
                  <div className="flex items-center gap-2 text-dark-muted text-sm mb-2">
                    <span>{stat.label}</span>
                    <ArrowDownRight className="w-4 h-4" />
                  </div>
                  <div className="text-4xl md:text-5xl font-bold">{stat.value}</div>
                </div>
              ))}
            </motion.div>

            {/* Awards List */}
            <div className="space-y-0 border-t border-dark-foreground/10">
              {awards.map((award, index) => (
                <motion.div
                  key={award.platform}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="grid grid-cols-1 md:grid-cols-2 gap-4 py-8 border-b border-dark-foreground/10"
                >
                  <div className="text-xl font-bold">{award.platform}</div>
                  <div className="space-y-1">
                    {award.achievements.map((achievement) => (
                      <div key={achievement} className="flex items-center gap-2 text-dark-muted">
                        <span>{achievement}</span>
                        <ArrowDownRight className="w-4 h-4 flex-shrink-0" />
                      </div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Final CTA Section */}
        <section data-header-theme="light" className="bg-background text-foreground py-24">
          <div className="container mx-auto px-6">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="heading-1 mb-16 max-w-3xl"
            >
              Explore opportunities to create excellent products
            </motion.h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="text-center py-12 border-r-0 md:border-r border-border"
              >
                <h3 className="text-2xl font-bold mb-4">Cases</h3>
                <p className="text-muted-foreground mb-8">
                  Check out the projects we have completed for our clients
                </p>
                <Button asChild variant="secondary" className="group">
                  <Link to="/cases">
                    View Our Projects
                    <ButtonArrows />
                  </Link>
                </Button>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-center py-12"
              >
                <h3 className="text-2xl font-bold mb-4">Services</h3>
                <p className="text-muted-foreground mb-8">
                  Discover the multitude of methods we can use to enhance your product
                </p>
                <Button asChild variant="secondary" className="group">
                  <Link to="/services">
                    View Our Services
                    <ButtonArrows />
                  </Link>
                </Button>
              </motion.div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default About;
