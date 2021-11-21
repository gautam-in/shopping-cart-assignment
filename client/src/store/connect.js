import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';
import * as Allactions from '../actions/actions.js'
import App from '../App'

const mapStateToProps=(store)=>{
    console.log(store, 'store while mapping');
    return {
        cartItems:store.cartItems,
        totalItems:store.totalItems,
        totalValue:store.totalValue,
        toggleModal:store.toggleModal
    }
}
const mapDispatchToProps =(dispatcher)=>{

    return bindActionCreators(Allactions,dispatcher);
}
const MainApp = connect(mapStateToProps,mapDispatchToProps)(App);
export default MainApp;