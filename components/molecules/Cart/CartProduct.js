import styled from 'styled-components'
import {PlusCircleFill} from "@styled-icons/bootstrap/PlusCircleFill"
import {MinusCircle} from "@styled-icons/boxicons-solid/MinusCircle" 
import {Cross} from "@styled-icons/entypo/Cross"

const Container = styled.div`
    background:#fff;
    display:flex;
    flex-direction:row;
    justify-content: space-between;
    padding:3px;
    margin:5px;
`;


const LeftSection = styled.div`
    img{
        width:60px;
        padding:5px;
        display:flex;
    }
`;

const MiddleSection = styled.div`
    display:flex;
    flex-direction:column;
    flex-grow:3;
    
    div{
        display:flex;
        justify-content: space-around;
        margin-top:-10px;
        h5{
            font-size:11px;
        }
    }
`;

const Price = styled.span`
    font-family: 'Arial Narrow Bold';
    font-size:12px;
`;

const RightSection = styled.div`
    display:flex;
    flex-direction:column-reverse;
    font-size:12px;
    flex-grow:1;
    font-weight: 150px;
`;

function CartProduct(){
    return (
        <Container>
            <LeftSection>
                <img src='/static/images/products/fruit-n-veg/kiwi-green.jpg'/>
            </LeftSection>
            <MiddleSection>
                <div><h5>Apple-washington , Regular 4 pcs</h5></div>
                <div><MinusCircle width="25" color="#bf2957"/>1<PlusCircleFill width="20" color="#bf2957"/><Cross width="20" /><Price>Rs.187</Price></div>
            </MiddleSection>
            <RightSection>
                <Price>Rs.187</Price>
            </RightSection>
        </Container>
    )
}

export default CartProduct