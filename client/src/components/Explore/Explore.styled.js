import styled from 'styled-components';

export const StyledExploreCategories = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-left: 20%;
    padding: 40px 0;
    position: relative;
    order: ${(props) => props.order};

    @media(max-width: ${(props) => props.theme.breakpoints.SM_TAB}) {
        margin: 0 auto;
    }

    figure {
        width: 40%;
        @media(max-width: ${(props) => props.theme.breakpoints.SM_TAB}) {
            width: 50%;
        }
    }

    .explore-details {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;

        @media(max-width: ${(props) => props.theme.breakpoints.SM_TAB}) {
            text-align: center;
        }

        h2 {
            font-size: 16px;
            font-family: ${(props) => props.theme.fonts.DOSIS}, sans-serif;
            font-weight: 700;
            margin-bottom: 15px;
    
            @media(max-width: ${(props) => props.theme.breakpoints.SM_TAB}) {
                align-self: center;
            }
        }

        p {
            font-size: 12px;
            font-family: ${(props) => props.theme.fonts.DOSIS}, sans-serif;
            font-weight: 400;
            margin-bottom: 25px;

            @media(max-width: ${(props) => props.theme.breakpoints.SM_TAB}) {
                text-align: center;
            }
        }

        a {
            display: flex;
            max-width: fit-content;
            padding: 10px 3%;
            font-size: 14px;
            font-weight: 400;
            cursor: pointer;
            font-family: ${(props) => props.theme.fonts.DOSIS}, sans-serif;
            background: ${(props) => props.theme.colors.CTA_COLOR};
            color: ${(props) => props.theme.colors.WHITE};

            @media(max-width: ${(props) => props.theme.breakpoints.SM_TAB}) {
                align-self: center;
                font-size: 11px;
            }
        }
    }


    .wrapper {
        display: flex;
        margin: 0;

        @media(max-width: ${(props) => props.theme.breakpoints.SM_TAB}) {
            margin: 0 auto;
        }
    }
`;