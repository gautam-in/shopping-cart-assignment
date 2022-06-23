import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setFilter } from "../redux/actions";
import "./categories.css";

const Categories = ({ categoriesData }) => {
  let navigate = useNavigate();
  const dispatch = useDispatch();

  const clickHandler = () => {
    navigate(`/products`);
  };
  const handleCategory = (value) => {
    dispatch(setFilter(value));
  };
  return (
    <>
      {categoriesData &&
        categoriesData
          .filter((item) => item.order !== -1)
          .map((category, index) => {
            let order = index % 2 === 0 ? false : true;

            return (
              <div
                key={index}
                className="category_container"
                id={category.id}
                style={{ flexDirection: order ? "row-reverse" : "row" }}
              >
                <img
                  className={`category_img ${
                    order ? "onlyLpadding" : "onlyRpadding"
                  }`}
                  src={category.imageUrl}
                  alt={category}
                />
                <div className="category_desc_container">
                  <h3>{category.name}</h3>
                  <p>{category.description}</p>
                  <button
                    className="category_button btn_primary category_button_focus"
                    onClick={() => {
                      clickHandler();
                      handleCategory(category);
                    }}
                  >
                    Explore {category.key}
                  </button>
                </div>
              </div>
            );
          })}
    </>
  );
};

export default Categories;
