import { Link } from 'react-router-dom';
import { CartButton, NavStyles } from './styles/headerStyles';
import { useContext } from 'react';
import { ModalContext } from '../store/modal-context';
import { CartContext } from '../store/cart-context';
export default function Nav() {
  const ctxModal = useContext(ModalContext);
  const ctx = useContext(CartContext);
  return (
    <NavStyles>
      <div className="bar">
        <Link to="/login">SignIn</Link>
        <Link to="/register">Register</Link>
      </div>
      <div className="sub-bar">
        <div>
          <Link to="/home">Home</Link>
          <Link to="/products">Products</Link>
        </div>
        <CartButton onClick={ctxModal.toggleCart}>
          <img src="/static/images/cart.svg" alt="cart" />
          <span>{`${ctx.totalItemsCount} Items`}</span>
        </CartButton>
      </div>
    </NavStyles>
  );
}
