import styled from "styled-components"
import { NavLink } from "../atom/NavLink";
import { Logo } from "../atom/Logo";

const ListStyled = styled.ul`
    padding-left: 20px;
    padding-right:20px;
    display:flex;
    li{
        list-style: none;
        padding-top:10px;
        margin-top:25px;
    }
`;

const NavStyled = styled.div`
display: flex;
    ul{
        margin-left:20px;
    }
`;


const Nav = () => {
    return(
        <NavStyled>
        <Logo link='/' src='/images/logo.png'/>
        <ListStyled>
            <li><NavLink redirect='/home'>Home</NavLink></li>
            <li><NavLink redirect='/products'>Products</NavLink></li>            
        </ListStyled>
        </NavStyled>
    )

}

export {
    Nav
}