import React from "react";
import LoginComponent from '../../components/LoginSignUp/LoginComponent/LoginComponent';
import SignUpComponent from '../../components/LoginSignUp/SignUp/SignUp';

import './login.styles.scss';

class Login extends React.Component{
    state={
        new_user:false
    }
    onclickOfSignuprlogin =(login)=>{
        this.setState({
            new_user:login
        })
    }
    render(){
        console.log("prps",this.props);
        return(
            <div className="login_container container">
                {
                    this.state.new_user? <SignUpComponent onclickOfSignuprlogin={this.onclickOfSignuprlogin} {...this.props}/> : <LoginComponent onclickOfSignup={this.onclickOfSignuprlogin} {...this.props}/>
                }
                

            </div>
        )
    }
}

export default Login;