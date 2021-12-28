import React from 'react';
import styled from 'styled-components';

import BannerSlider from '../../components/BannerSlider/BannerSlider';
import Categories from '../../components/Categories/Categories';

const HomeWrapper = styled.div`
  margin-top: 80px;
`;

const HomePage = () => {
  return (
    <HomeWrapper>
      <BannerSlider />
      <Categories />
    </HomeWrapper>
  );
}

export default HomePage;