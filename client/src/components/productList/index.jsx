import {Alert} from "@mui/material";
import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {getCategoriesAction} from "../../actions/actionHome";
import {getProductsAction} from "../../actions/actionProducts";
import {toggleSnackBar} from "../../reducers/productReducer";
import MuiSnackBar from "../common/muiSnackbar";
import ProductCard from "../productCard";

import "./styles.scss";



const ProductList = () => {
	const dispatch = useDispatch();
	const {productData, isSnackBarVisible} = useSelector((state) => state.product);

	useEffect(() => {
		(async () => {
			await dispatch(getCategoriesAction());
			await dispatch(getProductsAction());
		})();
	}, []);




	const handleClose = (event, reason) => {
		if (reason === 'clickaway') {
			return;
		}
		dispatch(toggleSnackBar(false))
	};




	return (
		<section className="productlist-wrapper">
			{productData?.map((item) => (
				<ProductCard key={item?.id} details={item} />
			))}
			<MuiSnackBar anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }} timeout={1000} onClose={handleClose} showSnackBar = {isSnackBarVisible}>
				<Alert  severity="success" sx={{width: '100%'}}>
					Successfully Added to cart! 
				</Alert>
			</MuiSnackBar>
		</section>
	);
};

export default ProductList;