import { lazy } from "react"
import { Routes, Route } from "react-router-dom"

const HomePage = lazy(() =>
  import("./Pages").then((module) => ({ default: module.HomePage }))
)
const Login = lazy(() =>
  import("./Pages").then((module) => ({ default: module.AuthPages.Login }))
)
const Register = lazy(() =>
  import("./Pages").then((module) => ({ default: module.AuthPages.Register }))
)
const ProductListingPage = lazy(() =>
  import("./Pages").then((module) => ({ default: module.ProductListingPage }))
)
const NotFoundPage = lazy(() =>
  import("./Pages").then((module) => ({ default: module.NotFoundPage }))
)

export const AppRoutes = () => (
  <Routes>
    <Route path="/" element={<HomePage />} />

    <Route path="/login" element={<Login />} />
    <Route path="/register" element={<Register />} />

    <Route path="/products" element={<ProductListingPage />} />

    <Route path="*" element={<NotFoundPage />} />
  </Routes>
)
