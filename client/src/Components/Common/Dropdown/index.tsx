import React from "react"
import { BiChevronDown, BiChevronUp } from "react-icons/bi"

import { DropdownProps } from "./models"

import "./styles.scss"

export const Dropdown = ({ label, options, showLabel }: DropdownProps) => {
  const [isDropdownOpen, setIsDropdownOpen] = React.useState(false)
  const [selectedOption, setSelectedOption] = React.useState("")

  const listItems = options.map(({ label, value }) => (
    <li
      key={value}
      className="dropdown-item"
      onClick={() => setSelectedItem(value)}
    >
      {label}
    </li>
  ))

  const setSelectedItem = (value: string) => {
    setSelectedOption(value)
    setIsDropdownOpen(false)
  }

  return (
    <div className="dropdown-container">
      {showLabel && label}

      <button
        className="dropdown-button flex"
        onClick={() => setIsDropdownOpen((prev) => !prev)}
      >
        <span>{selectedOption ? selectedOption : label}</span>
        <span className="icon">
          {isDropdownOpen ? <BiChevronUp /> : <BiChevronDown />}
        </span>
      </button>

      {isDropdownOpen && <ul className="dropdown-list">{listItems}</ul>}
    </div>
  )
}
