import { CART_CARD_WRAPPER, INSIDE_BUTTON, ROUND_BUTTON, CART_CARD_DESCRIPTION, CART_CARD_PRICE, CART_CARD_IMG, CARD_TOTAL } from "../../Styles/CartCardStyles"

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