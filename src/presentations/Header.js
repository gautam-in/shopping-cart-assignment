import React from 'react';
import {Link} from 'react-router';
import {connect} from 'react-redux';
// import {push} from 'react-router-redux';
// import Logo from '../../static/images/logo.png';
import {getViewPortDimensions} from '../utils';
import {resetCartData} from '../actions/productActions';
// import CartIcon from '../../static/images/cart.svg';//'';
import LazyLoad from 'react-lazyload';
class Header extends React.Component {
     constructor(props) {
        super(props);
        this.state = {
            logo: '',
            clickable: false,
            userName:'',
            itemCount: 0,
            dimensions:{}
        }
        // this.clickEvent = this.clickEvent.bind(this);
        // this.showHome = this.showHome.bind(this);
        // this.doResizeActions = this.doResizeActions.bind(this);
        // this.cartClick = this.cartClick.bind(this);
        // this.resetCart = this.resetCart.bind(this);
        // this.resize = this.resize.bind(this);
    }
    componentDidMount(){
        if(this.props.signin.userData && this.props.signin.userData.userEmail){
            this.setState({userName:this.props.signin.userData.userEmail});
        } else if(this.props.signup && this.props.signup.userData && this.props.signup.userData.userEmail){
            this.setState({userName:this.props.signup.userData.userEmail});
        }
        this.doResizeActions();
        window.addEventListener('resize',this.resize,false);
    }
    componentWillUnmount(){
        window.removeEventListener('resize',this.resize,false);
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
    resize=()=>{
        this.doResizeActions();
    }
    resetCart=()=>{
        this.props.resetCartData();
    }
    doResizeActions=()=>{
        let dimensions = getViewPortDimensions();
        this.setState({dimensions: dimensions});
    }
    cartClick=()=>{
        if(this.state.dimensions && this.state.dimensions.width && this.state.dimensions.width < 480){ //1024
            this.props.router.push('/cart');
        } else {
            this.props.cartClick();
        }
    }
    clickEvent=(event)=>{}
    showHome=()=>{
        this.props.router.push('/');
    }
    render(){   
        const {userName,itemCount} = this.state;
        return (<div className="header-area">
            <header>
                <nav className="sticky-nav">
                    <div className="row">
                        <img onClick={this.showHome} src={window.location.origin + '/static/images/logo.png'} alt="logo" className="logo" /> {/* {Logo} */}
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
                            {userName && userName.length ? (<div> 
                                <p className="useremail" title={userName} aria-label={userName}>{userName}</p>
                            </div>) : (<ul className="main-nav js--main-nav">
                                <li onClick={this.resetCart}><Link to="/signin">Signin</Link></li>
                                <li onClick={this.resetCart}><Link to="/signup">Register</Link></li>
                            </ul>)}
                            </div>
                            <div className="cartArea" aria-labelledby="cart" onClick={this.cartClick}>
                                <div className="cart-icon">
                                    <LazyLoad height={25} once>
                                        <img src={window.location.origin + '/static/images/cart.svg'} className="fill-purple"></img>
                                    </LazyLoad>
                                </div>
                                <span>{itemCount} items</span>
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
const mapDispatchToProps = (dispatch,ownProps) => {
    return {
        resetCartData: ()=>{dispatch(resetCartData())}
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Header);