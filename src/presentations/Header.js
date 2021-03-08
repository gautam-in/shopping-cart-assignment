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
            isMobileView: false,
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
        const dimensions = getViewPortDimensions();
        let ismobileview;
        if(dimensions.width <= 480){
            ismobileview = true;
        } else{
            ismobileview = false;
        }
        this.setState({dimensions: dimensions,isMobileView:ismobileview});
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
                            {!this.state.isMobileView && (<React.Fragment>
                            <li><Link to={`/home`} >Home</Link></li>
                            <li><Link to="/products">Products</Link></li>
                            </React.Fragment>)}
                            {this.state.isMobileView && (<React.Fragment>
                            <li><Link to={`/home`} >H</Link></li>
                            <li><Link to="/products">P</Link></li>
                            <li><Link to={`/signin`} >U</Link></li>
                            <li><Link to="/signup">NU</Link></li>
                            </React.Fragment>)}
                           
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
                                        <img src={window.location.origin + '/static/images/cart.svg'} alt="cart" className="fill-purple"></img>
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