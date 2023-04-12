import { Button } from "../"

import { CarouselIndicatorProps } from "./models"

import "./styles.scss"

export const CarouselIndicator = ({
  direction,
  clickHandler,
  label,
}: CarouselIndicatorProps) => (
  <div className="carousel-indicator">
    <Button
      variant="dark"
      type="button"
      classes={`${direction}-btn`}
      handleClick={clickHandler}
    >
      {label}
    </Button>
  </div>
)
