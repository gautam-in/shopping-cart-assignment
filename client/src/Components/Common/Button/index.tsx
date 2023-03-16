import { ButtonProps } from "./models"

import "./styles.scss"

export const Button = ({
  variant,
  type,
  classes,
  disabled,
  handleClick,
  children,
}: ButtonProps) => (
  <button
    type={type ? type : "button"}
    className={`btn ${variant} ${classes ? classes : ""}`}
    disabled={disabled}
    onClick={handleClick}
  >
    {children}
  </button>
)
