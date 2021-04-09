import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Slider from "react-slick";
import SlickSlider from '../Molecules/SlickSlider';

import "../../styles/index.scss"

import * as Endpoints from '../Endpoints'
import CategoriesCard from "../Molecules/CategoriesCard"

const Home = ({ categories }) =>{
  const [banners, setBanners] = useState([]);

  useEffect(()=>{
    let axios = require("axios");

    let config = {
      method: "get",
      url: Endpoints.get_banners,
      Headers: {}
    };

    axios(config)
      .then((res)=>{
        let orderedBanners = res.data.sort(function(a, b){
          return a.order - b.order;
        }).filter(a => a.isActive === true);
        setBanners(orderedBanners);
      })
      .catch((err)=>{
        console.log(err);
      });
  },[]);

  const settings = {
    dots: true,
    fade: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    speed: 500,
    arrows: true,
    className: "slides"
  }

  return (
    <>
      {
         banners.length > 0 && ( <SlickSlider banners={banners} /> ) 
      }

      <section className="categories_banner_sec">
            <div className="container">
                    {
                      categories.map((category, index) => {
                        return <CategoriesCard key= {category.id} category={category} index={index} />
                      })
                    }
            </div>
      </section>
    </>
  );
}

export default Home;