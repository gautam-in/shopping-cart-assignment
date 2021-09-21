import Slider from 'react-slick';
import styled from 'styled-components';

import { ShadowDivWrapper } from 'styles/global.styled';

import { useFetch } from 'utils/customHooks';
import { ENDPOINTS } from 'utils/constants';

function NextArrow(props) {
  const { className, style, onClick } = props;

  return (
    <div
      className={className}
      style={{ ...style, display: 'block' }}
      onClick={onClick}
    >
      <div>Next</div>
    </div>
  );
}

function PrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: 'block' }}
      onClick={onClick}
    >
      <div>Prev</div>
    </div>
  );
}

const SliderWrapper = styled.div`
  img {
    width: 100%;
  }
`;

const Offers = () => {
  const url = process.env.API_URL + ENDPOINTS.BANNERS;

  const { data, loading, error } = useFetch(url);

  const slickSettings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

  return (
    <ShadowDivWrapper>
      {data && data.length > 0 && (
        <Slider {...slickSettings}>
          {data.map((banner) => {
            return (
              <SliderWrapper style={{ height: '100%' }}>
                <img src={banner.bannerImageUrl} alt={banner.bannerImageAlt} />
              </SliderWrapper>
            );
          })}
        </Slider>
      )}
    </ShadowDivWrapper>
  );
};

export default Offers;
