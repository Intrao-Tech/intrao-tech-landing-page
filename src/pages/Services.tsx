import { SEOHead } from "@/components/SEOHead";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ButtonArrows } from "@/components/ui/button-arrows";
import { ArrowLink } from "@/components/ui/arrow-link";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";

interface ServiceItem {
  name: string;
  description: string;
  link: string;
}

interface ServiceCardProps {
  service: ServiceItem;
  index: number;
}

const ServiceCard = ({ service, index }: ServiceCardProps) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.4, delay: index * 0.05 }}
    className="border-t border-border pt-6"
  >
    <h4 className="heading-4 mb-3">{service.name}</h4>
    <p className="text-muted-foreground mb-4 leading-relaxed">
      {service.description}
    </p>
    <ArrowLink to={service.link} variant="dark">
      Explore
    </ArrowLink>
  </motion.div>
);

const Services = () => {
  const stats = [
    { value: "98%", label: "customer satisfaction rate" },
    { value: "100+", label: "projects delivered successfully" },
    { value: "120+", label: "successful project launches" },
  ];

  const growthStageServices = {
    validate: [
      {
        name: "Design prototype",
        description: "Test product ideas fast with clickable user journeys and visual flows.",
        link: "/contacts",
      },
      {
        name: "Product discovery",
        description: "Map out key features, user flows, and architecture to align your team and reduce risks.",
        link: "/services/product-discovery",
      },
      {
        name: "Website development",
        description: "Launch a fast, scalable site that converts and supports product growth.",
        link: "/services/website-development",
      },
    ],
    build: [
      {
        name: "Branding",
        description: "Develop a brand that resonates - visually, emotionally, and strategically.",
        link: "/services/branding",
      },
      {
        name: "Technical workshop",
        description: "Validate your tech stack, architecture, and scalability path.",
        link: "/services/technical-workshop",
      },
      {
        name: "Custom MVP development",
        description: "Expand your prototype into a fully functional, production-ready product.",
        link: "/contacts",
      },
      {
        name: "Rapid MVP development",
        description: "Get your MVP 50% faster with lean sprints and pre-built frameworks.",
        link: "/contacts",
      },
      {
        name: "Dedicated team",
        description: "Access a team of experts to fuel your product's growth.",
        link: "/contacts",
      },
    ],
    scale: [
      {
        name: "UX audit",
        description: "Identify usability bottlenecks, improve engagement, and optimize for conversions.",
        link: "/services/ux-audit",
      },
      {
        name: "Product redesign",
        description: "Upgrade legacy interfaces with scalable, business-driven UX and UI from a top-notch design agency.",
        link: "/contacts",
      },
      {
        name: "Team extension",
        description: "Instantly scale with dedicated designers and developers ready to start.",
        link: "/contacts",
      },
      {
        name: "Website redesign",
        description: "Modernize your web presence with a digital product design agency that drives engagement and brand authority.",
        link: "/services/website-redesign",
      },
    ],
  };

  const disciplineServices = {
    research: [
      {
        name: "UX audit",
        description: "Identify usability bottlenecks, improve engagement, and optimize for conversions.",
        link: "/services/ux-audit",
      },
      {
        name: "Product discovery",
        description: "Map out key features, user flows, and architecture to align your team and reduce risks.",
        link: "/services/product-discovery",
      },
      {
        name: "Technical workshop",
        description: "Validate your tech stack, architecture, and scalability path.",
        link: "/services/technical-workshop",
      },
    ],
    design: [
      {
        name: "Website design services",
        description: "Custom website layouts and UX/UI strategies to improve engagement and conversions.",
        link: "/services/website-design",
      },
      {
        name: "Website redesign",
        description: "Modernize your web presence with a digital product design agency that drives engagement and brand authority.",
        link: "/services/website-redesign",
      },
      {
        name: "Web app design",
        description: "Design responsive, user-focused web platforms with strong UX/UI logic.",
        link: "/services/web-app-design",
      },
      {
        name: "Mobile app design",
        description: "Create intuitive, performance-optimized mobile apps for iOS and Android.",
        link: "/services/mobile-app-design",
      },
      {
        name: "Branding",
        description: "Develop a brand that resonates - visually, emotionally, and strategically.",
        link: "/services/branding",
      },
    ],
    development: [
      {
        name: "Web development",
        description: "Custom web solutions, from complex platforms to responsive websites, to boost functionality and drive growth.",
        link: "/services/web-development",
      },
      {
        name: "Mobile app development",
        description: "End-to-end development of mobile applications for iOS and Android platforms.",
        link: "/services/mobile-development",
      },
      {
        name: "No-code development",
        description: "Fast and cost-effective product development using no-code and low-code platforms.",
        link: "/services/no-code-development",
      },
      {
        name: "Blockchain development",
        description: "Secure and scalable blockchain-based applications, smart contracts, and DeFi solutions.",
        link: "/services/blockchain-development",
      },
      {
        name: "Website development",
        description: "Launch a fast, scalable site that converts and supports product growth.",
        link: "/services/website-development",
      },
    ],
  };

  return (
    <>
      <SEOHead
        title="Services | One Partner, Design to Deployed - Intrao Tech"
        description="Full-service dev & design from one lean team. We build fast because we're not a 50-person agency. MVP development, UI/UX design, and web apps."
        canonical="/services"
      />

      <Header />

      <main>
        {/* Hero Section */}
        <section data-header-theme="dark" className="bg-dark text-dark-foreground pt-32 pb-20">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 mb-16">
              {/* Left Column */}
              <div>
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  className="label text-dark-muted mb-6"
                >
                  One Partner. Design to Deployed.
                </motion.p>

                <motion.h1
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.1 }}
                  className="heading-1 mb-6"
                >
                  We build fast because we're not a 50-person agency
                </motion.h1>

                <motion.p
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="text-dark-muted text-lg mb-8 max-w-xl"
                >
                  Full-service dev & design from one lean team. No handoffs between vendors, no bureaucracy - just a direct line to decision-makers who ship.
                </motion.p>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  className="flex flex-wrap gap-4"
                >
                  <Button asChild size="default" className="group">
                    <Link to="/contacts">
                      Let's talk
                      <ButtonArrows />
                    </Link>
                  </Button>
                  <Button asChild variant="outline-dark" size="default" className="group">
                    <Link to="/cases">
                      View our cases
                      <ButtonArrows />
                    </Link>
                  </Button>
                </motion.div>
              </div>

              {/* Right Column */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="flex flex-col justify-center"
              >
                <p className="text-dark-muted text-lg leading-relaxed">
                  Whether you need a product redesign, an MVP, or a scalable development team, we turn your vision into reality. Founder-led execution, lean processes, and direct communication - so you can focus on scaling.
                </p>
              </motion.div>
            </div>

            {/* Stats Grid */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
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
        </section>

        {/* Growth Stage Services Section */}
        <section data-header-theme="light" className="bg-background text-foreground py-24">
          <div className="container mx-auto px-6">
            {/* Section Header */}
            <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-12">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="max-w-2xl"
              >
                <p className="label text-muted-foreground mb-4">
                  Tailored Solutions for Every Growth Stage
                </p>
                <h2 className="heading-2">
                  Expert support at every step of your startup journey
                </h2>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <ArrowLink to="/contacts" variant="dark">
                  Let's connect
                </ArrowLink>
              </motion.div>
            </div>

            {/* Tabs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Tabs defaultValue="validate" className="w-full">
                <TabsList className="bg-transparent h-auto p-0 gap-1 mb-12 border-b border-border pb-4 w-full justify-start">
                  <TabsTrigger
                    value="validate"
                    className="data-[state=active]:bg-dark data-[state=active]:text-dark-foreground data-[state=inactive]:bg-transparent data-[state=inactive]:text-muted-foreground px-6 py-3 rounded-lg font-semibold uppercase tracking-wider text-sm transition-all"
                  >
                    Validate
                  </TabsTrigger>
                  <TabsTrigger
                    value="build"
                    className="data-[state=active]:bg-dark data-[state=active]:text-dark-foreground data-[state=inactive]:bg-transparent data-[state=inactive]:text-muted-foreground px-6 py-3 rounded-lg font-semibold uppercase tracking-wider text-sm transition-all"
                  >
                    Build
                  </TabsTrigger>
                  <TabsTrigger
                    value="scale"
                    className="data-[state=active]:bg-dark data-[state=active]:text-dark-foreground data-[state=inactive]:bg-transparent data-[state=inactive]:text-muted-foreground px-6 py-3 rounded-lg font-semibold uppercase tracking-wider text-sm transition-all"
                  >
                    Scale
                  </TabsTrigger>
                </TabsList>

                <TabsContent value="validate" className="mt-0">
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {growthStageServices.validate.map((service, index) => (
                      <ServiceCard key={service.name} service={service} index={index} />
                    ))}
                  </div>
                </TabsContent>

                <TabsContent value="build" className="mt-0">
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {growthStageServices.build.map((service, index) => (
                      <ServiceCard key={service.name} service={service} index={index} />
                    ))}
                  </div>
                </TabsContent>

                <TabsContent value="scale" className="mt-0">
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {growthStageServices.scale.map((service, index) => (
                      <ServiceCard key={service.name} service={service} index={index} />
                    ))}
                  </div>
                </TabsContent>
              </Tabs>
            </motion.div>
          </div>
        </section>

        {/* Discipline Services Section */}
        <section data-header-theme="light" className="bg-background text-foreground py-24 border-t border-border">
          <div className="container mx-auto px-6">
            {/* Section Header */}
            <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-12">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="max-w-2xl"
              >
                <p className="label text-muted-foreground mb-4">
                  Research, Design & Development - All in One Place
                </p>
                <h2 className="heading-2">
                  A full-cycle approach to digital product success
                </h2>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <ArrowLink to="/contacts" variant="dark">
                  Let's connect
                </ArrowLink>
              </motion.div>
            </div>

            {/* Tabs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Tabs defaultValue="research" className="w-full">
                <TabsList className="bg-transparent h-auto p-0 gap-1 mb-12 border-b border-border pb-4 w-full justify-start">
                  <TabsTrigger
                    value="research"
                    className="data-[state=active]:bg-dark data-[state=active]:text-dark-foreground data-[state=inactive]:bg-transparent data-[state=inactive]:text-muted-foreground px-6 py-3 rounded-lg font-semibold uppercase tracking-wider text-sm transition-all"
                  >
                    Research
                  </TabsTrigger>
                  <TabsTrigger
                    value="design"
                    className="data-[state=active]:bg-dark data-[state=active]:text-dark-foreground data-[state=inactive]:bg-transparent data-[state=inactive]:text-muted-foreground px-6 py-3 rounded-lg font-semibold uppercase tracking-wider text-sm transition-all"
                  >
                    Design
                  </TabsTrigger>
                  <TabsTrigger
                    value="development"
                    className="data-[state=active]:bg-dark data-[state=active]:text-dark-foreground data-[state=inactive]:bg-transparent data-[state=inactive]:text-muted-foreground px-6 py-3 rounded-lg font-semibold uppercase tracking-wider text-sm transition-all"
                  >
                    Development
                  </TabsTrigger>
                </TabsList>

                <TabsContent value="research" className="mt-0">
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {disciplineServices.research.map((service, index) => (
                      <ServiceCard key={service.name} service={service} index={index} />
                    ))}
                  </div>
                </TabsContent>

                <TabsContent value="design" className="mt-0">
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {disciplineServices.design.map((service, index) => (
                      <ServiceCard key={service.name} service={service} index={index} />
                    ))}
                  </div>
                </TabsContent>

                <TabsContent value="development" className="mt-0">
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {disciplineServices.development.map((service, index) => (
                      <ServiceCard key={service.name} service={service} index={index} />
                    ))}
                  </div>
                </TabsContent>
              </Tabs>
            </motion.div>
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
              className="heading-2 mb-8"
            >
              Ready to start your project?
            </motion.h2>
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
        </section>
      </main>

      <Footer />
    </>
  );
};

export default Services;
