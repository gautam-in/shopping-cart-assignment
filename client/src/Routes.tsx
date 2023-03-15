import { Routes, Route } from 'react-router-dom'

import {
	HomePage,
	ProductListingPage,
	ProductDetailsPage,
	NotFoundPage,
} from './Pages'

export const AppRoutes = () => (
	<Routes>
		<Route path="/" element={<HomePage />} />

		<Route path="/products" element={<ProductListingPage />} />
		<Route path="/products/:id" element={<ProductDetailsPage />} />

		<Route path="*" element={<NotFoundPage />} />
	</Routes>
)
