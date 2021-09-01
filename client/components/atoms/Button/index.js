import { SubmitButton } from "./Button.styles";

const Button = ({ name, id, children, disabled, ...otherProps }) => (
  <SubmitButton
    id={id}
    name={name}
    title={name}
    disabled={disabled}
    {...(disabled && { "aria-disabled": true })}
    {...otherProps}
  >
    {children}
  </SubmitButton>
);

export default Button;
