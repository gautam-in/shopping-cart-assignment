import React from "react";
// import ReactDOM from "react-dom";
import { connect } from 'react-redux';
import { push } from 'react-router-redux';
import Handlebars from "handlebars";
import Header from '../presentations/Header';
import Footer from '../presentations/Footer';
import {setUserDetails} from '../actions/singinActions';
import toastr from 'toastr';
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
                loginError: false
              }
        }
        this.onSubmitHandler = this.onSubmitHandler.bind(this);
        this.inputHandler = this.inputHandler.bind(this);
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
    onSubmitHandler=(e)=>{
      e.preventDefault();
      // this.props.dispatch(push('/'));
      let emailValidRegex=/^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/i;
      if(this.state.email && emailValidRegex.test(this.state.email) && this.state.password && this.state.password.length >= 6){
        this.setState({loginError:false});
        toastr.success('', 'Tada...you are logged-in');
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
        <Header></Header>
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
    </div>
  );
  }
}
function mapStateToProps(state) {
  return {
    signIn: state.signinReducer,
    homeApis: state.homeApis
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