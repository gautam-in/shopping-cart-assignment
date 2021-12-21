import React from "react";
import { useSelector } from "react-redux";
import { productsSelectors } from "../../../pages/products/redux/selectors";
import { getTotal } from "../../../utils";
import Button from "../../atoms/button/button";

function CartButton({ onClick }) {
  const cartItemData = useSelector(
    productsSelectors.getcartItemsSelectors.selectCartItemsData
  );

  return (
    <div>
      <Button customClass="header__cart_button" onClick={() => onClick()}>
        <img src="/static/images/cart.svg" alt="cart" height="20" width="20" />
        {`${getTotal(cartItemData, "quantity") || 0} Items`}
      </Button>
    </div>
  );
}

export default CartButton;
