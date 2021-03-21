import React from "react";
import "./category.scss";

const Categories = ({ categoryList }) => {
  debugger;
  let orderedCategories = categoryList
    .filter((item) => item.order != -1)
    .sort((item1, item2) => {
      return item1.order - item2.order;
    });
  return (
    <main>
      {orderedCategories.map((item, key) => {
        return (
          <section key={key} className="category-item">
            <article>
              <h3>{item.name}</h3>
              <p>{item.description}</p>
            </article>
            <figure>
              <img
                src={item.imageUrl}
                alt="image loading"
                height="100"
                width="150"
              />
            </figure>
          </section>
        );
      })}
    </main>
  );
};

export default Categories;
