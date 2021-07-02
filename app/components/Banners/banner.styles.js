import styled from 'styled-components';

export const ImageConatiner = styled.div`
  max-width:${props => props.theme.maxWidth}px;
  margin-top: 2rem;
  .slick-next::before,
  .slick-prev::before {
    color: black;
  }
`;
