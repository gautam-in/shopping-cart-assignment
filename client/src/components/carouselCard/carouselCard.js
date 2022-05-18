import Carousel from 'react-bootstrap/Carousel'
import "../../../node_modules/bootstrap/dist/css/bootstrap.css"
import "./carousel.scss"

// Carousel card component.
const CarouselCard = (props) => {
  return (<>
    <Carousel className="carousel-container">
      {props.bannerData && props.bannerData.map((banner) => {
        return (
          <Carousel.Item key={banner.id} interval={1000} active={banner.isActive}>
            <img
              className="d-block w-100 banner-img"
              src={banner.bannerImageUrl}
              alt={banner.bannerImageAlt}
            />
          </Carousel.Item>
        );
      })}
    </Carousel>
  </>
  )
}

export default (CarouselCard);