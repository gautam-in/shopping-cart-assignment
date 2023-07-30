import { CSSProperties, forwardRef } from "react";
import { cva, cx, VariantProps } from "class-variance-authority";

import { margin, MarginVariants } from "../../../../cva-utils/spacings";

import "./text.scss";

const text = cva(["text"], {
  variants: {
    variant: {
      p: "p",
      span: "span",
    },
    clamp: {
      true: "clamp",
    },
    align: {
      left: "align-left",
      center: "align-center",
      right: "align-right",
    },
  },
  defaultVariants: {
    variant: "p",
    clamp: false,
  },
});

export type TextProps = MarginVariants &
  Omit<VariantProps<typeof text>, "clamp"> &
  React.ComponentPropsWithoutRef<"h3"> & {
    noOfLines?: number;
  };

export const Text = forwardRef<HTMLParagraphElement, TextProps>(
  (props, ref) => {
    const {
      align,
      m,
      mt,
      mr,
      mb,
      ml,
      noOfLines,
      variant = "p",
      className,
      children,
      ...delegated
    } = props;

    if (variant === null) return;

    const textClasses = cx(
      margin({ m, mt, mr, mb, ml }),
      text({
        align,
        variant,
        className,
        clamp: !!noOfLines,
      })
    );

    const TextTag = variant;

    const cssVariables = {
      "--no-of-lines": noOfLines,
    } as CSSProperties;

    return (
      <TextTag
        style={{ ...cssVariables }}
        ref={ref}
        className={textClasses}
        {...delegated}
      >
        {children}
      </TextTag>
    );
  }
);
