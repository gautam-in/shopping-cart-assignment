import CategoryFilter from "../../components/categoryFilter";
import ProductsList from "../../components/productList";
import "./styles.scss";

const PlpLayout = () => {
	return (
	<section className="plplayout-wrapper" >
	<CategoryFilter />
	<ProductsList />
	</section>
	);
};

export default PlpLayout;