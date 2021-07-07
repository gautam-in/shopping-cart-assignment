import styled from 'styled-components';

export const CartBtn = styled.div`
    background: #eee;
    flex: 0 0 60%;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    cursor: pointer;
    width: 70%;
    align-self: flex-end;
    @media only screen and (max-width: 767px) {
      flex: 1;
    }
  img {
    filter: invert(19%) sepia(75%) saturate(3402%) hue-rotate(333deg)
      brightness(81%) contrast(89%);
    width: 15%;
  }
`;