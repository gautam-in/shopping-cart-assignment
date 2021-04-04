import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import Home from './Home';
import ProductsPage from './ProductsPage';

import LogoImage from "../images/logo.png"
import CartImage from "../images/cart.svg"

const Header = () => {
    return (
        <Router>
        <header>
            <div className="container">
                <div className="row">
                    <div className="col-md-3">
                        <div className="nav_logo">
                            <img src={LogoImage} alt="Logo" />
                        </div>
                    </div>
                    <div className="col-md-6">
                        <ul className="menu_list">
                            <li><Link to={'/'} className="nav-link"> Home </Link></li>
                            <li><Link to={'/products'} className="nav-link"> Products </Link></li>
                        </ul>
                    </div>
                    <div className="col-md-3">
                        <div className="nav_cart">
                            <p><img src={CartImage} alt="cart" /> 0 items</p>
                        </div>
                    </div>
                </div>
            </div>
        </header>
            <Switch>
              <Route exact path='/' component={Home} />
              <Route path='/products' component={ProductsPage} />
            </Switch>
        </Router>
    )
}

export default Header