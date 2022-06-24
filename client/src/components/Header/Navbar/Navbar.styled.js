import styled from 'styled-components';

export const StyledNavbar = styled.nav`
    margin-left: 6%;
    display: flex;
    align-items: center;
    width: 65%;

    ul {
        margin-top: 18px;
        display: flex;
        justify-content: space-between;
        width: 16%;

        @media(max-width: ${(props) => props.theme.breakpoints.SM_LAPTOP}) {
            width: 25%;
        }

        @media(max-width: ${(props) => props.theme.breakpoints.LG_TAB}) {
            width: 30%;
        }

        @media(max-width: ${(props) => props.theme.breakpoints.TAB}) {
            position: fixed;
            top: 168px;
            right: 0%;
            z-index: 3;
            width: 25%;
            margin: 0 2%;
            display: flex;
            justify-content: space-between;
            flex-direction: column;

            li {
                border: 1.5px dashed #bf2957;
                margin: 5px 0;
            }
        }

        li a {
            font-size: 12px;
            color: ${(props) => props.theme.colors.CTA_COLOR};
            font-weight: 700;
            font-family: ${(props) => props.theme.fonts.DOSIS},sans-serif;
            position: relative;

            @media(max-width: ${(props) => props.theme.breakpoints.TAB}) {
                font-size: 16px;
                padding: 10px 10% 10px 20%;
                width: 100%;
            }

            &:hover::after {
                content: '';
                background: ${(props) => props.theme.colors.CTA_COLOR};
                height: 1px;
                width: 55%;
                position: absolute;
                bottom: -8px;
                left: 0;
            }
        }
    }
`;