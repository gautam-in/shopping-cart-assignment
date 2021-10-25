import styled from "styled-components";

export const SIGN_IN_UP_HEADER = styled.h3`
    font-size: 1.5rem;
    text-align: left;
`;

export const SIGN_IN_UP_INFO = styled.h3`
    font-size: .9rem;
    margin-top: 1rem;
    text-align: left;
`;

export const SIGN_IN_UP_WRAPPER_STYLE = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    margin-top: 25px;
    margin-bottom: 20px;
`

export const LEFT_SECTION_STYLE = styled.div`
    display: grid;
    justify-items: center;
    align-items: center;
    margin-top: 55px;
    grid-template-rows: 26% 22%;
`
export const RIGHT_SECTION_STYLE = styled.div`
    display: grid;
    justify-items: center;
    align-items: center;
`
export const INPUT_STYLE = styled.input`
    border: none;
    border-bottom: 2px solid;
    width: 100%;
    margin-top: 21px;
`
export const INPUT_WRAPPER = styled.div`
    width: 331px;
    height: 10vh;
    :focus-within{
        & span{
        transform: translateY(-150%);
            transition: all .3s ease;
	        font-size: 14px;
	        color: #5fa8d3;
        }
    }
    & span{
        margin-top: -20px;
        position: absolute;
    }
    & input:focus {
        outline: none;
        border: none;
        border-bottom: 3px solid #5fa8d3;
    }
`

export const Button = styled.button`
    border-radius: 3px;
    text-align: center;
    text-decoration: none;
    min-width: 150px;
    padding: 0.5rem;
    font-size: .9rem;
    border: 1px solid #eee;
    background-color: #d42559;
    color: #fff;
    cursor: pointer;
    width: 100%;
`;