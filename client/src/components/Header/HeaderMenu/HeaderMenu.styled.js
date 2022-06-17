import styled from 'styled-components';

export const StyledHeaderMenu = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-content: space-between;
    width: 10%;

    .auth-links {
        display: flex;
        justify-content: space-between;
        align-self: flex-end;
        width: 80%;

        li a {
            font-size: 11px;
            color: ${(props) => props.theme.colors.BLACK};
            font-weight: 700;
            font-family: ${(props) => props.theme.fonts.DOSIS},sans-serif;
            position: relative;

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