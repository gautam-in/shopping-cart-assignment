import App from './App';
import Home from './components/Home';
import Login from './components/Login';
import SignUp from './components/SignUp';
import Products from './components/Products';

import WEB_PATH from './constants/webPath';

export default [
  {
    ...App,
    routes: [
      {
        ...Home,
        path: WEB_PATH.HOME,
        exact: true,
      },
      {
        ...Login,
        path: WEB_PATH.LOGIN,
        exact: true,
      },
      {
        ...SignUp,
        path: WEB_PATH.SIGNUP,
        exact: true,
      },
      {
        ...Products,
        path: WEB_PATH.PRODUCTS,
        exact: true,
      },
      {
        ...Home,
      },
    ],
  },
];
