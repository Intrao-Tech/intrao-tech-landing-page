import { motion } from "framer-motion";
import { useState } from "react";
import { ArrowRight, Linkedin } from "lucide-react";
import { ArrowLink } from "@/components/ui/arrow-link";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import antonPhoto from "@/assets/anton.jpg";
import ihorPhoto from "@/assets/ihor.jpeg";

const ContactFormSection = () => {
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

  return (
    <section id="contact-form" data-header-theme="dark" className="relative z-10 bg-dark text-dark-foreground py-24 lg:py-32">
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
        {/* Heading with bottom border */}
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="heading-2 pb-8"
        >
          Let's chat
        </motion.h2>
        <p className="text-sm text-dark-muted uppercase mt-2 mb-6">
          Free consultation · We respond within 1 hour
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-[2fr_1fr] border-t border-dark-muted/30">
          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="pt-12 lg:pr-12"
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
            className="border-t border-dark-muted/30 lg:border-t-0 lg:border-l lg:border-dark-muted/30"
          >
            <div className="pt-12 lg:pl-12">
              <p className="text-sm uppercase text-dark-muted mb-4">
                Have a partnership in mind?
              </p>
              <div className="flex items-start gap-4">
                <div className="w-20 h-20 bg-muted rounded-lg overflow-hidden flex-shrink-0">
                  <img
                    src={antonPhoto}
                    alt="Anton Muliavchyk"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex-1">
                  <div className="flex items-start justify-between">
                    <div>
                      <p className="font-semibold text-dark-foreground">Anton Muliavchyk</p>
                      <p className="text-sm text-dark-muted">Co-Founder & CEO</p>
                    </div>
                    <Button asChild variant="icon-dark" size="icon-sm" className="!h-8 !w-8">
                      <a href="https://www.linkedin.com/in/muliavchyk/" target="_blank" rel="noopener noreferrer">
                        <Linkedin />
                      </a>
                    </Button>
                  </div>
                  <ArrowLink href="mailto:info@intrao.tech" variant="light" showArrow={false} className="mt-3">
                    INFO@INTRAO.TECH
                  </ArrowLink>
                </div>
              </div>
              <div className="border-t border-dark-muted/30 mt-6 pt-6">
                <p className="text-sm uppercase text-dark-muted mb-4">
                  Have a project to discuss?
                </p>
                <div className="flex items-start gap-4">
                  <div className="w-20 h-20 bg-muted rounded-lg overflow-hidden flex-shrink-0">
                    <img
                      src={ihorPhoto}
                      alt="Ihor Muliar"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex-1">
                  <div className="flex items-start justify-between">
                    <div>
                      <p className="font-semibold text-dark-foreground">Ihor Muliar</p>
                      <p className="text-sm text-dark-muted">Co-Founder & CPO</p>
                    </div>
                    <Button asChild variant="icon-dark" size="icon-sm" className="!h-8 !w-8">
                      <a href="https://www.linkedin.com/in/ihor-muliar/" target="_blank" rel="noopener noreferrer">
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
  );
};

export default ContactFormSection;
