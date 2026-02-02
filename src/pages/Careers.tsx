import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ButtonArrows } from "@/components/ui/button-arrows";
import careerImage from "@/assets/career-image.svg";
import {
  Wifi,
  Sparkles,
  TrendingUp,
  BookOpen,
  Laptop,
  Languages,
  Palmtree,
  Heart,
  CalendarDays,
  Users,
} from "lucide-react";

const Careers = () => {
  const stats = [
    { value: "3+", label: "Years in market" },
    { value: "30+", label: "Projects delivered" },
    { value: "10+", label: "Professionals on board" },
  ];

  const values = [
    {
      number: "01",
      title: "Thoughtful and open-minded",
      heading: "We listen deeply and challenge our own assumptions",
      description:
        "This is about avoiding superficial, knee-jerk conclusions. We listen, question our own assumptions, and stand up for the objective outcome, not for ourselves or being 'personally right.'",
    },
    {
      number: "02",
      title: "Genuinely friendly",
      heading: "Built on honesty and mutual respect",
      description:
        "Honesty and unforced mutual respect in the team. We strive to create a space where everyone feels seen and respected — a place to grow as a professional and as a person while staying true to oneself.",
    },
    {
      number: "03",
      title: "Responsible and accountable",
      heading: "We own our work and deliver on promises",
      description:
        "When we commit to something, we follow through. We take responsibility for our decisions and their outcomes, learning from mistakes and celebrating wins as a team.",
    },
    {
      number: "04",
      title: "Growth-oriented",
      heading: "Always learning, always improving",
      description:
        "We're constantly pushing ourselves to grow. We embrace feedback, seek new challenges, and help each other develop professionally and personally.",
    },
    {
      number: "05",
      title: "Proactive and adaptable",
      heading: "We anticipate needs and embrace change",
      description:
        "We don't wait to be told what to do. We anticipate needs and take initiative. When circumstances change, we adapt quickly while maintaining our commitment to quality.",
    },
    {
      number: "06",
      title: "Client-focused",
      heading: "Your success is our success",
      description:
        "We put our clients' success at the center of everything we do. We strive to understand their business deeply and deliver solutions that exceed expectations.",
    },
    {
      number: "07",
      title: "Knowledgeable and collaborative",
      heading: "Deep expertise with a team-first mindset",
      description:
        "We combine specialized knowledge with genuine collaboration. We share knowledge freely and believe the best solutions come from working together.",
    },
  ];

  const benefits = [
    {
      icon: Wifi,
      title: "Remote work",
      description:
        "Work from anywhere with flexible hours that fit your lifestyle",
    },
    {
      icon: Sparkles,
      title: "Autonomy and ownership",
      description:
        "Take ownership of your projects and make impactful decisions",
    },
    {
      icon: TrendingUp,
      title: "Annual performance reviews",
      description: "Regular feedback and clear paths for career advancement",
    },
    {
      icon: BookOpen,
      title: "Learning and development",
      description: "Workshops, courses, and resources to grow your skills",
    },
    {
      icon: Laptop,
      title: "Equipment provided",
      description: "Get the tools you need to do your best work",
    },
    {
      icon: Languages,
      title: "Corporate English classes",
      description:
        "Improve your language skills with company-sponsored lessons",
    },
    {
      icon: Palmtree,
      title: "18 paid vacation days",
      description: "Take time to rest, recharge, and explore",
    },
    {
      icon: Heart,
      title: "Sick & personal days",
      description: "7 sick days plus 7 personal days when you need them",
    },
    {
      icon: CalendarDays,
      title: "Public holidays off",
      description: "Enjoy all public holidays without worrying about work",
    },
    {
      icon: Users,
      title: "Team events",
      description: "Regular virtual and in-person team building activities",
    },
  ];

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

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
        {/* Hero Section with Stats */}
        <section
          data-header-theme="dark"
          className="relative bg-dark text-dark-foreground pt-32 pb-24"
        >
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
              Build phenomenal products. Join Intrao Tech.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-dark-muted text-xl max-w-2xl mb-10"
            >
              We're a team of passionate designers, developers, and strategists
              who believe in a quality-first mindset. If you care about craft
              and want to make an impact, we'd love to meet you.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="mb-20"
            >
              <Button
                onClick={() => scrollToSection("benefits")}
                className="group"
              >
                Explore Open Positions
                <ButtonArrows />
              </Button>
            </motion.div>

            {/* Stats Grid */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              <p className="text-dark-muted text-sm uppercase tracking-[0.3em] mb-6">
                Intrao in Facts and Numbers
              </p>
              <div className="border-t border-dark-muted/15">
                <div className="grid grid-cols-1 md:grid-cols-3">
                  {stats.map((stat, index) => (
                    <div
                      key={stat.label}
                      className={`text-center py-12 ${
                        index < stats.length - 1
                          ? "md:border-r border-b md:border-b-0 border-dark-muted/15"
                          : ""
                      }`}
                    >
                      <p className="text-5xl md:text-6xl font-bold text-dark-foreground mb-2">
                        {stat.value}
                      </p>
                      <p className="text-dark-muted text-base">{stat.label}</p>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>

          {/* Bottom wave */}
          <div className="absolute bottom-[1px] left-0 w-full translate-y-full pointer-events-none z-20">
            <svg
              viewBox="0 0 1440 120"
              preserveAspectRatio="none"
              className="block w-full h-[60px] md:h-[80px] lg:h-[100px]"
            >
              <path
                className="fill-dark"
                d="M0,0 L0,0 C360,0 360,80 720,80 C1080,80 1080,0 1440,0 L1440,0 Z"
              />
            </svg>
          </div>
        </section>

        {/* About Section */}
        <section
          data-header-theme="light"
          className="bg-background text-foreground py-28"
        >
          <div className="container mx-auto px-6">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-sm uppercase tracking-[0.3em] text-muted-foreground mb-8"
            >
              A Bit More About Us
            </motion.p>

            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-3xl md:text-4xl lg:text-5xl font-bold mb-10 max-w-4xl"
            >
              Started by designers who sweat every pixel
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-muted-foreground text-lg leading-relaxed max-w-3xl"
            >
              Intrao Tech was founded with a simple belief: great products come
              from teams that truly care. Our founders came from backgrounds in
              design and engineering, frustrated by agencies that prioritized
              speed over quality. We built Intrao Tech to be different — a place
              where craft matters, where every detail is considered, and where
              our team has the autonomy to do their best work. Today, we're a
              distributed team across Europe and North America, united by our
              passion for building products that users actually love.
            </motion.p>
          </div>
        </section>

        {/* Values Section */}
        <section
          data-header-theme="light"
          className="bg-background text-foreground py-28 border-t border-border"
        >
          <div className="container mx-auto px-6">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-sm uppercase tracking-[0.3em] text-muted-foreground mb-8"
            >
              What Guides Us
            </motion.p>

            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-3xl md:text-4xl lg:text-5xl font-bold mb-8"
            >
              Values we stand for
            </motion.h2>

            {/* Stacking cards container */}
            <div className="border-t border-border">
              {values.map((value, index) => (
                <div
                  key={value.number}
                  className="sticky bg-background border-b border-border"
                  style={{ top: `${80 + index * 8}px` }}
                >
                  <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.5 }}
                    className="grid grid-cols-1 md:grid-cols-[280px_1fr] gap-8 py-16 md:py-24 lg:py-32"
                  >
                    {/* Left side */}
                    <div className="flex flex-col justify-between">
                      <p className="text-muted-foreground text-lg">
                        {value.title}
                      </p>
                      <p className="text-muted-foreground/50 text-sm mt-4 md:mt-0">
                        {value.number}
                      </p>
                    </div>

                    {/* Right side */}
                    <div>
                      <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4 text-foreground">
                        {value.heading}
                      </h3>
                      <p className="text-muted-foreground leading-relaxed max-w-2xl">
                        {value.description}
                      </p>
                    </div>
                  </motion.div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section
          id="benefits"
          data-header-theme="light"
          className="bg-background text-foreground pt-28"
        >
          <div className="container mx-auto px-6">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-sm uppercase tracking-[0.3em] text-muted-foreground mb-8"
            >
              What We Offer
            </motion.p>

            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-3xl md:text-4xl lg:text-5xl font-bold mb-12"
            >
              Extra benefits
            </motion.h2>
          </div>

          {/* Table grid - full width horizontal borders */}
          <div className="border-t border-border">
            {[0, 1, 2, 3].map((rowIndex) => {
              const rowBenefits = benefits.slice(rowIndex * 3, rowIndex * 3 + 3);
              if (rowBenefits.length === 0) return null;

              // Pad with empty cells to always have 3 columns
              const paddedRow = [...rowBenefits];
              while (paddedRow.length < 3) {
                paddedRow.push(null);
              }

              return (
                <div key={rowIndex} className="border-b border-border">
                  <div className="container mx-auto px-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                      {paddedRow.map((benefit, colIndex) => {
                        if (!benefit) {
                          // Empty cell with borders
                          return (
                            <div
                              key={`empty-${colIndex}`}
                              className={`hidden lg:block py-10 lg:py-14 ${
                                colIndex === 1 ? "lg:px-10 lg:border-x border-border" : ""
                              } ${colIndex === 0 ? "lg:pr-10" : ""} ${
                                colIndex === 2 ? "lg:pl-10" : ""
                              }`}
                            />
                          );
                        }
                        const Icon = benefit.icon;
                        return (
                          <motion.div
                            key={benefit.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: colIndex * 0.03 }}
                            className={`py-10 lg:py-14 ${
                              colIndex === 1 ? "lg:px-10 lg:border-x border-border" : ""
                            } ${colIndex === 0 ? "lg:pr-10" : ""} ${
                              colIndex === 2 ? "lg:pl-10" : ""
                            } ${colIndex === 0 ? "md:pr-6 md:border-r lg:border-r-0" : ""} ${
                              colIndex === 1 ? "md:pl-6 lg:pl-10" : ""
                            } ${colIndex < paddedRow.filter(Boolean).length - 1 ? "border-b md:border-b-0" : ""} border-border`}
                          >
                            <Icon className="w-10 h-10 text-muted-foreground/40 mb-16" strokeWidth={1.5} />
                            <h3 className="text-xl font-bold mb-3">
                              {benefit.title}
                            </h3>
                            <p className="text-muted-foreground leading-relaxed">
                              {benefit.description}
                            </p>
                          </motion.div>
                        );
                      })}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Spacer to prevent overlap with wave */}
          <div className="h-24 md:h-32 lg:h-40" />
        </section>

        {/* CTA Section */}
        <section
          data-header-theme="dark"
          className="relative bg-dark text-dark-foreground py-32"
        >
          {/* Top curve */}
          <div className="absolute top-[1px] left-0 w-full -translate-y-full pointer-events-none z-20">
            <svg
              viewBox="0 0 1440 120"
              preserveAspectRatio="none"
              className="block w-full h-[60px] md:h-[80px] lg:h-[100px]"
            >
              <path
                className="fill-dark"
                d="M0,120 L0,120 C360,120 360,40 720,40 C1080,40 1080,120 1440,120 L1440,120 Z"
              />
            </svg>
          </div>

          <div className="container mx-auto px-6">
            <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
              {/* Image */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="w-full lg:w-1/2 flex justify-center"
              >
                <img
                  src={careerImage}
                  alt="Join our team"
                  className="w-full max-w-md lg:max-w-lg"
                />
              </motion.div>

              {/* Content */}
              <div className="w-full lg:w-1/2 text-center lg:text-left">
                <motion.h2
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6"
                >
                  Ready to join us?
                </motion.h2>

                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                  className="text-dark-muted text-lg mb-8 max-w-lg mx-auto lg:mx-0"
                >
                  We're always looking for talented people who share our passion
                  for building exceptional digital products. Send us your resume
                  and let's start a conversation.
                </motion.p>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                >
                  <Button asChild size="lg" className="group">
                    <a href="mailto:info@intrao.tech?subject=Career Application&body=Hi, I'm interested in joining Intrao Tech. Here's a bit about me:%0A%0A">
                      Apply Now
                      <ButtonArrows />
                    </a>
                  </Button>
                </motion.div>
              </div>
            </div>
          </div>

          {/* Bottom curve */}
          <div className="absolute bottom-[1px] left-0 w-full translate-y-full pointer-events-none z-20">
            <svg
              viewBox="0 0 1440 120"
              preserveAspectRatio="none"
              className="block w-full h-[60px] md:h-[80px] lg:h-[100px]"
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
