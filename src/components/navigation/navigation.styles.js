import { Link } from "react-router-dom";
import styled from "styled-components";

export const NavigationContainer = styled.div`
    box-shadow: 0 6px 6px -6px grey;
`;

export const NavigationWrapper = styled.nav`
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 14px;
    @media (min-width: 992px) {
        margin: 0 15%;
    }
`;

export const LogoContainer = styled(Link)`
    @media (min-width: 600px) {
        width: 20%;
    }

    & img {
        width: 60%;
    }
`;

export const NavLinks = styled.div`
    width: 60%;
    display: flex;
    align-items: flex-end;
    @media (min-width: 992px) {
        width: 70%;
    }
`;

export const NavLink = styled(Link)`
    padding: 5px;
    margin: 0 5px;
    text-decoration: none;
    &:hover {
        color: rgb(80,218,226);
        cursor: pointer;
    }

    @media (min-width: 600px) {
        padding: 10px;
        margin: 0 20px;
    }
`;

export const UserContainer = styled.div`
    width: 30%;
    margin-right: 2%;

    @media (min-width: 600px) {
        width: 20%;
    }

    @media (min-width: 992px) {
        width: 10%;
        margin-right: 0;
    }
`;
export const UserAuthentication = styled.div`
    display: flex;
    justify-content: flex-end;

    ${NavLink} {
        padding: 0;
        margin: 10px 5px;
        font-size: 12px;

        &:last-of-type {
            margin-right: 0;
        }
    }
`;

export const CartOverlay = styled.div`
    position: fixed;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0,0,0,0.8);
    z-index: 2;
`;