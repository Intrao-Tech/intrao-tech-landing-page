import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { useState } from "react";
import { ArrowRight, Linkedin, Mail } from "lucide-react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";

const Contacts = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    budget: "",
  });

  const budgetOptions = [
    "up to $10k",
    "$10-$20k",
    "$20-$50k",
    "$50-$100k",
    ">$100k",
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Thank you for reaching out! We'll get back to you within 24 hours.");
    setFormData({ name: "", email: "", message: "", budget: "" });
  };

  const locations = [
    {
      flag: "🇺🇸",
      country: "UNITED STATES",
      city: "NEW YORK",
      company: "Intrao Tech Inc.",
      details: "123 Tech Avenue, Suite 500, NY 10001",
    },
    {
      flag: "🇵🇱",
      country: "POLAND",
      city: "WARSAW",
      company: "Intrao Tech Sp. z o.o.",
      details: "ul. Marszałkowska 1/100, 00-001",
    },
    {
      flag: "🇺🇦",
      country: "UKRAINE",
      city: "KYIV",
      company: "Intrao Tech LLC",
      details: "1 Khreshchatyk St, Kyiv 01001",
    },
  ];

  const flagPositions = [
    { flag: "🇨🇦", top: "28%", left: "18%" },
    { flag: "🇺🇸", top: "42%", left: "22%" },
    { flag: "🇪🇪", top: "22%", left: "58%" },
    { flag: "🇵🇱", top: "32%", left: "54%" },
    { flag: "🇺🇦", top: "34%", left: "60%" },
    { flag: "🇨🇭", top: "38%", left: "52%" },
  ];

  return (
    <>
      <Helmet>
        <title>Contact Us | Intrao Tech - Get in Touch</title>
        <meta
          name="description"
          content="Ready to start your project? Contact Intrao Tech today. Let's discuss how we can help you launch, scale, and succeed."
        />
      </Helmet>

      <Header />

      <main>
        {/* Hero Section */}
        <section data-header-theme="dark" className="bg-dark text-dark-foreground pt-32 pb-16">
          <div className="container mx-auto px-6">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="label text-dark-muted mb-8"
            >
              We turn bold ideas into successful products
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="heading-1"
            >
              Got an idea?
              <br />
              Let's talk!
            </motion.h1>
          </div>
        </section>

        {/* Contact Form Section */}
        <section data-header-theme="dark" className="relative bg-dark text-dark-foreground py-20">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-16">
              {/* Form */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="lg:col-span-2"
              >
                <form onSubmit={handleSubmit} className="space-y-8">
                  <div>
                    <label className="text-dark-muted text-xs uppercase tracking-[0.2em] mb-3 block">
                      Your Name
                    </label>
                    <input
                      type="text"
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                      placeholder="Enter your name"
                      required
                      className="w-full bg-transparent border-0 border-b border-dark-muted/30 pb-4 text-lg text-dark-foreground placeholder:text-dark-muted/50 focus:outline-none focus:border-primary transition-colors duration-300"
                    />
                  </div>

                  <div>
                    <label className="text-dark-muted text-xs uppercase tracking-[0.2em] mb-3 block">
                      Your Email
                    </label>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      placeholder="Enter your email"
                      required
                      className="w-full bg-transparent border-0 border-b border-dark-muted/30 pb-4 text-lg text-dark-foreground placeholder:text-dark-muted/50 focus:outline-none focus:border-primary transition-colors duration-300"
                    />
                  </div>

                  <div>
                    <label className="text-dark-muted text-xs uppercase tracking-[0.2em] mb-3 block">
                      Message
                    </label>
                    <textarea
                      value={formData.message}
                      onChange={(e) =>
                        setFormData({ ...formData, message: e.target.value })
                      }
                      placeholder="Tell us about your project"
                      rows={3}
                      required
                      className="w-full bg-transparent border-0 border-b border-dark-muted/30 pb-4 text-lg text-dark-foreground placeholder:text-dark-muted/50 focus:outline-none focus:border-primary transition-colors duration-300 resize-none"
                    />
                  </div>

                  <div>
                    <label className="text-dark-muted text-xs uppercase tracking-[0.2em] mb-4 block">
                      Your budget for this project?
                    </label>
                    <div className="flex flex-wrap gap-3">
                      {budgetOptions.map((option) => (
                        <button
                          key={option}
                          type="button"
                          onClick={() => setFormData({ ...formData, budget: option })}
                          className={`px-5 py-3 text-sm rounded-xl transition-all duration-300 ${
                            formData.budget === option
                              ? "bg-primary text-primary-foreground"
                              : "border border-dark-muted/30 text-dark-muted hover:text-dark-foreground hover:border-dark-foreground"
                          }`}
                        >
                          {option}
                        </button>
                      ))}
                    </div>
                  </div>

                  <Button type="submit" size="lg" className="group mt-4">
                    Submit
                    <ArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
                  </Button>
                </form>
              </motion.div>

              {/* Contact Cards */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="lg:col-span-1 space-y-6"
              >
                {/* Card 1 - Project Discussion */}
                <div className="border border-dark-muted/20 rounded-xl p-6">
                  <h3 className="text-xl font-semibold mb-5">
                    Have a project to discuss?
                  </h3>

                  <div className="flex items-start gap-4">
                    <div className="relative flex-shrink-0">
                      <div className="w-14 h-14 rounded-full bg-gradient-to-br from-rose-400 to-rose-600 flex items-center justify-center overflow-hidden">
                        <span className="text-xl font-semibold text-dark-foreground">AE</span>
                      </div>
                      <Button asChild variant="icon-circle" size="icon" className="absolute -bottom-1 -right-1 w-7 h-7 bg-dark border-dark-muted/30 text-dark-muted">
                        <a href="#" aria-label="LinkedIn">
                          <Linkedin className="w-3.5 h-3.5" />
                        </a>
                      </Button>
                    </div>
                    <div className="flex-1">
                      <p className="font-semibold">Account Executive</p>
                      <a
                        href="mailto:hello@intrao.tech"
                        className="flex items-center gap-2 text-primary hover:text-primary/80 transition-colors duration-300 text-sm mt-2"
                      >
                        <Mail className="w-4 h-4" />
                        hello@intrao.tech
                      </a>
                    </div>
                  </div>
                </div>

                {/* Card 2 - Partnership */}
                <div className="border border-dark-muted/20 rounded-xl p-6">
                  <h3 className="text-dark-muted text-xs uppercase tracking-[0.2em] mb-5">
                    Have a partnership in mind?
                  </h3>

                  <div className="flex items-start gap-4">
                    <div className="relative flex-shrink-0">
                      <div className="w-14 h-14 rounded-full bg-gradient-to-br from-blue-400 to-indigo-600 flex items-center justify-center overflow-hidden">
                        <span className="text-xl font-semibold text-dark-foreground">CF</span>
                      </div>
                      <Button asChild variant="icon-circle" size="icon" className="absolute -bottom-1 -right-1 w-7 h-7 bg-dark border-dark-muted/30 text-dark-muted">
                        <a href="#" aria-label="LinkedIn">
                          <Linkedin className="w-3.5 h-3.5" />
                        </a>
                      </Button>
                    </div>
                    <div className="flex-1">
                      <p className="font-semibold">Co-Founder</p>
                      <a
                        href="mailto:partner@intrao.tech"
                        className="flex items-center gap-2 text-primary hover:text-primary/80 transition-colors duration-300 text-sm mt-2"
                      >
                        <Mail className="w-4 h-4" />
                        partner@intrao.tech
                      </a>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
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

        {/* World Map Section */}
        <section data-header-theme="light" className="bg-background text-foreground pt-32 lg:pt-40 pb-24">
          <div className="container mx-auto px-6">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="label text-muted-foreground mb-6"
            >
              Worldwide, where you need us
            </motion.p>

            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="heading-1 mb-16 max-w-4xl"
            >
              Collaborating across borders to deliver seamless solutions — wherever you are
            </motion.h2>

            {/* Map Container */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative w-full aspect-[2/1] max-w-5xl mx-auto"
            >
              {/* World Map SVG */}
              <svg
                viewBox="0 0 1000 500"
                className="w-full h-full"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                {/* Simplified world map paths */}
                <g fill="currentColor" className="text-muted-foreground/10">
                  {/* North America */}
                  <path d="M150 120 Q180 100 220 110 Q260 105 280 130 Q290 160 270 180 Q280 200 260 230 Q240 250 200 260 Q170 270 140 250 Q120 230 130 200 Q110 170 130 140 Q140 120 150 120 Z" />
                  <path d="M180 260 Q220 270 240 300 Q250 330 230 360 Q200 380 170 370 Q140 350 150 320 Q160 290 180 260 Z" />
                  {/* South America */}
                  <path d="M250 350 Q280 340 300 360 Q320 400 310 450 Q290 480 260 470 Q230 450 240 410 Q235 380 250 350 Z" />
                  {/* Europe */}
                  <path d="M480 130 Q520 120 560 130 Q590 140 600 160 Q610 190 590 210 Q560 230 520 220 Q490 210 480 180 Q470 150 480 130 Z" />
                  {/* Africa */}
                  <path d="M500 250 Q540 240 570 260 Q600 290 590 340 Q570 390 530 400 Q490 390 480 350 Q470 300 500 250 Z" />
                  {/* Asia */}
                  <path d="M620 100 Q700 90 780 110 Q840 130 860 180 Q870 230 840 270 Q800 300 740 290 Q680 280 650 240 Q620 200 610 160 Q610 120 620 100 Z" />
                  {/* Australia */}
                  <path d="M780 360 Q820 350 850 370 Q880 400 870 440 Q850 470 810 460 Q770 450 770 410 Q765 380 780 360 Z" />
                </g>
              </svg>

              {/* Flag Markers */}
              {flagPositions.map((pos, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
                  className="absolute text-2xl md:text-3xl"
                  style={{ top: pos.top, left: pos.left }}
                >
                  {pos.flag}
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Office Locations Section */}
        <section data-header-theme="light" className="bg-background text-foreground pb-24">
          <div className="container mx-auto px-6">
            <div className="border-t border-border">
              {locations.map((location, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="grid grid-cols-12 gap-4 py-8 border-b border-border items-center"
                >
                  {/* Flag */}
                  <div className="col-span-2 md:col-span-1">
                    <span className="text-3xl md:text-4xl">{location.flag}</span>
                  </div>

                  {/* Location */}
                  <div className="col-span-10 md:col-span-4">
                    <p className="text-sm uppercase tracking-[0.2em] text-muted-foreground">
                      {location.country}, {location.city}
                    </p>
                  </div>

                  {/* Company Details */}
                  <div className="col-span-12 md:col-span-7 md:text-right">
                    <p className="font-semibold text-lg">{location.company}</p>
                    <p className="text-muted-foreground">{location.details}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default Contacts;
