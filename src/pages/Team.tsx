import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowUpRight, TrendingUp, Globe, Handshake } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ButtonArrows } from "@/components/ui/button-arrows";

const Team = () => {
  const [activeAdvisor, setActiveAdvisor] = useState(0);

  const teamMembers = [
    {
      name: "Polina Chebanova",
      role: "Co-founder & Chief Partnership Officer",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=400&fit=crop",
    },
    {
      name: "Valerii Filimonov",
      role: "CEO & Co-founder",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&h=400&fit=crop",
    },
    {
      name: "Yuliia Apanasenko",
      role: "Head of Product Business Unit",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=400&fit=crop",
    },
    {
      name: "Anatolii Sakhno",
      role: "Head of Development",
      image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&h=400&fit=crop",
    },
    {
      name: "Alina Sanotska",
      role: "HR & Operations Director",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop",
    },
    {
      name: "Ruslan Vashchenko",
      role: "Head of Design",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop",
    },
    {
      name: "Adam Kyle Wilson",
      role: "Head of Design, North America",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop",
    },
    {
      name: "Mike Abbott",
      role: "Head of Operations, North America",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop",
    },
    {
      name: "Joshua Caleb",
      role: "Head of US Development",
      image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&h=400&fit=crop",
    },
    {
      name: "Mike Kimelman",
      role: "Head of US Sales",
      image: "https://images.unsplash.com/photo-1519345182560-3f2917c472ef?w=400&h=400&fit=crop",
    },
    {
      name: "Craig Tortolani",
      role: "Head of US Marketing",
      image: "https://images.unsplash.com/photo-1463453091185-61582044d556?w=400&h=400&fit=crop",
    },
  ];

  const advisors = [
    {
      name: "Oleg Zubchenok",
      role: "CBDO, CDTO, Commercial Director, Board Advisor",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=600&fit=crop",
      bio: "Oleg, an MBA graduate, is a seasoned business consultant, mentor, and advisor specializing in offering valuable insights to business owners and management teams. With a strong foundation in Physics and Biophysics, coupled with a BA in Economics, he garnered extensive experience in retail network development and operations over 14 years.",
    },
    {
      name: "Adam Kyle Wilson",
      role: "Co-founder/CEO at Polyform, Techstars Mentor",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=600&h=600&fit=crop",
      bio: "Adam is a serial entrepreneur and product visionary with over 150 products launched and 50+ industry awards. As a Techstars mentor, he guides startups through product development and market fit challenges, bringing deep expertise in AR/VR and emerging technologies.",
    },
    {
      name: "Diego Pavan",
      role: "XR Product Manager/Consultant",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=600&h=600&fit=crop",
      bio: "Diego brings over 10 years of XR experience and an MBA to his role as product consultant. He specializes in helping companies navigate the complexities of extended reality product development, from ideation to market launch.",
    },
  ];

  const principles = [
    {
      icon: TrendingUp,
      title: "Focus on business results",
      description: "We do not just create for the sake of creating – we're focused on building products that bring results. With our full-cycle product services and trusted business advisors, we know how to design & develop a product, find its product/market fit, and expand it to new markets.",
    },
    {
      icon: Globe,
      title: "Transparency in everything",
      description: "We promote transparency everywhere – in our daily communication with our dedicated team and customers. We are guided by it on every project and every interaction. We believe that transparency is a key to fruitful collaboration and trust.",
    },
    {
      icon: Handshake,
      title: "Partners, not just vendors",
      description: "We are not just your another vendor, but a reliable partner that cares about your product as much as you do. We dive into each process, offer our expertise and make every effort to give you the maximum value. We're a part of your team and will always have your back.",
    },
  ];

  const awards = [
    { name: "Clutch", description: "Top product design company 2024", link: "#" },
    { name: "Upwork", description: "Top rated plus agency by Upwork", link: "#" },
    { name: "Webflow", description: "Professional partner by Webflow", link: "#" },
    { name: "UX Design Awards", description: "Nominee 2024", link: "#" },
    { name: "Awwwards", description: "Site of the Day & honorable mentions", link: "#" },
  ];

  return (
    <>
      <Helmet>
        <title>Team and Advisors | Intrao Tech</title>
        <meta
          name="description"
          content="Meet the talented team and advisors behind Intrao Tech. Our experts bring years of experience in design, development, and digital strategy."
        />
      </Helmet>

      <Header />

      <main>
        {/* Hero Section */}
        <section data-header-theme="dark" className="bg-dark text-dark-foreground pt-32 pb-24 min-h-[70vh] flex items-center">
          <div className="container mx-auto px-6">
            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="heading-1 mb-8 max-w-4xl"
            >
              Intrao Tech Team
              <br />
              & Advisors
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-dark-muted text-lg md:text-xl max-w-xl mb-10"
            >
              Meet a team of trusted experts & savvy advisors dedicated to delivering profound business results by driving innovation and excellence.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <Button asChild className="group">
                <Link to="/contacts">
                  Let's Talk
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

        {/* Leadership Team Section */}
        <section data-header-theme="light" className="bg-background text-foreground py-24">
          <div className="container mx-auto px-6">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-16"
            >
              Our leadership team
            </motion.h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {teamMembers.map((member, index) => (
                <motion.div
                  key={member.name}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                  className="group border border-border rounded-lg p-5 transition-all duration-300 hover:shadow-lg"
                >
                  <div className="aspect-[4/5] overflow-hidden rounded-lg mb-5">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <h3 className="text-xl font-semibold mb-1">{member.name}</h3>
                  <p className="text-muted-foreground">{member.role}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Company Advisors Section */}
        <section data-header-theme="light" className="bg-background text-foreground py-24">
          <div className="container mx-auto px-6">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8"
            >
              Company Advisors
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-muted-foreground text-lg max-w-2xl mb-16"
            >
              Intrao Tech is guided and supported by a distinguished team of best-in-class and accomplished advisors. With their strategic guidance, product vision and business consulting, we empower our customers to adopt a forward-thinking approach, seize opportunities, and make well-informed decisions that drive their companies to new heights of success.
            </motion.p>

            <div className="mb-8">
              <p className="text-muted-foreground text-sm uppercase tracking-widest mb-2">Our Advisors</p>
              <p className="text-4xl font-bold">
                <span className="text-foreground">0{activeAdvisor + 1}</span>
                <span className="text-muted-foreground/30"> - 0{advisors.length}</span>
              </p>
            </div>

            {/* Advisor Cards */}
            <div className="space-y-8">
              {advisors.map((advisor, index) => (
                <motion.div
                  key={advisor.name}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className={`grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-10 items-center p-6 rounded-lg transition-all duration-300 cursor-pointer ${
                    activeAdvisor === index ? "bg-muted/30" : "hover:bg-muted/20"
                  }`}
                  onClick={() => setActiveAdvisor(index)}
                >
                  <div className="aspect-[4/5] overflow-hidden rounded-lg">
                    <img
                      src={advisor.image}
                      alt={advisor.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="text-3xl md:text-4xl font-bold mb-2">
                      {advisor.name.split(" ")[0]}
                      <br />
                      {advisor.name.split(" ").slice(1).join(" ")}
                    </h3>
                    <p className="text-muted-foreground mb-6">{advisor.role}</p>
                    <button className="inline-flex items-center gap-2 bg-dark text-dark-foreground px-6 py-4 rounded-lg text-base font-semibold uppercase tracking-wider transition-all duration-300 hover:bg-dark/90 mb-6">
                      <ArrowUpRight className="w-5 h-5" />
                      Visit Website
                    </button>
                    <p className="text-muted-foreground leading-relaxed">{advisor.bio}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Principles Section */}
        <section data-header-theme="light" className="bg-background text-foreground py-24">
          <div className="container mx-auto px-6">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
            >
              Principles we stand behind
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-muted-foreground text-lg max-w-2xl mb-16"
            >
              Intrao Tech is a team of like-minded professionals who are united by similar goals, principles, values and approaches to what we do.
            </motion.p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {principles.map((principle, index) => (
                <motion.div
                  key={principle.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="relative pt-8"
                >
                  {/* Gradient top border */}
                  <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary to-primary/30 rounded-full" />

                  <div className="pt-6">
                    <principle.icon className="w-10 h-10 text-muted-foreground mb-6" strokeWidth={1.5} />
                    <h3 className="text-2xl font-bold mb-4">{principle.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{principle.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
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

          <div className="container mx-auto px-6 text-center">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-3xl md:text-4xl lg:text-5xl font-bold mb-8"
            >
              Want to join our team?
            </motion.h2>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Button asChild size="lg" className="group">
                <Link to="/careers">
                  View Careers
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

export default Team;
