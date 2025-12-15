import { ReactNode } from "react";

interface DarkSectionsWrapperProps {
  children: ReactNode;
}

const DarkSectionsWrapper = ({ children }: DarkSectionsWrapperProps) => {
  return (
    <div className="relative">
      {/* Sticky dark sections container */}
      <div className="sticky top-0 z-0">
        {children}
      </div>
    </div>
  );
};

export default DarkSectionsWrapper;
