import { useRef } from 'react';
import styled from 'styled-components'
import MyCart from './MyCart';

export default function Cart() {
    const divRef = useRef();

    const cartClickHandler = () => {        
        divRef.current.style.display = 'block';
    
    }
    
    return (
        <div className = 'w3-container'>
            <div onClick = {cartClickHandler}>
                <UnorderedListContainer>
                    <li>
                        <img src = "../static/images/cart.svg" alt = "cart" />
                    </li>
                    <li> 1 items </li>
                </UnorderedListContainer>
            </div>

            <div ref = {divRef} className ="w3-modal">
                <MyCart />
            </div>
        </div>  
    )
}


const UnorderedListContainer = styled.ul`
    display : flex;
    justify-content : center; 
    li {
        margin : 5px;
    }
`

