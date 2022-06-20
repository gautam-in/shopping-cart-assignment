import styled from "styled-components";

export const StyledProductCard = styled.div`
    width: 100%;
    padding: 5px 2%;
    position: relative;

    &::after {
        content: '';
        height: 78%;
        width: 4px;
        position: absolute;
        background: ${(props) => props.theme.colors.GRAY};
        opacity: 0.4;
        top: 25px;
        right: -7px;
    }

    h3 {
        padding: 20px 0;
        margin: 0 4%;
        font-size: 13px;
        line-height: 1.2;
        max-height: 4em;
        font-weight: 700;
        font-family: ${(props) => props.theme.fonts.DOSIS},sans-serif;
    }

    img {
        width: 100%;
        margin: 40px 0 15px;
    }

    p {
        padding: 8px 4%;
        margin: 0 4%;
        font-size: 10px;
        line-height: 1.2;
        max-height: 5.8em;
        word-wrap: break-word;
        overflow: hidden;
        background: ${(props) => props.theme.colors.GRAY};
    }

    .card-price {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 10px 4%;

        span {
            font-size: 12px;
            display: flex;
            align-self: flex-end;
        }

        .button {
            display: flex;
            align-self: flex-end;
            font-size: 11px;
            padding: 10px 8%;
            margin-top: 10px;
            cursor: pointer;
            border: 1px solid ${(props) => props.theme.colors.CTA_COLOR};

            &:hover {
                background: ${(props) => props.theme.colors.WHITE};
                color: ${(props) => props.theme.colors.CTA_COLOR};
            }
        }
    }
`;