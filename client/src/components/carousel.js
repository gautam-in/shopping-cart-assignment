import Slider from "react-slick";
import { SLIDER_CONFIG } from '../utils/constants'

function Carousel(props) {
 let {bannerList} = props
  return (
    <>
        <div className="container floating_shadow">
        <Slider {...SLIDER_CONFIG}>
          {bannerList.map((banner, i) => {
            return (
              <img src={banner.bannerImageUrl} alt={banner.bannerImageAlt} key={banner.id} />
            )
          })}
        </Slider>
        </div>
    </>
  );
}

export default Carousel;
