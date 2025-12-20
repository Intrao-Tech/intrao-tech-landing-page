import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface ArrowLinkProps {
  to?: string;
  href?: string;
  children: React.ReactNode;
  variant?: "dark" | "light";
  showArrow?: boolean;
  className?: string;
}

export const ArrowLink = ({
  to,
  href,
  children,
  variant = "dark",
  showArrow = true,
  className,
}: ArrowLinkProps) => {
  const baseClasses = cn(
    "arrow-link inline-flex items-center gap-2 font-semibold uppercase tracking-wider text-sm group",
    variant === "dark" ? "arrow-link-dark" : "arrow-link-light",
    className
  );

  const content = (
    <>
      <span className="arrow-link-text">{children}</span>
      {showArrow && <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />}
    </>
  );

  // External link
  if (href) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={baseClasses}
      >
        {content}
      </a>
    );
  }

  // Internal link
  if (to) {
    return (
      <Link to={to} className={baseClasses}>
        {content}
      </Link>
    );
  }

  return null;
};
