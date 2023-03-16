import { MouseEventHandler, ReactNode } from 'react'

export interface ButtonProps {
  variant: string
  type: "button" | "submit" | "reset"
  classes?: string
  disabled: boolean
  handleClick?: MouseEventHandler<HTMLButtonElement>
  children: ReactNode
}