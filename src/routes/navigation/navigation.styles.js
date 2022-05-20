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
    margin: 0 15%;
`;

export const LogoContainer = styled(Link)`
    width: 20%;
    & img {
        width: 60%;
    }
`;

export const NavLinks = styled.div`
    width: 70%;
    display: flex;
    align-items: flex-end;
`;

export const NavLink = styled(Link)`
    padding: 10px;
    margin: 0 20px;
    text-decoration: none;
    &:hover {
        color: rgb(80,218,226);
    }
`;

export const UserContainer = styled.div`
    width: 10%;
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

// .navigation {
//     display: flex;
//     justify-content: space-between;
//     align-items: center;
//     font-size: 14px;

//     &__container {
//         box-shadow: 0 6px 6px -6px grey;
//     }

//     & .logo-container {
//         width: 20%;

//         & img {
//             width: 60%;
//         }
//     }

//     & .nav-links {
//         &__container {
//             width: 70%;
//             display: flex;
//             align-items: flex-end;
//         }
//     }

//     & .nav-link {
//         padding: 10px;
//         margin: 0 20px;
//         text-decoration: none;

//         &:hover {
//             color: rgb(80,218,226);
//         }
//     }

//     & .user{
//         &__container {
//             width: 10%;
//         }

//         &-authentication {
//             display: flex;
//             justify-content: flex-end;

//             & .nav-link {
//                 padding: 0;
//                 margin: 10px 5px;
//                 font-size: 12px;

//                 &:last-of-type {
//                     margin-right: 0;
//                 }
//             }
//         }

//         &-cart {
//             display: flex;
//             justify-content: center;
//             background-color: lightgray;
//             padding: 10px 0;

//             & svg {
//                 width: 20%;
//                 margin-right: 5px;
//             }

//             & span {
//                 font-size: 12px;
//             }
//         }
//     }
// }