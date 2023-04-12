import React from "react"
import { BiChevronDown, BiChevronUp } from "react-icons/bi"

import { DropdownProps, SelectOptionType } from "./models"

import "./styles.scss"

export const Dropdown = ({
  label,
  options,
  showLabel,
  handleClick,
}: DropdownProps) => {
  const [isDropdownOpen, setIsDropdownOpen] = React.useState(false)
  const [selectedOption, setSelectedOption] =
    React.useState<SelectOptionType | null>(null)

  const listItems = options.map(({ label, value }) => (
    <li
      key={value}
      className="dropdown-item"
      onClick={() => {
        setSelectedOption({ label, value })
        setIsDropdownOpen(false)
        handleClick(value)
      }}
    >
      {label}
    </li>
  ))

  return (
    <div className="dropdown-container">
      {showLabel && label}

      <button
        className="dropdown-button flex"
        onClick={() => setIsDropdownOpen((prev) => !prev)}
      >
        <span>{selectedOption ? selectedOption.label : label}</span>
        <span className="icon">
          {isDropdownOpen ? <BiChevronUp /> : <BiChevronDown />}
        </span>
      </button>

      {isDropdownOpen && <ul className="dropdown-list">{listItems}</ul>}
    </div>
  )
}
