import { useContext } from "react";
import { CartContext } from "../../contexts/cart-context";
import { CartWrapper, CartIcon, CartCount } from "./styles";

const Cart = () => {
	const {
		state: { items },
		dispatch,
	} = useContext(CartContext);

	const toggleCart = () => {
		dispatch({
			type: "CART_TOGGLE",
		});
	};
	const cartCount = items.reduce((acc, product) => acc + product.quantity, 0);
	return (
		<CartWrapper onClick={toggleCart}>
			<CartIcon />
			<CartCount>
				{cartCount} {cartCount === 1 ? "item" : "items"}
			</CartCount>
		</CartWrapper>
	);
};

export default Cart;
