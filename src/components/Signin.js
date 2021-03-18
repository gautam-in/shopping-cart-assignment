import React from "react";
import { connect } from 'react-redux';
// import { push } from 'react-router-redux';
import {withRouter} from 'react-router';
import Header from '../presentations/Header';
import Footer from '../presentations/Footer';
import {setUserDetails} from '../actions/singinActions';
import {resetCartData} from '../actions/productActions';
import toastr from 'toastr';
import {validEmail} from '../utils';
import Constants from '../constants';
import { Modal } from "react-responsive-modal";
import Cart from '../presentations/Cart';
class Signin extends React.Component {
    constructor(props){
        super(props);
        this.state={
            data:{              
                email:'',
                password:'',
                loginError: false,
                openModal: false
              }
        }
        
    }
    componentDidMount(){

    }
    static getDerivedStateFromProps(props,state){
      if(props.signIn && props.signIn.userData && props.router){
        props.router.push('/Home');
      }
      return state;
    }
    inputHandler=(event,value)=>{
      switch(value){
        case Constants.TEXTS.SIGNUP.form_values.email: 
        this.setState({email:event.target.value});
        break;
        case Constants.TEXTS.SIGNUP.form_values.pwd:
          this.setState({password:event.target.value});
          break;
        case 'default':
          return;
      }
    }
    showCartView=()=>{
      this.setState({openModal: true});
      document.getElementsByTagName('body')[0].style.overflow = 'hidden';
      document.getElementsByTagName('html')[0].style.overflow = 'hidden';
  }
  checkoutComplete=()=>{
    this.props.resetCartData();
    this.onCloseModal();
    toastr.success(Constants.TEXTS.TOASTS.cart_emptied,Constants.TEXTS.TOASTS.order_placed,{timeOut:1000});
}
  
  onCloseModal = () => {
      this.setState({ openModal: false });
      document.getElementsByTagName('body')[0].style.overflow = 'auto';
      document.getElementsByTagName('html')[0].style.overflow = 'auto';
  };
    onSubmitHandler=(e)=>{
      e.preventDefault();
      if(this.state.email && validEmail(this.state.email) && this.state.password && this.state.password.length >= 6){
        this.setState({loginError:false});
        toastr.success('', Constants.TEXTS.TOASTS.login_success,{timeOut:1000});
        this.props.setUserDetails({userEmail:this.state.email,userPassword:this.state.password});
      } else {
        this.setState({loginError:true},()=>{
          const elem = document.getElementById('errorarea');
          if(elem){elem.click();}
        });        
      }
    }
  render(){
    const {router,productInfo} = this.props;
    const {loginError,openModal} = this.state;
  return (
    <main className="App signin-area">
        <Header router={router} cartClick={this.showCartView} cartInfo={productInfo.cartItems}></Header>
        <section className="login-area">
            <div className="row">
            <div className="col span-1-of-2">
              <div className="login-info-area">
                <div> </div>
                <div className="row login-left-area">
                  <h1>Login</h1>
                  <p>{Constants.TEXTS.DEFAULTS.get_access_signin}</p>
                  {loginError && (<div id="errorarea" className="errorArea">
                    <p>{Constants.TEXTS.DEFAULTS.invalid_login}</p>
                  </div>)}
                </div>
                <div> </div>
              </div>
            </div>
            <div className="col span-1-of-2">
                  <form method="" onSubmit={this.onSubmitHandler}>                 
                   <div className="floating-input-area">
                    <input type="email" aria-label={Constants.TEXTS.FORM_INPUTS.email.label} className="inputText" id="email-input" value={this.state.email || ''} onChange={(event)=>this.inputHandler(event,'email')} placeholder=" " required/>
                    <span className="floating-label">{Constants.TEXTS.FORM_INPUTS.email.value}</span>
                  </div>
                  <div className="floating-input-area">
                    <input type="password" aria-label={Constants.TEXTS.FORM_INPUTS.pwd.label} className="inputText" id="password-input" value={this.state.password || ''} onChange={(event)=>this.inputHandler(event,'password')} placeholder=" " required/>
                    <span className="floating-label">{Constants.TEXTS.FORM_INPUTS.pwd.value}</span>
                  </div>
                  <div>
                    <button type="submit" aria-label={Constants.TEXTS.FORM_INPUTS.signin_submit.label} onClick={(event)=>this.onSubmitHandler(event)} className="login btn big-btn">{Constants.TEXTS.FORM_INPUTS.signin_submit.value}</button>
                  </div>
                  </form>
            </div>
            </div>
        </section>
        <Footer></Footer>
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
    </main>
  );
  }
}
function mapStateToProps(state) {
  return {
    signIn: state.signinReducer,
    productInfo: state.productReducer
  };
}
const mapDispatchToProps = (dispatch) => {
  return {
    setUserDetails : (data)=>{dispatch(setUserDetails(data))},
    resetCartData: ()=>{dispatch(resetCartData())}
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(withRouter(Signin));