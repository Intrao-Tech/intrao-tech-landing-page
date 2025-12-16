import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowUpRight, ChevronDown } from "lucide-react";
import logoFull from "@/assets/logo.svg";
import logoFullDark from "@/assets/logo-dark.svg";
import { useHeaderTheme } from "@/contexts/HeaderThemeContext";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isCompanyDropdownOpen, setIsCompanyDropdownOpen] = useState(false);
  const [isMobileCompanyExpanded, setIsMobileCompanyExpanded] = useState(false);
  const location = useLocation();
  const { theme } = useHeaderTheme();

  const isLight = theme === "light";

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
    setIsCompanyDropdownOpen(false);
    setIsMobileCompanyExpanded(false);
  }, [location]);

  const navLinks = [
    { name: "Services", href: "/services" },
    { name: "Cases", href: "/cases" },
    { name: "Company", href: "#", hasDropdown: true },
    { name: "Insights", href: "/insights" },
    { name: "Contacts", href: "/contacts" },
  ];

  const companyLinks = [
    { name: "About us", href: "/about" },
    { name: "Team and Advisors", href: "/team" },
    { name: "Careers", href: "/careers" },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? isLight
              ? "bg-background/95 backdrop-blur-md py-4"
              : "bg-dark/95 backdrop-blur-md py-4"
            : "bg-transparent py-6"
        }`}
      >
        <div className="container mx-auto px-6 flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="relative z-50">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="flex items-center"
            >
              <img
                src={isLight ? logoFullDark : logoFull}
                alt="Intrao Tech"
                className="h-8 w-auto object-contain transition-opacity duration-300"
              />
            </motion.div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link, index) => (
              <motion.div
                key={link.name}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                className="relative"
                onMouseEnter={() => link.hasDropdown && setIsCompanyDropdownOpen(true)}
                onMouseLeave={() => link.hasDropdown && setIsCompanyDropdownOpen(false)}
              >
                {link.hasDropdown ? (
                  <button
                    className={`flex items-center gap-1 text-sm font-medium uppercase tracking-wider transition-colors duration-300 ${
                      ["/about", "/team", "/careers"].includes(location.pathname)
                        ? "text-primary"
                        : isLight
                          ? "text-foreground hover:text-primary"
                          : "text-dark-foreground hover:text-primary"
                    }`}
                  >
                    {link.name}
                    <ChevronDown
                      className={`w-4 h-4 transition-transform duration-300 ${
                        isCompanyDropdownOpen ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                ) : (
                  <Link
                    to={link.href}
                    className={`text-sm font-medium uppercase tracking-wider transition-colors duration-300 ${
                      location.pathname === link.href
                        ? "text-primary"
                        : isLight
                          ? "text-foreground hover:text-primary"
                          : "text-dark-foreground hover:text-primary"
                    }`}
                  >
                    {link.name}
                  </Link>
                )}
              </motion.div>
            ))}
          </nav>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="hidden lg:block"
          >
            <Link
              to="/contacts"
              className={`group flex items-center gap-2 border px-8 py-4 text-sm font-semibold uppercase tracking-wider transition-all duration-300 rounded-xl ${
                isLight
                  ? "border-muted-foreground text-foreground hover:bg-foreground hover:text-background"
                  : "border-dark-muted text-dark-foreground hover:bg-dark-foreground hover:text-dark"
              }`}
            >
              Get in Touch
              <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
            </Link>
          </motion.div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`lg:hidden relative z-50 p-2 transition-colors duration-300 ${
              isLight
                ? "text-foreground"
                : "text-dark-foreground"
            }`}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
      </header>

      {/* Company Dropdown */}
      <AnimatePresence>
        {isCompanyDropdownOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="fixed left-0 right-0 z-[45] hidden lg:block"
            style={{ top: isScrolled ? "76px" : "92px" }}
            onMouseEnter={() => setIsCompanyDropdownOpen(true)}
            onMouseLeave={() => setIsCompanyDropdownOpen(false)}
          >
            <div className={`${isLight ? "bg-white" : "bg-dark"}`}>
              <div className="container mx-auto px-6 py-12">

                <div className="grid grid-cols-2 gap-12 max-w-4xl">
                  {/* Left: CTA Block */}
                  <div className={`rounded-2xl p-8 ${
                    isLight ? "bg-gray-50 border border-gray-100" : "bg-dark-muted/20"
                  }`}>
                    <h3 className={`text-2xl md:text-3xl font-bold leading-tight mb-6 ${
                      isLight ? "text-foreground" : "text-dark-foreground"
                    }`}>
                      Ready to bring your idea to life?
                    </h3>
                    <Link
                      to="/contacts"
                      className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-xl text-sm font-semibold uppercase tracking-wider transition-all duration-300 hover:bg-primary/90"
                    >
                      Let's Talk
                      <ArrowUpRight className="w-4 h-4" />
                    </Link>
                  </div>

                  {/* Right: Navigation Links */}
                  <div className="flex flex-col justify-center gap-4">
                    {companyLinks.map((link) => (
                      <Link
                        key={link.name}
                        to={link.href}
                        className={`text-xl font-medium transition-colors duration-300 ${
                          location.pathname === link.href
                            ? "text-primary"
                            : isLight
                              ? "text-foreground hover:text-primary"
                              : "text-dark-foreground hover:text-primary"
                        }`}
                      >
                        {link.name}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
              <div className={`h-px ${isLight ? "bg-gray-100" : "bg-white/20"}`} />
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className={`fixed inset-0 z-40 pt-24 lg:hidden ${
              isLight ? "bg-background" : "bg-dark"
            }`}
          >
            <nav className="container mx-auto px-6 py-8">
              <div className="flex flex-col gap-6">
                {navLinks.map((link, index) => (
                  <motion.div
                    key={link.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                  >
                    {link.hasDropdown ? (
                      <div>
                        <button
                          onClick={() => setIsMobileCompanyExpanded(!isMobileCompanyExpanded)}
                          className={`flex items-center gap-2 text-2xl font-semibold uppercase tracking-wider transition-colors duration-300 ${
                            ["/about", "/team", "/careers"].includes(location.pathname)
                              ? "text-primary"
                              : isLight
                                ? "text-foreground hover:text-primary"
                                : "text-dark-foreground hover:text-primary"
                          }`}
                        >
                          {link.name}
                          <ChevronDown
                            className={`w-5 h-5 transition-transform duration-300 ${
                              isMobileCompanyExpanded ? "rotate-180" : ""
                            }`}
                          />
                        </button>
                        <AnimatePresence>
                          {isMobileCompanyExpanded && (
                            <motion.div
                              initial={{ opacity: 0, height: 0 }}
                              animate={{ opacity: 1, height: "auto" }}
                              exit={{ opacity: 0, height: 0 }}
                              transition={{ duration: 0.2 }}
                              className="overflow-hidden"
                            >
                              <div className="flex flex-col gap-3 pl-4 pt-4">
                                {companyLinks.map((subLink) => (
                                  <Link
                                    key={subLink.name}
                                    to={subLink.href}
                                    className={`text-lg font-medium transition-colors duration-300 ${
                                      location.pathname === subLink.href
                                        ? "text-primary"
                                        : isLight
                                          ? "text-muted-foreground hover:text-primary"
                                          : "text-dark-muted hover:text-primary"
                                    }`}
                                  >
                                    {subLink.name}
                                  </Link>
                                ))}
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    ) : (
                      <Link
                        to={link.href}
                        className={`text-2xl font-semibold uppercase tracking-wider transition-colors duration-300 ${
                          location.pathname === link.href
                            ? "text-primary"
                            : isLight
                              ? "text-foreground hover:text-primary"
                              : "text-dark-foreground hover:text-primary"
                        }`}
                      >
                        {link.name}
                      </Link>
                    )}
                  </motion.div>
                ))}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: navLinks.length * 0.1 }}
                  className="mt-6"
                >
                  <Link
                    to="/contacts"
                    className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-10 py-5 rounded-xl text-sm font-semibold uppercase tracking-wider"
                  >
                    Get in Touch
                    <ArrowUpRight className="w-4 h-4" />
                  </Link>
                </motion.div>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;
