import { FunctionComponent, ReactNode } from "react";
import cn from "classnames";

import "./styles.scss";

type ButtonProps = React.DetailedHTMLProps<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
>;

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
