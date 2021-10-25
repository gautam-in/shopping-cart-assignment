import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import styled from "styled-components"
import { openCloseCart } from "../../Store/actions/cart";

const CART_BUTTON_STYLED = styled.div`
    display: grid;
    grid-template-columns: 1fr 2fr;
    width: 100px;
    height: 22px;
    max-width: 30%;
    align-items: center;
    justify-content: center;
    background-color: #eaeaea;
    cursor: pointer;
    padding: 15px 10px;
    justify-self: right;
    align-self: end;
    margin-right: 20%;

    @media(max-width: 480px){
        max-width: 75%;
        justify-self: end;
        margin-right: 0px;
        height: 68%;
    }
    @media(min-width:481px) and (max-width: 768px){
        margin-right: 0px;
    }
    
`
const HeroButtonLogo = styled.img`
    max-width: 30px;
`;

const HeroButtonContent = styled.div`
    color: black;
    font-size: .9rem;
    margin-right: 5px;
    margin-top: 5px;
`;

export default function CartButton({img, data, handleClick}){
    const dispatch = useDispatch();
    return (
        <CART_BUTTON_STYLED onClick={()=>{dispatch(openCloseCart(true));}}>
            <HeroButtonLogo src={img} alt='cartIcon'/>
            <HeroButtonContent>{`${data} items`}</HeroButtonContent>
        </CART_BUTTON_STYLED>
    )
}