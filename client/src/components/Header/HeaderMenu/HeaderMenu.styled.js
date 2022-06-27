import styled from 'styled-components';

export const StyledHeaderMenu = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-content: space-between;
    width: 10%;

    @media(min-width: ${(props) => props.theme.breakpoints.DESKTOP}) {
        width: 7%;
    }

    @media(max-width: ${(props) => props.theme.breakpoints.SM_LAPTOP}) {
        width: 15%;
    }

    @media(max-width: ${(props) => props.theme.breakpoints.TAB}) {
        width: 20%;
        justify-content: flex-end;
    }

    @media(max-width: ${(props) => props.theme.breakpoints.SM_TAB}) {
        width: 30%;


       & > .cart-overlay {
            display: none !important;
        }
    }

    @media(max-width: ${(props) => props.theme.breakpoints.MOBILE}) {
        width: 50%;
    }

    @media(max-width: ${(props) => props.theme.breakpoints.SM_MOBILE}) {
        width: 60%;
    }


    .auth-links {
        display: flex;
        justify-content: space-between;
        align-self: flex-end;
        width: 100%;

        @media(max-width: ${(props) => props.theme.breakpoints.TAB}) {
            display: none;
            position: fixed;
            top: 168px;
            right: 0%;
            z-index: 3;
            width: 25%;
            margin: 0 2%;
            flex-direction: column;
            float: right;

            li {
                border: 1.5px dashed #bf2957;
                margin: 5px 0;
            }
        }

        @media(max-width: ${(props) => props.theme.breakpoints.MOBILE}) {
            width: 35%;
        }

        li a {
            font-size: 11px;
            color: ${(props) => props.theme.colors.BLACK};
            font-weight: 700;
            font-family: ${(props) => props.theme.fonts.DOSIS},sans-serif;
            position: relative;
            
            @media(max-width: ${(props) => props.theme.breakpoints.TAB}) {
                font-size: 16px;
                padding: 10px 20%;
            }

            @media(min-width: ${(props) => props.theme.breakpoints.LG_TAB}) {            
                &:hover::after {
                    content: '';
                    background: ${(props) => props.theme.colors.BLACK};
                    height: 1px;
                    width: 55%;
                    position: absolute;
                    bottom: -4px;
                    left: 0;
                }
            }
        }
    }

    .logout {

        p {
            font-size: 12px;
            font-weight: 700;
        }

        a {
            position: absolute;
            right: 12%;
            padding: 10px 2%;
            background: ${(props) => props.theme.colors.CTA_COLOR};
            color: ${(props) => props.theme.colors.WHITE};
            font-weight: 700;
            text-transform: capitalize;
            font-size: 14px;
            top: 30px
        }
    }
`;