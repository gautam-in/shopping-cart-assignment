import styled from 'styled-components';

import { FlexHorizontalCenter, GridMixin } from './mixins';

export const BannersWrapper = styled.article`
  margin-top: 3rem;
`;

export const TitleWrapper = styled.div`
  font-size: 2rem;
  font-weight: 700;

  @media only screen and (min-width: 320px) and (max-width: 767px) {
    font-size: 1.2rem;
  }
`;

export const DescriptionWrapper = styled.div`
  ${FlexHorizontalCenter()};

  a {
    text-decoration: none !important;

    background-color: var(--primaryPink);
    color: white;

    font-weight: 500;
    font-size: 1.6rem;
    margin-top: 1rem;

    padding: 1rem;

    cursor: pointer;

    @media only screen and (min-width: 320px) and (max-width: 767px) {
      font-size: 1.1rem;
    }

    @media only screen and (min-width: 768px) and (max-width: 991px) {
      font-size: 1.3rem;
    }
  }
`;

export const DescriptionContent = styled.div`
  font-size: 1.2rem;

  font-weight: 500;
  text-align: center;

  @media only screen and (min-width: 320px) and (max-width: 767px) {
    font-size: 0.9rem;
  }
`;

export const BannerWrapper = styled.div`
  ${GridMixin((props) => props.grid, 'space-between', 'stretch')};
  padding: 3rem 0;
`;

export const ImageWrapper = styled.img`
  @media only screen and (min-width: 320px) and (max-width: 767px) {
    width: 120px;
    height: 90px;
  }

  @media only screen and (min-width: 768px) and (max-width: 991px) {
    width: 150px;
  }

  @media only screen and (min-width: 992px) {
    width: 200px;
  }
`;
