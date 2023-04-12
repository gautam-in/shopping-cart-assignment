export interface DropdownProps {
  label: string
  options: SelectOptionType[]
  showLabel?: boolean
  handleClick: (value: string) => void
}

export interface SelectOptionType {
  value: string
  label: string
}
