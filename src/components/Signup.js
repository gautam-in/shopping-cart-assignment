import React from "react";
import ReactDOM from "react-dom";
import Handlebars from "handlebars";
import { connect } from 'react-redux';
import { push } from 'react-router-redux';
import {setUserDetails} from '../actions/signupActions';
import {getProducts,addToCart,resetCartReduxProcessData,resetCartData} from '../actions/productActions';
import Header from '../presentations/Header';
import Footer from '../presentations/Footer';
import toastr from 'toastr';
import { Modal } from "react-responsive-modal";
import Cart from '../presentations/Cart';
import $ from 'jquery';
// const hbr = `
// <p>Hello, my name is {{name}}. I am from {{hometown}}. I have " +
// "{{kids.length}} kids:</p>" +
// "<ul>{{#kids}}<li>{{name}} is {{age}}</li>{{/kids}}</ul>
// <form action="" method="POST">
//   <div c>
// </form>
// `;

// const template = Handlebars.compile(hbr);

class Signup extends React.Component {
    constructor(props){
        super(props);
        this.state={
            data:{
                // name: "Alan",
                // hometown: "Somewhere, TX",
                // kids: [{ name: "Jimmy", age: "12" }, { name: "Sally", age: "4" }],
                email:'',
                password:'',
                confirmPassword:'',
                fName:'',
                lName:'',
                formError: false
              }
        }
        this.onSubmitHandler = this.onSubmitHandler.bind(this);
        this.inputHandler = this.inputHandler.bind(this);
        this.isValidFormState = this.isValidFormState.bind(this);
        this.showCartView = this.showCartView.bind(this);
        this.onCloseModal = this.onCloseModal.bind(this);
        this.checkoutComplete = this.checkoutComplete.bind(this);
    }
    static getDerivedStateFromProps(props,state){
        console.log(props);
        if(props.signUp && props.signUp.userData){
            let title = `${'Hai '+state.fName}`;
            let message = "You are signed-up successfully!";
            toastr.success(message, title);
            props.dispatch(push('/Home'));
        }
        return state;
      }
    inputHandler(event,value){
        switch(value){
            case 'fname':
                this.setState({fName:event.target.value});
                break;
            case 'lname':
                this.setState({lName:event.target.value});
                break;
            case 'email': 
                this.setState({email:event.target.value});
                break;
            case 'password':
                this.setState({password:event.target.value});
                break;
            case 'cpassword':
                this.setState({confirmPassword:event.target.value});
                break;
            case 'default':
                return;
        }
    }
    isValidFormState=()=>{
        let isValid = true;
        let emailValidRegex=/^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/i;
        if(this.state.email && !emailValidRegex.test(this.state.email)){
            isValid = false;
            toastr.warning('', 'Invalid email');
        }
        if(isValid && this.state.password.length < 6 && this.state.password.length !== this.state.confirmPassword){
            isValid = false;
            toastr.warning('', 'Check password section');
        }
        return isValid;
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
        toastr.success('','Congratulations, Order Placed');
    }
    onCloseModal = () => {
        this.setState({ openModal: false });
        document.getElementsByTagName('body')[0].style.overflow = 'auto';
        document.getElementsByTagName('html')[0].style.overflow = 'auto';
    };
    onSubmitHandler=(event)=>{
        event.preventDefault();
        let isValidForm = false;
        if(this.state.email && this.state.password && (this.state.password === this.state.confirmPassword) && this.state.fName && this.state.lName && this.isValidFormState()){
            isValidForm = true;
        } else {
            // toastr.warning('', 'Invalid form entries found');
            this.setState({formError: true})
            // $('#errorarea').focus();
            setTimeout(()=>{
                document.getElementById('errorarea').focus();
                $('#errorarea').trigger('click');
            });
        }
        if(isValidForm){
            this.setState({formError: false});
            this.props.dispatch(setUserDetails({
                userEmail:this.state.email,
                userPassword:this.state.password,
                userFName:this.state.fName,
                userLName: this.state.lName
            }));
        }
    }
  render(){
  return (
    <div className="App signup-area">
        <Header cartClick={this.showCartView} cartInfo={this.props.productInfo.cartItems}></Header>
        {/* <div dangerouslySetInnerHTML={{ __html: template(this.state.data) }} /> */}
        <div className="signup-page">
            <div className="row">
            <div className="col span-1-of-2">
              <div className="login-info-area">
                <div> </div>
                <div className="row login-left-area">
                  <h1>Signup</h1>
                  <p>We donot share your personal details with anyone.</p>
                  <div className="">
                     {this.state.formError && (<div id="errorarea" className="errorArea">
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
                    <input type="text" aria-label="Enter your first name" className="inputText" onChange={(event)=>this.inputHandler(event,'fname')} placeholder=" " required/>
                    <span className="floating-label">First Name*</span>
                  </div>
                  <div className="floating-input-area">
                    <input type="text" aria-label="Enter your last name" className="inputText" onChange={(event)=>this.inputHandler(event,'lname')} placeholder=" " required/>
                    <span className="floating-label">Last Name*</span>
                  </div>             
                   <div className="floating-input-area">
                    <input type="email" aria-label="Enter your email" className="inputText" onChange={(event)=>this.inputHandler(event,'email')} placeholder=" " required/>
                    <span className="floating-label">Email*</span>
                  </div>
                  <div className="floating-input-area">
                    <input type="password" aria-label="Enter your password" className="inputText" onChange={(event)=>this.inputHandler(event,'password')} placeholder=" " required/>
                    <span className="floating-label">Password*</span>
                  </div>
                  <div className="floating-input-area">
                    <input type="password" aria-label="Please confirm password by typing again" className="inputText" onChange={(event)=>this.inputHandler(event,'cpassword')} placeholder=" " required/>
                    <span className="floating-label">Confirm Password*</span>
                  </div>
                  <div>
                    <button type="submit" aria-label="Hit enter or click on this button to sign up" onClick={(event)=>this.onSubmitHandler(event) } className="login btn big-btn">Signup</button>
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
      signUp: state.signUpReducer,
      homeApis: state.homeApis,
      productInfo: state.productReducer
    };
  }

export default connect(mapStateToProps)(Signup);