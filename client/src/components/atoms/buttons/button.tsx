import { forwardRef } from "react";
import { cva, cx, VariantProps } from "class-variance-authority";

import "./button.scss";
import { margin, MarginVariants } from "../../../cva-utils/spacings";

const button = cva(["button"], {
  variants: {
    variant: {
      solid: "solid",
      outline: "outline",
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
      true: "isPill",
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
