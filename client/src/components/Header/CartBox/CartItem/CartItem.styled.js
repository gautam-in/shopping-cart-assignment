import styled from "styled-components";

export const StyledCartItem = styled.li`
    display: flex;
    background-color: white;
    padding: 0 10px;
    margin-bottom: 10px; 

    .cart-img-container{
        width: 25%;
        
        img {
            width: 100%;
            @media(max-width: ${(props) => props.theme.breakpoints.SM_LAPTOP}) {
                width: 50%;
            }
        }
    }
    
    .cart-details {
        width: 70%;
        margin-left: auto;

        .cart-item {

            &-name {
                font-size: 14px;
                font-weight: 700;
                font-family: ${(props) => props.theme.fonts.DOSIS},sans-serif;
                margin: 20px 0;
            }

            &-details-pricing {
                padding-bottom: 10px;
            }

            &-quantity {
                margin: 0 2.5%;
            }

            &-quantity--icon {
                padding: 3px 3.5% 3px 3.5%;
                margin: 0 2.5%;
                background: ${(props) => props.theme.colors.CTA_COLOR};
                border-radius: 50%;
                color: ${(props) => props.theme.colors.WHITE};
                cursor: pointer;
            }

            &-quantity--multiply {
                margin: 0 5%;
                font-size: 16px;
            }

            &-quantity--price {
                font-size: 12px;
                font-weight: 400;
                font-family: ${(props) => props.theme.fonts.DOSIS},sans-serif;
            }

            &-quantity--total-price {
                margin: 0 5%;
                font-size: 12px;
                font-weight: 400;
                font-family: ${(props) => props.theme.fonts.DOSIS},sans-serif;
            }
        }
    }


`;