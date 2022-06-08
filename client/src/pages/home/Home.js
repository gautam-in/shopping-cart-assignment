import React, { Fragment, useEffect, useState } from "react";
import Navbar from "../../components/navbar/Navbar";
import axios from "axios";
import img1 from "../../components/images/home/baby.png";
import "./home.css";
import { Link } from "react-router-dom";import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import Carosul from "../../components/carosul/Carosul";
const LeftImg = ({ categoryname, description, imageUrl, id }) => {
  console.log(categoryname);
  return (
    <section className="setterSection" key={id}>
      <img src={img1} alt="offers" className="setterImg" />

      <div className="setterInformation">
        <h1>{categoryname}</h1>
        <p>{description}</p>
        <button className="setterButton">
          <Link to={`/products/${id}`}>Explore {categoryname}</Link>
        </button>
      </div>
    </section>
  );
};
const RightImg = ({ categoryname, description, imageUrl, id }) => {
  return (
    <section className="setterSection" key={id}>
      <div className="setterInformation">
        <h1>{categoryname}</h1>
        <p>{description}</p>
        <button className="setterButton">
          <Link to={`/products/${id}`}>Explore {categoryname}</Link>
        </button>
      </div>
      <img src={img1} alt="offers" className="setterImg" />
    </section>
  );
};
const Home = () => {
  const [carosul, setCarosul] = useState([]);
  const [categories, setCategories] = useState([]);

  // useEffect(() => {
  //   // dispatch(getProducts())
  //   axios
  //     .get("http://localhost:5000/categories")
  //     .then((res) => dispatch(ProductActions.getProducts(res.data)));

  // }, []);
  useEffect(() => {
    axios
      .get("http://localhost:5000/categories")
      .then((res) => setCategories(res.data));
  }, []);

  return (
    <main>
     
      <Carosul/>
      <div className="homeCategories">
        {categories.map((cat, index) => (
          <div className="setterSection">
            <img src={img1} alt="offers" className="setterImg" />

            <div className="setterInformation">
              <h1>{cat.name}</h1>
              <p>{cat.description}</p>
              <button className="setterButton">
                <Link to={`/products/${cat.id}`}>Explore {cat.name}</Link>
              </button>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
};
export default Home;
