import React from 'react';
import { Router, Route, Switch, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

import { history } from '../_helpers';
import { alertActions } from '../_actions';
import { PrivateRoute } from '../_components';
import { MainPage } from '../_page/MainPage';
import { LoginPage } from '../_page/LoginPage';
import { RegisterPage } from '../_page/RegisterPage';
import { HomePage } from '../_page/HomePage';
import { ProductPage } from '../_page/ProductPage';
import { FruitsNVeg } from '../_page/ProductPage/FruitsNVeg/FruitsNVeg';
import { SeaFood } from '../_page/ProductPage/SeaFood/SeaFood';
import { Beverages } from '../_page/ProductPage/Beverages/Beverages';
import { Beauty } from '../_page/ProductPage/Beauty/Beauty';
import { Bakery } from '../_page/ProductPage/Bakery/Bakery';
import {Baby} from '../_page/ProductPage/Baby/Baby';

class App extends React.Component {
    constructor(props) {
        super(props);

        history.listen((location, action) => {
            // clear alert on location change
            this.props.clearAlerts();
        });
    }

    render() {
        const { alert } = this.props;
        return (
            <div className="jumbotron">
                <div className="container">
                    <div className="col-sm-8 col-sm-offset-2">
                        
                        <Router history={history}>
                            <Switch>
                                <PrivateRoute exact path="/" component={MainPage} />
                                <Route path="/home" component={HomePage} />
                                <Route path="/product" component={ProductPage} />
                                <Route path="/login" component={LoginPage} />
                                <Route path="/register" component={RegisterPage} />
                                <Route path="/beverages" component={Beverages} />
                                <Route path="/beauty" component={Beauty} />
                                <Route path="/bakery" component={Bakery} />
                                <Route path="/baby" component={Baby} />
                                <Route path="/fruitsNveg" component={FruitsNVeg} />
                                <Route path="/seaFood" component={SeaFood} />
                                <Redirect from="*" to="/" />
                            </Switch>
                        </Router>
                    </div>
                </div>
                {alert.message &&
                            <p style={{color:'red',paddingLeft:'62%'}}>{alert.message}</p>
                }
            </div>
        );
    }
}

function mapState(state) {
    const { alert } = state;
    return { alert };
}

const actionCreators = {
    clearAlerts: alertActions.clear
};

const connectedApp = connect(mapState, actionCreators)(App);
export { connectedApp as App };