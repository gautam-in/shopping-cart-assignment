import Link from 'next/link';
import { useRouter } from 'next/router';
import useLocalStorage from '../utils/useLocalStorage';
import { useCart } from './CartContext';
import NavStyles from './styles/NavStyles';



export default function Nav() {
  const [userinfo, setUserInfo] = useLocalStorage('userinfo')
  const router = useRouter()
  const {dispatch, state: { cartItems }} = useCart()
  const openCart = () => {
    return dispatch({
      type: "CART_OPEN_STATE",
      data: {
        cartOpenState: true
      }
    })
  }

  return (
    <NavStyles>
      <div className="right"> 
        {
        userinfo && userinfo.email ? 
          <button onClick={() =>
            {
              setUserInfo('')
              router.push('/')
            }
            } >
          Logout 🗝
            </button>
        : <div className="col">
             <Link href="/signin">Signin 🔒</Link>
             <Link href="/register">Register ®</Link>
            </div>
        }
      </div>  
      <div  className='space-btw'>
        <div>
          <Link href="/">Home 🏠 </Link>
          <Link href="/products">Products 🍨</Link>
        </div>
        {userinfo && userinfo.email ? <button onClick={openCart}>Cart 👜  <code> {cartItems && cartItems.reduce((sum,item) => {
           return sum + item.quantity
          },0)} </code></button> : null }
      </div>              
    </NavStyles>
  );
}