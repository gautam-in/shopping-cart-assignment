import CartItem from "../../components/CartItem/CartItem";

const CartItems = ({data}) => {
    return (
        <>
         <div className="cart-items">
                {data.map((val,i) => (
                    <>
                        <CartItem data={val} key={i}/>
                    </>
                ))}
          </div>
        </>
    )
}

export default CartItems;