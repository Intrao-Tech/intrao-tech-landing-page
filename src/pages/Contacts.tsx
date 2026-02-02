import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WorldMap from "@/components/WorldMap";
import { motion } from "framer-motion";
import { useState } from "react";
import { ArrowRight, Linkedin } from "lucide-react";
import ukFlag from "@/assets/flag-united-kingdom.svg";
import antonPhoto from "@/assets/anton.jpg";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { ArrowLink } from "@/components/ui/arrow-link";

const Contacts = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    budget: "",
  });
  const [isLoading, setIsLoading] = useState(false);

  const budgetOptions = [
    "up to $10k",
    "$10-$20k",
    "$20-$50k",
    "$50-$100k",
    ">$100k",
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          access_key: import.meta.env.VITE_WEB3FORMS_KEY,
          subject: `New Contact from ${formData.name}`,
          from_name: formData.name,
          email: formData.email,
          message: formData.message,
          budget: formData.budget || "Not specified",
        }),
      });

      if (response.ok) {
        toast.success("Thank you! We'll get back to you soon.");
        setFormData({ name: "", email: "", message: "", budget: "" });
      } else {
        toast.error("Something went wrong. Please try again.");
      }
    } catch {
      toast.error("Failed to send message. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  const locations = [
    {
      flag: ukFlag,
      country: "UNITED KINGDOM",
      city: "LONDON",
      company: "Intrao Tech Ltd",
      details: "150 Minories, London EC3N 1LS, United Kingdom",
    },
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
        <section data-header-theme="dark" className="bg-dark text-dark-foreground pt-32 pb-12">
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
        <section data-header-theme="dark" className="relative z-10 bg-dark text-dark-foreground pb-24 lg:pb-32">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-[2fr_1fr] border-t border-dark-muted/30">
              {/* Form */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="pt-12 lg:pr-12 lg:border-r lg:border-dark-muted/30"
              >
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
                    <div>
                      <label className="label text-dark-muted mb-2 block">
                        YOUR NAME
                      </label>
                      <input
                        type="text"
                        value={formData.name}
                        onChange={(e) =>
                          setFormData({ ...formData, name: e.target.value })
                        }
                        placeholder="ENTER YOUR NAME *"
                        required
                        className="w-full bg-transparent border-b border-dark-muted/30 py-4 text-dark-foreground placeholder:text-dark-muted placeholder:uppercase focus:outline-none focus:border-primary transition-colors duration-300"
                      />
                    </div>

                    <div>
                      <label className="label text-dark-muted mb-2 block">
                        YOUR EMAIL
                      </label>
                      <input
                        type="email"
                        value={formData.email}
                        onChange={(e) =>
                          setFormData({ ...formData, email: e.target.value })
                        }
                        placeholder="ENTER YOUR EMAIL *"
                        required
                        className="w-full bg-transparent border-b border-dark-muted/30 py-4 text-dark-foreground placeholder:text-dark-muted placeholder:uppercase focus:outline-none focus:border-primary transition-colors duration-300"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="label text-dark-muted mb-2 block">
                      MESSAGE
                    </label>
                    <textarea
                      value={formData.message}
                      onChange={(e) =>
                        setFormData({ ...formData, message: e.target.value })
                      }
                      placeholder="TELL US ABOUT YOUR PROJECT"
                      rows={4}
                      className="w-full bg-transparent border-b border-dark-muted/30 py-4 text-dark-foreground placeholder:text-dark-muted placeholder:uppercase focus:outline-none focus:border-primary transition-colors duration-300 resize-none"
                    />
                  </div>

                  <div>
                    <label className="label text-dark-muted mb-4 block">
                      YOUR BUDGET FOR THIS PROJECT?
                    </label>
                    <div className="flex flex-wrap gap-3">
                      {budgetOptions.map((option) => (
                        <button
                          key={option}
                          type="button"
                          onClick={() => setFormData({ ...formData, budget: option })}
                          className={`px-6 py-3 rounded-lg text-sm uppercase transition-all duration-300 ${
                            formData.budget === option
                              ? "bg-dark-foreground text-dark"
                              : "border border-dark-muted/50 text-dark-foreground hover:border-dark-foreground"
                          }`}
                        >
                          {option}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row sm:items-center gap-4 mt-4">
                    <Button type="submit" size="lg" className="group" disabled={isLoading}>
                      {isLoading ? "Sending..." : "Submit"}
                      {!isLoading && <ArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />}
                    </Button>
                    <p className="text-sm text-dark-muted uppercase">
                      BY CLICKING THIS BUTTON YOU ACCEPT{" "}
                      <ArrowLink href="/terms-of-use" variant="light" showArrow={false}>
                        TERMS OF SERVICE
                      </ArrowLink>{" "}
                      AND{" "}
                      <ArrowLink href="/privacy-policy" variant="light" showArrow={false}>
                        PRIVACY POLICY
                      </ArrowLink>
                    </p>
                  </div>
                </form>
              </motion.div>

              {/* Contact Info */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="border-t border-dark-muted/30 lg:border-t-0"
              >
                <div className="pt-12 lg:pl-12">
                  <h3 className="heading-4 mb-8 text-dark-foreground">
                    Have a project to discuss?
                  </h3>
                  <div className="flex items-start gap-4">
                    <div className="w-20 h-20 bg-muted rounded-lg overflow-hidden flex-shrink-0">
                      <img
                        src={antonPhoto}
                        alt="Anton Palmer"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-start justify-between">
                        <div>
                          <p className="font-semibold text-dark-foreground">Anton Palmer</p>
                          <p className="text-sm text-dark-muted">Co-Founder & CEO</p>
                        </div>
                        <Button asChild variant="icon-dark" size="icon-sm" className="!h-8 !w-8">
                          <a href="https://www.linkedin.com/in/anthony-palmer-390167359/" target="_blank" rel="noopener noreferrer">
                            <Linkedin />
                          </a>
                        </Button>
                      </div>
                      <ArrowLink href="mailto:info@intrao.tech" variant="light" showArrow={false} className="mt-3">
                        INFO@INTRAO.TECH
                      </ArrowLink>
                    </div>
                  </div>
                </div>
              </motion.div>
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
              className="heading-1 max-w-4xl"
            >
              Collaborating across borders to deliver seamless solutions — wherever you are
            </motion.h2>

            <div className="border-b border-border mt-12 mb-12" />

            {/* Map Container */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="w-full aspect-[2/1] max-w-5xl mx-auto"
            >
              <WorldMap variant="full" />
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
                  className="grid grid-cols-12 gap-4 py-8 items-center"
                >
                  {/* Flag */}
                  <div className="col-span-2 md:col-span-1">
                    <img src={location.flag} alt={location.country} className="w-8 h-8 md:w-10 md:h-10" />
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
