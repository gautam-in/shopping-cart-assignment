import styled from 'styled-components';

export const CategoryContainer = styled.div`
  display: grid;
  grid-template-columns: 35% 65%;
  width: 70%;
  margin: 0 auto;
  align-items: center;
  grid-auto-flow: dense;
  direction: rtl;
  direction: ${(props) => (props.index % 2 === 0 ? 'ltr' : 'rtl')};
  box-shadow: 0 8px 5px -9px grey;
  padding: 2rem 0;
  img {
    width: 320px;
    height: auto;
  }
  :last-child {
    box-shadow: none;
  }
`;

export const CategoryDetail = styled.div`
  text-align: center;
`;
