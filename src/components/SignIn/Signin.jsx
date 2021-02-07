import React, { useState } from 'react';
import Header from '../common/Header'
import Footer from '../common/Footer'
import { Typography, Container, TextField, Button, Grid, Snackbar } from '@material-ui/core'
import Alert from '@material-ui/lab/Alert';
import './Signin.css'

class Signin extends React.Component {
    state = {
        email: "",
        password: "",
        status: false,
        message: ""
    }
    handleTextChange = (event, property) => {
        this.setState({ [property]: event.target.value })
    }

    processLogin = (e) => {
        const { email, password } = this.state;
        const mailFormat = /^\w+([\.-]?w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        if (email === "" || password === "") {
            return this.setState({ message: "All fields are mandatory", status: true })
        }
        else if (!email.match(mailFormat)) {
            return this.setState({ message: "Please provide email in correct format", status: true })
        }
        else if (password.length < 6) {
            return this.setState({ message: "Password length is less than 6 characters. ", status: true })
        }
        else if (/\s/.test(password)) {
            return this.setState({ message: "Password should not contain spaces", status: true })
        } else if (!(/[0-9]/g.test(password)) || !(/[a-zA-Z]/g.test(password))) {
            return this.setState({ message: "Password should contain a uppercase letter, a lowercase letter and a digit", status: true })
        }
        this.props.history.push("/")
    }
    handleClose = () => {
        this.setState({ status: false })
    }

    renderSnackBar = () => {
        return <Snackbar
            anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
            }
            }
            open={this.state.status}
        >
            <Alert
                onClose={() => this.handleClose()}
                severity="error"
            >
                {this.state.message}
            </Alert>
        </Snackbar>
    }

    MuiCard = () => {
        return (
            <div className="container">
                <div className="login-div">
                    <div></div>
                    <div>
                        <h1 id="login">
                            Login
                        </h1>
                        <p>
                            Get access to your Orders, Wishlist and Recommendations
                        </p>
                    </div>
                    <div className="login-fields">
                        <div>
                            <input
                                value={this.state.email}
                                type="text"
                                id="email"
                                required
                                placeholder="Email"
                                onChange={(e) => this.handleTextChange(e, 'email')} />
                        </div>
                        <div>
                            <input
                                value={this.state.password}
                                type="password"
                                required
                                id="password"
                                placeholder="Password"
                                onChange={(e) => this.handleTextChange(e, 'password')} />
                        </div>
                        <div>
                            <Button
                                id="login-btn"
                                fullWidth variant="contained"
                                color="secondary"
                                onClick={this.processLogin}>Login</Button>
                        </div>
                        <div></div>
                    </div>
                </div>
            </div>
        );
    }
    render() {
        return (<div>
            <Header />
            {this.MuiCard()}
            <Footer />
            {this.state.status &&
                this.renderSnackBar()}
        </div>)
    }
}

export default Signin;