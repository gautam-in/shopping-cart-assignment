import axios from 'axios';
import { useDispatch } from 'react-redux';
import { cartActions } from '../../reducers/CartReducer';
import {
	ItemContainer,
	ItemGridContainer,
	ItemGrid,
	ProductItemContent,
	ProductTitleContainer,
	ProductWrapper,
	ProductTitle,
	ProductImageContainer,
	ProductImage,
	ProductDescContainer,
	ProductDesc,
	ProductPrice,
	ProductMRP,
	BuyNowButton,
	ButtonWrapper,
} from './StyledProduct';

const ProductItem = ({ products }) => {
	const dispatch = useDispatch();

	const confirmCart = () => {
		axios
			.post('http://localhost:5000/addToCart ')
			.then((res) => res.data)
			.then((res) => console.log(res));
	};

	const addtoCart = (item) => dispatch(cartActions.addtoCart(item));

	return (
		<ItemContainer elevation={2}>
			<ItemGridContainer container spacing={1}>
				{products.map((product) => (
					<ItemGrid item md={3} xs={12} sm={6} key={product.id}>
						<ProductItemContent>
							<ProductTitleContainer>
								<ProductTitle>{product.name}</ProductTitle>
							</ProductTitleContainer>
							<ProductWrapper>
								<ProductImageContainer>
									<ProductImage
										component="img"
										image={product.imageURL}
										alt={product.name}
									/>
								</ProductImageContainer>

								<ProductDescContainer>
									<ProductDesc>{product.description}</ProductDesc>
								</ProductDescContainer>
							</ProductWrapper>
							<ProductPrice>
								<ProductMRP>MRP Rs. {product.price}</ProductMRP>
								<BuyNowButton
									onClick={() => {
										confirmCart();
										addtoCart(product);
									}}
								>
									Buy Now
								</BuyNowButton>
								<ButtonWrapper
									variant="contained"
									fullWidth
									onClick={() => {
										confirmCart();
										addtoCart(product);
									}}
								>
									Buy Now @ Rs.{product.price}
								</ButtonWrapper>
							</ProductPrice>
						</ProductItemContent>
					</ItemGrid>
				))}
			</ItemGridContainer>
		</ItemContainer>
	);
};

export default ProductItem;
