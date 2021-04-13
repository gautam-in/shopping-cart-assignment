import React from "react";
import { Link } from "react-router-dom";
import routes from "../../routes/routes";
import CustomButton from "../CustomButton/CustomButton";
import "./category.scss";

const Categories = ({ categoryList }) => {

  return (
    <section>
      {categoryList.map(item => {
        return (
          <section key={item.id} className="category-item">
            {
              <>
                <article>
                  <h3 aria-label={"category name is" + item.name}>{item.name}</h3>
                  <p aria-label={item.description}>{item.description}</p>
                  <Link to={routes.productById.replace(":id", item.id)} role="button" aria-label={item.name + 'category button'}>
                    <CustomButton width="auto" >
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
