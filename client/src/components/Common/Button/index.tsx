import { FunctionComponent, ReactNode } from "react";
import cn from "classnames";

import "./styles.scss";

type ButtonProps = {
  variant: string;
  type: "button" | "submit" | "reset";
  classNames?: string;
  children: ReactNode;
};

const Button: FunctionComponent<ButtonProps> = ({
  variant,
  type,
  classNames,
  children,
  ...rest
}: ButtonProps) => (
  <button
    type={type}
    className={cn("button", `button--${variant}`, classNames)}
    {...rest}
  >
    {children}
  </button>
);

export default Button;
