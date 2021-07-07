
import styles from '../../styles/cartmodal.module.scss';
import { useCart } from '../../util/cartState';
import CartItem from './CartItem';

const CartModal = ({ show, close }) => {

  const { cart, setCart, totalCartPrice, clearCart } = useCart();

  const onIncrementHandler = (id) => {
    const newCart = [...cart];
    const index = newCart.findIndex(i => i.id == id);
    const newItem = { ...newCart[index] }
    newItem.quantity = newItem.quantity + 1;
    newCart[index] = newItem;
    setCart(newCart);
  }

  const onDecrementHandler = (id) => {
    const newCart = [...cart];
    const index = newCart.findIndex(i => i.id == id);
    const newItem = { ...newCart[index] }

    newItem.quantity = newItem.quantity - 1;
    if (newItem.quantity == 0) {
      setCart(newCart.filter(i => i.id != id));
    } else {
      newCart[index] = newItem;
      setCart(newCart);
    }
  }

  return show ? (
    <>
      <div className={styles.backdrop} onClick={close} />
      <div className={styles.cartmodal}>
        <header>
          <p>My Cart ({cart.length})</p>
          <p onClick={close}>x</p>
        </header>

        <div className={styles.main} >
          {
            cart.map(item => <CartItem key={item.id + Math.random()} {...item} inc={onIncrementHandler} dec={onDecrementHandler} />)
          }
          {
            cart.length > 0 ? (
              <div className={styles.lowestPrice} >
                <img src="/static/images/lowest-price.png" alt="Cart" />
                <small>You won't find it cheaper anywhere</small>
              </div>
            ) : (
              <div className={styles.emptyCart} >
                <h4>No items in your cart</h4>
                <p>Your favourite items are just a click away</p>
              </div>
            )
          }
          
        </div>

        <footer style={{backgroundColor: cart.length > 0 ? "#fff" : "lightgray"}} >
          {cart.length > 0 ? <small>Promo code can be applied on payment page</small> : null}
          <div className={styles.checkoutButton} onClick={(e) => {close(e);clearCart()}}>
            {
              cart.length > 0 ? (
                <>
                  <p>Proceed to Checkout</p>
                  <p>Rs.{totalCartPrice} &gt; </p>
                </>
              ) : (
                <p style={{textAlign: "center", width:"100%"}}>Start Shopping</p>
              )
            }
          </div>
        </footer>
      </div>
    </>
  ) : null
}


export default CartModal
