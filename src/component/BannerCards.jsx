import { useNavigate } from "react-router-dom";
import Button from "./Button";
import "../styles/baner-card.scss";

const BannerCards = ({ category }) => {
  const navigate = useNavigate();
  const { name, imageUrl } = category;

  const handleExplore = () => {
    navigate(`/products/${category.id}`);
  };
  return (
    <div className="banner-card">
      <img
        src={require(`../../src${imageUrl}`)}
        alt={`${name}`}
        className="banner-image"
      />
      <div className="banner-card-details">
        <h2>{name}</h2>
        <span>Shop Online for {name}</span>
        <Button
          buttonType="explore"
          styles='margin: "50px"'
          onClick={handleExplore}
        >
          Explore {name}
        </Button>
      </div>
    </div>
  );
};

export default BannerCards;
