import { forwardRef } from "react";
import { Link, LinkProps } from "react-router-dom";
import { cva, cx, VariantProps } from "class-variance-authority";

import { margin, MarginVariants } from "../../../cva-utils/spacings";

import "./button.scss";

const button = cva(["button"], {
  variants: {
    variant: {
      solid: "solid",
      outline: "outline",
      ghost: "ghost",
    },
    size: {
      xs: "xs",
      sm: "sm",
      md: "md",
      lg: "lg",
    },
    isFullWidth: {
      true: "isFullWidth",
    },
    isPill: {
      true: "is-pill",
    },
  },
  defaultVariants: {
    variant: "solid",
    size: "md",
    isFullWidth: false,
    isPill: false,
  },
});

export type ButtonProps = MarginVariants &
  VariantProps<typeof button> &
  React.ComponentPropsWithoutRef<"button">;

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (props, ref) => {
    const {
      m,
      mt,
      mr,
      mb,
      ml,
      variant,
      size,
      isFullWidth,
      isPill,
      className,
      children,
      ...delegated
    } = props;

    const buttonClasses = cx(
      margin({ m, mt, mr, mb, ml }),
      button({
        variant,
        size,
        isFullWidth,
        isPill,
        className: className,
      })
    );

    return (
      <button ref={ref} className={buttonClasses} {...delegated}>
        {children}
      </button>
    );
  }
);

export type ButtonLinkProps = MarginVariants &
  VariantProps<typeof button> &
  LinkProps;

export const ButtonLink = (props: ButtonLinkProps) => {
  const {
    to,
    m,
    mt,
    mr,
    mb,
    ml,
    variant,
    size,
    isFullWidth,
    isPill,
    className,
    ...delegated
  } = props;

  const buttonClasses = cx(
    margin({ m, mt, mr, mb, ml }),
    button({
      variant,
      size,
      isFullWidth,
      isPill,
      className: className,
    })
  );

  return <Link className={buttonClasses} to={to} {...delegated} />;
};
