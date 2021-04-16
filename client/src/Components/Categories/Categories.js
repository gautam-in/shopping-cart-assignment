import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import routes from "../../routes/routes";
import CustomButton from "../CustomButton/CustomButton";
import "./category.scss";

const Categories = ({ categoryList }) => {
  const showModal = useSelector(state => state.cart.showModal);
  return (
    <section aria-label="List of categories" tabIndex={showModal ? -1 : "7"}>
      {categoryList.map((item, index) => {
        return (
          <section key={item.id} className="category-item" aria-label={"This is" + item.name + "category section"} tabIndex={showModal ? -1 : 8 + index}>
            {
              <>
                <article>
                  <h3 aria-label={"category name is" + item.name} tabIndex={showModal ? -1 : 8 + index} >{item.name}</h3>
                  <p aria-label={item.description} tabIndex={showModal ? -1 : 8 + index} >{item.description}</p>
                  <Link to={routes.productById.replace(":id", item.id)} role="button" tabIndex={showModal ? -1 : 8 + index} aria-label={item.name + 'category button, click if you want to go through the products under this category'}>
                    <CustomButton width="auto" tabIndex="-1" >
                      {item.key}
                    </CustomButton>
                  </Link>
                </article>
                <figure>
                  <img
                    src={item.imageUrl}
                    alt={item.name + "image"}
                    height="100"
                    width="150"
                    aria-label={item.name + "image"}
                  />
                </figure>
              </>
            }

          </section>
        );
      })}
    </section>
  );
};

export default Categories;
