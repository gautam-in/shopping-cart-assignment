import React from "react"

type Props = {
  imageUrl: string
  id: string
}

const CategoryImage = ({ imageUrl, id }: Props) => {
  return (
    <img src={imageUrl} alt="" className="category-img" aria-labelledby={id} />
  )
}

export default CategoryImage
