import React from 'react';
import '../login/index.scss';
import TextField from '@material-ui/core/TextField';


import { Link } from 'react-router-dom';

class Register extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            firstName: "",
            lastName: "",
            pass:"",
            cPass:"",
            errors: {
                email: false,
                pass: false,
                confirmPass:false,

            }
        }
    }

    checkEmail=e=>{
         if(!e.target.value.length){
          return  this.setState({
                errors:{email:false}
            })
         }
       
         if (/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(e.target.value))
          {
            this.setState({
                errors:{email:false}
            })
          }
          else{
               
              this.setState({
                  errors:{email:true}
              })

          } 

}



checkPassword=e=>{
    
 


    if(e.target.value.includes(" ")){
       return;
    }

   else{

      this.setState({
             pass:e.target.value
         })
        }
   


  
    if (/^(?:[0-9]+[a-z]|[a-z]+[0-9])[a-z0-9]*$/i.test(e.target.value)&&e.target.value.length>=6)
     {
        this.setState({
           errors:{pass:false}
       })
     }

    
     else{
          
         this.setState({
             errors:{pass:true}
         })

     } 


    



}


checkPasswordC=e=>{
      
    this.setState({
        cPass:e.target.value
    })

    if(this.state.pass===e.target.value)
          {
            this.setState({
                errors:{ confirmPass:false}
            })
          }

     else{
        this.setState({
            errors:{ confirmPass:true}
        })
     }     

}














    handleUserName = e => {
       
        const { name, value } = e.target;
        this.setState(prevState => ({
            [name]: value,
            error: {
                ...prevState.error,
                [name]: false
            }
        }))
    }
    handleSubmit = e => {
        e.preventDefault();
        if(this.state.pass!=this.state.cPass){
                this.setState({
                    cPass:"",
                    errors:{
                        confirmPass:true
                    }
                })

                return;
        }

        if(!(this.state.errors.email||this.state.errors.pass||this.state.errors.confirmPass))
                      this.props.history.push("home")

    }


    render() {
        const { errors } = this.state;

        return (

            <div className={"loginContainer"}>
                <div className={"registerMargin"}>
                    <span className="login">
                        SignUp
                </span>
                    <span className="login2">
                        We do not share your personal details with anyone
                </span>
                </div>
                <div className="text-fields">
                    <form onSubmit={this.handleSubmit} 
                        className={"form"}>
                        <TextField
                           
                          
                            required id="standard-basic"
                            label="First Name"
                            name="firstName"
                            helperText="Please enter First Name."
                          
                            
                        />
                        <TextField
                           
                           
                            required id="standard-basic"
                            label="Last Name"
                            name="lastName"
                            helperText="Please enter Last Name."
                          


                        />
                        <TextField
                            onChange={this.checkEmail}
                            required id="standard-basic"
                            label="Email"
                           
                            name="email"
                            error={this.state.errors.email}
                        />
                        <TextField
                          onChange={this.checkPassword}
                            required id="standard-basic"
                            label="Password"
                            name="password"
                            type="password"
                            value={this.state.pass}
                            error={this.state.errors.pass}
                            helperText="Must be of 6 characters(number&alphabets)"
                            
                        />
                        <TextField
                            onChange={this.checkPasswordC}
                            type="password"
                            required id="standard-basic"
                            label="Confirm Password"
                            value={this.state.cPass}
                            name="confirmPassword"
                            error={this.state.errors.confirmPass}
                        />

                        <button class="btn" type="submit">SignUp</button>

                    </form>






                </div>
            </div>
        )
    }
}
export default Register;