import { useContext } from "react";
import { CartContext } from "../../contexts/cart-context";
import { CartWrapper, CartIcon } from "./styles";

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

	return (
		<CartWrapper onClick={toggleCart}>
			<CartIcon />
			{items.length} {items.length === 1 ? "item" : "items"}
		</CartWrapper>
	);
};

export default Cart;
