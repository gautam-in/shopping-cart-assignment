import styled from 'styled-components';

export const StyledCartBox = styled.div`
    padding: 10px 12%;
    display: flex;
    justify-content: space-between;
    background-color: ${(props) => props.theme.colors.GRAY};    

    &:hover svg {
        fill: ${(props) => props.theme.colors.BLACK};
    }

    svg {
        max-width: 100%;
        width: 30%;
        fill: ${(props) => props.theme.colors.CTA_COLOR};
        cursor: pointer;
    }

    .cartIcon {
        font-size: 14px;
        font-weight: 400;
        text-align: center;
        display: flex;
        align-items: center;
        color: ${(props) => props.theme.colors.BLACK};
        font-family: ${(props) => props.theme.fonts.DOSIS},sans-serif;
    }
`;