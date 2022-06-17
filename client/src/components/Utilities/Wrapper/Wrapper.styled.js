import styled from 'styled-components';

export const StyledWrapper = styled.div`
    width: ${(props) => props.styledWidth || 73}%;
    max-width: 1360px;
    margin: 0 auto;
`