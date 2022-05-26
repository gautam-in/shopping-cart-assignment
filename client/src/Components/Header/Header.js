import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button } from "antd";
import { HeaderWrapper } from './Header.style';
import DrawerMenu from '../Header/DrawerMenu/DrawerMenu';
import { setLogout } from '../Signup/SignupAction';
import { showCartModel } from '../Cart/CartAction';
import { useDispatch,useSelector } from 'react-redux';
import { useNavigate, useLocation } from 'react-router-dom';
import {MenuOutlined} from '@ant-design/icons';
import { useWindowWidth } from '../../CustomHooks/useWindowWidth';
import { fetchCategories } from '../Home/HomeAction';


const HeaderLogo = "https://sandipguchait.github.io/static/images/logo_2x.png";
const Header = () => {

    const [drawerMenu, setDrawermenu] = useState(false);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const location = useLocation();
    const {windowWidth} = useWindowWidth();
    const authToken = useSelector(state => state.SIGNUPREDUCER.currentUser?.stsTokenManager?.refreshToken);
    const { cart_product } = useSelector(state => state.CARTREDUCER);


    useEffect(()=>{
        setDrawermenu(false);
    },[location.pathname])

    useEffect(()=>{
        dispatch(fetchCategories());
    },[])


    const handlelogout = () => {
        dispatch(setLogout());
        navigate('/login');
    }

    const renderAuthButtons = () => {
        if(authToken){
            return (
                <div>
                    <p onClick={handlelogout}>Logout</p>
                </div>
            )
        }
        if(!authToken){
            return(
                <div className='header_right_auth'>
                    <Link style={{ marginRight:"10px"}} to="/login">Log In</Link>
                    <Link to="/signup">Sign Up</Link>
                </div>
            )
        }
    }

    const openCartModal = () => {
        dispatch(showCartModel(true));
        navigate("/products");
    }

    const openMenuDrawer = () => {
        console.log("openMenuDrawer");
        setDrawermenu(true);
    }

    const closeMenuDrawer = () => {
        setDrawermenu(false);
    }

  return (
    <HeaderWrapper>
        <div className='header'>
            { window.innerWidth < 624 ? 
                <div onClick={()=>openMenuDrawer()}>
                    <MenuOutlined 
                        style={{ fontSize: "25px", cursor:"pointer"}}
                    /> 
                </div>
            : null}
            <Link to="/"><img src={HeaderLogo} alt="Sabka_bazar_logo"/></Link>
            <div className='header_navigate'>
                <Link to="/">Home</Link>
                <Link to="/products">Products</Link>
            </div>
            <div className='header_right_container'>
               {renderAuthButtons()}
                <Button style={{ background:"#eaeaea"}} onClick={openCartModal}>
                    Cart ( {cart_product && cart_product.length ? cart_product.length : 0} )
                </Button>
            </div>
        </div>
        <DrawerMenu 
            closeMenuDrawer={closeMenuDrawer}
            drawerMenu={drawerMenu}
            authToken={authToken}
        />
    </HeaderWrapper>
  )
}

export default Header;
