import React, { Component } from 'react';
import classnames from 'classnames';
import {
  Carousel,
  CarouselItem,
} from 'react-bootstrap';
import axios from 'axios';

import './Slides.scss';
const API_URL = "http://localhost:5000/";


export default class Offers extends Component {
  constructor(props) {
    super(props);
    this.state = { activeIndex: 0, loading: false, items: [] };
    this.next = this.next.bind(this);
    this.previous = this.previous.bind(this);
    this.goToIndex = this.goToIndex.bind(this);
    this.onExiting = this.onExiting.bind(this);
    this.onExited = this.onExited.bind(this);
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

  onExiting() {
    this.animating = true;
  }

  onExited() {
    this.animating = false;
  }

  goToIndex(newIndex) {
    if (this.animating) return;
    this.setState({ activeIndex: newIndex });
  }
  next() {
    let { items } = this.state;
    if (this.animating) return;
    const nextIndex =
      this.state.activeIndex === items.length - 1
        ? 0
        : this.state.activeIndex + 1;
    this.setState({ activeIndex: nextIndex });
  }

  previous() {
    let { items } = this.state;
    if (this.animating) return;
    const nextIndex =
      this.state.activeIndex === 0
        ? items.length - 1
        : this.state.activeIndex - 1;
    this.setState({ activeIndex: nextIndex });
  }
  render() {
    const { activeIndex } = this.state;
    let { items } = this.state;
    return (
      <Carousel
        activeIndex={activeIndex}
        next={this.next}
        previous={this.previous}
      >
        {items.map(item => {
          return (
            <CarouselItem
              // onExiting={this.onExiting}
              // onExited={this.onExited}
              key={item.id}
              className="carousel-item"
            >
              <img
                src={process.env.PUBLIC_URL + item.bannerImageUrl}
                alt={item.bannerImageAlt}
              />
            </CarouselItem>
          );
        })}
        <ol className="carousel-indicators">
          {items.map((item, index) => {
            return (
              <li
                key={index}
                onClick={() => this.goToIndex(index)}
                className={classnames({ active: activeIndex === index })}
                style={{ backgroundImage: `url(process.env.PUBLIC_URL+ ${item.bannerImageUrl})` }}
              />
            );
          })}
        </ol>
      </Carousel>
    );
  }
}