import React, { useEffect, useState } from "react";
import CategoryInfo from "./category-info";
import { GetCategory } from "../../api/data";

const Category = () => {
  const [category, setCategory] = useState([]);
  const [error, setError] = useState(null);
  let finalCategoryList = [];
  //fetch all the categories on page load
  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await GetCategory();
        if(result && result.length>0) setCategory(result);
      } catch (err) {
        setError('Unale to fetch Data, Please try again later');
      }
    };
    fetchData();
  }, []);
  // Arrange all the categories in the UI
  if (category && category.length > 0) {
    category.sort(function (a, b) { //sort all the categories as per the order
      return a.order - b.order;
    });
    finalCategoryList = category.map((item) => {
      if (item.enabled) {
        if (item.order % 2 === 0) {
          return (
            <section className="block" key={item.id}>
              <CategoryInfo
                id={item.id}
                name={item.name}
                desc={item.description}
                btnName={item.key}
              />
              <img src={item.imageUrl} alt={item.name} />
            </section>
          );
        } else {
          return (
            <section className="block" key={item.id}>
              <img src={item.imageUrl} alt={item.name} />
              <CategoryInfo
                id={item.id}
                name={item.name}
                desc={item.description}
                btnName={item.key}
              />
            </section>
          );
        }
      }
    });
  }
  return (
    <article>
      {error && (
        <h1 style={{ color: "red", position: "absolute", top: "40%" }}>
          {error}
        </h1>
      )}
      {finalCategoryList}
    </article>
  );
};
export default Category;
