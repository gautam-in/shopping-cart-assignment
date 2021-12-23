import classNames from 'classnames';
import usePrevNext from '../../../hooks/usePrevNext';
import './carousel.scss';

function Carousel(props) {
  const { bannerData } = props;
  const [index, setIndex, handleNext, handlePrev] = usePrevNext(bannerData);
  return (
    <div className="carousel">
      <div id="carouselExampleIndicators" className="carousel carousel-dark slide" data-bs-ride="carousel">
        <div className="carousel-indicators">
          {bannerData?.map((data, buttonIndex) => (
            <button
            key={buttonIndex}
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to={buttonIndex}
              className={classNames({
                active: buttonIndex === index,
              })}
              aria-current="true"
              aria-label={`Slide ${buttonIndex + 1}`}
              onClick={() => setIndex(buttonIndex)}
            ></button>
          ))}
        </div>
        <div className="carousel-inner">
          {bannerData?.map(({ bannerImageUrl, bannerImageAlt }, imageIndex) => (
            <div
              className={classNames('carousel-item', {
                active: imageIndex === index,
              })}
              key={imageIndex}
            >
              <img src={`${bannerImageUrl}`} className="d-block w-100" alt={bannerImageAlt} />
            </div>
          ))}
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="prev"
          onClick={handlePrev}
        >
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="next"
          onClick={handleNext}
        >
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
}

export default Carousel;
