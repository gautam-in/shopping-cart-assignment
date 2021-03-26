import React from 'react';
import { connect } from 'react-redux';
import { userActions } from '../../_actions';
import Footer from '../../_components/footer/footer';
import Header from '../../_components/header/header';
import '../LoginPage/style.scss';


class RegisterPage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            user: {
                firstName: '',
                lastName: '',
                email: '',
                password: '',
                confirm_password:''
            },
            errors: {},
            submitted: false
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        const { name, value } = event.target;
        const { user } = this.state;
        this.setState({
            user: {
                ...user,
                [name]: value
            }
        });
    }

    handleSubmit(event) {
        event.preventDefault();

        this.setState({ submitted: true });
        const { user } = this.state;
        if (this.validate()) {
            this.props.register(user);
        }
    }

    validate(){
        let user = this.state.user;
        let errors = {};
        let isValid = true;

        if (!user["firstName"]) {
            isValid = false;
            errors["firstName"] = "Please enter First Name.";
         }

         if (!user["lastName"]) {
            isValid = false;
            errors["lastName"] = "Please enter Last Name.";
         }
         
        if (typeof user["email"] !== "undefined") {
          var pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
          if (!pattern.test(user["email"])) {
            isValid = false;
            errors["email"] = "Please enter valid email address.";
          }
        }

        if (!user["password"]) {
            isValid = false;
            errors["password"] = "Please enter password.";
         }

        if (typeof user["password"] !== "undefined") {
            
            var pattern = new RegExp(/^(?=.*[a-z])(?=.*[0-9])(?=.{7,})/i);
            if (!pattern.test(user["password"])) {
              isValid = false;
              errors["password"] = "Please enter valid password.";
            }
          }
          if (!user["confirm_password"]) {
            isValid = false;
            errors["confirm_password"] = "Please enter confirm password.";
          }
          if (typeof user["password"] !== "undefined" && typeof user["confirm_password"] !== "undefined") {
            if (user["password"] != user["confirm_password"]) {
              isValid = false;
              errors["confirm_password"] = "Passwords don't match.";
            }
        }
        this.setState({
          errors: errors
        });
    
        return isValid;
    }
    render() {
        const { user } = this.state;
        return (
        <div>
           <Header />
            <div className="main">

            <div className="title">

                <h2>SignUp</h2>
                <h5>We don't share personal data with anyone.</h5>
            </div>
            <div className="regForm">

            <form onSubmit={this.handleSubmit}>
            <div >
                <input type="text" name="firstName" placeholder=" " value={user.firstName} onChange={this.handleChange} />
                <label htmlFor="firstName">First Name</label>
                <p >{this.state.errors.firstName}</p>
            </div>
            <div>
                <input type="text" className="form-control" placeholder=" " name="lastName" value={user.lastName} onChange={this.handleChange} />
                <label htmlFor="lastName">Last Name</label>
                <p >{this.state.errors.lastName}</p>
            </div>
            <div>
                <input type="text" className="form-control" placeholder=" " name="email" value={user.email} onChange={this.handleChange} />
                <label htmlFor="email">Email</label>
                <p >{this.state.errors.email}</p>
            </div>
            <div>
                <input type="password" className="form-control" placeholder=" " name="password" value={user.password} onChange={this.handleChange} />
                <label htmlFor="password">Password</label>
                <p >{this.state.errors.password}</p>
                
            </div>
            <div>
                <input type="password" name="confirm_password" placeholder=" " value={user.confirm_password} onChange={this.handleChange} className="form-control" id="confirm_password" />
                <label htmlFor="confirm_password">Confirm Password</label>
                <p >{this.state.errors.confirm_password}</p>
                
            </div>
            <div className="submit">
                <input type="submit" name="" value="SignUp"/>
            </div>
            </form>

            </div>

        </div>
        <div className='regFooter'>
            <Footer />
        </div>
    </div>
        );
    }
}

function mapState(state) {
    const { registering } = state.registration;
    return { registering };
}

const actionCreators = {
    register: userActions.register
}

const connectedRegisterPage = connect(mapState, actionCreators)(RegisterPage);
export { connectedRegisterPage as RegisterPage };