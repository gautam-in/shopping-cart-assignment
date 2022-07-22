import CategoryFilter from "../../components/categoryFilter";
import ProductsList from "../../components/productList";
import "./styles.scss";

const PlpLayout = () => {
	return (
	<div className="plplayout-wrapper" >
	<CategoryFilter />
	<ProductsList />
	</div>
	);
};

export default PlpLayout;