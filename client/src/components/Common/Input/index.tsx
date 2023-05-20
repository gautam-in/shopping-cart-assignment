import { ForwardRefRenderFunction, forwardRef } from "react";
import { MdError } from "react-icons/md";

import "./styles.scss";

type InputProps = React.DetailedHTMLProps<
  React.InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
>;

type InputComponentProps = {
  label: string;
  name: string;
  errors?: {
    message?: string;
  };
};

type CombinedProps = InputComponentProps & InputProps;

const Input: ForwardRefRenderFunction<HTMLInputElement, CombinedProps> = (
  { label, name, errors, ...rest },
  ref
) => {
  return (
    <div className="input-container">
      <input
        placeholder={name}
        className="input-container__input"
        id={name}
        name={name}
        ref={ref}
        data-error={errors?.message ? true : false}
        {...rest}
      />
      <label htmlFor={name} className="input-container__label">
        {label}
      </label>
      {errors && (
        <p className="input-container--error" aria-live="assertive">
          <MdError aria-hidden="true" />
          <span>{errors?.message}</span>
        </p>
      )}
    </div>
  );
};

const ForwardedRefInput = forwardRef<HTMLInputElement, CombinedProps>(Input);

export default ForwardedRefInput;
