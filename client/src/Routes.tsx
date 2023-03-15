import { Routes, Route } from 'react-router-dom'

import {
	HomePage,
	ProductListingPage,
AuthPages,
	NotFoundPage,
} from './Pages'

export const AppRoutes = () => (
	<Routes>
		<Route path="/" element={<HomePage />} />

		<Route path="/login" element={<AuthPages.Login />} />
		<Route path="/register" element={<AuthPages.Register />} />

		<Route path="/products" element={<ProductListingPage />} />

		<Route path="*" element={<NotFoundPage />} />
	</Routes>
)
