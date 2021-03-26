import React from "react";
import "./category.scss";

const Categories = ({ categoryList }) => {

  const orderedCategories = categoryList
    .filter((item) => item.order != -1)
    .sort((item1, item2) => {
      return item1.order - item2.order;
    });

  return (
    <section>
      {orderedCategories.map(item => {
        return (
          <section key={item.id} className="category-item">
            {
              item.order % 2 == 0 ? (
                <>
                  <article>
                    <h3>{item.name}</h3>
                    <p>{item.description}</p>
                  </article>
                  <figure>
                    <img
                      src={item.imageUrl}
                      alt={item.name + "image"}
                      height="100"
                      width="150"
                    />
                  </figure>
                </>) : (
                <>
                  <figure>
                    <img
                      src={item.imageUrl}
                      alt={item.name + "image"}
                      height="100"
                      width="150"
                    />
                  </figure>
                  <article>
                    <h3>{item.name}</h3>
                    <p>{item.description}</p>
                  </article>
                </>
              )
            }

          </section>
        );
      })}
    </section>
  );
};

export default Categories;
