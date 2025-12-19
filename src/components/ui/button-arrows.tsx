import { ArrowRight } from "lucide-react";

export const ButtonArrows = () => (
  <span className="relative w-5 h-5 inline-flex">
    {/* Right arrow - visible by default, fades/slides out on hover */}
    <ArrowRight className="absolute inset-0 transition-all duration-300 group-hover:opacity-0 group-hover:translate-x-2" />
    {/* Left arrow - hidden by default, fades/slides in on hover */}
    <ArrowRight className="absolute inset-0 transition-all duration-300 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0" />
  </span>
);
