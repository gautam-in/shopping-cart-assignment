import React, { useCallback, useEffect, useState } from "react";

import "../../app/assets/css/banner.css";
import { SingleCategory } from "../common/singleCategory";
import Header from "../common/view/header";

const Banner = () => {
  const [allCategories, setAllCategories] = useState([]);
  const getBannerDetails = useCallback(async () => {
    try {
      const res = await fetch("http://localhost:3000/categories");
      const categories = await res.json();
      setAllCategories(
        categories
          .filter((category) => category.enabled)
          .sort((a, b) => a.order - b.order)
      );
    } catch (err) {
      // eslint-disable-next-line no-console
      console.error(err);
    }
  }, []);
  useEffect(() => {
    getBannerDetails();
  }, [getBannerDetails]);
  return (
    <React.Fragment>
      <Header />
      <main>
        <section className="categories container">
          {allCategories.map((category) => (
            <SingleCategory
              key={category.id}
              id={category.id}
              name={category.name}
              description={category.description}
              imageUrl={category.imageUrl}
            />
          ))}
        </section>
      </main>
    </React.Fragment>
  );
};

export default Banner;
