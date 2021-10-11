import { useContext, useMemo } from "react";
import CartContext from "./../library/contexts/cartContext";
import {
  CartStyles,
  CloseButton,
  CartWrapper,
  CartButton,
  CartItemStyle,
  CartDescription,
  CartContentWrapper,
  LowestPriceBanner,
  NoItems,
} from "../styles/CartStyles";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function CartItem({ productInfo }) {
  const { name, imageURL, price, quantity, ...otherInfo } = productInfo;
  const { addToCart, removeFromCart } = useContext(CartContext);
  const onItemDelete = () => {
    removeFromCart(otherInfo.id);
    toast("Deleted from Cart Successfully.", {
      autoClose: 3000,
      type: toast.TYPE.SUCCESS,
    });
  };
  const onItemAdd = () => {
    addToCart(productInfo);
    toast("Added to Cart Successfully.", {
      autoClose: 3000,
      type: toast.TYPE.SUCCESS,
    });
  };

  return (
    <CartItemStyle>
      <div>
        <img src={imageURL} alt={name} />
        <CartDescription>
          <h4>{name}</h4>
          <div>
            <CartButton onClick={onItemDelete}>-</CartButton>
            {quantity}
            <CartButton onClick={onItemAdd}>+</CartButton>
            <span>&times;</span>
            <p>Rs.${price}</p>
          </div>
        </CartDescription>
      </div>
      <p>Rs.${Math.floor(quantity * price)}</p>
    </CartItemStyle>
  );
}

export default function Cart() {
  const { closeCart, open, products = [] } = useContext(CartContext);
  const totalobj = useMemo(() => {
    return products.reduce(
      (prev, product) => {
        return {
          items: prev.items + product.quantity,
          price: prev.price + Math.floor(product.price * product.quantity),
        };
      },
      { items: 0, price: 0 }
    );
  }, [products]);
  return (
    <>
      <CartWrapper open={open} />
      <CartStyles open={open}>
        <CartContentWrapper>
          <header>
            <h4>My Cart ({totalobj?.items} item)</h4>
            <CloseButton onClick={closeCart}>&times;</CloseButton>
          </header>
          <section>
            {!!products.length ? (
              <>
                {products.map((product) => {
                  return <CartItem key={product.id} productInfo={product} />;
                })}
                <LowestPriceBanner>
                  <img
                    src={`/static/images/lowest-price.png`}
                    alt="lowest-price"
                  />
                  <p>You won't find it cheaper anywhere</p>
                </LowestPriceBanner>
              </>
            ) : (
              <NoItems>
                <h4>No Items in your cart</h4>
                <p>Your favourite items are just a click away</p>
              </NoItems>
            )}
          </section>
          <footer>
            <p>Promo code can be applied on payment page</p>
            <button>
              <span>Proceed to checkout</span>
              <span>Rs.${totalobj?.price}</span>
            </button>
          </footer>
        </CartContentWrapper>
      </CartStyles>
      <ToastContainer />
    </>
  );
}
