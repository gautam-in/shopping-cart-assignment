import { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import ErrorBoundary from "./components/error-boundary";
import Layout from "./components/layout";
import Spinner from "./components/spinner";
import CartProvider from "./contexts/cart-context";

const Home = lazy(() => import("./pages/home"));
const ProductsPage = lazy(() => import("./pages/products"));
const RegisterPage = lazy(() => import("./pages/register"));
const SignInPage = lazy(() => import("./pages/sign-in"));

function App() {
	return (
		<CartProvider>
			<Layout>
				<ErrorBoundary>
					<Suspense fallback={<Spinner />}>
						<Routes>
							<Route path="/" element={<Home />} />
							<Route path="/register" element={<RegisterPage />} />
							<Route path="/sign-in" element={<SignInPage />} />
							<Route path="/products" element={<ProductsPage />} />
						</Routes>
					</Suspense>
				</ErrorBoundary>
			</Layout>
		</CartProvider>
	);
}

export default App;
