import React, { useEffect } from "react";
import Banners from "./Banners/Banners";
import * as categoryActions from "../../redux/Categories/categories.action";
import { useDispatch, useSelector } from "react-redux";
import "./Home.css";
import { Link } from "react-router-dom";

const Home = () => {
  let dispatch = useDispatch();
  let categoryItems = useSelector((state) => {
    return state.categories;
  });
  useEffect(() => {
    dispatch(categoryActions.getAllCategories());
  }, []);
  let { categories } = categoryItems;
  categories = categories.sort((a, b) => a.order - b.order).filter((a) => a.enabled);
  return (
    <React.Fragment>
      <Banners />
      {/* <h2 className="text-center m-5">Home section here</h2>
      <small>{JSON.stringify(categories)}</small> */}
      <section className="mt-5 container-lg">
        <div className="row">
          <div className="col">
            {categories.map((category) => {
              return (
                <>
                  <div className="row mb-2 box" key={category.key}>
                    {category.order % 2 ? (
                      <>
                        <div className="col-sm-4 p-5">
                          <img src={category.imageUrl} width="100%" alt={categories.name} />
                        </div>
                        <div className="col-sm-8 d-flex flex-column align-items-center justify-content-center">
                          <h3>{category.name}</h3>
                          <p className="description">{category.description}</p>
                          <Link className="btn btn-primary mb-3" to={`/products/${category.id}`}>
                            Explore {category.key}
                          </Link>
                        </div>
                      </>
                    ) : (
                      <>
                        <div className="col-sm-8 d-flex flex-column align-items-center justify-content-center mt-3">
                          <h3>{category.name}</h3>
                          <p className="description">{category.description}</p>
                          <Link className="btn btn-primary" to={`/products/${category.id}`}>
                            Explore {category.key}
                          </Link>
                        </div>
                        <div className="col-sm-4 p-5">
                          <img src={category.imageUrl} width="100%" alt={categories.name} />
                        </div>
                      </>
                    )}
                  </div>
                </>
              );
            })}
          </div>
        </div>
      </section>
    </React.Fragment>
  );
};

export default Home;
