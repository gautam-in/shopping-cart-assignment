import styled from "styled-components";

export const CartModalContainer = styled.div`
`    

export const CartModalOverlay = styled.div`
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-color: #000;
    opacity: 0.8;
    z-index: 100;
`

export const CartModalWrapper = styled.div`
    max-width: 780px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    border-radius: 3px;
    position: fixed;
    top: 67px;
    right: 7.5%;
    bottom: 0;
    width: 50%;
    background-color: #f0eaea;
    z-index: 1000;
    
    @media (max-width: 1200px) {
        width: 100%;
        right: 0;
        bottom: 0;
        /* left: 0 */
    }
`

export const CartModalHeader = styled.div`
    background-color: #0f0f0ff0;
    padding: 1.5rem 2rem;
    display: flex;
    justify-content: space-between;
`  

export const CartModalHeading = styled.div`
    display: flex;
    gap: 5px;
    align-items: baseline;
    color: #fff;
    font-size: 1.3rem;
    .cart-item-count{
        font-size: 1rem;
        font-weight: 500;
    }
`  

export const CartModalCloseButton = styled.button`
    cursor: pointer;
    background: none;
    border: none;
    color: #fff;
    font-size: 1rem;
` 

export const CartModalBody = styled.div`
    padding: 1rem 0;
    flex: 1;
    overflow-y: scroll;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    justify-content: start;
`  
export const LowestPriceMessage = styled.div`
    padding : 1rem;
    background-color: white;
    align-items: center;
    display: flex;
    gap: 1rem;
` 
export const EmptyCartMessage = styled.div`
flex-direction: column;
    align-items: center;
    display: flex;
    .empty-msg{
        font-size: 1.5rem;
    }
` 

export const CartModalFooter = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    background-color: white;
    box-shadow: rgb(149 157 165 / 20%) 0px -5px 11px;
    .promo-message{
        text-align: center;
        margin: 1rem;   
    }
` 

export const CheckoutButton = styled.button`
    margin: 1rem;
    margin-bottom: 2rem;
    display: flex;
    /* justify-content: space-between; */
    font-weight: 600;
    padding: 0.8rem 1.2rem;
    color: white;
    border: none;
    background-color: #ab4747;
    cursor: pointer;
    border-radius: 3px;
    justify-content: ${props => props.centerChild === false ? 'center' : 'space-between'};
` 