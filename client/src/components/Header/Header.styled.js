import styled from 'styled-components';

export const StyledHeader = styled.header`
    padding: 5px 0 0 0;
    position:relative;
    -webkit-box-shadow:0 1px 4px ${(props) => props.theme.colors.BOX_SHADOW_LEFT}, 0 0 20px ${(props) => props.theme.colors.BOX_SHADOW_RIGHT};
    -moz-box-shadow:0 1px 4px ${(props) => props.theme.colors.BOX_SHADOW_LEFT}, 0 0 20px ${(props) => props.theme.colors.BOX_SHADOW_RIGHT};
    box-shadow:0 1px 4px ${(props) => props.theme.colors.BOX_SHADOW_LEFT}, 0 0 2    0px ${(props) => props.theme.colors.BOX_SHADOW_RIGHT};

    @media(max-width: ${(props) => props.theme.breakpoints.TAB}) {
        width: 100%;
        position: fixed;
        z-index: 5;
        background: ${(props) => props.theme.colors.WHITE};
        top: 0;
    }

    .wrapper {
        display: flex;
        position: relative;

        .visible {
            display: flex;
        }
    } 

    @media(max-width: ${(props) => props.theme.breakpoints.TAB}) {
        & + div {
            margin-top: 63px;
        }
    }

    .slide-in-right {
	-webkit-animation: slide-in-right 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
        animation: slide-in-right 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
    }

    /**
    * ----------------------------------------
    * animation slide-in-right
    * ----------------------------------------
    */
    @-webkit-keyframes slide-in-right {
        0% {
            -webkit-transform: translateX(1000px);
                    transform: translateX(1000px);
            opacity: 0;
        }
        100% {
            -webkit-transform: translateX(0);
                    transform: translateX(0);
            opacity: 1;
        }
    }
    @keyframes slide-in-right {
        0% {
            -webkit-transform: translateX(1000px);
                    transform: translateX(1000px);
            opacity: 0;
        }
        100% {
            -webkit-transform: translateX(0);
                    transform: translateX(0);
            opacity: 1;
        }
    }

`;