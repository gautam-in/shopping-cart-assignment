import styled from 'styled-components';

export const StyledBanner = styled.div`
    padding: 10px 0;
    position: relative;

    @media(max-width: ${(props) => props.theme.breakpoints.TAB}) {
        margin-top: 65px;
    }

    .paging-item {
        margin: 0 5%;
    }

    img {
        max-width: 100%;
    }
`;