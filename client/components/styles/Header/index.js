import styled  from 'styled-components';

export const Header = styled.header`
    box-shadow: 0 0 12px rgba(0,0,0,0.3);  
`
export const HeaderContainer = styled.div`
    width : 85%;
    margin: 0 auto;
    display: flex;
    gap: 1.2rem;
    align-items: center;
    padding: 1.2rem 0;

    img {
        height: 4.2rem;
        margin-right: 2.4rem;
    }

    .btn-mobile-icon {
        border: none;
        background: none;
        cursor: pointer;
        display: none;

        @media (max-width: 38em) {
            display: block;
        }   
    }

    .headerMobileView {
        position: absolute;
        top: 0;
        left: 0;
        background-color: rgba(255, 255, 255, 0.9);
        display: flex;
        width: 100%;
        height: 100vh;
        color: black;
        font-size: 2.4rem;
        font-weight: bold;
        line-height: 2.5;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        display: none;
    }
`
export const HeaderContent = styled.div`
    width: 100%;

    nav {
        display: flex;
        align-items: center;
        gap:1.2rem;  
        
        @media (max-width: 38em) {
            display: none;
        }   
    }

    .topNav,.bottomNav {
        justify-content: end;
    }

    .bottomNav {
        display: flex;
        align-items: center;
        margin-top: 0.8rem;
        gap : 1.2rem;
        justify-content: space-between;
        position: relative;
    }

    nav a:link, nav a:visited {
        display: inline-block;
        text-decoration: none;
        color: #333;
        font-weight: 600;
        font-size: 1.4rem;
        transition: all 0.3s;
        border: none;
    }

    nav a:hover,
    nav a:active {
        color: #cf711f;
    }

`

export const CartButton = styled.a`
        display: inline-block;
        text-decoration: none;
        color: #fff;
        font-weight: 500;
        font-size: 1.4rem;
        border: none;
        padding: 0.8rem 1.2rem;  
        cursor: pointer;
        border-radius: 5px;
        background-color: grey;

        @media (max-width: 38em) {
            position: absolute;
            right: 0;
        }   
`






