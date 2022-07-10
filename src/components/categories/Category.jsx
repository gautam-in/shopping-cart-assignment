import React from "react";
import { Link } from "react-router-dom";
import placeholderImg from "../../static/images/default.jpeg";

const Category = ({ data, align }) => {
  return (
    <>
      <section className={`category ${align}`}>
        <div className="container-fluid mx-auto">
          <div className="row">
            <div className={`col-4 col-sm-6 p-0 text-${align}`}>
              <img
                src={data.imageUrl || placeholderImg}
                alt={data.key}
                className="category-image"
                width={"360px"}
                height={"100%"}
              />
            </div>
            <div className="col-8 col-sm-6 d-flex justify-content-center align-items-center p-0">
              <div className="category-description text-center d-flex flex-column justify-content-center align-items-center">
                <h3 role={"heading"} className="mb-3">
                  {data.name}
                </h3>
                <p role={"definition"} className="mb-3 fs-small">
                  {data.description}
                </p>
                <Link to={`/products?filter=${data.id}`} className="link-btn">
                  Explore {data.key}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Category;
