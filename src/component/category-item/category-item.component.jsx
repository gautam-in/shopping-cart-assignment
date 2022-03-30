import "./category.styles.scss";
import Button from "../button/button.component";
import { useNavigate } from "react-router-dom";

const Category = ({ category }) => {
  const navigation = useNavigate();
  return (
    <div
      className={`shadow bottom category-item-container ${
        category.order % 2 === 0 ? "" : "reverse"
      }`}
    >
      <div className="desciption-box">
        <h2>{category.name}</h2>
        {category.description}
        <div className="button-container">
          <Button
            onClick={() =>
              navigation(
                `/products/${
                  category.key === "fruit-and-veg"
                    ? "fruit-n-veg"
                    : category.key
                }`
              )
            }
          >{`Explore ${category.key}`}</Button>
        </div>
      </div>
      <img
        className="image-container"
        src={process.env.PUBLIC_URL + category.imageUrl}
        alt={category.bannerImageAlt}
      />
    </div>
  );
};

export default Category;
