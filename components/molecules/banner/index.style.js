import styled from "styled-components";

const CarouselStyles =styled.div`
// SASS variable for media query breakpoint
$breakpoint-desktop: 992px;

// Resetting default styles
ul {
  padding: 0;
  margin: 0;
  list-style-type: none;
}

// Fix for jumping arrows
.carousel-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  min-height: 210px;
}

.carousel {
  position: relative;
}

// Carousel slides
.carousel__slide {
  margin:auto;
  display: none;
  max-width: 900px;
  list-style-type: none;
  text-align: center;

  @media (max-width: 991px) {
    padding-right: 60px;
    padding-left: 60px;
  }

  &--active {
    display: block;
  }
}

// Content of slides
.carousel-slide__content {
  margin-bottom: 12px;
  font-family: 'Open Sans', 'Trebuchet MS', sans-serif;
  font-size: 16px;
  height:120px;
  
    img{
      height:100%;
      width:100%;
    }

  @media (max-width: 420px) {
    height: 100px;
  }
}

.carousel-slide__author,
.carousel-slide__source {
  font-size: 14px;

  @media (min-width: $breakpoint-desktop) {
    font-size: 16px;
  }
}

.carousel-slide__source {
  font-style: italic;
  color: #888;
}

// Carousel arrows
.carousel__arrow {
  position: absolute;
  top: 50%;
  display: block;
  color: #111;
  cursor: pointer;
  opacity: .75;
  transform: translateY(-50%);
  transition: opacity .15s cubic-bezier(.4, 0, 1, 1);

  &:focus {
    outline: 0;
  }

  &:hover {
    opacity: .5;
  }

  &--left {
    left: 32px;
  }

  &--right {
    right: 32px;
  }
}

// Carousel indicators
.carousel__indicators {
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin-bottom: 12px;

  li {
    &:nth-of-type(n + 2) {
      margin-left: 9px;
    }
  }
}

.carousel__indicator {
  display: block;
  width: 24px;
  height: 3px;
  background-color: #111;
  cursor: pointer;
  opacity: .15;
  transition: opacity .15s cubic-bezier(.4, 0, 1, 1);

  &:hover {
    opacity: .5;
  }

  &--active {
    &,
    &:hover {
      opacity: .75;
    }
  }
}
`;

export default CarouselStyles;