import { Button } from "@material-ui/core";
import { Component } from "react";
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import CarouselStyles from "./index.style";
// const carouselContainer = document.querySelector(".carousel-container");

class CarouselLeftArrow extends Component {
  render() {
    return (      
      <span
        className="carousel__arrow carousel__arrow--left"
        onClick={this.props.onClick}
      >
        <ArrowBackIcon/>
      </span>
      // <a
      //   href="#"
      //   className="carousel__arrow carousel__arrow--left"
      //   onClick={this.props.onClick}
      // >
      //   <span className="fa fa-2x fa-angle-left" />
      // </a>
    );
  }
}

class CarouselRightArrow extends Component {
  render() {
    return (
         
      <span
        className="carousel__arrow carousel__arrow--right"
        onClick={this.props.onClick}
      >
        <ArrowForwardIcon/>
      </span>
      // <a
      //   href="#"
      //   className="carousel__arrow carousel__arrow--right"
      //   onClick={this.props.onClick}
      // >
      //   <span className="fa fa-2x fa-angle-right" />
      // </a>
    );
  }
}

class CarouselIndicator extends Component {
  render() {
    return (
      <li>
        <a
          className={
            this.props.index == this.props.activeIndex
              ? "carousel__indicator carousel__indicator--active"
              : "carousel__indicator"
          }
          onClick={this.props.onClick}
        />
      </li>
    );
  }
}

class CarouselSlide extends Component {
  render() {
    return (
      <li
        className={
          this.props.index == this.props.activeIndex
            ? "carousel__slide carousel__slide--active"
            : "carousel__slide"
        }
      >
        {/* <p className="carousel-slide__content">{this.props.slide.bannerImageAlt}</p> */}
        <div className="carousel-slide__content">
          <img src={this.props.slide.bannerImageUrl} alt={this.props.slide.bannerImageAlt}/>
        </div>

        {/* <p>
          <strong className="carousel-slide__author">
            {this.props.slide.author}
          </strong>,
          {" "}
          <small className="carousel-slide__source">
            {this.props.slide.source}
          </small>
        </p> */}
      </li>
    );
  }
}

// Carousel wrapper component
class Banner extends Component {
  constructor(props) {
    super(props);

    this.goToSlide = this.goToSlide.bind(this);
    this.goToPrevSlide = this.goToPrevSlide.bind(this);
    this.goToNextSlide = this.goToNextSlide.bind(this);

    this.state = {
      activeIndex: 0
    };
  }

  goToSlide(index) {
    this.setState({
      activeIndex: index
    });
  }

  goToPrevSlide(e) {
    e.preventDefault();

    let index = this.state.activeIndex;
    let { slides } = this.props;
    let slidesLength = slides.length;

    if (index < 1) {
      index = slidesLength;
    }

    --index;

    this.setState({
      activeIndex: index
    });
  }

  goToNextSlide(e) {
    e.preventDefault();

    let index = this.state.activeIndex;
    let { slides } = this.props;
    let slidesLength = slides.length - 1;

    if (index === slidesLength) {
      index = -1;
    }

    ++index;

    this.setState({
      activeIndex: index
    });
  }

  render() {
    return (
      <CarouselStyles>
          <div className="carousel">
        <CarouselLeftArrow onClick={e => this.goToPrevSlide(e)} />

        <ul className="carousel__slides">
          {this.props.slides.map((slide, index) =>
            <CarouselSlide
              key={index}
              index={index}
              activeIndex={this.state.activeIndex}
              slide={slide}
            />
          )}
        </ul>

        <CarouselRightArrow onClick={e => this.goToNextSlide(e)} />

        <ul className="carousel__indicators">
          {this.props.slides.map((slide, index) =>
            <CarouselIndicator
              key={index}
              index={index}
              activeIndex={this.state.activeIndex}
              isActive={this.state.activeIndex==index} 
              onClick={e => this.goToSlide(index)}
            />
          )}
        </ul>
      </div>
    
      </CarouselStyles>
        );
  }
}

// Render Carousel component
//render(<Carousel slides={carouselSlidesData} />, carouselContainer);
export default Banner;
