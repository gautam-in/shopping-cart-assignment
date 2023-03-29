import React, { ButtonHTMLAttributes, forwardRef } from "react";
import styles from "./Button.module.scss";

export interface InputProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "transparent";
}

const Button = forwardRef<HTMLButtonElement, InputProps>(
  ({ variant = "primary", className, children, ...rest }, ref) => {
    return (
      <button
        className={`${styles.btn} ${styles["btn--" + variant]} ${className}`}
        ref={ref}
        {...rest}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";

export default Button;
