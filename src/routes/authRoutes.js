import WEB_PATH from './webPath';
import Login from '../components/Login';
import SignUp from '../components/SignUp';
import Home from '../components/Home';
import Products from '../components/Products';

const authRoutes = [
  {
    path: WEB_PATH.HOME,
    exact: true,
    component: Home,
    isProtected: false,
  },
  {
    path: WEB_PATH.LOGIN,
    exact: true,
    component: Login,
    isProtected: false,
  },
  {
    path: WEB_PATH.SIGNUP,
    exact: true,
    component: SignUp,
    isProtected: false,
  },
  {
    path: WEB_PATH.PRODUCTS,
    exact: true,
    component: Products,
    isProtected: false,
  },
];

export default authRoutes;
