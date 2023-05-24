import { ButtonHTMLAttributes, ReactNode, FunctionComponent } from "react";
import cn from "classnames";

import "./styles.scss";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement>;

type ButtonComponentProps = {
  variant: string;
  type: "button" | "submit" | "reset";
  classNames?: string;
  children: ReactNode;
};

type CombinedButtonProps = ButtonComponentProps & ButtonProps;

const Button: FunctionComponent<CombinedButtonProps> = ({
  variant,
  type,
  classNames,
  children,
  ...rest
}: CombinedButtonProps) => (
  <button
    type={type}
    className={cn("button", `button--${variant}`, classNames)}
    {...rest}
  >
    {children}
  </button>
);

export default Button;
