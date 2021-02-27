import React from "react";
import ReactDOM from "react-dom";
import {connect} from 'react-redux';
import {push} from 'react-router-redux';
import {getProducts,addToCart,resetCartReduxProcessData,resetCartData} from '../actions/productActions';
import Cart from '../presentations/Cart';
import toastr from 'toastr';
import Header from '../presentations/Header';
import Footer from '../presentations/Footer';
class Basket extends React.Component{
    constructor(props){
        super(props);
        this.state={

        }
        this.checkoutComplete = this.checkoutComplete.bind(this);
    }
    checkoutComplete = () => {
        if(this.props.productInfo.cartItems && this.props.productInfo.cartItems.length){
            toastr.success('', 'Congratulations, Order Placed',{timeOut:1000});
        }
        this.props.dispatch(resetCartData());
        // this.onCloseModal();
        this.props.dispatch(push('/'));
    }
    showCartView=()=>{
        console.log('cart view has to be shown');
        // this.setState({openModal: true});
        // document.getElementsByTagName('body')[0].style.overflow = 'hidden';
        // document.getElementsByTagName('html')[0].style.overflow = 'hidden';
    }
    render(){
    return(<div className="basket-page">
        <Header cartClick={this.showCartView} cartInfo={this.props.productInfo.cartItems} />
        <Cart hideHeader={true} cartData={this.props.productInfo.cartItems} checkoutComplete={this.checkoutComplete} />
        </div>)
    }
}
function mapStateToProps(state){
    return{
        productInfo: state.productReducer
    }
}
export default connect(mapStateToProps)(Basket);