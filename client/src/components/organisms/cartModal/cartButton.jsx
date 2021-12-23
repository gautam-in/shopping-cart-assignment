import { useSelector } from 'react-redux';
import { getTotal } from '../../../utils';
import { productsSelectors } from '../../../pages/products/redux/selectors';
import Button from '../../atoms/button/button';
import * as constants from '../../../constants';

function CartButton({ onClick }) {
  const cartItemData = useSelector(productsSelectors.getcartItemsSelectors.selectCartItemsData);
  return (
    <div>
      <Button customClass="header__cart_button" onClick={() => onClick()}>
        <img src={constants.CART_LOGO} alt="cart" height="20" width="20" className="mx-1" />
        {`${getTotal(cartItemData, 'quantity') || 0} Items`}
      </Button>
    </div>
  );
}

export default CartButton;
