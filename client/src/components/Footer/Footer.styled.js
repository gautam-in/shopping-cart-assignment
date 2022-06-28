import styled from "styled-components";

export const StyledFooter = styled.footer`
    padding: 13px 0;
    text-align: left;
    background: ${(props) => props.theme.colors.GRAY};
    margin-top: 15px;

    p {
        font-size: 12px;
        font-weight: 700;

        @media(max-width: ${(props) => props.theme.breakpoints.MOBILE}) {
            font-size: 11px;
        }
    }
`;