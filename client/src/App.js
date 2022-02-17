import { Routes, Route } from "react-router-dom";
import Layout from "./components/layout";
import CartProvider from "./contexts/cart-context";
import Home from "./pages/home";
import ProductsPage from "./pages/products";
import RegisterPage from "./pages/register";
import SignInPage from "./pages/sign-in";

function App() {
	return (
		<CartProvider>
			<Layout>
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/register" element={<RegisterPage />} />
					<Route path="/sign-in" element={<SignInPage />} />
					<Route path="/products" element={<ProductsPage />} />
				</Routes>
			</Layout>
		</CartProvider>
	);
}

export default App;
