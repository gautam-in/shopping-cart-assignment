import React, { useContext } from "react";
import Header from "Components/Header/Header";
import Slider from "Components/Slider/Slider";
import Categories from "Components/Categories/Categories";
import { CategoryContext } from "Context/CategoryContext";
import Footer from "Components/Footer/Footer";
// import { getCategoryList } from "Services/services";

export default () => {
  const { categories, setSelected } = useContext(CategoryContext);

  return (
    <>
      <Header />
      <div className="main-container-body">
        <Slider />
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
      <Footer />
    </>
  );
};
