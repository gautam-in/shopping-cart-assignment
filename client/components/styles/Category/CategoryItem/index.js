import styled from "styled-components";

export const CategoryItemContainer = styled.div`
    height: 250px;
    width: 100%;
    display: flex;
    justify-content: space-around;
    align-items: center;
    margin: 2.4rem 0;
    padding: 0 2.4rem;
    box-shadow: 0 5px 12px -5px rgba(0, 0, 0, 0.3);
    cursor: pointer;

    &:nth-child(even) {
        flex-direction: row-reverse;
    }
`
export const ImageContainer = styled.div`
    width: 31.6rem;

    img {
        width: 100%;
    }
`

export const CategoryDesc = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 1.5;
    text-align: center;

    h1 {
        font-size: 2.6rem;
    }

    p {
        margin-top: 1.2rem;
        font-size: 1.2rem;
        font-weight: 500;
        text-align: center;
    }
    button {
        border: none;
        padding: 1.2rem;
        margin-top: 1.2rem;
        background-color: palevioletred;
        color: #fff;
        font-weight: 600;
        border-radius: 5px;
        cursor: pointer;
    }
`
