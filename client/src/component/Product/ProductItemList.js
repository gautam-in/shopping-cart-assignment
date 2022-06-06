import { ProductItemContainer } from './StyledProduct';

import ProductItem from './ProductItem';

const ProductItemList = (props) => {
	return (
		<>
			<ProductItemContainer component="span">
				<ProductItem products={props.filteredProducts} />
			</ProductItemContainer>
		</>
	);
};

export default ProductItemList;
