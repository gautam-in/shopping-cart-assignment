import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { userActions } from '../_actions';
import Header from '../_components/header/header';
import './style.css';

class LoginPage extends React.Component {
    constructor(props) {
        super(props);

        // reset login status
        this.props.logout();

        this.state = {
            email: '',
            password: '',
            submitted: false
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(e) {
        const { name, value } = e.target;
        this.setState({ [name]: value });
    }

    handleSubmit(e) {
        e.preventDefault();

        this.setState({ submitted: true });
        const { email, password } = this.state;
        if (email && password) {
            this.props.login(email, password);
        }
    }

    render() {
        const { loggingIn } = this.props;
        const { email, password, submitted } = this.state;
        return (
           <div>
                <Header />

                <div className="main"> 
                <div className="title">

                    <h2>Login</h2>
                    <h5>Get access to your orders, Wishlist and Recommendations</h5>
                </div>
                <div className="regForm">
                    <form name="form" onSubmit={this.handleSubmit}>
                        
                         <div>
                            <input type="text" className="form-control" placeholder=" " name="email" value={email} onChange={this.handleChange} />
                            <label htmlFor="email">Email</label>
                                {submitted && !email &&
                                    <div className="help-block">Email is required</div>
                                }              
                        </div>
                        <div>
                            <input type="password" className="form-control" placeholder=" " name="password" value={password} onChange={this.handleChange} />
                            <label htmlFor="password">Password</label>
                                {submitted && !password &&
                                    <div className="help-block">Password is required</div>
                                }                
                        </div>
                        <div className="submit">
                             <input type="submit" name="" value="Login"/>
                        </div>
                    </form>
                </div>
                </div>
           </div>
        );
    }
}

function mapState(state) {
    const { loggingIn } = state.authentication;
    return { loggingIn };
}

const actionCreators = {
    login: userActions.login,
    logout: userActions.logout
};

const connectedLoginPage = connect(mapState, actionCreators)(LoginPage);
export { connectedLoginPage as LoginPage };