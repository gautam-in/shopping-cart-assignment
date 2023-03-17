import { CategoryListProps } from "./models"

import "./styles.scss"

export const CategoryListing = ({ categories }: CategoryListProps) => (
  <ul className="category-listing">
    {categories.map(({ name, id }) => (
      <li key={id} className="category-item">
        {name}
      </li>
    ))}
  </ul>
)
