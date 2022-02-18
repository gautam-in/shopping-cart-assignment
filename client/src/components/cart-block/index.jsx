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
	NoItemsBlock,
	NoItemsTitle,
	NoItemsBlockMessage,
	NoItemsSubTitle,
	StartShoppingButton,
	CartCloseIcon,
	CartHeading,
} from "./styles";

const CartBlock = () => {
	const {
		state: { items },
		dispatch,
	} = useContext(CartContext);

	const cartCount = items.reduce((acc, product) => acc + product.quantity, 0);
	const totalPrice = items.reduce(
		(acc, product) => acc + product.quantity * product.price,
		0
	);

	const handleCartClose = () => {
		dispatch({
			type: "CART_TOGGLE",
		});
	};

	return (
		<CartWrapper>
			<CartTitle>
				<CartHeading>
					My Cart{" "}
					{cartCount > 0 ? (
						<SubTitle>
							({cartCount} {cartCount === 1 ? "item" : "items"})
						</SubTitle>
					) : null}
				</CartHeading>
				<CartCloseIcon onClick={handleCartClose}>&#10006;</CartCloseIcon>
			</CartTitle>
			{cartCount > 0 ? (
				<>
					<CartItems>
						{items.map((product) => (
							<CartItem
								key={product.id}
								product={product}
								dispatch={dispatch}
							/>
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
						<CustomButton isAuth onClick={handleCartClose}>
							<Checkout>
								<CheckoutText>Proceed to Checkout</CheckoutText>
								<CheckoutTotal>Rs.{totalPrice} &gt;</CheckoutTotal>
							</Checkout>
						</CustomButton>
					</CartFooter>
				</>
			) : (
				<>
					<NoItemsBlock>
						<NoItemsBlockMessage>
							<NoItemsTitle>No items in your cart</NoItemsTitle>
							<NoItemsSubTitle>
								Your favourite items are just a click away
							</NoItemsSubTitle>
						</NoItemsBlockMessage>
					</NoItemsBlock>
					<StartShoppingButton>
						<CustomButton isAuth onClick={handleCartClose}>
							Start Shopping
						</CustomButton>
					</StartShoppingButton>
				</>
			)}
		</CartWrapper>
	);
};

export default CartBlock;
