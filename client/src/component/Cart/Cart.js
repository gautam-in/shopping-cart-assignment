import Modal from '@mui/material/Modal';
import CartItem from './CartItem';
import GetCartDetails from '../../reducers/hooks/GetCardDetails';
import {
	CartContainerComponent,
	CartComponent,
	CartHeader,
	CartHeaderTitleContainer,
	CartTitle,
	CartHeaderItems,
	CartHeaderCloseBtnContainer,
	CartItemsContainer,
	CartItemsPlaceholder,
	CartItemsPlaceholderImageContainer,
	CartPlaceholderItemsImage,
	CartItemsPlaceholderText,
	CartCheckoutContainer,
	CartCheckoutText,
	CartCheckoutButton,
	CartCheckoutButtonText,
	CartCheckoutButtonPrice,
	CartEmptyContainer,
	CartEmptyPlaceholder,
	CartEmptyTitle,
	CartEmptySubtitle,
} from './StyledCart';

const Cart = ({ clickHandler, open }) => {
	const { totalPrice, totalQty } = GetCartDetails();

	return (
		<>
			<Modal
				open={open}
				// onClose={true}
				aria-labelledby="modal-modal-title"
				aria-describedby="modal-modal-description"
			>
				<CartContainerComponent>
					<CartComponent>
						<CartHeader>
							<CartHeaderTitleContainer>
								<CartTitle>My Cart</CartTitle>
								{totalQty !== 0 && (
									<CartHeaderItems>({totalQty} Items)</CartHeaderItems>
								)}
							</CartHeaderTitleContainer>

							<CartHeaderCloseBtnContainer onClick={clickHandler}>
								&#10006;
							</CartHeaderCloseBtnContainer>
						</CartHeader>

						<CartItemsContainer>
							{totalQty !== 0 ? (
								<>
									<CartItem />

									<CartItemsPlaceholder>
										<CartItemsPlaceholderImageContainer>
											<CartPlaceholderItemsImage src="\static\images\lowest-price.png" />
										</CartItemsPlaceholderImageContainer>
										<CartItemsPlaceholderText>
											You won't find it cheaper anywhere
										</CartItemsPlaceholderText>
									</CartItemsPlaceholder>
								</>
							) : (
								<CartEmptyContainer>
									<CartEmptyPlaceholder>
										<CartEmptyTitle>
											No Items in your Cart
										</CartEmptyTitle>
										<CartEmptySubtitle>
											Your Favourite items are just a click away
										</CartEmptySubtitle>
									</CartEmptyPlaceholder>
								</CartEmptyContainer>
							)}
						</CartItemsContainer>

						{totalQty !== 0 && (
							<CartCheckoutText>
								Promo code can be applied on payment page
							</CartCheckoutText>
						)}
						<CartCheckoutContainer>
							{totalQty !== 0 ? (
								<>
									<CartCheckoutButton
										disableRipple
										fullWidth
										variant="contained"
										onClick={clickHandler}
									>
										<CartCheckoutButtonText>
											Proceed to Checkout
										</CartCheckoutButtonText>
										<CartCheckoutButtonPrice>
											<span sx={{ textAlign: 'right' }}>
												Rs.{totalPrice} &nbsp;&nbsp;>
											</span>
										</CartCheckoutButtonPrice>
									</CartCheckoutButton>
								</>
							) : (
								<CartCheckoutButton
									fullWidth
									variant="contained"
									disableRipple
									sx={{ justifyContent: 'center' }}
									onClick={clickHandler}
								>
									<CartCheckoutButtonText>
										Start Shopping
									</CartCheckoutButtonText>
								</CartCheckoutButton>
							)}
						</CartCheckoutContainer>
					</CartComponent>
				</CartContainerComponent>
			</Modal>
		</>
	);
};

export default Cart;
