import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowDownRight, Building2, Quote } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ButtonArrows } from "@/components/ui/button-arrows";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

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
    { value: "6+", label: "Years in business" },
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
    {
      quote: "Intrao Tech exceeded our expectations in every way. Their team took our vague concept and transformed it into a polished, user-friendly platform. The attention to detail and commitment to quality was evident throughout the entire project.",
      name: "Sarah Chen",
      company: "FinanceFlow",
      role: "CEO",
    },
    {
      quote: "Working with Intrao Tech was a game-changer for our startup. They delivered a robust MVP in record time, allowing us to secure our seed funding. Their technical expertise and business acumen made them invaluable partners.",
      name: "David Miller",
      company: "HealthTech Solutions",
      role: "Founder",
    },
    {
      quote: "The team at Intrao Tech truly understands modern web development. They rebuilt our entire platform with cutting-edge technology, resulting in a 40% improvement in performance and significantly better user engagement.",
      name: "Emma Wilson",
      company: "RetailPro",
      role: "CTO",
    },
    {
      quote: "Exceptional work from start to finish. Intrao Tech's designers and developers worked seamlessly together to deliver a product that not only looks beautiful but performs flawlessly. Highly recommended for any serious project.",
      name: "James Park",
      company: "EduLearn Platform",
      role: "Product Director",
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
        <section data-header-theme="dark" className="bg-dark text-dark-foreground pt-32 pb-24 relative">
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

        {/* Wave Divider */}
        <div className="bg-dark">
          <svg
            className="w-full h-[80px] md:h-[120px] lg:h-[150px]"
            viewBox="0 0 1440 150"
            preserveAspectRatio="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0,150 L0,100 Q360,0 720,80 Q1080,160 1440,60 L1440,150 Z"
              className="fill-background"
            />
          </svg>
        </div>

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
                Since 2019, Intrao Tech has grown into a top-tier global design and development studio, with teams based in London, Poland, Ukraine, Estonia, US, and Canada.
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
                  className="relative bg-muted/30 border border-border rounded-lg p-8 min-h-[280px] flex flex-col"
                >
                  <span className="absolute top-6 right-6 bg-foreground text-background text-xs font-semibold px-3 py-1.5 rounded-lg">
                    {principle.number}
                  </span>
                  <h3 className="text-3xl md:text-4xl font-bold pr-16">{principle.title}</h3>
                  <p className="text-muted-foreground leading-relaxed mt-auto">{principle.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Reviews Section */}
        <section data-header-theme="dark" className="relative z-10 bg-dark text-dark-foreground py-24">
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

            <Carousel
              opts={{
                align: "start",
                loop: true,
                dragFree: true,
              }}
              plugins={[
                Autoplay({
                  delay: 4000,
                  stopOnInteraction: false,
                  stopOnMouseEnter: true,
                }),
              ]}
              className="w-full"
            >
              <CarouselContent className="py-10">
                {testimonials.map((testimonial, index) => (
                  <CarouselItem key={testimonial.name} className="pl-6 md:basis-1/2">
                    <div className="relative flex flex-col border border-dark-foreground/10 rounded-2xl p-8 pt-14 h-full">
                      {/* Company Logo - overlapping top border */}
                      <div className="absolute -top-8 left-1/2 -translate-x-1/2">
                        <div className="w-16 h-16 rounded-full bg-background flex items-center justify-center">
                          <Building2 className="w-7 h-7 text-foreground" />
                        </div>
                      </div>

                      {/* Quote Marks */}
                      <Quote className="w-10 h-10 text-primary mb-6" />

                      {/* Quote Text */}
                      <p className="text-dark-foreground mb-8 leading-relaxed text-lg">
                        {testimonial.quote}
                      </p>

                      {/* Author Info */}
                      <div className="flex items-center gap-4 mb-8">
                        <div className="w-12 h-12 rounded-full bg-dark-muted/50 flex items-center justify-center text-sm font-semibold overflow-hidden">
                          {testimonial.name.split(' ').map(n => n[0]).join('')}
                        </div>
                        <div>
                          <p className="font-semibold">{testimonial.name}</p>
                          <p className="text-dark-muted text-sm">
                            {testimonial.role} {testimonial.company}
                          </p>
                        </div>
                      </div>

                      {/* Bottom Links */}
                      <div className="flex flex-wrap gap-6 text-sm mt-auto pt-6 border-t border-dark-foreground/10 -mx-8 px-8">
                        <Link
                          to="/cases"
                          className="inline-flex items-center gap-2 text-primary hover:text-primary/80 uppercase tracking-wider font-medium transition-colors"
                        >
                          <span className="text-lg">*</span> Explore Case Study
                        </Link>
                        <span className="inline-flex items-center gap-2 text-dark-muted uppercase tracking-wider font-medium cursor-pointer hover:text-dark-foreground transition-colors">
                          <span className="font-bold">C</span> See Full Review
                        </span>
                      </div>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
            </Carousel>
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
                className="group relative block border-2 border-primary rounded-lg py-16 text-center overflow-hidden isolate"
              >
                {/* Circle fill background */}
                <span className="absolute inset-0 bg-primary rounded-full scale-0 opacity-0 transition-all duration-300 ease-out group-hover:scale-[2.5] group-hover:opacity-100 -z-10" />

                {/* Text with scroll animation */}
                <span className="relative inline-block overflow-hidden h-[48px] md:h-[56px]">
                  <span className="block text-3xl md:text-4xl font-bold leading-[48px] md:leading-[56px] transition-transform duration-300 group-hover:-translate-y-full">
                    Get a quote
                  </span>
                  <span className="block text-3xl md:text-4xl font-bold leading-[48px] md:leading-[56px] transition-transform duration-300 group-hover:-translate-y-full">
                    Talk with us
                  </span>
                </span>
              </Link>
            </motion.div>
          </div>
        </section>

        {/* Awards Section */}
        <section data-header-theme="dark" className="relative z-10 bg-dark text-dark-foreground py-24">
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

        {/* Final CTA Section */}
        <section data-header-theme="light" className="bg-background text-foreground pt-32 lg:pt-40 pb-24">
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

            <div className="grid grid-cols-1 md:grid-cols-2 border-t border-b border-border">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="text-center py-16 md:py-20 md:border-r border-border"
              >
                <h3 className="text-2xl font-bold mb-4">Cases</h3>
                <p className="text-muted-foreground mb-8">
                  Check out the projects we have completed for our clients
                </p>
                <Button asChild className="group bg-foreground text-background hover:bg-foreground/90">
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
                className="text-center py-16 md:py-20"
              >
                <h3 className="text-2xl font-bold mb-4">Services</h3>
                <p className="text-muted-foreground mb-8">
                  Discover the multitude of methods we can use to enhance your product
                </p>
                <Button asChild className="group bg-foreground text-background hover:bg-foreground/90">
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
