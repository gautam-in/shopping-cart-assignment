import React from "react";
import { Carousel } from "react-responsive-carousel";
import { Header } from "../../Components/Header/Header";
import { Footer } from "../../Components/Footer/Footer";
import { Product } from "../../Components/Products/Product";

export const Home = () => {
  return (
    <>
      <Header />

      <Carousel showThumbs={false} className="pt-24">
        <div>
          <img src={"/static/images/offers/offer1.jpg"} alt="offer1" />
        </div>
        <div>
          <img src={"/static/images/offers/offer2.jpg"} alt="offer2" />
        </div>
        <div>
          <img src={"/static/images/offers/offer3.jpg"} alt="offer3" />
        </div>
        <div>
          <img src={"/static/images/offers/offer4.jpg"} alt="offer4" />
        </div>
        <div>
          <img src={"/static/images/offers/offer5.jpg"} alt="offer5" />
        </div>
      </Carousel>
      <Product />
      <Footer />
    </>
  );
};
