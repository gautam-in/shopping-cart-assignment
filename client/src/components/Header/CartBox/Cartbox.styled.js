import styled from 'styled-components';

export const StyledCart = styled.div`
    position: absolute;
    width: 40%;
    display: flex;
    flex-direction: column;
    border: 1px solid ${(props) => props.theme.colors.BLACK};
    background-color: ${(props) => props.theme.colors.WHITE};
    top: 70px;
    right: 5%;
    z-index: 3;

    .promo-code {
        position: fixed;
        left: 0;
        bottom: 0;
        width: 100%;
        background-color: ${(props) => props.theme.colors.WHITE};

        @media(min-width: ${(props) => props.theme.breakpoints.SM_LAPTOP}) {
            position: static;
            background-color: none;
        }

        & > p {
            margin: 15px 0;
            text-align: center;
            font-size: 12px;
            font-weight: 400;
            font-family: ${(props) => props.theme.fonts.DOSIS},sans-serif;
        }

        .start-shopping {
            justify-content: center;
            align-items: center;
        }
        
        .button {
            border-radius: 3px;
            width: 90%;
            margin: 10px auto;
            cursor: pointer;
            border: 1px solid;

            &:hover {
                background: ${(props) => props.theme.colors.WHITE};
                color: ${(props) => props.theme.colors.CTA_COLOR};
            }
        }
    }
`;

export const StyledCartBox = styled.div`
    padding: 10px 12%;
    display: flex;
    justify-content: space-between;
    background-color: ${(props) => props.theme.colors.GRAY};    

    &:hover img {
        filter: ${(props) => props.theme.colors.BLACK_FILTER_COLOR};
    }

    img {
        max-width: 100%;
        width: 30%;
        filter: ${(props) => props.theme.colors.FILTER_COLOR};
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

export const StyledCartOverlay = styled.div`
    position: fixed;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: ${(props) => props.theme.colors.OVERLAY};
    z-index: 2;
`;