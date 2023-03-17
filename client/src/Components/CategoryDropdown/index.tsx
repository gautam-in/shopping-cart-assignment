import React from "react"
import { BiChevronDown, BiChevronUp } from "react-icons/bi"

import { CategoryDropdownProps } from "./models"

import "./styles.scss"

export const CategoryDropdown = ({ categories }: CategoryDropdownProps) => {
  const [isDropdownOpen, setIsDropdownOpen] = React.useState(false)
  const [selectedCategory, setSelectedCategory] = React.useState("")

  const categoryListItems = categories.map(({ name, id }) => (
    <li
      key={id}
      className="category-item"
      onClick={() => setSelectedItem(name)}
    >
      {name}
    </li>
  ))

  const setSelectedItem = (category: string) => {
    setSelectedCategory(category)
    setIsDropdownOpen(false)
  }

  return (
    <div className="categories-dropdown">
      <button
        className="categories-dropdown-button flex"
        onClick={() => setIsDropdownOpen((prev) => !prev)}
      >
        <span>{selectedCategory ? selectedCategory : "Select a Category"}</span>
        <span className="icon">
          {isDropdownOpen ? <BiChevronUp /> : <BiChevronDown />}
        </span>
      </button>

      {isDropdownOpen && (
        <ul className="categories-dropdown-list">{categoryListItems}</ul>
      )}
    </div>
  )
}
