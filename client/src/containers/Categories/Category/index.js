import Button from "react-bootstrap/Button";
import { useNavigate } from "react-router-dom";
import Image from "react-bootstrap/Image";
import "./Category.scss";

export const Category = ({
  description,
  id,
  imageUrl,
  name,
  reverse,
  keyName,
}) => {
  const navigate = useNavigate();

  const navigateToProductListing = () => {
    navigate(`/products?cat_id=${id}`);
  };

  return (
    <div
      className={`category d-flex align-items-center py-2 ${
        reverse && "flex-row-reverse"
      }`}
    >
      <Image fluid src={imageUrl} className="cat-img" />
      <div className="content">
        <h3 className="mx-3">{name}</h3>
        <p className="mx-3">{description}</p>

        <Button
          className="btn-primary"
          variant="secondary"
          onClick={navigateToProductListing}
        >
          Explore {keyName}
        </Button>
      </div>
    </div>
  );
};
