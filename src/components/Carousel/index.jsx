import React, { Component } from "react";

class Carousel extends Component {
  render() {
    return (
      <ul>
        {this.props.banners.map((banner) => (
          <li>
            {/* <img src={require("./../.." + banner.bannerImageUrl)} alt="" /> */}
            <img
              src={require("../../assets/images/offers/offer1.jpg")}
              alt=""
            />
          </li>
        ))}
      </ul>
    );
  }
}

export default Carousel;
