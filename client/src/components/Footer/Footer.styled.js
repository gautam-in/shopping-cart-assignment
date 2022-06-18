import styled from "styled-components";

export const StyledFooter = styled.footer`
    padding: 13px 0;
    text-align: left;
    background: ${(props) => props.theme.colors.GRAY};

    p {
        font-size: 10px;
        font-weight: 700;
    }
`;