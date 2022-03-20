import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import CustomButton from "../custom-button/custom-button.component";
import "./categoryCard.styles.scss";
import { withRouter } from "react-router-dom";
import { fetchCategoryData } from "../../actions";

const CategoryCard = ({ history, match }) => {
  const dispatch = useDispatch();
  let categoryData = useSelector((state) => {
    return state.categories.categoryData;
  });

  useEffect(() => {
    dispatch(fetchCategoryData());
  }, []);

  return (
    <div className="category_section">
      {categoryData.map((category) =>
        category.enabled ? (
          <div className="category" key={category.key}>
            <div className="category_image">
              <img src={category.imageUrl} alt={category.name} />
            </div>

            <div className="category_container">
              <h2>{category.name}</h2>
              <p>{category.description}</p>
              <CustomButton
                onClick={() => history.push(`${match.url}PLP/${category.id}`)}
              >
                {category.name}
              </CustomButton>
            </div>
          </div>
        ) : null
      )}
    </div>
  );
};

export default withRouter(CategoryCard);
