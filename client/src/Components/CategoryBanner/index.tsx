import { Button } from "../Common"

import { CategoryBannerProps } from "./models"

import "./styles.scss"

export const CategoryBanner = ({
  category: { name, description, imageUrl, key },
}: CategoryBannerProps) => (
  <div className="category-banner flex text-center">
    <img src={imageUrl} alt={name} />

    <div className="details">
      <h4 className="name">{name}</h4>
      <p className="description">{description}</p>
      <Button type="submit" variant="primary" aria-label="submit login form">
        Explore {key}
      </Button>
    </div>
  </div>
)
