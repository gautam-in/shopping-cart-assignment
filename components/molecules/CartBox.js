import styled from 'styled-components'
import { CartIcon } from '../atom/CartIcon';
import {SignUp} from '../atom/SignUp';

const CartContainer = styled.div`
    display:flex;
    flex-direction:column;
    margin-left:auto;
    padding:5px;
    
`;

const CartBoxStyle = styled.div`
    background-color: #eeeeee;
    margin-left:auto;
    display:flex;
    justify-content: center;
    text-align: center;
    margin-top:40px;
    padding:3px;
`;

const CartCount = styled.span`
    font-family: "Rockwell Regular";
    padding-top:5px;
    
`;


 function CartBox(){
    return (
      <CartContainer>
          <SignUp/>
        <CartBoxStyle>
            <CartIcon/>
            <CartCount>
                1 Items
            </CartCount>
        </CartBoxStyle>
      </CartContainer>  
    )
}

export default  CartBox  