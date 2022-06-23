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
            width: 25%;
        }

        li a {
            font-size: 12px;
            color: ${(props) => props.theme.colors.CTA_COLOR};
            font-weight: 700;
            font-family: ${(props) => props.theme.fonts.DOSIS},sans-serif;
            position: relative;

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