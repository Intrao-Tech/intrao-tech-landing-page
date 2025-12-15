import { ReactNode } from "react";

interface LightSectionsWrapperProps {
  children: ReactNode;
}

const LightSectionsWrapper = ({ children }: LightSectionsWrapperProps) => {
  return (
    <div className="relative z-10 bg-background rounded-t-[60px] shadow-[0_-30px_60px_rgba(0,0,0,0.15)]">
      {children}
    </div>
  );
};

export default LightSectionsWrapper;
