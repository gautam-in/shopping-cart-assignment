import React, { useEffect, useState, useContext } from "react";
import Main from "../../Component/Header/Index";
import Footer from "../../Component/Footer/index";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import { ImgUrl, MainUrl } from "../Constant/index";
import Cart from "../Cart/Cart";
import { UserContext } from "../../App.js";
import { Routes, Route, Link } from "react-router-dom";
import Button from "@material-ui/core/Button";
import "./Home.css";

export default function Home() {
  const [Data, setData] = useState([]);
  const [Details, setDetails] = useState([]);
  const [context, setContext] = useContext(UserContext);
  useEffect(() => {
    const url = MainUrl + "banners";
    const fetchData = async () => {
      try {
        const response = await fetch(url);
        const json = await response.json();
        setData(json);
        setContext("Home");
      } catch (error) {
        console.log("error", error);
      }
    };
    fetchData();
  }, []);
  useEffect(() => {
    const url = MainUrl + "categories";
    const fetchData = async () => {
      try {
        const response = await fetch(url);
        const json = await response.json();
        setDetails(json);
      } catch (error) {
        console.log("error", error);
      }
    };
    fetchData();
  }, []);
  return (
    <main>
      <Main />
      <div className="HomePageSection">
        <Carousel className="HomePage" autoPlay={true} infiniteLoop={true}>
          {Data.map((image, idx) => {
            return (
              <div>
                <img
                  src={require("../ServerImg" + image.bannerImageUrl)}
                  alt={image.bannerImageAlt}
                />
              </div>
            );
          })}
        </Carousel>

        {Details.map((data, idx) => {
          return data.imageUrl ? (
            <div className="homeDetails">
              <div className="hDetailsImg">
                <img
                  src={require("../ServerImg" + data.imageUrl)}
                  alt={data.key}
                />
              </div>
              <div className="hDetailInfo">
                <h3>{data.name}</h3>

                <p>{data.description}</p>
                <div>
                  <Link to={"Product/" + data.key} className="navigateLink">
                    <button className="HomeButton">{data.key}</button>
                  </Link>
                </div>
              </div>
            </div>
          ) : (
            ""
          );
        })}
      </div>
      <Cart />
      <Footer />
    </main>
  );
}
