import styled from "styled-components";
import Link from 'next/link';
import NavBar from "./NavBar";
import Cart from "./Cart";
import CartContainer from "./CartContainer";
const Logo = styled.div`
    {        
        margin:0;
    }
    img  {
        width:100px;
        margin:0 24px;
    }
    a {
        color:white;
        text-decoration:none;
        text-transform:uppercase;
        padding: 0.5rem 1rem;
    }
    `;

const HeaderStyles = styled.header`
    display:grid;
    grid-template-columns:auto 1fr;
    justify-items: self-end;
    padding:0 1rem;
    border-bottom: 2px solid black;
    .bar{
        display:grid;
        grid-template-columns:auto 1fr;
        justify-content:space-between;
        align-items:center;
    }
    .sub-bar{
        a{            
            padding:12px;
            font-weight:700;
            &:hover{
                color: #c51162;
            }
        }
    }
`;

export default function Header() {
    return (
        <HeaderStyles>
            <div className="bar">
                <Logo>
                    <Link href="/home">
                        <img src="static/images/logo.png" />
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