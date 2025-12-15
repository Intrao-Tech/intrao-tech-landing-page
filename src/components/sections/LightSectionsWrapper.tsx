import { ReactNode } from "react";

interface LightSectionsWrapperProps {
  children: ReactNode;
}

const LightSectionsWrapper = ({ children }: LightSectionsWrapperProps) => {
  return (
    <div className="relative z-10 bg-background rounded-t-[60px] -mt-16">
      {children}
    </div>
  );
};

export default LightSectionsWrapper;
