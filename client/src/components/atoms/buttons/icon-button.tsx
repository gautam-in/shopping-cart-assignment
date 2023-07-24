import { cva, VariantProps } from "class-variance-authority";

import { Button, ButtonProps } from "./button";

import "./button.scss";
import { cloneElement, isValidElement } from "react";

type Omitted = "isFullWidth";

const iconButton = cva(["icon-button"], {
  variants: {
    isPill: {
      true: "isPill",
    },
  },
  defaultVariants: {
    isPill: false,
  },
});

export type IconButtonProps = Omit<ButtonProps, Omitted> &
  VariantProps<typeof iconButton> & {
    icon: React.ReactElement;
    "aria-label": string;
  };

export function IconButton(props: IconButtonProps) {
  const {
    icon,
    children,
    isPill,
    "aria-label": ariaLabel,
    ...delegated
  } = props;

  const element = icon || children;

  const buttonChildren = isValidElement(element)
    ? cloneElement(element as any, {
        "aria-hidden": true,
        focusable: false,
      })
    : null;

  return (
    <Button
      aria-label={ariaLabel}
      className={iconButton({ isPill })}
      {...delegated}
    >
      {buttonChildren}
    </Button>
  );
}
