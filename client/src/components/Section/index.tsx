import { FunctionComponent, ReactNode } from "react";
import cn from "classnames";

import "./styles.scss";

type SectionProps = {
  children: ReactNode;
  className?: string;
};

const Section: FunctionComponent<SectionProps> = ({
  children,
  className = "",
}) => {
  return (
    <section className={cn("section", className)}>
      <div className="container">{children}</div>
    </section>
  );
};

export default Section;
