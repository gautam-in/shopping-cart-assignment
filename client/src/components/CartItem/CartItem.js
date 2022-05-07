import Styled from "styled-components";
import H4 from "../Typography/H4";


const CartItemContainer = Styled.div`
    padding-bottom: 10px;
`;

const CartItem = Styled.div`
  display: flex;
  padding: 15px;
  background-color: #ffffff;
  border-bottom: 1px solid #ddd;
`;

const CartItemImage = Styled.img`
  width: 20%;
  margin-right: 15px;
`;

const CartItemInfo = Styled.div`
  flex: 1;
`;

const CartPriceContainer = Styled.div`
  display: flex;
  justify-content: space-between;
`;

const CartItemPrice = Styled.div`
  color: #505050;
  font-weight: 600;
`;

const CartTotalPrice = Styled.div`
  font-size: 18px;
  justify-self: flex-end;
  color: #333131;
  font-weight: 600;
`;

const CircleButtonContainer = Styled.button`
  border: 1px solid #aaa;
  width: 22px;
  height: 22px;
  border-radius: 100%;
  position: relative;
  margin: 4px;
  display: inline-block;
  vertical-align: middle;
  background: #bf2957;
  cursor: pointer;
  outline: none;
  &:hover {
    background: #cf5379;
  }
  &:before,&:after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
  }
`;

const CircleButtonPlusSymbol = Styled(CircleButtonContainer)`
  &:before {
    background: #ffffff;
    width: 2px;
    margin: 4px auto;
  }
  
  &:after {
    background: #ffffff;
    margin: auto 4px;
    height: 2px;
    box-shadow: none;
  }
`;

const CircleButtonMinusSymbol = Styled(CircleButtonContainer)`
  &:before {
    background: #ffffff;
    margin: auto 4px;
    height: 2px;
  }
`;

const CartQuantityActionContainer = Styled.div`
  display: flex;
  column-gap: 15px;
`;

const CartItemNameContainer = Styled.div`
    margin: 10px 0;
`;

const CrossIcon = Styled.span``;

const QuantityStyle = Styled.span``;

const CartItemComponent = ({ data, key ,handleAddCartItem, handleRemoveCartItem }) => {

  return (
    <>
      <CartItemContainer key={key}>
        <CartItem >
          <CartItemImage src={data.imageURL} alt={data.name} />
          <CartItemInfo>
            <CartItemNameContainer>
              <H4>{data.name}</H4>
            </CartItemNameContainer>
            <CartPriceContainer>
              <CartQuantityActionContainer>
                <CircleButtonMinusSymbol onClick={() => handleRemoveCartItem(data)}></CircleButtonMinusSymbol>
                  <QuantityStyle>{data.quantity}</QuantityStyle>
                <CircleButtonPlusSymbol onClick={() => handleAddCartItem(data)}></CircleButtonPlusSymbol>
                <CrossIcon>&times;</CrossIcon>
                <CartItemPrice>{`Rs. ${data.price}`}</CartItemPrice>
              </CartQuantityActionContainer>
              <CartTotalPrice>{`Rs.${data.quantity * data.price}`}</CartTotalPrice>
            </CartPriceContainer>
          </CartItemInfo>
        </CartItem>
      </CartItemContainer>
    </>
  );
};

export default CartItemComponent;
