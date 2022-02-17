import { useContext } from "react";
import { CartContext } from "../../contexts/cart-context";
import CartItem from "../cart-item";
import CustomButton from "../custom-button";
import {
	CartWrapper,
	CartTitle,
	SubTitle,
	CartItems,
	LowPriceBlock,
	LowPriceImage,
	CartFooter,
	PromoText,
	Checkout,
	CheckoutText,
	CheckoutTotal,
} from "./styles";

const CartBlock = () => {
	const {
		state: { items },
	} = useContext(CartContext);

	return (
		<CartWrapper>
			<CartTitle>
				My Cart{" "}
				<SubTitle>
					({items.length} {items.length === 1 ? "item" : "items"})
				</SubTitle>
				&#10006;
			</CartTitle>
			<CartItems>
				{items.map((product) => (
					<CartItem key={product.id} product={product} />
				))}
				<LowPriceBlock>
					<LowPriceImage
						src="/static/images/lowest-price.png"
						alt="Lowest price guaranteed"
					/>
					You won't find it cheaper anywhere
				</LowPriceBlock>
			</CartItems>
			<CartFooter>
				<PromoText>Promo code can be applied on payment page.</PromoText>
				<CustomButton isAuth>
					<Checkout>
						<CheckoutText>Proceed to Checkout</CheckoutText>
						<CheckoutTotal>Rs.187 &gt;</CheckoutTotal>
					</Checkout>
				</CustomButton>
			</CartFooter>
		</CartWrapper>
	);
};

export default CartBlock;
