import { useEffect, useState } from "react";
import axios from "axios";
import Carousel from "../../components/Carousel/Carousel";
import ProductsCategories from "../../components/ProductsCategories/ProductsCategories";
import Footer from "../../components/Footer/Footer";
import classes from "./Home.module.css";

const Home = () => {
  const [banners, setBanners] = useState([]);
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:5000/banners")
      .then((response) => {
        setBanners(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  useEffect(() => {
    axios
      .get("http://localhost:5000/categories")
      .then((response) => {
        setCategories(
          response.data
            .sort((first, second) => first.order - second.order)
            .filter((category) => category.imageUrl !== undefined)
        );
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <>
      <main className={classes.home__container}>
        <Carousel banners={banners} />
        <ProductsCategories categories={categories} />
      </main>
      <Footer />
    </>
  );
};

export default Home;
