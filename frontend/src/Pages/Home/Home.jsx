import React, { useContext } from "react";
import Header from "../../Components/Header/Header";
import Caurosel from "../../Components/Caurosel/Caurosel";
import Categories from "../../Components/Categories/Categories";
import { CategoryContext } from "../../Context/CategoryContext";
import Footer from "../../Components/Footer/Footer";

const Home = () => {
  const { categories, setSelected } = useContext(CategoryContext);

  return (
    <>
      <Header />
      <div className="content-section-home">
        <Caurosel />
        {categories
          ?.filter((x) => x.id !== "")
          .map((catagory, idx) => (
            <Categories
              key={idx}
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
export default Home;
