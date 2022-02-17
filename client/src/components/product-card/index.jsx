import { useContext } from "react";
import { CartContext } from "../../contexts/cart-context";
import CustomButton from "../custom-button";
import {
	BuyNowText,
	BuyNowTextTablet,
	CardContainer,
	CardDetails,
	CardImage,
	CardTitle,
	Description,
	ImgBlock,
	PriceContainer,
} from "./styles";

const ProductCard = ({ product }) => {
	const { name, imageURL, description, price } = product;
	const { dispatch } = useContext(CartContext);

	const handleAddToCart = (item) => {
		dispatch({
			type: "ADD_TO_CART",
			payload: item,
		});
	};

	return (
		<CardContainer>
			<CardTitle>{name}</CardTitle>
			<CardDetails>
				<ImgBlock>
					<CardImage src={imageURL} alt={name} />
				</ImgBlock>
				<Description>{description}</Description>
			</CardDetails>
			<PriceContainer>
				<span>MRP Rs.{price}</span>
				<CustomButton>
					<BuyNowText onClick={() => handleAddToCart(product)}>
						Buy Now
					</BuyNowText>
					<BuyNowTextTablet>Buy Now @ MRP Rs.{price}</BuyNowTextTablet>
				</CustomButton>
			</PriceContainer>
		</CardContainer>
	);
};

export default ProductCard;
