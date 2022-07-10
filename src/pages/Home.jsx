import React from "react";
import Banner from "../components/banner/Banner";
import Category from "../components/categories/Category";

function Home({ banners, categories }) {
  return (
    <>
      <div className="container-md mx-auto p-0">
        {/* Banner */}
        <Banner banners={banners} />
        {/* Banner */}

        {/* Categories */}
        {categories.data
          .sort((a, b) => a.order - b.order)
          .map((category, index) => {
            return (
              <Category
                key={category.id}
                data={category}
                align={index % 2 === 0 ? "left" : "right"}
              />
            );
          })}
        {/* Categories */}
      </div>
    </>
  );
}

export default Home;
