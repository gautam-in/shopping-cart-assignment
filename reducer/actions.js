import * as cartActions from './cart/cartActions'
import * as homeActions from './homepage/homeActions'
import * as loginActions from './loginpage/loginActions'
import * as productActions from './productpage/productActions'

export const ActionCreators = Object.assign({},
    cartActions,
    homeActions,
    loginActions,
    productActions);