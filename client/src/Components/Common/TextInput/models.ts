import { ChangeEvent } from "react"

export interface TextInputProps {
  type: string
  label: string
  name: string
  value: string
  touched?: boolean
  errors?: string
  handleChange: (e: ChangeEvent) => void
  handleBlur: (e: ChangeEvent) => void
}