import styled from 'styled-components';

export const StyledButton = styled.button`
    font-size: 14px;
    padding: 10px 3%;
    display: flex;
    background: ${(props) => props.theme.colors.CTA_COLOR};
    color: ${(props) => props.theme.colors.WHITE};

    &:focus {
        outline: 3px solid ${(props) => props.theme.colors.BLACK};
    }
`;