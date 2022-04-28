

import React, { useState, useEffect, } from 'react';
import { connect } from 'react-redux';
import Header from '../../components/header/Header';
import Footer from '../../components/footer/Footer';
import './SignIn.css';
import {TextField, Button} from '@material-ui/core';
import { userActions } from '../../stores/_actions';




class SignIn extends React.Component {
    constructor(props) {
        super(props);
        this.props.dispatch(userActions.logout());
        this.state = {
            username: null,
            password: null,
            submitted: false,
            loginFailed: '',
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
        const { username, password } = this.state;
        const { dispatch } = this.props;
        if (username && password) {
            dispatch(userActions.login(username, password));
        };
        
    }
   /* 
    componentDidMount() {
            const loggedUser = localStorage.getItem('users');
            JSON.parse(loggedUser).array.forEach(element => {
                this.setState({
                    
                });
            })
    } */
    render() {
        const { loggingIn } = this.props;
        const { username, password, submitted } = this.state;
        return (
            <>
                <Header />
    <section className='contentWrapper'>
    <section className="signupwrapper">
          <div className="signupTile">
                  <h1> Login </h1>
                  <p> Get access to your orders, Whishlist and Recommentations
                  </p>
          </div>
          <div className="signupForm">
          <form name="form" onSubmit={this.handleSubmit} >
            <TextField
                label="User Name"
                variant="standard"
                name='username'
                value={username} onChange={this.handleChange}  required />
            <TextField
                id="standard-multiline-flexible"
                label="Password"
                variant="standard"
                name='password'
                type="password"
                value={password}  onChange={this.handleChange} required />
                <input type="submit" className='btn-primary'  value="Signin"  />
                <br />
                {this.state.loginFailed === 'failed' && <span>User name or password is incorrect!</span> }
          </form>
          </div>

      </section>
      </section>
      <Footer />



          </>
        );
    }
}

function mapStateToProps(state) {
    const { loggingIn } = state.authentication;
    return {
        loggingIn
    };
}

const connectedLoginPage = connect(mapStateToProps)(SignIn);
export { connectedLoginPage as SignIn }; 
