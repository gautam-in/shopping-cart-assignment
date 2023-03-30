import { MouseEventHandler, ReactNode } from "react"

export interface ButtonProps {
  variant: "primary" | "dark" | "transparent"
  type: "button" | "submit" | "reset"
  classes?: string
  disabled?: boolean
  handleClick?: MouseEventHandler<HTMLButtonElement>
  children: ReactNode
}
