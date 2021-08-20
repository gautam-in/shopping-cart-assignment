import { CartItemStyled } from "./styles/CartItemStyles";
import styled from "styled-components";

const ThumbStyled = styled.img`
  height: 50%;
  width: 20%;
`;

const ItemInfoStyled = styled.div`
  width: 60%;
  height: fit-content;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  text-align: center;
  .icon-contain {
    display: flex;
    position: relative;
    /* span {
      transform: translate(20px, -5px);
    } */
    justify-content: space-evenly;
    align-items: center;
    right: 10%;
  }

  .icon-contain #qty {
    position: absolute;
    right: 53%;
  }
  .icon-contain #total {
    position: absolute;
    left: 100%;
  }

  .icon {
    width: 7%;
    height: 7%;
    margin-left: 40px;
  }
`;
export default function CartItem({
  item,
  setCart,
  cart,
  numItems,
  setNumItems,
}) {
  function increaseQty(itemId) {
    console.log("increase clicked", item);
    const cartData = [...cart];
    const indexInCart = cart.findIndex((it) => {
      return it.id === itemId;
    });

    cartData[indexInCart].quantity++;
    setCart(cartData);
    const totalItems = cartData.reduce((acc, item) => {
      console.log("accumilatr", acc);
      console.log("item", item);
      return (acc += item.quantity);
    }, 0);
    setNumItems(totalItems);
  }
  function decreaseQty(itemId) {
    const cartData = [...cart];
    const indexInCart = cart.findIndex((it) => {
      return it.id === itemId;
    });

    if (cartData[indexInCart].quantity > 0) {
      cartData[indexInCart].quantity--;
    }
    setCart(cartData);
    const totalItems = cartData.reduce((acc, item) => {
      console.log("accumilatr", acc);
      console.log("item", item);
      return (acc += item.quantity);
    }, 0);
    console.log("totalitems", totalItems);
    setNumItems(totalItems);
  }
  function totalPrice() {
    console.log("totalprice called");
    return item.quantity * item.price;
  }
  return (
    <CartItemStyled>
      <ThumbStyled src={item.imageURL}></ThumbStyled>
      <ItemInfoStyled>
        <h4>{item.name}</h4>
        <div className="icon-contain">
          <img
            className="icon"
            src="/static/images/plus.png"
            onClick={() => {
              increaseQty(item.id);
            }}
          ></img>
          <span id="qty">
            <h4>{item.quantity}</h4>
          </span>

          <img
            className="icon"
            src="/static/images/minus.png"
            onClick={() => {
              decreaseQty(item.id);
            }}
          ></img>
          <span>X Rs{item.price}</span>
          <span id="total"> Rs{totalPrice()}</span>
        </div>
      </ItemInfoStyled>
    </CartItemStyled>
  );
}
