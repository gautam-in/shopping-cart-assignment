import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import styled from "styled-components";
import useMedia from "../../Hooks/useMedia";
import CartButton from "../CartButton/CartButton";
import Logo from "./Logo";

const HEADER_STYLE = styled.header`
    box-shadow: 0px 0px 10px 0px #9e9e9e;
    height: 75px;
    display: grid;
    grid-template-columns: 216px 72px 72px 8fr;
    align-items: center;
    box-sizing: border-box;
    & a {
        text-decoration: none;
        color: #505050;
        font-weight: bold;
    }
    & .nav-link {
        margin-top: 30px;
    }
    @media(max-width: 480px){
        grid-template-columns: 5fr 10fr ;
        max-width: 100%;
        min-width: 99px;
    }
    @media(min-width:481px) and (max-width: 768px){
        grid-template-columns: 5fr minmax(55px, 1.2fr) 1.2fr 8fr ;
        min-width: 542px;
    }
`

const RIGHT_STYLE = styled.div`
    display: grid;
    align-self: end;
    @media(max-width: 480px){
        align-self: center;
        justify-self: right;
        height: inherit;
    }
`
const NAV_STYLE = styled.nav`
    display: grid;
    align-self: end;
    grid-template-columns: 1fr 1fr ;
    justify-self: end;
    padding-bottom: 9px;
    margin-right: 20%;
    & a {
        text-decoration: none;
        color: #505050;
        font-weight: bold;
        font-size: 10px;
    }
    @media(min-width:481px) and (max-width: 768px){
        margin-right: 0px;
    }
`
export default function Header() {
    const dispatch = useDispatch();
    const cartItems = useSelector(state => state.cartReducer.cartItems);
    const isMobile = useMedia("(max-width: 480px)");
    const isTab = useMedia("(min-width:481px) and (max-width: 768px)");
    return (
        <HEADER_STYLE>
            <Link to="/home">
                <Logo />
            </Link>
            {!isMobile && <>
                <Link to="/home" className="nav-link">
                    Home
                </Link>
                <Link to="/products" className="nav-link">
                    Products
                </Link>
            </>}
            <RIGHT_STYLE>
            {!isMobile && <NAV_STYLE>
                <Link to='/signin'>
                    SignIn
                </Link>
                <Link to='/register'>
                    Register
                </Link>
            </NAV_STYLE>
            }
            <CartButton img="static/images/cart.svg" data={cartItems.length} />
            </RIGHT_STYLE>
        </HEADER_STYLE>
    )
}