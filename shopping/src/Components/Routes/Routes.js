
import {Switch, Route} from 'react-router-dom';
import HomePage from '../../pages/Home/Home';
import SingnupPage from '../../pages/Signup/Signup';
import LoginPage from '../../pages/Login/Login';
import ProductsPage from '../../pages/Products/Products';

const Routes = () => {
  return (
      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/signup" exact component={SingnupPage} />
        <Route path="/login" exact component={LoginPage} />
        <Route path="/products" exact component={ProductsPage} />
      </Switch>
  );
};
export default Routes;
