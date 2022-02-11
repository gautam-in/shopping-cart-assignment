import React, { Component } from 'react';
import Slider from 'react-slick';
import {
  FaChevronRight,
  FaChevronLeft,
} from "react-icons/fa";
// import {FcPrevious, FcNext} from 'react-icons';
import axios from 'axios';

import './Slides.scss';
const API_URL = "http://localhost:5000/";

function Arrow(props) {
  let className = props.type === "next" ? "nextArrow" : "prevArrow";
  className += " arrow";
  const char = props.type === "next" ? FaChevronRight : FaChevronLeft;
  return (
    <span className={className} onClick={props.onClick}>
      {char}
    </span>
  );
}

export default class Offers extends Component {
  constructor(props) {
    super(props);
    this.state = { activeIndex: 0, loading: false, items: [] };
  }

  getOfferData = async () => {
    await axios(API_URL+"banners").then(res => this.setState({
      items: res.data,
      loading: false
    }));
  }

  componentDidMount(){
    this.setState({loading: true});
    this.getOfferData();
  }

  render() {
    let { items } = this.state;

    const configs = {
      dots: true,
      arrows: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 5000,
      className: "slides",
    };

    return (
      <div className="Offers">
        <Slider {...configs} 
          nextArrow={<Arrow type ="next" />}
          prevArrow={<Arrow type ="prev" />}
          className='slides'
          
        >
        {items.map((item, index) => {
          return (
            <div key = {index} className="carousel-item">
              <img
                src={process.env.PUBLIC_URL + item.bannerImageUrl}
                alt={item.bannerImageAlt}
              />
            </div>
          );
        })}
        </Slider>
      </div>
    );
  }
}