import { Link } from "react-router-dom";
import "../assets/styles/components/CardCategories.scss";

const CardCategories = ({ category }) => {
  return (
    <div
      className={`card-categories drop-shadow ${
        category.order % 2 ? "" : "reverse"
      }`}
      key={category.id}
    >
      <div className="wrapper-image">
        <img src={category.imageUrl} alt={category.description} />
      </div>

      <div className="wrapper-details">
        <h2>{category.name}</h2>
        <p>{category.description}</p>

        <Link to={`/products?category=${category.id}`} className="btn-cta">
          Explore {category.key}
        </Link>
      </div>
    </div>
  );
};

export default CardCategories;
