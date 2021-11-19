import Link from 'next/link';
import { 
    HeaderContainer, 
    HeaderContent, 
    Header, 
    CartButton
} from '../styles/Header';
import { useSelector, useDispatch } from 'react-redux';
import { setAuthentication } from '../../store/actions/authAction';
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
                    <img src="/static/images/logo_2x.png" alt="Sabka Bazaar Logo"/>
                    <HeaderContent>
                        <nav className="topNav">
                            {   
                                loginStatus ? 
                                    <a href="#" onClick={() => {
                                        dispatch(setAuthentication(false, null))
                                        setLoginStatus(false)
                                    }}>Logout</a> :
                                (
                                    <>
                                        <Link href="/login">SignIn</Link>
                                        <Link href="#">Register</Link>
                                    </>
                                )

                             }    
                        </nav>
                        <div className="bottomNav">
                            <nav>
                                <Link href="/">Home</Link>
                                <Link href="/products">Products</Link>
                            </nav>
                           
                            <CartButton onClick={openOverlay}>Cart {cartItemLength}</CartButton>

                        </div> 
                    </HeaderContent>
                </HeaderContainer>                                                                                                                                                                                                                                                                    
            </Header>
        </>
    )
}
