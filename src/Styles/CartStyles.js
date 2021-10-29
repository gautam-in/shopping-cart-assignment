import styled from "styled-components";

export const CART_MODEL = styled.div`
    position: fixed;
    width: 100%; 
    height: 100%;
    z-index: 1;
    background-color: rgba(0,0,0,0.7);
`

export const CART_STYLE = styled.div`
    overflow: scroll;
    width: 35vw;
    height: 80vh;
    z-index: 99;
    background: #eeeeee;
    position: fixed;
    bottom: 0%;
    left: 64%;
    @media (max-width: 480px){
        width: 100%;
        left: 0;
    }
    @media (min-width:481px) and (max-width: 768px) {
        width: 100%;
        left: 0;
    }
`
export const CART_STYLE_EMPTY = styled.div`
    display: grid;
    width: 35vw;
    height: 80vh;
    z-index: 99;
    background: white;
    position: fixed;
    bottom: 0%;
    left: 64%;
`

export const CART_TITLE = styled.div`
    display: grid;
    position: fixed;
    width: 34%;
    grid-template-columns: 13fr 1fr;
    margin-top: -40px;
    background: black;
    height: 10vh;
    max-height: 6vh;
    color: white;
    align-items: center;
    padding-left: 20px;
    @media (max-width: 480px){
        width: 100%;
        left: 0;
    }
    @media (min-width:481px) and (max-width: 768px) {
        width: 100%;
        left: 0;
    }
`
export const CART_FOOTER = styled.footer`
    display: grid;
    grid-template-rows: 1fr 1fr;
    justify-items: center;
    align-items: baseline;
    margin-bottom: 0px;
    background: white;
    align-self: self-end;
    width: 35%;
    position: fixed;
    bottom: 0;
    @media (max-width: 480px){
        width: 100%;
        left: 0;
    }
    @media (min-width:481px) and (max-width: 768px) {
        width: 100%;
        left: 0;
    }
`

export const CART_EMPTY_FOOTER = styled.footer`
    display: grid;
    justify-items: center;
    align-items: baseline;
    margin-bottom: 0px;
    background: white;
    height: 10vh;
    align-self: self-end;
    @media (max-width: 480px){
        width: 100%;
        left: 0;
    }
    @media (min-width:481px) and (max-width: 768px) {
        width: 100%;
        left: 0;
    }
`
export const CHECKOUT_BUTTON = styled.div`
    display: grid;
    grid-template-columns: 82% 1fr;
    box-sizing: border-box;
    width: 95%;
    height: 45px;
    margin-bottom: 10px;
    padding-left: 25px;
    background: #bf2957;
    color: white;
    border-radius: 5;
    cursor: pointer;
    border-radius: 5px;
    :active{
        color: black;
    }
`
export const CART_EXPLORE_BUTTON = styled.div`
    display: grid;
    box-sizing: border-box;
    width: 95%;
    height: 45px;
    margin-bottom: 10px;
    justify-items: center;
    align-items: center;
    padding-left: 25px;
    background: #bf2957;
    color: white;
    border-radius: 5;
    cursor: pointer;
    border-radius: 5px;
    :active{
        color: black;
    }
`
export const CART_EMPTY = styled.div`
    display: grid;
    grid-template-columns: 1fr;
    justify-items: center;
    align-items: center;
    background: white;
    width: 100%;
    height: 126%;
`

export const CART_CLOSE_BTN = styled.article`
    cursor: pointer;
`
export const CART_DEFAULT_STATEMENT = styled.div`
    display: grid;
    grid-template-columns: 18% 80%;
    max-height: 10%;
    height: 10vh;
    align-items: center;
    justify-items: left;
    background: white;
    grid-gap: 2px;
    margin: 34px;
`
export const CART_DEFAULT_IMAGE = styled.img`
    width: 66px;
`
export const CART_DEFAULT_TEXT = styled.article`
    max-width: 250px;
    min-height: 1rem;
    text-align: center;
    font-size: 0.98rem;
`