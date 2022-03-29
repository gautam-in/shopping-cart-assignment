import "./category.styles.scss";
import Button from "../button/button.component";

const Category = ({ category }) => {
  console.log(category);
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
            style={{ width: "170px" }}
          >{`Explore ${category.key}`}</Button>
        </div>
      </div>
      <div className="image-container">
        <img
          src={process.env.PUBLIC_URL + category.imageUrl}
          alt={category.bannerImageAlt}
        />
      </div>
    </div>
  );
};

export default Category;
