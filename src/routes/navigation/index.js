import { Fragment, useContext } from "react";
import { Link, Outlet } from "react-router-dom";
import { UserContext } from "../../contexts/user-context";
import {signOutUser} from "../../utils/firebase";
import logoImgTab from "../../static/images/logo_2x.png";
import logoImgMobile from "../../static/images/logo.png";
import {
    NavigationContainer,
    NavigationWrapper,
    NavLinks,
    NavLink,
    UserAuthentication,
    UserContainer,
    CartOverlay,
    LogoContainer
} from './navigation.styles';
import CartIcon from "../../components/cart-icon";
import CartDropDown from "../../components/cart-dropdown";
import { CartContext } from "../../contexts/cart.context";
const Navigation = () => {
    const {currentUser} = useContext(UserContext);
    const {isCartOpen} = useContext(CartContext);

    return (
        <Fragment>
        <NavigationContainer>
            <NavigationWrapper>
                <LogoContainer to='/'>
                    <picture>
                        <source media="(min-width:650px)" srcSet={logoImgTab}/>
                        <img src={logoImgMobile} alt="Sabka Bazaar"/>
                    </picture>
                </LogoContainer>
                <NavLinks>
                    <NavLink to='/home'>Home</NavLink>
                    <NavLink to='/products'>Products</NavLink>
                </NavLinks>
                <UserContainer>
                    <UserAuthentication>
                        {currentUser ? (<NavLink as='span' onClick={signOutUser}> Sign Out</NavLink>)
                        : (
                            <Fragment>
                                <NavLink to='/sign-in'>Sign In</NavLink>
                                <NavLink to='/register'>Register</NavLink>
                            </Fragment>
                        )}
                    </UserAuthentication>
                    <CartIcon/>
                </UserContainer>
                {isCartOpen && 
                    <Fragment>
                        <CartDropDown/>
                        <CartOverlay></CartOverlay>
                    </Fragment>
                }
            </NavigationWrapper>
        </NavigationContainer>
        <div className="wrapper">
            <Outlet/>
        </div>
        </Fragment>
    );
}

export default Navigation;