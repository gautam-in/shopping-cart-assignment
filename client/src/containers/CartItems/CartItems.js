import CartItem from "../../components/CartItem/CartItem";

const CartItems = ({data,...rest}) => {
    return (
        <>
         <div className="cart-items">
                {data.map((val,i) => (
                    <>
                        <CartItem data={val} key={i} {...rest}/>
                    </>
                ))}
          </div>
        </>
    )
}

export default CartItems;