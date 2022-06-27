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

            @media(max-width: ${(props) => props.theme.breakpoints.LG_TAB}) {
                width: 85%;
            }

            @media(max-width: ${(props) => props.theme.breakpoints.SM_TAB}) {
                width: 80%;
            }

            @media(max-width: ${(props) => props.theme.breakpoints.MOBILE}) {
                width: 100%;
            }
        }

        @media(max-width: ${(props) => props.theme.breakpoints.LG_TAB}) {
            width: 40%;
        }

        @media(max-width: ${(props) => props.theme.breakpoints.SM_TAB}) {
            width: 20%;
        }
    }
    
    .cart-details {
        width: 70%;
        margin-left: auto;

        @media(max-width: ${(props) => props.theme.breakpoints.SM_TAB}) {
            display: flex;
            flex-direction: column;
            justify-content: space-around;
        }

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

                @media(max-width: ${(props) => props.theme.breakpoints.LG_TAB}) {
                    padding: 0px 4% 2px 3.5%;
                    margin: 0 2%;
                }

                @media(max-width: ${(props) => props.theme.breakpoints.SM_TAB}) {
                    padding: 0px 2% 3px 2%;
                }
            }

            &-quantity--multiply {
                margin: 0 5%;
                font-size: 16px;

                @media(max-width: ${(props) => props.theme.breakpoints.LG_TAB}) {
                    margin: 0 3.5%;
                }
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