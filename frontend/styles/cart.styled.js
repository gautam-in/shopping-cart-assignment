import styled from 'styled-components';

import { FlexMixin, GridMixin, FlexHorizontalCenter } from './mixins';

export const CartButtonWrapper = styled.button`
  text-decoration: none;
  border: none;
  width: inherit;
  height: 5rem;

  font-size: 1.6rem;

  display: flex;
  justify-content: space-around;
  align-items: center;
  cursor: pointer;

  i {
    width: 10px;
    margin-right: 10px;

    color: var(--primaryPink);
  }

  @media only screen and (min-width: 320px) and (max-width: 767px) {
    height: 100%;
  }
`;

export const CartWrapper = styled.div`
  position: relative;
  background: #f3f3f3;
  position: fixed;
  height: calc(100vh - 8rem);
  top: 8rem;
  right: calc(10% - 0rem);
  width: 20%;
  min-width: 500px;
  bottom: 0;
  transform: translateX(200%);
  transition: all 0.3s;
  box-shadow: 0 0 10px 3px rgba(0, 0, 0, 0.2);
  z-index: 5;
  display: grid;
  grid-template-rows: auto 1fr auto;
  color: white;
  letter-spacing: 0.2px;
  ${(props) => props.open && `transform: translateX(0);`};

  header {
    margin-bottom: 2rem;
    padding: 1rem;
    background-color: black;
    font-weight: bold;

    ${FlexMixin('space-between', 'center')};

    div span {
      font-weight: normal;
      font-size: 1rem;
    }

    height: 50px;
  }
  footer {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    font-size: 3rem;
    font-weight: 900;
    height: 78px;
    background: white;
    line-height: 1;

    p {
      margin: 0;
      margin-bottom: 1rem;
      color: black;
      font-size: 1rem;
      font-weight: normal;
    }
  }

  @media only screen and (min-width: 320px) and (max-width: 767px) {
    width: 100%;
    right: 0;
    top: 0;
    height: 100%;
    min-width: 100px;
  }

  @media only screen and (min-width: 768px) and (max-width: 1025px) {
    width: 100%;
    right: 0;
  }
`;

export const BlackBackground = styled.div`
  position: absolute;
  top: 0;
  left: 0;

  height: 100vh;
  width: 100vw;

  background-color: rgba(0, 0, 0, 0.1);

  display: ${(props) => (props.open ? 'block' : 'none')};
`;

export const CartItemWrapper = styled.div`
  color: black;
  ${GridMixin('.5fr 2fr', 'space-between', 'center')};
  padding: 1rem;
  background-color: white;
  max-height: 90px;
  margin-bottom: 1rem;
`;

export const CartItemImage = styled.img`
  width: 60px;
`;

export const ItemMeta = styled.div`
  .item__name {
    font-size: 1.2rem;
    font-weight: bolder;
  }

  .item_price_meta {
    display: flex;
    justify-content: space-between;
    align-items: center;
    letter-spacing: -1px;
  }

  .item_price_meta_two {
    width: 20%;
    display: flex;
    justify-content: space-between;
    align-items: center;

    @media only screen and (min-width: 320px) and (max-width: 767px) {
      width: 55%;
    }
  }

  .item_quantity {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .times_cart {
    margin: 0 10px;
  }
`;

export const CartItemsWrapper = styled.div`
  height: calc(100vh - 12.8rem - 120px);

  overflow-y: scroll;
  ::-webkit-scrollbar {
    display: none;
  }

  @media only screen and (min-width: 320px) and (max-width: 767px) {
    height: calc(100vh - 160px);
  }
`;

export const CheapPriceWrapper = styled.div`
  width: 100%;

  ${FlexHorizontalCenter()};
`;

export const CheapPriceContent = styled.article`
  width: 90%;
  background-color: white;

  ${GridMixin('auto 2fr', 'space-between', 'center', '10px')};

  padding: 0.5rem;
  border-radius: 5px;

  img {
    width: 8rem;
  }

  color: black;
  font-size: 1.3rem;

  @media only screen and (min-width: 320px) and (max-width: 767px) {
    font-size: 1rem;
  }
`;

export const ItemButton = styled.button`
  border: none;
  border-radius: 3px;
  height: 20px;
  width: 20px;
  padding: 0;
  margin-left: ${(props) => props.marginLeft || 0};
  margin-right: ${(props) => props.marginRight || 0};
  color: white;
  background-color: var(--primaryPink);

  cursor: pointer;

  display: flex;
  justify-content: center;
  align-items: center;

  i {
    font-size: 0.8rem;
  }
`;
