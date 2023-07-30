import * as React from "react";
import { cva, cx, VariantProps } from "class-variance-authority";

import { flexGap, FlexGapVariants } from "../../../cva-utils/spacings";
import { Box, BoxProps } from "../box";

import "./flex.scss";

const flex = cva(["flex"], {
  variants: {
    direction: {
      row: "flex-row",
      "row-reverse": "flex-row-reverse",
      col: "flex-col",
      "col-reverse": "flex-col-reverse",
    },
    justify: {
      start: "justify-start",
      end: "justify-end",
      center: "justify-center",
      between: "justify-between",
      around: "justify-around",
      evenly: "justify-evenly",
    },
    align: {
      start: "align-start",
      end: "align-end",
      center: "align-center",
      baseline: "align-baseline",
      stretch: "align-stretch",
    },
  },
  defaultVariants: {
    direction: "row",
  },
});

export type FlexProps = VariantProps<typeof flex> & FlexGapVariants & BoxProps;

export const Flex = React.forwardRef<HTMLDivElement, FlexProps>(
  (props, ref) => {
    const {
      direction,
      justify,
      align,
      gap,
      className,
      children,
      ...delegated
    } = props;

    const flexClasses = cx(
      flexGap({ gap }),
      flex({ direction, justify, align, className })
    );

    return (
      <Box ref={ref} className={flexClasses} {...delegated}>
        {children}
      </Box>
    );
  }
);

export const Spacer = React.forwardRef<HTMLDivElement, BoxProps>(
  (props, ref) => {
    const { children, ...delegated } = props;

    return (
      <Box ref={ref} className="spacer" {...delegated}>
        {children}
      </Box>
    );
  }
);
