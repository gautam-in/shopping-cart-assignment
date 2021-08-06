import React, { useState, useEffect } from 'react';
import Carousel from 'react-material-ui-carousel'
import Banner from './banners'
import Catagories from './Catagory';
import axios from 'axios';


function HomePage(props){

const [banners,setBanners] = useState([]);

useEffect(() => {
  axios
    .get("http://localhost:5001/banners")
    .then((response) => {
      const banners = response.data;
      console.log(banners,"banners")
      setBanners(banners);
    })
    .catch((error) => {
      console.log(error);
    }); 
}, []);

    return (
    <div>
      <Carousel
      NextIcon={<i className="fas fa-caret-circle-right carousel-style">Next</i>}
      PrevIcon={<i className="fas fa-caret-circle-right carousel-style">Prev</i>}
      >
    {
      banners.map((list,index)=><Banner  key={index} list={list} />)
    }
      </Carousel>
      <div className="banner-border"></div>
      <div>
      <Catagories />
      </div>
      </div>
    )
}

export default HomePage;