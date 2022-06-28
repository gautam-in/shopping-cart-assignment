import styled from 'styled-components';

export const StlyledDesktopCartHeader = styled.div`
    padding: 15px 3%;
    font-size: 12px;
    background-color: ${(props) => props.theme.colors.GRAY};
    display: flex;
    align-items: center;
    justify-content: ${(props) => props.isEmpty ? 'space-between' : 'center'};
    span {
        margin: 0 5%;
    }

    a {
        margin-left: 50%;
    }

    @media(min-width: ${(props) => props.theme.breakpoints.TAB}) {
        background: ${(props) => props.theme.colors.BLACK};
        color: ${(props) => props.theme.colors.WHITE};
        text-align: center;
    }
`;

export const StyledDesktopCartTitle = styled.h3`
    font-weight: bold;
    font-size: 16px;
`;

export const StyledDesktopCartDetails = styled.div`
    background-color: ${(props) => props.theme.colors.GRAY};
        
    .cart-items {
        display: flex;
        flex-direction: column;
        background-color: ${(props) => props.theme.colors.GRAY};
        overflow-y: scroll;
        max-height: 250px;

        @media(max-width: ${(props) => props.theme.breakpoints.LG_TAB}) {
            max-height: 190px;
        }
    }
`;

export const StyledCloseIcon = styled.a`
    display: none;

    @media(min-width: ${(props) => props.theme.breakpoints.TAB}) {
        display: inline-block;
        float: right;
        font-weight: bold;
        font-size: 16px;
        margin-right: 10px;
        cursor: pointer;
    }
`;

export const StyledCartAd = styled.div`
    padding: 10px 2%;
    margin: 10px 3%;
    border-radius: 3px;
    background-color: ${(props) => props.theme.colors.WHITE};
    display: flex;
    justify-content: space-between;
    align-items: center;

    p {
        margin: 15px 0;
        font-size: 12px;
        font-weight: 400;
        font-family: ${(props) => props.theme.fonts.DOSIS},sans-serif;
    }
`;

export const StyledAdImageContainer = styled.div`
    width: 30%;
    text-align: center;

    img {
        width: 80%;
    }
`;

export const StyledNoItemContainer = styled.div`
    display: flex;
    flex-direction: column;
    background-color: ${(props) => props.theme.colors.GRAY};
    overflow: auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 125px 0;

    @media(max-width: ${(props) => props.theme.breakpoints.LG_TAB}) {
        padding: 95px 0;
    }

    h5 {
        font-size: 14px;
        font-weight: 700;
        font-family: ${(props) => props.theme.fonts.DOSIS},sans-serif;
        margin: 5px 0;
    }

    p {
        margin: 15px 0;
        font-size: 12px;
        font-weight: 400;
        font-family: ${(props) => props.theme.fonts.DOSIS},sans-serif;
    }
`