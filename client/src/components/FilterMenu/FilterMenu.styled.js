import styled from "styled-components";

export const StyledFilterMenu = styled.ul`
    width: 100%;
    display: flex;
    flex-direction: column;
`;

export const StyledFilterItem = styled.li`
    width: 100%;
    padding: 13px 10%;
    font-size: 11px;
    font-weight: 400;
    order: ${(props) => props.order};
    cursor: pointer;
    color: ${(props) => props.theme.colors.DARK_GRAY};
    border-bottom: 1px solid ${(props) => props.theme.colors.FILTER_BORDER_COLOR};

    &:hover {
        background: ${(props) => props.theme.colors.CTA_COLOR};
        color: ${(props) => props.theme.colors.WHITE};
    }
`;