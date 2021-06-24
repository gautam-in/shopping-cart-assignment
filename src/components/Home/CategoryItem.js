import CustomButton from "components/Shared/CustomButton";
import { CategoryRow } from "./CategoryItem.styles";
import getImage from "helpers/getImage";

const CategoryItem = ({ item, index }) => {
  const image = getImage(item.imageUrl);
  return (
    <CategoryRow reverse={index % 2 != 0}>
      <div className="detail-img">
        <img width="60%" src={image} alt={item.key} />
      </div>
      <div className="detail-container">
        <div className="detail-name">{item.name}</div>
        <div>{item.description}</div>
        <CustomButton title={`Explore ${item.key}`} classes="home-btn" />
      </div>
    </CategoryRow>
  );
};

export default CategoryItem;
