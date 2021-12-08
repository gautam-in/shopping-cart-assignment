import React, { useState, useEffect } from "react";
import "../css/Home.css";
import Fruits from "../static/images/category/fruits.png";
import Bakery from "../static/images/category/bakery.png";
import Beverages from "../static/images/category/beverages.png";
import Beauty from "../static/images/category/beauty.png";
import Baby from "../static/images/category/baby.png";
import Banner from "../components/Banner";
import Category from "../components/Category";
import Footer from "../components/Footer";
import axios from "axios";
import Spinner from "../components/Spinner";

function Home() {
  const [categoryData, setCategoryData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    axios({
      method: "GET",
      url: "http://localhost:5000/categories",
    })
      .then((res) => {
        setCategoryData(res.data);
        setLoading(false);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div>
      {loading ? (
        <Spinner />
      ) : (
        <React.Fragment>
          <Banner />
          {categoryData
            .filter((item) => item.enabled)
            .map((category, i) => (
              <React.Fragment>
                {category.enabled ? (
                  <Category
                    key={i}
                    name={category.name}
                    des={category.description}
                    src={`${window.location.origin}${category.imageUrl}`}
                    label={category.key}
                    id={category.id}
                    reverse={i % 2 ? true : false}
                  />
                ) : null}
              </React.Fragment>
            ))}
        </React.Fragment>
      )}
    </div>
  );
}

export default Home;
