import Link from 'next/link';
import { 
    HeaderContainer, 
    HeaderContent, 
    Header, 
    CartButton
} from '../styles/Header';
import { useSelector, useDispatch } from 'react-redux';
import { setLogout } from '../../store/actions/authAction';
import { useEffect, useState } from 'react';

export default function HeaderComponent() { 
    const [ loginStatus, setLoginStatus ] = useState(false)
    const { isLoggedIn } = useSelector(state => state.auth)
    const dispatch = useDispatch()
    
    const cartItemLength = useSelector(state => state.auth.cart.cartItems.length)
    useEffect(() => {
        setLoginStatus(isLoggedIn)
    }, [isLoggedIn])
    
    const openOverlay = () => {
        document.querySelector(".overlay").style.display = "block"
    }

    return  (
        <>
            <Header>
                <HeaderContainer>
                    <Link href="/">
                        <img src="/static/images/logo_2x.png" alt="Sabka Bazaar Logo"/></Link>
                    <HeaderContent>
                        <nav className="topNav">
                            {   
                                loginStatus ? 
                                    <a href="#" onClick={() => {
                                        dispatch(setLogout())
                                        setLoginStatus(false)
                                    }}>Logout</a> :
                                (
                                    <>
                                        <Link href="/login">SignIn</Link>
                                        <Link href="/register">Register</Link>
                                    </>
                                )

                             }    
                        </nav>
                        <div className="bottomNav">
                            <nav>
                                <Link href="/">Home</Link>
                                <Link href="/products">Products</Link>
                            </nav>
                           
                            <CartButton onClick={openOverlay}>Cart {cartItemLength > 0 ? cartItemLength : null}</CartButton>

                        </div> 
                    </HeaderContent>
                </HeaderContainer>                                                                                                                                                                                                                                                                    
            </Header>
        </>
    )
}
