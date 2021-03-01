import React from 'react';
import {Link} from 'react-router';
import {connect} from 'react-redux';
import {push} from 'react-router-redux';
import Logo from '../../static/images/logo.png';
import {getViewPortDimensions} from '../utils';
import {resetCartData} from '../actions/productActions';
import SvgIcon from './SvgIcon';
import CartIcon from '../../static/images/cart.svg';//'';
import toastr from 'toastr';
import LazyLoad from 'react-lazyload';
class Header extends React.Component {
     constructor(props) {
        super(props);
        this.state = {
            logo: Logo,
            clickable: false,
            userName:'',
            itemCount: 0,
            dimensions:{}
        }
        this.clickEvent = this.clickEvent.bind(this);
        this.showHome = this.showHome.bind(this);
        this.doResizeActions = this.doResizeActions.bind(this);
        this.cartClick = this.cartClick.bind(this);
        this.resetCart = this.resetCart.bind(this);
    }
    componentDidMount(){
        if(this.props.signin.userData && this.props.signin.userData.userEmail){
            this.setState({userName:this.props.signin.userData.userEmail});
        } else if(this.props.signup && this.props.signup.userData && this.props.signup.userData.userEmail){
            this.setState({userName:this.props.signup.userData.userEmail});
        }
        this.doResizeActions();
        window.addEventListener('resize',()=>{
            this.doResizeActions();
        },false);
    }
    static getDerivedStateFromProps(props,state){
        if(props.cartInfo){
            state.itemCount= props.cartInfo.length;
        }
        if(props.productInfo && props.productInfo.cartItems){
            state.itemCount= props.productInfo.cartItems.length
        }
        return state;
    }
   
    resetCart=()=>{
        this.props.dispatch(resetCartData());
    }
    doResizeActions=()=>{
        let dimensions = getViewPortDimensions();
        this.setState({dimensions: dimensions});
    }
    cartClick=()=>{
        // if(!this.state.userName.length){
        //     toastr.error('','Please login to view cart.');
        //     return;
        // }
        if(this.state.dimensions && this.state.dimensions.width && this.state.dimensions.width < 480){ //1024
            this.props.dispatch(push('/cart'));
        } else {
            this.props.cartClick();
        }
    }
    clickEvent=(event)=>{
    }
    showHome=()=>{
        this.props.dispatch(push('/'));
    }
    render(){        
        return (<div className="header-area">
            <header>
                <nav className="sticky-nav">
                    <div className="row">
                        <img onClick={this.showHome} src={Logo} alt="logo" className="logo" />
                        <ul className="main-nav js--main-nav">
                            <li><Link to={`/home`} >Home</Link></li>
                            <li><Link to="/products">Products</Link></li>
                            <div className="logo-icon-header">
                            <li><Link to={`/home`} ><i className="ion-ios-home"></i></Link></li>
                            <li><Link to="/products"><i className="ion-ios-list"></i></Link></li>
                            <li><Link to={`/signin`} ><i className="ion-ios-person"></i></Link></li>
                            <li><Link to="/signup"><i className="ion-ios-personadd"></i></Link></li>
                            </div>
                           
                        </ul>
                        <div className="guest-info">
                            <div>
                            {this.state.userName && this.state.userName.length ? (<div> 
                                <p className="useremail">{this.state.userName}</p>
                            </div>) : (<ul className="main-nav js--main-nav">
                                <li onClick={this.resetCart}><Link to="/signin">Signin</Link></li>
                                <li onClick={this.resetCart}><Link to="/signup">Register</Link></li>
                            </ul>)}
                            </div>
                            <div className="cartArea" onClick={this.cartClick}>
                                {/* <i className="ion-ios-cart"></i> */}
                                <div className="cart-icon">
                                    <LazyLoad height={25} once>
                                        <img src={CartIcon} className="fill-purple"></img>
                                    </LazyLoad>
                                    {/* <SvgIcon fill="#b1288d" style={{}} glyph={CartIcon} width={'20px'} height={'20px'} /> */}
                                </div>
                                <span>{this.state.itemCount} items</span>
                            </div>
                        </div>
                    </div>
                </nav>
            
        </header>
        </div>);
}}
function mapStateToProps(state){
    return{
        signin:state.signinReducer,
        signup:state.signUpReducer,
        productInfo: state.productReducer
    }
}
export default connect(mapStateToProps)(Header);