import { ReactNode, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

interface DarkSectionsWrapperProps {
  children: ReactNode;
}

const DarkSectionsWrapper = ({ children }: DarkSectionsWrapperProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  
  return (
    <div ref={containerRef} className="relative" style={{ marginBottom: '-100px' }}>
      {/* Sticky dark sections container */}
      <div className="sticky top-0 z-0">
        {children}
      </div>
      {/* This creates scroll space for the overlap effect */}
      <div className="h-[100px]" />
    </div>
  );
};

export default DarkSectionsWrapper;
