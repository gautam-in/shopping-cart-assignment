import { useSelector, useDispatch } from 'react-redux';
import { cartActions } from '../../reducers/CartReducer';

import {
	CartItemContainer,
	CartItemImgContainer,
	CartItemImg,
	CartItemMetaDataContainer,
	CartItemTitle,
	CartItemQtyContainer,
	CartItemQtyUpdater,
	CartItemMetaData,
	CartItemQty,
	CartItemPriceContainer,
	CartItemPrice,
	CartItemTotalPrice,
} from './StyledCart';

const CartItem = (props) => {
	const dispatch = useDispatch();
	const cartItems = useSelector((state) => state.cart);

	const addItem = (id) => {
		dispatch(cartActions.addCartItemCount(id));
	};

	const removeItem = (id) => {
		dispatch(cartActions.subtractCartItemCount(id));
	};

	return (
		<>
			{cartItems &&
				cartItems.map((item) => (
					<CartItemContainer key={item.id}>
						<CartItemImgContainer>
							<CartItemImg src={item.imageURL} />
						</CartItemImgContainer>

						<CartItemMetaDataContainer>
							<CartItemTitle>{item.name} </CartItemTitle>
							<CartItemMetaData>
								<CartItemQtyContainer>
									<CartItemQtyUpdater
										size="small"
										onClick={() => removeItem(item.id)}
									>
										-
									</CartItemQtyUpdater>
									<CartItemQty>{item.qty}</CartItemQty>
									<CartItemQtyUpdater
										size="small"
										onClick={() => addItem(item.id)}
									>
										+
									</CartItemQtyUpdater>
								</CartItemQtyContainer>

								<CartItemPriceContainer>
									&#10006;
									<CartItemPrice>Rs. {item.price}</CartItemPrice>
								</CartItemPriceContainer>

								<CartItemTotalPrice>
									Rs. {item.price * item.qty}
								</CartItemTotalPrice>
							</CartItemMetaData>
						</CartItemMetaDataContainer>
					</CartItemContainer>
				))}
		</>
	);
};

export default CartItem;
