import React, { useCallback, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../../app/assets/css/banner.css";
import { Footer } from "../common/view/footer";
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
            <div className="categories__item" key={category.id}>
              <div>
                <img
                  src={process.env.PUBLIC_URL + category.imageUrl}
                  alt={category.name}
                />
              </div>
              <div>
                <h1>{category.name}</h1>
                <p>{category.description}</p>
                <Link to={`/product/${category.id}`}>
                  <button type="button" className="btn">
                    Explore {category.name}
                  </button>
                </Link>
              </div>
            </div>
          ))}
        </section>
      </main>
      <Footer />
    </React.Fragment>
  );
};

export default Banner;
