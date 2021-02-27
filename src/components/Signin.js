import React from "react";
// import ReactDOM from "react-dom";
import { connect } from 'react-redux';
import { push } from 'react-router-redux';
import Handlebars from "handlebars";
import Header from '../presentations/Header';
import Footer from '../presentations/Footer';
import {setUserDetails} from '../actions/singinActions';
import {getProducts,addToCart,resetCartReduxProcessData,resetCartData} from '../actions/productActions';
import toastr from 'toastr';
import { Modal } from "react-responsive-modal";
import Cart from '../presentations/Cart';
import $ from 'jquery';
const hbr = `
<p>Hello, my name is {{name}}. I am from {{hometown}}. I have " +
"{{kids.length}} kids:</p>" +
"<ul>{{#kids}}<li>{{name}} is {{age}}</li>{{/kids}}</ul>
<form action="" method="POST">
  <div c>
</form>(
`;

const template = Handlebars.compile(hbr);

class Signin extends React.Component {
    constructor(props){
        super(props);
        this.state={
            data:{
                name: "Alan",
                hometown: "Somewhere, TX",
                kids: [{ name: "Jimmy", age: "12" }, { name: "Sally", age: "4" }],
                email:'',
                password:'',
                loginError: false,
                openModal: false
              }
        }
        this.onSubmitHandler = this.onSubmitHandler.bind(this);
        this.inputHandler = this.inputHandler.bind(this);
        this.showCartView = this.showCartView.bind(this);
        this.onCloseModal = this.onCloseModal.bind(this);
        this.checkoutComplete = this.checkoutComplete.bind(this);
    }
    componentDidMount(){

    }
    static getDerivedStateFromProps(props,state){
      console.log(props);
      if(props.signIn && props.signIn.userData){
        props.dispatch(push('/Home'));
      }
      return state;
    }
    inputHandler(event,value){
      switch(value){
        case 'email': 
        this.setState({email:event.target.value});
        break;
        case 'pwd':
          this.setState({password:event.target.value});
          break;
        case 'default':
          return;
      }
    }
    showCartView=()=>{
      console.log('cart view has to be shown');
      this.setState({openModal: true});
      document.getElementsByTagName('body')[0].style.overflow = 'hidden';
      document.getElementsByTagName('html')[0].style.overflow = 'hidden';
  }
  checkoutComplete=()=>{
    this.props.dispatch(resetCartData());
    this.onCloseModal();
    toastr.success('','Congratulations, Order Placed',{timeOut:1000});
}
  
  onCloseModal = () => {
      this.setState({ openModal: false });
      document.getElementsByTagName('body')[0].style.overflow = 'auto';
      document.getElementsByTagName('html')[0].style.overflow = 'auto';
  };
    onSubmitHandler=(e)=>{
      e.preventDefault();
      // this.props.dispatch(push('/'));
      let emailValidRegex=/^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/i;
      if(this.state.email && emailValidRegex.test(this.state.email) && this.state.password && this.state.password.length >= 6){
        this.setState({loginError:false});
        toastr.success('', 'Tada...you are logged-in',{timeOut:1000});
        this.props.dispatch(setUserDetails({userEmail:this.state.email,userPassword:this.state.password}));
      } else {
        this.setState({loginError:true});
        setTimeout(()=>{
          document.getElementById('errorarea').focus();
          $('#errorarea').trigger('click');
        },10);
      }
    }
  render(){
  return (
    <div className="App signin-area">
        <Header cartClick={this.showCartView} cartInfo={this.props.productInfo.cartItems}></Header>
        {/* <div dangerouslySetInnerHTML={{ __html: template(this.state.data) }} /> */}
        <div className="login-area">
            <div className="row">
            <div className="col span-1-of-2">
              <div className="login-info-area">
                <div> </div>
                <div className="row login-left-area">
                  <h1>Login</h1>
                  <p>Get access to your Orders, Wishlist and Recommendations.</p>
                  {this.state.loginError && (<div id="errorarea" className="errorArea">
                    <p>Invalid login credentials.</p>
                  </div>)}
                </div>
                <div> </div>
              </div>
            </div>
            <div className="col span-1-of-2">
                  <form method="" onSubmit={this.onSubmitHandler}>                 
                   <div className="floating-input-area">
                    <input type="email" aria-label="Enter your email" className="inputText" onChange={(event)=>this.inputHandler(event,'email')} placeholder=" " required/>
                    <span className="floating-label">Email</span>
                  </div>
                  <div className="floating-input-area">
                    <input type="password" aria-label="Enter your password" className="inputText" onChange={(event)=>this.inputHandler(event,'pwd')} placeholder=" " required/>
                    <span className="floating-label">Password</span>
                  </div>
                  <div>
                    <button type="submit" aria-label="Hit enter or click on this button to login" onClick={(event)=>this.onSubmitHandler(event)} className="login btn big-btn">Login</button>
                  </div>
                  </form>
            </div>
            </div>
        </div>
        <Footer></Footer>
        {this.state.openModal ? (<Modal
        open={this.state.openModal}
        onClose={this.onCloseModal}
        center
        aria-labelledby={`My Cart(${this.props.productInfo.cartItems.legth} items)`}
        aria-describedby="Hurry up! You won't find it cheaper anywhere."
        classNames={{
          overlayAnimationIn: '',
          overlayAnimationOut: '',
          modalAnimationIn: 'customEnterModalAnimation',
          modalAnimationOut: 'customLeaveModalAnimation',
        }}
        animationDuration={800}
        //   closeIcon={closeIcon}
        showCloseIcon={false}>
        <Cart cartData={this.props.productInfo.cartItems} checkoutComplete={this.checkoutComplete} closeModal={this.onCloseModal}></Cart>
      </Modal>) : null}
    </div>
  );
  }
}
function mapStateToProps(state) {
  return {
    signIn: state.signinReducer,
    homeApis: state.homeApis,
    productInfo: state.productReducer
  };
}
// const mapDispatchToProps = (dispatch) => {
//   return {
//       // onSubmit: (data) => {
//       //     dispatch(setAddresses(data))
//       // }
//   }
// }
export default connect(mapStateToProps)(Signin);