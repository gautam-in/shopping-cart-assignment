import styled from 'styled-components';

import { GridMixin, FlexMixin } from './mixins';

export const ArticleWrapper = styled.article`
  ${GridMixin('1fr 1fr', 'space-between', 'start')};

  margin-top: 1.5rem;
  margin-bottom: 1.5rem;

  @media only screen and (min-width: 320px) and (max-width: 767px) {
    display: block;
  }
`;

export const LeftSectionWrapper = styled.section`
  ${FlexMixin('space-between', 'flex-start', 'column')};

  @media only screen and (min-width: 320px) and (max-width: 767px) {
    display: none;
  }
`;

export const LeftSectionContent = styled.div`
  width: inherit;
`;

export const TitleWrapper = styled.h1`
  font-weight: bolder;
  font-size: 4rem;

  margin: 0;
`;

export const TagLineWrapper = styled.h4`
  font-size: 1.3rem;

  color: var(--blackLight);

  @media only screen and (max-width: 880px) {
    font-size: 1.1rem;
  }
`;
