import * as React from "react";
import { cva, cx } from "class-variance-authority";

import {
  MarginVariants,
  PaddingVariants,
  margin,
  padding,
} from "../../../cva-utils/spacings";

import "./box.scss";

const box = cva(["box"]);

export type BoxProps = MarginVariants &
  PaddingVariants &
  React.ComponentPropsWithoutRef<"div">;

export const Box = React.forwardRef<HTMLDivElement, BoxProps>((props, ref) => {
  const {
    p,
    pt,
    pr,
    pb,
    pl,
    py,
    px,
    m,
    mt,
    mr,
    mb,
    ml,
    my,
    mx,
    className,
    children,
    ...delegated
  } = props;

  /**
   * Merge the utility classes
   */
  const boxClasses = cx(
    padding({ p, pt, pr, pb, pl, py, px }),
    margin({ m, mt, mr, mb, ml, my, mx }),
    box({ className })
  );

  return (
    <div className={boxClasses} ref={ref} {...delegated}>
      {children}
    </div>
  );
});
