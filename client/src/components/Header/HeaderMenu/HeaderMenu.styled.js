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


    .auth-links {
        display: flex;
        justify-content: space-between;
        align-self: flex-end;
        width: 100%;

        @media(max-width: ${(props) => props.theme.breakpoints.TAB}) {
            position: fixed;
            top: 70px;
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
`;