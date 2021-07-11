import React, { useContext } from 'react';
import styled from 'styled-components';
import Slider from 'react-slick';

import HomeItem from '../component/fragments/HomeItem';
import { CategoryContext } from '../context/ProductCategoryContext';

const HomeStyles = styled.div`
  margin: 3rem;
  .Home img {
    height: 30px;
  }
  .slick-slider {
    box-shadow: 0px 8px 6px -6px #bbbbbb;
  }
  .slick-dots button {
    position: absolute;
    bottom: 22px;
  }
  @media only screen and (min-width: 600px) {
    margin: 2rem 10rem;
  }
  @media only screen and (min-width: 992px) {
  }
  @media only screen and (min-width: 1200px) {
  }
`;
export default function Home() {
  const [carouselData, setCarouselData] = React.useState([]);
  const { categoryData } = useContext(CategoryContext);

  var settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 3000,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  React.useEffect(() => {
    (async function getImage() {
      const data = await fetch('http://localhost:5000/banners').then((res) =>
        res.json()
      );
      setCarouselData(data);
    })();
  }, []);

  return (
    <HomeStyles className='Home'>
      <Slider {...settings}>
        {carouselData.map((item) => (
          <img
            key={item.id}
            src={`..${item.bannerImageUrl}`}
            alt={item.bannerImageAlt}
          />
        ))}
      </Slider>

      {categoryData.map(
        (item) => item.enabled && <HomeItem key={item.id} item={item} />
      )}
    </HomeStyles>
  );
}
