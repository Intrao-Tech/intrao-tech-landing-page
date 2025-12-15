import { motion } from "framer-motion";
import { useState } from "react";
import { ArrowRight, Mail, Linkedin } from "lucide-react";
import { toast } from "sonner";

const ContactFormSection = () => {
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
    toast.success("Thank you for reaching out! We'll get back to you soon.");
    setFormData({ name: "", email: "", message: "", budget: "" });
  };

  return (
    <section id="contact-form" className="bg-background text-foreground py-24 lg:py-32">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-8">
              Have a project in mind?
              <br />
              <span className="text-primary">Let's chat</span>
            </h2>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="text-sm text-muted-foreground mb-2 block">
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
                  className="w-full bg-transparent border-b border-border py-4 text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors duration-300"
                />
              </div>

              <div>
                <label className="text-sm text-muted-foreground mb-2 block">
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
                  className="w-full bg-transparent border-b border-border py-4 text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors duration-300"
                />
              </div>

              <div>
                <label className="text-sm text-muted-foreground mb-2 block">
                  Message
                </label>
                <textarea
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  placeholder="Tell us about your project"
                  rows={4}
                  className="w-full bg-transparent border-b border-border py-4 text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors duration-300 resize-none"
                />
              </div>

              <div>
                <label className="text-sm text-muted-foreground mb-4 block">
                  Your budget for this project?
                </label>
                <div className="flex flex-wrap gap-3">
                  {budgetOptions.map((option) => (
                    <button
                      key={option}
                      type="button"
                      onClick={() => setFormData({ ...formData, budget: option })}
                      className={`px-4 py-2 rounded-full text-sm transition-all duration-300 ${
                        formData.budget === option
                          ? "bg-primary text-primary-foreground"
                          : "border border-border text-muted-foreground hover:text-foreground hover:border-foreground"
                      }`}
                    >
                      {option}
                    </button>
                  ))}
                </div>
              </div>

              <button
                type="submit"
                className="group inline-flex items-center gap-3 bg-primary text-primary-foreground px-8 py-4 rounded-full text-sm font-semibold uppercase tracking-wider transition-all duration-300 hover:bg-primary/90 mt-4"
              >
                Submit
                <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
              </button>
            </form>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:pl-12"
          >
            <div className="border border-border p-8 lg:p-10 h-full">
              <h3 className="text-xl font-semibold mb-8">
                Have a project to discuss?
              </h3>

              <div className="space-y-8">
                <div className="flex items-start gap-4">
                  <div className="w-16 h-16 bg-muted rounded-full overflow-hidden flex-shrink-0">
                    <img
                      src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&h=200&fit=crop"
                      alt="Account Executive"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <p className="font-semibold">Account Executive</p>
                    <div className="flex items-center gap-2 mt-2">
                      <a
                        href="#"
                        className="w-8 h-8 border border-border rounded-full flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary transition-all duration-300"
                      >
                        <Linkedin className="w-4 h-4" />
                      </a>
                    </div>
                    <a
                      href="mailto:hello@intrao.tech"
                      className="inline-flex items-center gap-2 text-primary mt-3"
                    >
                      <Mail className="w-4 h-4" />
                      hello@intrao.tech
                    </a>
                  </div>
                </div>

                <div className="border-t border-border pt-8">
                  <h4 className="text-sm text-muted-foreground uppercase tracking-wider mb-4">
                    Have a partnership in mind?
                  </h4>
                  <div className="flex items-start gap-4">
                    <div className="w-16 h-16 bg-muted rounded-full overflow-hidden flex-shrink-0">
                      <img
                        src="https://images.unsplash.com/photo-1560250097-0b93528c311a?w=200&h=200&fit=crop"
                        alt="Founder"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <p className="font-semibold">Co-Founder</p>
                      <div className="flex items-center gap-2 mt-2">
                        <a
                          href="#"
                          className="w-8 h-8 border border-border rounded-full flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary transition-all duration-300"
                        >
                          <Linkedin className="w-4 h-4" />
                        </a>
                      </div>
                      <a
                        href="mailto:partner@intrao.tech"
                        className="inline-flex items-center gap-2 text-primary mt-3"
                      >
                        <Mail className="w-4 h-4" />
                        partner@intrao.tech
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactFormSection;
