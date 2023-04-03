import "../assets/styles/components/CarouselIndicator.scss";

const CarouselIndicator = ({ direction, clickHandler, label }) => (
  <button
    aria-label={`${direction} slide`}
    className={`carousel-indicator ${direction}`}
    onClick={clickHandler}
  >
    {label}
  </button>
);

export default CarouselIndicator;
