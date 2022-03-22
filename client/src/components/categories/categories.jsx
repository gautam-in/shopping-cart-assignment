import { useEffect } from "react";
import "./categories.scss";
import Button from "../button/button";
import { useSelector, useDispatch } from "react-redux";
import { fetchCategories } from "../../redux/home/home.actions";
import { selectCategories } from "../../redux/home/home.selectors";
import { useHistory } from "react-router-dom";
import { paths } from "../../routing/constants";

const Categories = () => {
  const categories = useSelector(selectCategories);
  const dispatch = useDispatch();
  const history = useHistory();

  useEffect(() => {
    dispatch(fetchCategories());
  }, [dispatch]);

  const handleCategoryClick = (id) => {
    history.push(`${paths.products}/${id}`);
  };

  return categories.map(({ imageUrl, name, description, id }) => (
    <div className="category-container" key={id}>
      <div className="category-image">
        <img src={imageUrl} alt={name} />
      </div>
      <div className="category-desc">
        <h2>{name}</h2>
        <p>{description}</p>
        <Button onClick={() => handleCategoryClick(id)}>Explore {name}</Button>
      </div>
    </div>
  ));
};

export default Categories;
