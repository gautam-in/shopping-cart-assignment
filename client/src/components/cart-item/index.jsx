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

const CartItem = ({ product }) => {
	const { name, imageURL, price } = product;
	return (
		<CartItemContainer>
			<CartImg src={imageURL} alt={name} />
			<CartItemDetails>
				<Title>{name}</Title>
				<PriceBlock>
					<CartActions>
						<CustomButton isCart>-</CustomButton>
						<span>1</span>
						<CustomButton isCart>+</CustomButton>
						<span>&#10006;</span>
						Rs.{price}
					</CartActions>
				</PriceBlock>
			</CartItemDetails>
			<Total>Rs.{price}</Total>
		</CartItemContainer>
	);
};

export default CartItem;
