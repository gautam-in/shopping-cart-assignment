import { createBrowserRouter } from 'react-router-dom';
import Home from 'src/components/Home/Home';
import Login from 'src/components/Login/Login';
import Register from 'src/components/Register/Register';
import Products from 'src/components/Products/Products';
import Cart from 'src/components/Cart/Cart';
import Layout from '../Layout/Layout';

const AllRoutes = createBrowserRouter([
  {
    path: '/',
    element: <Layout children={<Home />} />,
  },
  { path: '/products', element: <Layout children={<Products />} /> },
  {
    path: '/login',
    element: <Layout children={<Login />} />,
  },
  { path: '/register', element: <Layout children={<Register />} /> },
  { path: '/cart', element: <Layout children={<Cart />} /> },
]);

export default AllRoutes;
