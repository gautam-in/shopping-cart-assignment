import { AlertProps } from "./models"

import "./styles.scss"

export const Alert = ({ type, children }: AlertProps) => (
  <div className={`alert ${type}`}>
    <p className="message">{children}</p>
  </div>
)
