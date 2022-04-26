import React, { useEffect, useState } from "react";
import Banner from "./Components/Banner/Banner";
import Card from "./Components/Card/Card";

const Home = () => {
  const [categoryData, setcategoryData] = useState(null);
  useEffect(() => {
    const data = async () => {
      const response = await fetch("http://localhost:8080/categories");
      const responseJson = await response.json();
      setcategoryData(responseJson);
    };
    data();
  }, []);
  return (
    <>
      <Banner />
      {categoryData &&
        categoryData
          .sort((a, b) => a.order - b.order)
          .map(
            (item, index) =>
              item.enabled && <Card category={item} left={index % 2} />
          )}
    </>
  );
};

export default Home;
