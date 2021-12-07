import React from "react";
import Image from "components/HtmlElements/Image";

import "./CategoryTile.scss";

export default function CategoryTile({ category, imageOrder }) {
  console.log("category", category);
  const { name, description, imageUrl } = category;
  console.log(imageOrder);
  return (
    <div className="CategoryTile">
      <Image src={imageUrl} style={{ order: imageOrder }} />
      <div className="CategoryTile__info">
        <h2>{name}</h2>
        <h4>{description}</h4>
        <button>Explore {name}</button>
      </div>
    </div>
  );
}
