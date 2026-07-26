import { forwardRef } from "react";

import { cn } from "@/lib/utils";

interface SectionProps {
  id?: string;
  children: React.ReactNode;
  className?: string;
}

const Section = forwardRef<HTMLElement, SectionProps>(
  ({ id, children, className }, ref) => {
    return (
      <section
        ref={ref}
        id={id}
        className={cn("relative py-28 lg:py-36", className)}
      >
        {children}
      </section>
    );
  },
);

Section.displayName = "Section";

export default Section;
