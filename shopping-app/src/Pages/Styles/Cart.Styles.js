import styled from "styled-components";
import { Button } from "../../Components/Styles/Button.Styles";

const CartContainer = styled.main`
  min-height: 85vh;
  width: 100%;
  padding: 1rem 0.5rem;

  display: flex;
  flex-direction: column;
  background-color: #e5e5e5;
  position: relative;
`;

const CartHeader = styled.header`
  margin: 0;
  padding: 1.5rem 1rem;
  background-color: #fff;
  border-radius: 0.5rem;

  display: flex;
  gap: 0.5rem;
  align-items: center;
`;

const ItemContainer = styled.section`
  padding: 1.5rem 1rem;
  margin-top: 1rem;

  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #fff;

  @media only screen and (max-width: 499px) {
    & {
      flex-direction: column;
    }
  }
`;

const ItemWrapper = styled.div`
  width: 75%;
  display: flex;
  align-items: center;
  gap: 1rem;

  @media only screen and (max-width: 499px) {
    & {
      width: 100%;
    }
  }
`;

const FlexColumnContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

const ItemPrice = styled.p`
  font-size: 1.6rem;
  font-weight: 700;
`;

const LowestPriceContainer = styled.section`
  display: flex;
  align-items: center;
  margin: 0.5rem auto;
  width: 100%;
  padding: 0.5rem 1rem;
  gap: 2rem;
  background-color: #fff;

  @media only screen and (max-width: 499px) {
    & {
      margin: 0.5rem auto;
      padding: 0.5rem 0;
    }
  }
`;

const CartFooter = styled.footer`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #fff;
  width: 100%;
  padding: 1.5rem 1rem;

  margin-top: 0;
`;

const CartButton = styled(Button)`
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin: 1.5rem 0 0.5rem 0;
  border-radius: 0.5rem;
`;

const CartImage = styled.img`
  width: 12rem;

  @media only screen and (max-width: 499px) {
    width: 8rem;
  }
`;

const QuantityBtn = styled(Button)`
  padding: 0.5rem 2rem;
  font-weight: 700;

  @media only screen and (max-width: 599px) {
    margin: 0;
    padding: 0.5rem;
  }
`;

export {
  CartContainer,
  CartHeader,
  ItemContainer,
  ItemWrapper,
  ItemPrice,
  LowestPriceContainer,
  CartFooter,
  CartButton,
  CartImage,
  FlexColumnContainer,
  QuantityBtn,
};
