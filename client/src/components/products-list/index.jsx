import ProductCard from "../product-card";
import { ProductsListContainer } from "./styles";

const ProductsList = ({ products }) => {
	return (
		<ProductsListContainer>
			{products.map((product) => (
				<ProductCard key={product.id} product={product} />
			))}
		</ProductsListContainer>
	);
};

export default ProductsList;
