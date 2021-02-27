import React from 'react';
import ReactDOMServer from 'react-dom/server';
import Handlebars from "handlebars";
import {Link} from 'react-router';
import {connect} from 'react-redux';
import {push} from 'react-router-redux';
import Logo from '../../static/images/logo.png';
import {getViewPortDimensions} from '../utils';
import Basket from '../components/Basket';
   /*const hbr = `
<header className="space-header">
        <div class="row">
            <img onClick="{{imgclick}}" src={{state.logo}} />
        </div>
    </header>
`;*/

// const clickEvent = function(event){
//     console.log('clicked')
// }

// Handlebars.registerHelper('imgclick', function (event) {
//     console.log(event);
//     console.log(this);
//     if(this.state.clickable){
//         return this.clickEvent();
//     } else {
//         console.log('not clickable,setting now')
//         setTimeout(()=>this.setState({clickable: true}),0);
//     }
// })

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
    }
    componentDidMount(){
        // window.imgClick = this.clickEvent;
        if(this.props.signin.userData && this.props.signin.userData.userEmail){
            this.setState({userName:this.props.signin.userData.userEmail});
        } else if(this.props.signup && this.props.signup.userData && this.props.signup.userData.userEmail){
            this.setState({userName:this.props.signup.userData.userEmail});
        }
        this.doResizeActions();
        window.addEventListener('resize',()=>{
            // console.log('resized');
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
    componentDidUpdate(nextProps,prevState){
        // if(this.props.cartInfo){
        //     this.setState({itemCount:this.props.cartInfo.length})
        // }
    }
    doResizeActions=()=>{
        let dimensions = getViewPortDimensions();
        console.log('Dimensions',dimensions);
        this.setState({dimensions: dimensions});
    }
    cartClick=()=>{
        if(this.state.dimensions && this.state.dimensions.width && this.state.dimensions.width < 480){ //1024
            console.log('need to route to cart view');
            this.props.dispatch(push('/cart'));
        } else {
            this.props.cartClick();
        }
    }
    clickEvent(event){
        console.log('clicked',event);
    }
    showHome=()=>{
        this.props.dispatch(push('/'));
    }
    render(){
        // const html = ReactDOMServer.renderToString();
        // const hbr=html;
        // const template = Handlebars.compile(hbr);
        return (<div className="header-area">
            <header>
                <nav className="sticky-nav">
                    <div className="row">
                        <img onClick={this.showHome} src={Logo} alt="logo" className="logo" />
                        <ul className="main-nav js--main-nav">
                            <li><Link to={`/home`} >Home</Link></li>
                            <li><Link to="/products">Products</Link></li>
                            {/* <li><a href="#home">Home</a></li> */}
                            {/* <li><a href="#products">Products</a></li> */}
                        </ul>
                        {/* <a className="mobile-nav-icon js--nav-icon"><i className="ion-navicon-round"></i></a> */}
                        <div className="guest-info">
                            <div>
                            {this.state.userName && this.state.userName.length ? (<div> 
                                <p className="useremail">{this.state.userName}</p>
                            </div>) : (<ul className="main-nav js--main-nav">
                                <li><Link to="/signin">Signin</Link></li>
                                <li><Link to="/signup">Register</Link></li>
                                {/* <li><Link to "/signup">Register</Link></li> */}
                            </ul>)}
                            </div>
                            <div className="cartArea" onClick={this.cartClick}>
                                <i className="ion-ios-cart"></i><span>{this.state.itemCount} items</span>
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