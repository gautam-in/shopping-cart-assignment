import { forwardRef } from "react";
import { cva, cx } from "class-variance-authority";

import { margin, MarginVariants } from "../../../cva-utils/spacings";

import "./input.scss";

export type InputProps = {
  label: string;
  error?: string;
  errorId?: string;
} & MarginVariants &
  React.ComponentPropsWithoutRef<"input">;

const inputContainer = cva(["input-container"]);

const input = cva(["input"], {
  variants: {
    error: {
      true: "error",
    },
  },
  defaultVariants: {
    error: false,
  },
});

export const Input = forwardRef<HTMLInputElement, InputProps>((props, ref) => {
  const {
    name,
    id,
    label,
    type = "text",
    value,
    error = "",
    errorId,
    m,
    mt,
    mr,
    mb,
    ml,
    ...delegated
  } = props;

  const inputContainerClasses = cx(
    inputContainer(),
    margin({ m, mt, mr, mb, ml })
  );

  const inputClasses = cx(input({ error: !!error }));

  return (
    <div className={inputContainerClasses}>
      <input
        ref={ref}
        type={type}
        id={id}
        name={name}
        value={value}
        placeholder={label}
        className={inputClasses}
        {...delegated}
      />
      <label htmlFor={id}>{label}</label>
      <div className="error-text" id={errorId}>
        {error}
      </div>
    </div>
  );
});
