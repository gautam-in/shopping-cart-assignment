import React, { Component } from 'react';
import { connect } from 'react-redux';
import {withRouter} from 'react-router';
import toastr from 'toastr';
import { Modal } from "react-responsive-modal";
import {resetCartData} from '../actions/productActions';
import Constants from '../constants';
import Cart from '../presentations/Cart';
import Header from '../presentations/Header';
import Footer from '../presentations/Footer';
class App extends Component {
    constructor(props) {
        super(props);
        this.state = {openModal:false}
    }
    componentDidMount(){
        window.addEventListener('offline', this.checkBroswerState);
        window.addEventListener('online', this.checkBroswerState);
    }
    componentWillUnmount(){
        window.removeEventListener('offline',this.checkBroswerState);
        window.removeEventListener('online',this.checkBroswerState);
    }
    checkBroswerState=()=>{
        if(navigator.onLine == true){
            this.online()
        } else if(navigator.onLine == false){
            this.offline();
        }
    }
    checkoutComplete = () => {
        this.props.resetCartData();
        this.onCloseModal();
        toastr.success(Constants.TEXTS.TOASTS.cart_emptied,Constants.TEXTS.TOASTS.order_placed,{timeOut:1000});
    }
    showCartView=()=>{
        this.setState({openModal: true});
        document.getElementsByTagName('body')[0].style.overflow = 'hidden';
        document.getElementsByTagName('html')[0].style.overflow = 'hidden';
    }
    onCloseModal = () => {
        this.setState({ openModal: false });
        document.getElementsByTagName('body')[0].style.overflow = 'auto';
        document.getElementsByTagName('html')[0].style.overflow = 'auto';
      };
    offline=() => {
        toastr.warning('',Constants.TEXTS.DEFAULTS.offline_msg); 
    }
    online=()=>{
        toastr.success('',Constants.TEXTS.DEFAULTS.online_msg);
    }
    render(){
        const {productInfo,router} = this.props;
        const {openModal} = this.state;
        return (<React.Fragment>
            <Header router={router} cartClick={this.showCartView} cartInfo={productInfo.cartItems}></Header>
            {this.props.children}
            <Footer />
            {openModal ? (<Modal
                open={openModal}
                onClose={this.onCloseModal}
                center
                aria-labelledby={`My Cart(${productInfo.cartItems.legth} items)`}
                aria-describedby={Constants.TEXTS.MODAL.modal_desc}
                classNames={{
                    overlayAnimationIn: '',
                    overlayAnimationOut: '',
                    modalAnimationIn: Constants.TEXTS.MODAL.customEnterModalAnimation,
                    modalAnimationOut: Constants.TEXTS.MODAL.customLeaveModalAnimation
                }}
                animationDuration={800}
                showCloseIcon={false}>
                <Cart cartData={productInfo.cartItems} checkoutComplete={this.checkoutComplete} closeModal={this.onCloseModal}></Cart>
            </Modal>) : null}
        </React.Fragment>)
    }
}
function mapStateToProps(state){
    return{
        productInfo: state.productReducer
    }
}
const mapDispatchToProps=(dispatch,props)=>{
    return{
        resetCartData: ()=>{dispatch(resetCartData())}
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(App);