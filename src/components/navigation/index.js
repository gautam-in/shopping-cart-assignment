import { Fragment, useContext } from "react";
import {useSelector} from 'react-redux';
import {signOutUser} from "../../utils/firebase";
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
    const {isCartOpen} = useContext(CartContext);
    const currentUser = useSelector((state) => state.user.currentUser)

    return (
        <NavigationContainer>
            <NavigationWrapper>
                <LogoContainer to='/'>
                    <picture>
                        <source media="(min-width:650px)" srcSet={require(`../../../src/static/images/logo_2x.png`)}/>
                        <img src={require(`../../../src/static/images/logo.png`)} alt="Sabka Bazaar"/>
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
    );
}

export default Navigation;