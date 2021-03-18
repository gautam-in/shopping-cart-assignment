import React from 'react';
import {Link} from 'react-router';
import {connect} from 'react-redux';
import {getViewPortDimensions} from '../utils';
import {resetCartData} from '../actions/productActions';
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
        if(this.state.dimensions && this.state.dimensions.width && this.state.dimensions.width < 480 && this.props.router){ //1024
            this.props.router.push('/cart');
            this.props.type();
        } else {
            this.props.cartClick();
        }
    }
    clickEvent=(event)=>{}
    showHome=()=>{
        if(this.props.router)
        this.props.router.push('/');
    }
    render(){   
        const {userName,itemCount} = this.state;
        return (<div className="header-area">
            <header>
                <div className="sticky-nav">
                    <div className="row">
                        <img onClick={this.showHome} src={window.location.origin + '/static/images/logo.png'} alt="sabka bazaar" className="logo" /> {/* {Logo} */}
                        <nav>
                        <ul className="main-nav js--main-nav">
                            {!this.state.isMobileView && (<React.Fragment>
                            <li aria-label="Navigate to Home"><Link to={`/home`} >Home</Link></li>
                            <li aria-label="Navigate to Product listing page"><Link to="/products">Products</Link></li>
                            </React.Fragment>)}
                            {this.state.isMobileView && (<React.Fragment>
                            <li aria-label="Navigate to Home" onClick={this.props.type}><Link to={`/home`} >&#9751;</Link></li>
                            <li aria-label="Navigate to Product listing page" onClick={this.props.type}><Link to="/products">&#9783;</Link></li>
                            <li aria-label="Navigate to Signin page" onClick={this.props.type}><Link to={`/signin`} >&#9731;</Link></li>
                            <li aria-label="Navigate to Signup page" onClick={this.props.type}><Link to="/signup">&reg;</Link></li>
                            </React.Fragment>)}
                           
                        </ul>
                        </nav>
                        <div className="guest-info">
                            <div>
                            {userName && userName.length ? (<div> 
                                <p className="useremail" title={userName} aria-label={userName}>{userName}</p>
                            </div>) : (<ul className="main-nav js--main-nav">
                                <li aria-label="Navigate to Signin page" onClick={this.resetCart}><Link to="/signin">Signin</Link></li>
                                <li aria-label="Navigate to Signup page" onClick={this.resetCart}><Link to="/signup">Register</Link></li>
                            </ul>)}
                            </div>
                            <div className="cartArea" aria-labelledby="cart" onClick={this.cartClick}>
                                <div className="cart-icon">
                                    {/* <LazyLoad height={25} once>
                                        <img src={window.location.origin + '/static/images/cart.svg'} alt="cart" className="fill-purple"></img>
                                    </LazyLoad> */}
                                </div>
                                <span aria-label={`Cart with ${itemCount} items`}>{itemCount} items</span>
                            </div>
                        </div>
                    </div>
                </div>
            
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