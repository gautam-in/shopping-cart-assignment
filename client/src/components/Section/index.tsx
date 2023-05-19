import { FunctionComponent, ReactNode } from "react";
import cn from "classnames";

type SectionProps = {
  children: ReactNode;
  className?: string;
};

const Section: FunctionComponent<SectionProps> = ({
  children,
  className = "",
}) => {
  return (
    <section className={cn(className)}>
      <div className="container">{children}</div>
    </section>
  );
};

export default Section;
