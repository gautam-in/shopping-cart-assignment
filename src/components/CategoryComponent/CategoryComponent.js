import { useNavigate } from "react-router-dom";
import ButtonComponent from "../CustomComponent/ButtonComponent/ButtonComponent";
import "./CategoryComponent.scss";
const CategoryComponent = ({ data }) => {
  const navigation = useNavigate();
  return (
    <div
      className={`shadow bottom category-item-container ${
        data.order % 2 === 0 ? "" : "reverse"
      }`}
    >
      <div className="desciption-box">
        <h3 className="l-text">{data.name}</h3>
        <p className="text">{data.description}</p>
        <div className="button-container">
          <ButtonComponent
            className="m-text btn-primary" style={{ width:'auto' }}
            onClick={() =>
              navigation(
                `/products/${
                  data.key === "fruit-and-veg" ? "fruit-n-veg" : data.key
                }`
              )
            }
          >
            Explore {data.name}
          </ButtonComponent>
        </div>
      </div>
      <img className="image-container" src={data.imageUrl} alt={data.name} />
    </div>
  );
};

export default CategoryComponent;