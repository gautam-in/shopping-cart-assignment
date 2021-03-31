import styled from "styled-components";
import Link from 'next/link';
import NavBar from "./NavBar";
import Cart from "./Cart";
import CartContainer from "./CartContainer";
import HeaderStyles from "../styles/header";
const Logo = styled.div`
    {        
        margin:0;
    }
    img  {
        width:100px;
        margin:0 2em;
    }
    a {
        color:white;
        text-decoration:none;
        text-transform:uppercase;
        padding: 0.5rem 1rem;
    }
    
    @media (max-width: 420px) {
        img {
            width:50px;
            margin:0;
        }
    }
    `;


export default function Header() {
    return (
        <HeaderStyles>
            <div className="bar">
                <Logo>
                    <Link href="/home">
                        <img src="static/images/logo.png" alt="brand logo" />
                    </Link>
                </Logo>
                <NavBar />
            </div>
            <div className="sub-bar">
                
            <Link href="/signIn">Sign In</Link>
            <Link href="/signUp">Sign Up</Link>
            <Cart />
            </div>
        </HeaderStyles>
    )
}