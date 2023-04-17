import React from "react";
import Carousel from "../Carousel/Carousel";
import CategoriesListingHome from "../CategoriesListingHome/CategoriesListingHome";
import styles from "./Home.module.scss";

export default function Home(props) {
 
  // console.log(handleProduct);

  return (
    <main className={styles.homeContainer}>
      <Carousel {...props}></Carousel>
      <CategoriesListingHome {...props}></CategoriesListingHome>
    </main>
  );
}
