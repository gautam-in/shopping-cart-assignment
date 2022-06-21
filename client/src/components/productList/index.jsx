import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {getCategoriesAction} from "../../actions/actionHome";
import {getProductsAction} from "../../actions/actionProducts";
import ProductCard from "../productCard";

import "./styles.scss";



const ProductList = () => {
	const dispatch = useDispatch()
	const {productData} = useSelector((state)=>state.product)

	useEffect(()=>{
		(async()=>{
			await dispatch(getCategoriesAction())
			await dispatch(getProductsAction())
		})()
	},[])








	return (
		<section className="productlist-wrapper">
		{ productData?.map((item)=> (
			<ProductCard key={item?.id} details = {item}/>
		))}
		</section>
	);
};

export default ProductList;