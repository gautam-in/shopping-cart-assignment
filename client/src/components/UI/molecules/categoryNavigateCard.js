import React from "react";
import { useHistory } from "react-router-dom";
import CategoryImage from '../atoms/categoryImage/categoryImage';
import NavigateButton from '../atoms/navigateCategory/navigateButton';
import NavigateInfo from '../atoms/navigateCategory/navigateInfo';

function Card({ c, i }) {
  const history = useHistory();
  return (
    c.enabled && (
      <div
        style={{ flexDirection: i % 2 === 0 ? "row" : "row-reverse" }}
        className="categoryCard"
        data-test= "card-component"
      >
        <CategoryImage c={c}/>
        <div className="info">
          <NavigateInfo c={c} />
          <NavigateButton c={c} history={history} />
        </div>
      </div>
    )
  );
}

export default Card;
