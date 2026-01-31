import { Link } from "react-router-dom";
import { Linkedin, Instagram, Twitter, Facebook } from "lucide-react";
import { Button } from "@/components/ui/button";
import logoDark from "@/assets/logo-dark.svg";

// Custom Behance icon (lucide-react doesn't have it)
const BehanceIcon = ({ className }: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M3 12h6c1.7 0 3-1.3 3-3s-1.3-3-3-3H3v12h7c1.7 0 3-1.3 3-3s-1.3-3-3-3" />
    <path d="M15 6h6" />
    <path d="M15 17.5c0 1.4 1.1 2.5 2.5 2.5h3c1.4 0 2.5-1.1 2.5-2.5v-3c0-1.4-1.1-2.5-2.5-2.5h-3c-1.4 0-2.5 1.1-2.5 2.5v3z" />
  </svg>
);

// Custom Dribbble icon (lucide-react doesn't have it)
const DribbbleIcon = ({ className }: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <circle cx="12" cy="12" r="10" />
    <path d="M19.13 5.09C15.22 9.14 10 10.44 2.25 10.94" />
    <path d="M21.75 12.84c-6.62-1.41-12.14 1-16.38 6.32" />
    <path d="M8.56 2.75c4.37 6 6 9.42 8 17.72" />
  </svg>
);

const Footer = () => {
  const pageLinks = [
    { name: "Services", href: "/services" },
    { name: "Cases", href: "/cases" },
    { name: "About", href: "/about" },
    { name: "Team", href: "/team" },
    { name: "Careers", href: "/careers" },
    { name: "Insights", href: "/insights" },
    { name: "Contacts", href: "/contacts" },
  ];

  const socialLinks = [
    { icon: BehanceIcon, href: "#", label: "Behance" },
    { icon: DribbbleIcon, href: "#", label: "Dribbble" },
    { icon: Instagram, href: "#", label: "Instagram" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
    { icon: Facebook, href: "#", label: "Facebook" },
    { icon: Twitter, href: "#", label: "X" },
  ];

  const legalLinks = [
    { name: "Terms of Use", href: "/terms-of-use" },
    { name: "Privacy Policy", href: "/privacy-policy" },
    { name: "Cookies Policy", href: "/cookies-policy" },
  ];

  return (
    <footer className="bg-background text-foreground pt-20 md:pt-28 lg:pt-32">
      {/* Main Footer */}
      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {/* Page Links */}
          <div>
            <nav className="flex flex-col space-y-3">
              {pageLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.href}
                  className="text-xl font-medium text-foreground hover:underline transition-all duration-300"
                >
                  {link.name}
                </Link>
              ))}
            </nav>
          </div>

          {/* Social Links */}
          <div>
            <div className="grid grid-cols-4 gap-3 max-w-[300px]">
              {socialLinks.map((social) => (
                <Button
                  key={social.label}
                  asChild
                  variant="icon-light"
                  size="icon-lg"
                >
                  <a href={social.href} aria-label={social.label}>
                    <social.icon />
                  </a>
                </Button>
              ))}
            </div>
          </div>

          {/* Empty column for balance */}
          <div className="hidden lg:block" />
        </div>
      </div>

      {/* Legal Bar */}
      <div>
        <div className="container mx-auto px-6 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2 text-sm text-muted-foreground uppercase tracking-wider">
              {legalLinks.map((link, index) => (
                <span key={link.name} className="flex items-center gap-2">
                  <Link
                    to={link.href}
                    className="hover:text-foreground transition-colors duration-300"
                  >
                    {link.name}
                  </Link>
                  {index < legalLinks.length - 1 && <span>/</span>}
                </span>
              ))}
            </div>
            <p className="text-sm text-muted-foreground uppercase tracking-wider">
              INTRAO TECH © 2025
            </p>
          </div>
        </div>
      </div>

      {/* Big Logo with Blur Effect */}
      <div className="relative overflow-hidden mt-8">
        <div className="container mx-auto px-6">
          <img
            src={logoDark}
            alt="Intrao"
            className="w-full max-w-none select-none"
          />
        </div>
        {/* Blur fade overlay */}
        <div
          className="absolute bottom-0 left-0 right-0 h-1/2 pointer-events-none"
          style={{
            background: 'linear-gradient(to bottom, transparent 0%, hsl(var(--background)) 100%)',
            backdropFilter: 'blur(8px)',
            WebkitBackdropFilter: 'blur(8px)',
            maskImage: 'linear-gradient(to bottom, transparent 0%, black 100%)',
            WebkitMaskImage: 'linear-gradient(to bottom, transparent 0%, black 100%)',
          }}
        />
      </div>
    </footer>
  );
};

export default Footer;
