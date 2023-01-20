import React from "react";

export interface ISliderProps {
  data: {
    bannerImageUrl: string;
    bannerImageAlt: string;
    isActive: boolean;
    order: number;
    id: string;
  }[];
}

const Slider: React.FC<ISliderProps> = ({ data }) => {
  const [active, setActive] = React.useState(0);
  const max = data.length;

  const intervalBetweenSlides = () =>
    setActive(active === max - 1 ? 0 : active + 1);

  React.useEffect(() => {
    const interval = setInterval(() => intervalBetweenSlides(), 4000);
    return () => clearInterval(interval);
  });

  const nextOne = () => active < max - 1 && setActive(active + 1);

  const prevOne = () => active > 0 && setActive(active - 1);

  const isActive = (value: number) => active === value && "active";

  const setSliderStyles = () => {
    const transition = active * -100;

    return {
      width: data.length * 100 + "vw",
      transform: "translateX(" + transition + "vw)",
    };
  };

  const renderSlides = () =>
    data.map((item: any, index) => {
      let imagePath =
        item.bannerImageUrl !== undefined && item.bannerImageUrl.split("/");
      let imageName = imagePath[imagePath?.length - 1];

      return (
        <div className="slider__wrapper__eachSlide" key={index}>
          <img
            src={require(`../../../static/images/offers/${imageName}`)}
            alt={item?.name}
            className="slider__wrapper__eachSlide__img"
          />
        </div>
      );
    });

  const renderDots = () =>
    data.map((_silde, index) => (
      <li
        className={isActive(index) + " slider__dotsContainer__dots"}
        key={index}
      >
        <div
          onClick={() => setActive(index)}
          className="slider__dotsContainer__dots"
        >
          <span>&#9679;</span>
        </div>
      </li>
    ));

  return (
    <section className="slider">
      <div className="slider__wrapper" style={setSliderStyles()}>
        {renderSlides()}
      </div>
      <button
        type="button"
        className="slider__arrows slider__arrows__prev"
        onClick={() => prevOne()}
      >
        PREV
      </button>
      <button
        type="button"
        className="slider__arrows slider__arrows__next"
        onClick={() => nextOne()}
      >
        NEXT
      </button>
      <ul className="slider__dotsContainer">{renderDots()}</ul>
    </section>
  );
};

export default Slider;
