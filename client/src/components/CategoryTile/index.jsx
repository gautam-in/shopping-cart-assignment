import React from "react";
import Image from "components/HtmlElements/Image";
import { useNavigate } from "react-router";
import "./CategoryTile.scss";

export default function CategoryTile({ category, imageOrder }) {
  const navigate = useNavigate();

  const { name, description, imageUrl, id } = category;
  console.log(imageOrder);
  return (
    <div className="CategoryTile">
      <Image src={imageUrl} style={{ order: imageOrder }} />
      <div className="CategoryTile__info">
        <h2>{name}</h2>
        <h4>{description}</h4>
        <button onClick={() => navigate(`/products/${id}`)}>
          Explore {name}
        </button>
      </div>
    </div>
  );
}
