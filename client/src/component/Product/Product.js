import ProductCategory from './ProductCategory';
import ProductItemList from './ProductItemList';
import { useParams } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { ProductContainer } from './StyledProduct';

const Product = ({ product }) => {
	const { id } = useParams();
	const [categories, setCategories] = useState([]);
	const [filteredProducts, setFilteredProducts] = useState([]);
	const [selectId, setSelectId] = useState('');

	useEffect(() => {
		axios
			.get('http://localhost:5000/categories')
			.then((res) => res.data)
			.then((res) => setCategories(res));
	}, []);

	useEffect(() => {
		let productFilter;
		if (id) {
			productFilter = product.filter((prod) => prod.category === id);
			setFilteredProducts(productFilter);
			setSelectId(id);
		} else if (selectId) {
			productFilter = product.filter((prod) => prod.category === selectId);
			setFilteredProducts(productFilter);
			setSelectId(selectId);
		} else {
			productFilter = product;
		}
		setFilteredProducts(productFilter);
	}, [id, selectId, product]);

	return (
		<>
			<ProductContainer>
				<ProductCategory
					categories={categories}
					setFilterCatregory={setSelectId}
				/>
				<ProductItemList filteredProducts={filteredProducts} />
			</ProductContainer>
		</>
	);
};

export default Product;
