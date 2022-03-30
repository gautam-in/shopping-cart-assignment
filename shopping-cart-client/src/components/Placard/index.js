import React, { Component } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import { APIUrls } from '../../helpers/urls';
import './Placard.scss';
class Placard extends Component {
  constructor() {
    super();
    this.state = {
      banners: [],
    };
  }
  componentDidMount() {
    const url = APIUrls.banners();
    fetch(url)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log(data);
        this.setState({
          banners: data,
        });
      });
  }
  render() {
    return (
      <Carousel className="banner-carousel">
        {this.state.banners.map(
          ({ bannerImageAlt, bannerImageUrl, id, isActive }) => {
            return isActive ? (
              <Carousel.Item key={id}>
                <img
                  className="banner-images"
                  src={bannerImageUrl}
                  alt={bannerImageAlt}
                />
              </Carousel.Item>
            ) : null;
          }
        )}
      </Carousel>
    );
  }
}

export default Placard;
