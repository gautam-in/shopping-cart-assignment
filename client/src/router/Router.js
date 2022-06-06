import { Routes, Route, Navigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import axios from 'axios';

import Home from '../component/Home/Home';
import Product from '../component/Product/Product';
import SignIn from '../component/Register/SignIn';
import Login from '../component/Login/Login';

const Router = () => {
	const user = useSelector((state) => state.auth.loggedInUser);
	const users = useSelector((state) => state.auth.users);
	const [products, setProducts] = useState([]);

	const getProducts = async () => {
		const { data } = await axios.get('http://localhost:5000/products');
		setProducts(data);
	};

	useEffect(() => {
		getProducts();
	}, []);

	useEffect(() => {
		window.localStorage.setItem('users', JSON.stringify(users));
	}, [users]);
	return (
		<Routes>
			<Route path="/" element={<Home />} />
			<Route
				path="/login"
				element={Object.keys(user).length ? <Navigate to="/" /> : <Login />}
			/>
			<Route
				path="/signin"
				element={
					Object.keys(user).length ? <Navigate to="/" /> : <SignIn />
				}
			/>
			<Route
				path="/product"
				element={<Product product={products} />}
			></Route>
			<Route
				path="/product/:id"
				element={<Product product={products} />}
			></Route>
		</Routes>
	);
};

export default Router;
