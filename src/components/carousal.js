import React, { Component } from "react";
import "../css/style.css";
import Slider from "react-slick";
import axios from "axios";

class Carousal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      banners: [],
    };
  }
  componentDidMount() {
    axios.get("http://localhost:8080/banners").then((res) => {
      this.setState({
        banners: res.data,
      });
    });
  }
  render() {
    var settings = {
      dots: true,
      infinite: false,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      initialSlide: 0,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true,
            dots: true,
          },
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2,
          },
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],
    };
    return (
      <div className="carousal">
        <Slider {...settings}>
          {this.state.banners.length &&
            this.state.banners.map((el, key) => (
              <div key={key}>
                <img
                  src={process.env.PUBLIC_URL + el.bannerImageUrl}
                  alt={el.bannerImageAlt}
                ></img>
              </div>
            ))}
        </Slider>
      </div>
    );
  }
}

export default Carousal;
