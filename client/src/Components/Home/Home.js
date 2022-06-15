import React, { useContext } from "react";
import Header from "./Header/Header";
import MarqueImages from "./MarqueImages/MarqueImages";
import Categories from "./Categories";
import { CategoryContext } from "../../Context/CategoryContextState";
import "./Home.scss";

export default () => {
  const { categories, setSelected } = useContext(CategoryContext);

  return (
    <>
      <Header />
      <div className="main-container-body">
        <MarqueImages />
        {categories
          ?.filter((x) => x.id !== "")
          .map((catagory, idx) => (
            <Categories
              data={catagory}
              setSelected={setSelected}
              flip={idx % 2 === 0 ? false : true}
            />
          ))}
      </div>
      <section className="footer-section">
      Copyright &#169; 2011-2018 Sabka Bazar Grocery Suppplies Pvt Ltd
    </section>
    </>
  );
};
