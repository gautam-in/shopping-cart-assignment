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
import { MenuOutline , CloseOutline} from 'react-ionicons'

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

    const toggleMenuOpen = () => {
        document.querySelector(".headerMobileView").style.display = "flex"
    }
    
    const toggleMenuClose = () => {
        document.querySelector(".headerMobileView").style.display = "none"
    }
    return  (
        <>
            <Header>
                <HeaderContainer>
                    <Link href="/" >
                        <img style={{cursor: 'pointer'}} src="/static/images/logo_2x.png" alt="Sabka Bazaar Logo"/>
                    </Link>
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
                     <nav class="headerMobileView">         
                        <Link href="/">Home</Link>
                        <Link href="/products">Products</Link>
                         { isLoggedIn ?
                            <Link href="#">Logout</Link>  : (
                                <>
                                <Link href="/login">SignIn</Link>
                                <Link href="/register">Register</Link>
                            </>
                        ) }
                        <CloseOutline 
                            color={'#00000'} 
                            height="3.6rem"
                            width="3.6rem"
                            onClick={toggleMenuClose}
                            />

                    </nav> 

                    <button class="btn-mobile-icon" onClick={toggleMenuOpen}>
                        <MenuOutline
                            color={'#00000'} 
                            height="3.6rem"
                            width="3.6rem"
                        />
                    </button>
                </HeaderContainer>                                                                                                                                                                                                                                                                    
            </Header>
        </>
    )
}
