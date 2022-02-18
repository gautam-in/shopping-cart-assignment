import CustomButton from "../custom-button";
import {
	CartImg,
	CartItemContainer,
	CartItemDetails,
	Title,
	PriceBlock,
	CartActions,
	Total,
} from "./styles";

const CartItem = ({ dispatch, product }) => {
	const { name, imageURL, price, quantity } = product;
	return (
		<CartItemContainer>
			<CartImg src={imageURL} alt={name} />
			<CartItemDetails>
				<Title>{name}</Title>
				<PriceBlock>
					<CartActions>
						<CustomButton
							isCart
							onClick={() =>
								dispatch({
									type: "REMOVE_FROM_CART",
									payload: product,
								})
							}
						>
							-
						</CustomButton>
						<span>{quantity}</span>
						<CustomButton
							isCart
							onClick={() =>
								dispatch({
									type: "ADD_TO_CART",
									payload: product,
								})
							}
						>
							+
						</CustomButton>
						<span>&#10006;</span>
						<span>{`Rs. ${price}`}</span>
					</CartActions>
					<Total>Rs.{quantity * price}</Total>
				</PriceBlock>
			</CartItemDetails>
		</CartItemContainer>
	);
};

export default CartItem;
