import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { Linkedin, Instagram } from "lucide-react";
import Header from "@/components/Header";
import { Button } from "@/components/ui/button";
import { ButtonArrows } from "@/components/ui/button-arrows";
import { ArrowLink } from "@/components/ui/arrow-link";

// Custom Behance icon
const BehanceIcon = () => (
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
  >
    <path d="M3 12h6c1.7 0 3-1.3 3-3s-1.3-3-3-3H3v12h7c1.7 0 3-1.3 3-3s-1.3-3-3-3" />
    <path d="M15 6h6" />
    <path d="M15 17.5c0 1.4 1.1 2.5 2.5 2.5h3c1.4 0 2.5-1.1 2.5-2.5v-3c0-1.4-1.1-2.5-2.5-2.5h-3c-1.4 0-2.5 1.1-2.5 2.5v3z" />
  </svg>
);

// Custom Dribbble icon
const DribbbleIcon = () => (
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
  >
    <circle cx="12" cy="12" r="10" />
    <path d="M19.13 5.09C15.22 9.14 10 10.44 2.25 10.94" />
    <path d="M21.75 12.84c-6.62-1.41-12.14 1-16.38 6.32" />
    <path d="M8.56 2.75c4.37 6 6 9.42 8 17.72" />
  </svg>
);

const socialLinks = [
  { icon: BehanceIcon, href: "#", label: "Behance" },
  { icon: DribbbleIcon, href: "#", label: "Dribbble" },
  { icon: Instagram, href: "#", label: "Instagram" },
  { icon: Linkedin, href: "#", label: "LinkedIn" },
];

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <>
      <Header />

      <main className="relative min-h-screen bg-dark" data-header-theme="dark">
        <section className="container mx-auto px-6 pt-40 pb-24">
          {/* Label */}
          <p className="text-dark-muted uppercase tracking-widest text-sm mb-6">
            Something went wrong
          </p>

          {/* Main Heading */}
          <h1 className="text-dark-foreground text-5xl md:text-6xl lg:text-7xl font-medium mb-8">
            Page not found
          </h1>

          {/* Email */}
          <ArrowLink
            href="mailto:hello@intrao.tech"
            variant="light"
            showArrow={false}
            className="mb-8"
          >
            hello@intrao.tech
          </ArrowLink>

          {/* Social Icons */}
          <div className="flex gap-3 mb-12">
            {socialLinks.map((social) => (
              <Button
                key={social.label}
                variant="outline-dark"
                size="icon-md"
                asChild
              >
                <a href={social.href} aria-label={social.label}>
                  <social.icon />
                </a>
              </Button>
            ))}
          </div>

          {/* Go Home Button */}
          <Button asChild className="group">
            <Link to="/">
              Go Home
              <ButtonArrows />
            </Link>
          </Button>
        </section>

        {/* Bottom Bar */}
        <div className="absolute bottom-0 left-0 right-0">
          <div className="container mx-auto px-6 py-8">
            <div className="flex flex-wrap items-center gap-2 text-base text-dark-muted">
              <span>Intrao Tech © {new Date().getFullYear()}</span>
              <span>/</span>
              <a href="/terms" className="hover:text-dark-foreground transition-colors">
                Terms of Use
              </a>
              <span>/</span>
              <a href="/privacy" className="hover:text-dark-foreground transition-colors">
                Privacy Policy
              </a>
              <span>/</span>
              <a href="/cookies" className="hover:text-dark-foreground transition-colors">
                Cookies Policy
              </a>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default NotFound;
