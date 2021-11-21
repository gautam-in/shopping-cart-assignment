import styled from 'styled-components';


export const ProductCard = styled.div`
    padding: 1.2rem;
    display: grid;
    grid-template-columns: 1fr;
    gap: 1.2rem;
    box-shadow: 0 0 12px rgba(0,0,0,0.1);
    cursor: pointer;

    img {
        width: 100%;
        height: 22.4rem;

        @media (max-width: 53em) {
            height: auto;
        }   

        @media (max-width: 46em) {  
             grid-area: image; 
        }
    }

    .productBuyBtnSmallDevice {
        display: none;
        font-size: 1.2rem;

        @media (max-width: 53em) {
           display: block;                                                                                                                   ;
            grid-column: 1/-1;  
        }

        @media (max-width: 46em) {  
            grid-area: btn; 
        }
    }


    @media (max-width: 53em) {
        grid-template-columns: repeat(2, 1fr);
    }


    @media (max-width: 46em) {
        grid-template-areas:
        'title title'
        'image desc'
        'image btn'; 
    }

    @media (max-width: 38em) {
        grid-template-areas:
        'title title'
        'image desc'
        'image desc'
        'image btn';
    }
`

export const TitleContainer = styled.div`
    padding: 1.2rem;
    min-height: 9.6rem;

    @media (max-width: 53em) {
            grid-column: 1/-1;
        }

        @media (max-width: 46em) {  
            grid-area: title; 
        }

    h4 {
        font-size: 1.6rem;
    }
`

export const ButtonBlock = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 1.2rem 0;

    @media (max-width: 53em) {
        grid-column: 1/-1;
        display: none;
    }

    @media (max-width: 46em) {  
        grid-column: 2; 
    }
`

export const ProductPrice = styled.p`
    grid-row: 4;
    font-size: 1.4rem;  
` 
    
export const ProductDescription = styled.p`
    padding: 1.2rem 0;
    font-size: 1.2rem;
    text-align: justify;
    background-color: #e6e6e6;
    padding: 0.8rem;
    
    @media (max-width: 46em) {  grid-area: desc; }
`

export const Button = styled.button`
    display: inline-block;
    border: none;
    padding: 0.8rem 1rem;
    background-color: palevioletred;
    color: #fff;
    font-size: 1.6rem;
    font-weight: 500;
    border-radius: 4px;
    cursor: pointer;
    display: flex;
    justify-content: space-between;
`


