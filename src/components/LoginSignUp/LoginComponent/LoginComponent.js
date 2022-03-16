import { Button } from 'antd';
import React from 'react';
import FormInput from '../../FOrmInput/FormInput';
import { Link} from 'react-router-dom';

import './logincomponent.styles.scss';
import { auth, createUserProfileDocument } from '../../../firebase/firebase.utils';



class LoginComponent  extends React.Component {
    state = {
        email: "",
        password: ""
    }

    handleChange = (event) => {
        const { value, name } = event.target;

        this.setState({ [name]: value });

    }
    handleSubmit = async (event) => {
    
        event.preventDefault();
        const { email, password } = this.state;
        try {
            await auth.signInWithEmailAndPassword(email, password);
            this.props.history.push('/');
          
        }
        catch (error) {
            console.log(error);
        }

        this.setState({ email: '', password: '' });
    }

    render() {
        return (
            <div className='signIn-signUp flex'>
                <div className='right-container'>
                    <h2>Login</h2>
                    <p>Get access to your orders,whish lists and recommendations </p>
                </div>


                <form onSubmit={this.handleSubmit} className="left-container">
                    <FormInput
                        name='email'
                        type='email'
                        handleChange={this.handleChange}
                        value={this.state.email}
                        label='Email'
                        required
                    />
                    <FormInput
                        name='password'
                        type='password'
                        value={this.state.password}
                        handleChange={this.handleChange}
                        label='Password'
                        required
                    />
                    <button className='sbmt-btn' type='submit'>Sign In</button>
                    <p className='login_info'>New to Sabka Bazar? <Link to="/signup"><span onClick={() => this.props.onclickOfSignup(true)}>Sign Up</span></Link></p>
                </form>
            </div>
        )
    }
}



export default LoginComponent;