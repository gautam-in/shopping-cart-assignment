import React,{useState,useEffect} from 'react'
import axios from 'axios'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './Home.scss';
import Categories from '../Categories/Categories';
import { bannerURL } from '../../Shared/URL';


function Home() {
    const [banners,setBanners]=useState([]);
    const settings = {
        infinite: true,
        dots: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        lazyLoad: true,
        autoplay: true,
      autoplaySpeed: 2000,
       
      };

      const getBanners= ()=>{axios.get(bannerURL)
      .then((response)=>{
      setBanners(response.data)}
      )
      .catch(err=>console.log(err))
      }
    
    useEffect(() => {
        getBanners();
       
    }, [])

        
    return (
        <div className="home-container">
        <div className="banner-container">
        <Slider {...settings}>
        {
        banners.map((banner)=>{
        return <img key={banner.id} src={banner.bannerImageUrl} />
        })
        }
        </Slider>
        </div>
        <Categories/>
     
        </div>
    )
}

export default Home
