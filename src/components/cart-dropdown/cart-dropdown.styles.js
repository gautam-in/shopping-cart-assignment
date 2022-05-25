import styled, {css} from 'styled-components';

const cartEmpty = css`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    h3 {
        margin: 5px 0;
    }
`;

export const CartDropDownContainer = styled.div`
    position: absolute;
    width: 400px;
    height: 500px;
    display: flex;
    flex-direction: column;
    border: 1px solid black;
    background-color: white;
    top: 72px;
    right: 0px;
    z-index: 5;

    button {
        display: flex;
        justify-content: space-between;
        border-radius: 3px;
        margin: 10px auto;
        width: 90%;
        margin-top: auto;
    }
`;
export const CartDropDownItems = styled.div`
    height: 500px;
    display: flex;
    flex-direction: column;
    overflow: auto;
    background-color: rgb(230, 230, 230);
    ${({empty}) => !empty && cartEmpty}
`;
export const CartDropDownHeader = styled.div`
    background: black;
    color: white;
    padding: 15px 10px;
    text-align: center;
    font-size: 12px;
`;
export const CartDropDownHeaderTitle = styled.span`
    font-weight: bold;
    font-size: 16px;
`;
// export const CartDropDownEmpty = styled(CartDropDownItems)`
//     display: flex;
//     flex-direction: column;
//     align-items: center;
//     justify-content: center;

//     h3 {
//         margin: 5px 0;
//     }
// `;

export const CartDropDownDisclaimer = styled.p`
    text-align: center;
`;

export const CartDropDownButtonLabel = styled.span`
    margin-left: 15px;
`;
export const CartDropDownButtonLabelCenter = styled(CartDropDownButtonLabel)`
    text-align: center;
    width: 100%;
`;

export const CartDropDownPriceLabel = styled.span`
    margin-right: 15px;
`;
export const CartDropDownArrow = styled.span`
    margin-left: 10px;
`;

export const CartDropDownClose = styled.span`
    float: right;
    font-weight: bold;
    font-size: 16px;
    margin-right: 10px;
    cursor: pointer;
`

export const PriceBannerContainer = styled.div`
    padding: 10px 0;
    margin: 0 10px;
    border-radius: 3px;
    background-color: white;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
`;

export const PriceBannerImageContainer = styled.div`
    width: 30%;
    text-align: center;

    img {
        width: 80%;
    }
`;



// .cart-dropdown {
//     &__container {
//         position: absolute;
//         width: 400px;
//         height: 500px;
//         display: flex;
//         flex-direction: column;
//         border: 1px solid black;
//         background-color: white;
//         top: 72px;
//         right: 0px;
//         z-index: 5;

//         .cart-items {
//             height: 500px;
//             display: flex;
//             flex-direction: column;
//             overflow: auto;
//             background-color: rgb(230, 230, 230);

//             &--empty {
//                 display: flex;
//                 flex-direction: column;
//                 align-items: center;
//                 justify-content: center;

//                 h3 {
//                     margin: 5px 0;
//                 }
//             }
//         }

//         button {
//             margin-top: auto;
//         }
//     }

//     &__header {
//         background: black;
//         color: white;
//         padding: 15px 10px;
//         text-align: center;
//         font-size: 12px;

//         &-title {
//             font-weight: bold;
//             font-size: 16px;
//         }
//     }

//     &-disclaimer {
//         text-align: center;
//     }

//     &-btn {
//         display: flex;
//         justify-content: space-between;
//         border-radius: 3px;
//         margin: 10px auto;
//         width: 90%;


//         &-label {
//             margin-left: 15px;

//             &--center {
//                 text-align: center;
//                 width: 100%;
//             }
//         }
//     }

//     &-price-label {
//         margin-right: 15px;
//     }

//     &-arrow {
//         margin-left: 10px;
//     }
// }