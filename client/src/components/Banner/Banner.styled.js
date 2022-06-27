import styled from 'styled-components';

export const StyledBanner = styled.div`
    padding: 10px 0;
    position: relative;

    .wrapper {
        @media(max-width: ${(props) => props.theme.breakpoints.SM_TAB}) {
            width: 86%;
        }
    }

    .slider-container {
        .slider-control-centerleft,
        .slider-control-centerright {
            position: absolute;
            top: 50%;
            transform: translateY(-50%);

            button {
                border: 0px;
                background: ${(props) => props.theme.colors.BANNER_BUTTON_SHADOW};
                color: ${(props) => props.theme.colors.WHITE};
                padding: 10px;
                text-transform: uppercase;
                opacity: 1;
                cursor: pointer;

                @media(max-width: ${(props) => props.theme.breakpoints.SM_TAB}) {
                    font-size: 11px;
                    padding: 6px;
                }
            }

            @media(max-width: ${(props) => props.theme.breakpoints.MOBILE}) {
                display: none;
            }

        }
    }

    .paging-item {
        margin: 0 5%;
    }

    img {
        max-width: 100%;
    }
`;