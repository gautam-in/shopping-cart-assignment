import styled from 'styled-components';

export const StyledExploreCategories = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-left: 20%;
    padding: 40px 0;
    position: relative;
    order: ${(props) => props.order};

    figure {
        width: 40%;
    }

    .explore-details {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;

        h3 {
            font-size: 16px;
            font-family: ${(props) => props.theme.fonts.DOSIS}, sans-serif;
            font-weight: 700;
            margin-bottom: 15px;
        }

        p {
            font-size: 12px;
            font-family: ${(props) => props.theme.fonts.DOSIS}, sans-serif;
            font-weight: 400;
            margin-bottom: 25px;
        }

        .button {
            display: block;
            max-width: fit-content;
            font-size: 11px;
            font-weight: 400;
            cursor: pointer;
            font-family: ${(props) => props.theme.fonts.DOSIS}, sans-serif;
        }
    }


    .wrapper {
        display: flex;
        margin: 0;
    }
`;