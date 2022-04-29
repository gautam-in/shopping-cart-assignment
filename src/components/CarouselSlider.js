import React, { useEffect, useState } from 'react';
import { Carousel } from 'react-bootstrap';
import axios from 'axios';
import "./CarouselSlider.css"
export default function CarouselSlider() {
    const {REACT_APP_BANNERS_URL = 'http://localhost:5000/banners' } = process.env;
    const[result,setResult]=useState([])
    useEffect(()=>{
      axios.get(REACT_APP_BANNERS_URL).then(response => {
        var { data } = response;
        data = data.sort(function(a, b) {
          return a.order - b.order;
        });
        setResult(data)
        //const banners = data.map(element => `${REACT_APP_CLIENT_URL}${element.bannerImageUrl}`);
        //setBanners(banners);
      }).catch(error => console.error(error));
      
    },[])
    

  return (
    <>
    <div className='container carousel-slider'>
          <Carousel>
            {
              result.map((item)=>{
                  return (<Carousel.Item key={item.id}>
                  <img
                  className="d-block w-100"
                  src={item.bannerImageUrl}
                  alt="First slide"
                  />
                </Carousel.Item>)
              })
            }
          
          </Carousel>
        </div>
</>
  );
}
