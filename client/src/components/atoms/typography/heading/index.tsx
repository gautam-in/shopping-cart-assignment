import { CSSProperties, forwardRef } from "react";
import { cva, cx, VariantProps } from "class-variance-authority";

import { margin, MarginVariants } from "../../../../cva-utils/spacings";

import "./heading.scss";

const heading = cva(["heading"], {
  variants: {
    variant: {
      h1: "h1",
      h2: "h2",
      h3: "h3",
      h4: "h4",
      h5: "h5",
      h6: "h6",
    },
    clamp: {
      true: "clamp",
    },
  },
  defaultVariants: {
    variant: "h3",
    clamp: false,
  },
});

export type HeadingProps = MarginVariants &
  Omit<VariantProps<typeof heading>, "clamp"> &
  React.ComponentPropsWithoutRef<"h3"> & {
    noOfLines?: number;
  };

export const Heading = forwardRef<HTMLHeadingElement, HeadingProps>(
  (props, ref) => {
    const {
      m,
      mt,
      mr,
      mb,
      ml,
      noOfLines,
      variant = "h3",
      className,
      children,
      ...delegated
    } = props;

    if (variant === null) return;

    const headingClasses = cx(
      margin({ m, mt, mr, mb, ml }),
      heading({
        variant,
        className,
        clamp: !!noOfLines,
      })
    );

    const HeadingTag = variant;

    const cssVariables = {
      "--no-of-lines": noOfLines,
    } as CSSProperties;

    return (
      <HeadingTag
        style={{ ...cssVariables }}
        ref={ref}
        className={headingClasses}
        {...delegated}
      >
        {children}
      </HeadingTag>
    );
  }
);
