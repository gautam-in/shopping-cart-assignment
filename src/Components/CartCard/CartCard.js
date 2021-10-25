import styled from "styled-components";

const CART_CARD_WRAPPER = styled.div`
    display: grid;
    grid-template-areas: 'img description price'
                         'img total price';
                         grid-template-rows: 81% 13%;
    max-height: 10%;
    grid-template-columns: 18% 63% 17%;
    align-items: center;
    justify-items: left;
    background: white;
    grid-gap: 2px;
    margin: 5px;
`
const CART_CARD_IMG = styled.img`
    grid-area: img;
    width: 66px;
`
const CART_CARD_DESCRIPTION = styled.h6`
    grid-area: description;
    max-width: 250px;
    min-height: 1rem;
    text-align: center;
    font-size: 0.98rem;
`
const CART_CARD_PRICE =  styled.p`
    grid-area: price;
    max-width: 250px;
    min-height: 1rem;
    text-align: center;
    font-size: 0.98rem;
`
const CARD_TOTAL = styled.p`
display: grid;
grid-template-columns: 25px 36px 23px 37px 20px;
    grid-template-rows: 23px;
grid-area: total;
    max-width: 250px;
    min-height: 3rem;
    text-align: center;
    font-size: 0.98rem;
    align-items: center;
`

const ROUND_BUTTON = styled.div`
    padding: 0.1rem 0.5rem;
    border-radius: 14px;
    text-align: center;
    border: 1px solid #eee;
    background-color: #d42559;
    color: #fff;
    cursor: pointer;
`;

const INSIDE_BUTTON = styled.p`
    font-size: 0.98rem;
`



export default function CartCard({cartItems, handleCart}){
    return(
        <>
        {
            cartItems && cartItems.map((item)=>{
                return (
                <CART_CARD_WRAPPER>
                <CART_CARD_IMG src={item.imageURL} alt={item.name}/>
                <CART_CARD_DESCRIPTION>{item.name}</CART_CARD_DESCRIPTION>
                <CARD_TOTAL>
                    <ROUND_BUTTON onClick={()=>handleCart(item.id, 'remove')}>-</ROUND_BUTTON>
                    <INSIDE_BUTTON>{item.count}</INSIDE_BUTTON>
                    <ROUND_BUTTON onClick={()=>handleCart(item.id, 'add')}>+</ROUND_BUTTON>
                    <INSIDE_BUTTON>X</INSIDE_BUTTON>
                    <INSIDE_BUTTON>{item.price}</INSIDE_BUTTON>
                </CARD_TOTAL>
                <CART_CARD_PRICE>Rs.{item.count * item.price}</CART_CARD_PRICE>
                </CART_CARD_WRAPPER>
                )

            })
        }
        </>
    )
}