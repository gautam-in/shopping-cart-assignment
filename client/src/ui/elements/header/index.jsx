import { Link, useNavigate } from 'react-router-dom';
import logo from '../../../assets/logo.png'
import Button from '../button';
import { textButton } from '../../../common/style';
import { mainContainer, linkContainer, sideLinkContainer, cartContainer, logoContainer } from './style'
import { useLocalStorage } from '../../../hooks/useLocalStorage';

const Header = () => {
    const [userDetails, setUserDetail] = useLocalStorage('userDetails');
    const [cart] = useLocalStorage('cart');

    const navigate = useNavigate();
    const { isLoggedIn } = userDetails || {};
    const handleLogoutSignin = () => {
        isLoggedIn ? setUserDetail(() => ({ ...userDetails, isLoggedIn: false }))
            : navigate('/login')
    }

    const handleCartclick = () => {
        navigate('/cart')
    }
    return (<div style={mainContainer}>
        <img style={logoContainer} alt='logo' src={logo}></img>
        <div style={linkContainer}>
            <Link to='/home'><Button style={textButton} value='Home' /></Link>
            <Link to='/products'> <Button style={textButton} value='Products' /></Link>
        </div>
        <div style={sideLinkContainer}>
            <div>
                <Button style={textButton} value={isLoggedIn ? 'Log Out' : 'SignIn'} onClick={handleLogoutSignin} />
                {!isLoggedIn && <Link to='/signup'><Button style={textButton} value='Register' /></Link>}
            </div>
            <div style={cartContainer} onClick={handleCartclick}>
                <i className="gg-shopping-cart"></i>
                {`${cart?.length || 0} items`}

            </div>
        </div>
    </div >)
}

export default Header;