import { createContext, useContext, useState, useEffect, ReactNode } from "react";
import { useLocation } from "react-router-dom";

type HeaderTheme = "dark" | "light";

interface HeaderThemeContextType {
  theme: HeaderTheme;
  setTheme: (theme: HeaderTheme) => void;
}

const HeaderThemeContext = createContext<HeaderThemeContextType | undefined>(undefined);

export const useHeaderTheme = () => {
  const context = useContext(HeaderThemeContext);
  if (!context) {
    throw new Error("useHeaderTheme must be used within a HeaderThemeProvider");
  }
  return context;
};

interface HeaderThemeProviderProps {
  children: ReactNode;
}

export const HeaderThemeProvider = ({ children }: HeaderThemeProviderProps) => {
  const [theme, setTheme] = useState<HeaderTheme>("dark");
  const location = useLocation();

  useEffect(() => {
    // Reset theme on route change
    setTheme("dark");
  }, [location.pathname]);

  useEffect(() => {
    const observerCallback: IntersectionObserverCallback = (entries) => {
      // Find the section that's most visible at the top of the viewport
      let topSection: Element | null = null;
      let topIntersection = Infinity;

      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const rect = entry.boundingClientRect;
          // We want the section closest to the top of the viewport
          if (Math.abs(rect.top) < topIntersection) {
            topIntersection = Math.abs(rect.top);
            topSection = entry.target;
          }
        }
      });

      if (topSection) {
        const sectionTheme = topSection.getAttribute("data-header-theme");
        if (sectionTheme === "light" || sectionTheme === "dark") {
          setTheme(sectionTheme);
        }
      }
    };

    const observer = new IntersectionObserver(observerCallback, {
      // Only observe the top portion where header is
      rootMargin: "0px 0px -90% 0px",
      threshold: [0, 0.1, 0.2, 0.3, 0.4, 0.5],
    });

    // Observe all sections with data-header-theme attribute
    const sections = document.querySelectorAll("[data-header-theme]");
    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, [location.pathname]);

  return (
    <HeaderThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </HeaderThemeContext.Provider>
  );
};
