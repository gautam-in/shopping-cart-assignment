import styled from 'styled-components';

export const StyledHeader = styled.header`
    padding: 5px 0 0 0;
    position:relative;
    -webkit-box-shadow:0 1px 4px ${(props) => props.theme.colors.BOX_SHADOW_LEFT}, 0 0 20px ${(props) => props.theme.colors.BOX_SHADOW_RIGHT};
    -moz-box-shadow:0 1px 4px ${(props) => props.theme.colors.BOX_SHADOW_LEFT}, 0 0 20px ${(props) => props.theme.colors.BOX_SHADOW_RIGHT};
    box-shadow:0 1px 4px ${(props) => props.theme.colors.BOX_SHADOW_LEFT}, 0 0 2    0px ${(props) => props.theme.colors.BOX_SHADOW_RIGHT};

    .wrapper {
        display: flex;
        position: relative;
    } 
`;