import React from "react";

import { connect } from 'react-redux';
import {setUserDetails} from '../actions/signupActions';
import {resetCartData} from '../actions/productActions';
import {validEmail,validPwd} from '../utils';
import Header from '../presentations/Header';
import Footer from '../presentations/Footer';
import toastr from 'toastr';
import { Modal } from "react-responsive-modal";
import Cart from '../presentations/Cart';
import Constants from '../constants';
class Signup extends React.Component {
    constructor(props){
        super(props);
        this.state={
                email:'',
                password:'',
                confirmPassword:'',
                fName:'',
                lName:'',
                formError: false
        }
        
    }

    static getDerivedStateFromProps(props,state){
        if(props.signUp && props.signUp.userData){
            let title = `${Constants.TEXTS.DEFAULTS.hai}, ${state.fName}`
            let message = Constants.TEXTS.SIGNUP.signup_success;
            toastr.success(message, title,{timeOut:1000});
            if(props.router){
              props.router.push('/Home');
            }
        }
        return state;
      }
    inputHandler=(event,value)=>{
        switch(value){
            case Constants.TEXTS.SIGNUP.form_values.fname:
                this.setState({fName:event.target.value});
                break;
            case Constants.TEXTS.SIGNUP.form_values.lname:
                this.setState({lName:event.target.value});
                break;
            case Constants.TEXTS.SIGNUP.form_values.email: 
                this.setState({email:event.target.value});
                break;
            case Constants.TEXTS.SIGNUP.form_values.pwd:
                this.setState({password:event.target.value});
                break;
            case Constants.TEXTS.SIGNUP.form_values.cpwd:
                this.setState({confirmPassword:event.target.value});
                break;
            case 'default':
                return;
        }
    }
    isValidFormState=()=>{
        let isValid = true;
        if(!this.state.fName){
            isValid = false;
            toastr.error('', Constants.TEXTS.TOASTS.fname,{timeOut:1000});
        }
        if(isValid && !this.state.lName){
            isValid = false;
            toastr.error('',Constants.TEXTS.TOASTS.lname,{timeOut:1000});
        }
        if(isValid && (this.state.email || !this.state.email) && !validEmail(this.state.email)){
            isValid = false;
            toastr.error('', Constants.TEXTS.TOASTS.invalid_email,{timeOut:1000});
        }
        if(isValid && ((this.state.password && this.state.password.length < 6) || (this.state.password !== this.state.confirmPassword) || (!this.state.password || !this.state.confirmPassword))){
            isValid = false;
            toastr.error('', Constants.TEXTS.TOASTS.invalid_pwd,{timeOut:1000});
        }
        if(isValid && this.state.password && validPwd(this.state.password) && (this.state.password === this.state.confirmPassword)){
            isValid = true;
        } else if(isValid) {
            isValid = false;
            toastr.error('', Constants.TEXTS.TOASTS.pwdcriteriamismatch,{timeOut:1000});
        }
        return isValid;
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
    onSubmitHandler=(event)=>{
        event.preventDefault();
        let isValidForm = false;
        if(this.isValidFormState()){
            isValidForm = true;
        } else {
            this.setState({formError: true},()=>{
                document.getElementById('errorarea').click();
            });
        }
        if(isValidForm){
            this.setState({formError: false});
            this.props.setUserDetails({
                userEmail:this.state.email,
                userPassword:this.state.password,
                userFName:this.state.fName,
                userLName: this.state.lName
            });
        }
    }
  render(){
  const {router,productInfo} = this.props;
  const {formError,openModal} = this.state;
  return (
    <main className="App signup-area">
        <Header router={router} cartClick={this.showCartView} cartInfo={productInfo.cartItems}></Header>
        {/* <div dangerouslySetInnerHTML={{ __html: template(this.state.data) }} /> */}
        <section className="signup-page">
            <div className="row">
            <div className="col span-1-of-2">
              <div className="login-info-area">
                <div> </div>
                <div className="row login-left-area">
                  <h1>Signup</h1>
                  <p>We donot share your personal details with anyone.</p>
                  <div className="">
                     {formError && (<div id="errorarea" className="errorArea">
                          <p>Please follow instruction below to fill form:</p>
                          <ul className="form-instrcutions">
                                <li><p>Make sure no fields are empty when user submits the form. </p></li>
                                <li><p>Make sure email address entered is always valid.</p></li>
                                <li><p>Password should follow following criteria:<br />
                                    a. Minimum length 6 characters. <br />
                                    b. Must have a number and alphabet.<br />
                                    c. Cannot have spaces.<br /></p>
                                </li>
                                <li><p>Confirm password needs to be same as password value.</p></li>
                          </ul>
                      </div>) }
                  </div>
                </div>
                <div> </div>
              </div>
            </div>
            <div className="col span-1-of-2">
                  <form method="" action="" onSubmit={this.onSubmitHandler}>  
                  <div className="floating-input-area">
                    <input type="text" maxLength="20" aria-label={Constants.TEXTS.FORM_INPUTS.fname.label} className="inputText" id="fname-input" value={this.state.fName || ''} onChange={(event)=>this.inputHandler(event,Constants.TEXTS.SIGNUP.form_values.fname)} placeholder=" " required/>
                    <span className="floating-label">{Constants.TEXTS.FORM_INPUTS.fname.value}</span>
                  </div>
                  <div className="floating-input-area">
                    <input type="text" maxLength="20" aria-label={Constants.TEXTS.FORM_INPUTS.lname.label} className="inputText" id="lname-input" value={this.state.lName || ''} onChange={(event)=>this.inputHandler(event,Constants.TEXTS.SIGNUP.form_values.lname)} placeholder=" " required/>
                    <span className="floating-label">{Constants.TEXTS.FORM_INPUTS.lname.value}</span>
                  </div>             
                   <div className="floating-input-area">
                    <input type="email" aria-label={Constants.TEXTS.FORM_INPUTS.email.label} className="inputText" id="email-input" value={this.state.email || ''} onChange={(event)=>this.inputHandler(event,Constants.TEXTS.SIGNUP.form_values.email)} placeholder=" " required/>
                    <span className="floating-label">{Constants.TEXTS.FORM_INPUTS.email.value}</span>
                  </div>
                  <div className="floating-input-area">
                    <input type="password" aria-label={Constants.TEXTS.FORM_INPUTS.pwd.label} className="inputText" id="password-input" value={this.state.password || ''} onChange={(event)=>this.inputHandler(event,Constants.TEXTS.SIGNUP.form_values.pwd)} placeholder=" " required/>
                    <span className="floating-label">{Constants.TEXTS.FORM_INPUTS.pwd.value}</span>
                  </div>
                  <div className="floating-input-area">
                    <input type="password" aria-label={Constants.TEXTS.FORM_INPUTS.cpwd.label} className="inputText" id="cpassword-input" value={this.state.confirmPassword || ''} onChange={(event)=>this.inputHandler(event,Constants.TEXTS.SIGNUP.form_values.cpwd)} placeholder=" " required/>
                    <span className="floating-label">{Constants.TEXTS.FORM_INPUTS.cpwd.value}</span>
                  </div>
                  <div>
                    <button type="submit" aria-label={Constants.TEXTS.FORM_INPUTS.signup_submit.label} onClick={(event)=>this.onSubmitHandler(event) } className="login btn big-btn">{Constants.TEXTS.FORM_INPUTS.signup_submit.value}</button>
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
        aria-describedby= {Constants.TEXTS.MODAL.modal_desc}
        classNames={{
          overlayAnimationIn: '',
          overlayAnimationOut: '',
          modalAnimationIn: Constants.TEXTS.MODAL.customEnterModalAnimation,
          modalAnimationOut: Constants.TEXTS.MODAL.customLeaveModalAnimation,
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
      signUp: state.signUpReducer,
      productInfo: state.productReducer
    };
}

const mapDispatchToProps = (dispatch) =>{
  return {
    resetCartData: ()=>{dispatch(resetCartData())},
    setUserDetails: (data)=>{dispatch(setUserDetails(data))}
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(Signup);