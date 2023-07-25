import { cva, VariantProps } from "class-variance-authority";

import { Button, ButtonProps } from "./button";

import "./button.scss";
import { cloneElement, isValidElement, ReactElement } from "react";

type Omitted = "isFullWidth";

const iconButton = cva(["icon-button"]);

export type IconButtonProps = Omit<ButtonProps, Omitted> &
  VariantProps<typeof iconButton> & {
    icon: React.ReactElement;
    "aria-label": string;
  };

export function IconButton(props: IconButtonProps) {
  const { icon, children, "aria-label": ariaLabel, ...delegated } = props;

  const element = icon || children;

  const buttonChildren = isValidElement(element)
    ? cloneElement(element as ReactElement, {
        "aria-hidden": true,
        focusable: false,
      })
    : null;

  return (
    <Button aria-label={ariaLabel} className={iconButton()} {...delegated}>
      {buttonChildren}
    </Button>
  );
}
