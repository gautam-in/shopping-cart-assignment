import styled from 'styled-components';
import CartStyles from './styles/CartStyles';
import CloseButton from './styles/CloseButton';
import Supreme from './styles/Supreme';
import RemoveFromCart from './RemoveFromCart';
import { useCart } from './CartContext';
import formatMoney from '../utils/formatMoney';
import FlexRowStyle from './styles/FlexRowStyle';



const CartItemStyles = styled.li`
  padding: 1rem 0;
  border-bottom: 1px solid var(--lightGrey);
  display: grid;
  grid-template-columns: auto 1fr auto;
  img {
    margin-right: 1rem;
  }
  h3,
  p {
    margin: 0;
  }
`;

function CartItem({ item }) {
 
  if (!item) return null;
  return (
    <CartItemStyles>
      <img
        width="100"
        src={item.imageURL}
        alt={item.name}
      />
      <div>
        <h3>{item.name}</h3>
        <p>
          {formatMoney(item.price * item.quantity)} =
          <em>
            {item.quantity} &times; {formatMoney(item.price)}
          </em>
        </p>
      </div>
      <RemoveFromCart item={item} />
    </CartItemStyles>
  );
}

export default function Cart() {
 
//   const { cartOpen, closeCart } = useCart();
const {
  state: {cartItems},dispatch
} = useCart()

const addItem = () => {
   dispatch({
     type: 'ADD',
     data: {
       item: {id: 'test'}
     }
   })
}

const closeCart = () => {
  dispatch({
    type: 'CART_OPEN_STATE',
    data: {
      cartOpenState: false
    }
  })
}
  return (
    <CartStyles open={true}>
      <header>
        <div className="flex-row space-btw">
         <Supreme className="gradient">Cart  <code>({`${cartItems.reduce((sum,item) =>{return sum + item.quantity},0)})`}</code></Supreme>
         <CloseButton onClick={closeCart} >&times;</CloseButton>
        </div>
      </header>
      {cartItems && cartItems.length ===0 ? 
      <p>Cart is empty! Please add product.</p> :
      <ul>
         {cartItems && cartItems.map((item) => {
           console.log(item)
           return <CartItem key={item.id} item={item}/>
         })}
      </ul>
    }
      
      <footer>
        <p>Total amount {formatMoney(
          cartItems && cartItems.reduce((sum, item) => {
            return (sum + (item.price * item.quantity))
          }, 0))
          }</p>
        <button>Checkout</button>
      </footer>
    </CartStyles>
  );
}
