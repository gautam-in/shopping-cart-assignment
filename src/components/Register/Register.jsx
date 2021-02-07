import React from 'react';
import Header from '../common/Header'
import Footer from '../common/Footer'
import { Typography, Container, TextField, Button, Grid, Snackbar } from '@material-ui/core';
import Alert from '@material-ui/lab/Alert'
import './Register.css'

class Register extends React.Component {
    state = {
        fname: "",
        lname: "",
        email: "",
        password: "",
        confirm_password: "",
        status: false,
        message: ""
    }

    processTextFieldChange = (e, property) => {
        this.setState({ [property]: e.target.value })
    }

    renderTextField = () => {
        const divStyle = {
            marginBottom: '5%',
            width: '100%'
        };

        const textFieldStyle = {
            width: '60%'
        };

        return <>
            <div className="text-field">
                <input
                onChange={(e) => this.processTextFieldChange(e, 'fname')}
                value={this.state.fname}
                placeholder="First Name"
                required />
            </div>
            <div className="text-field">
                <input
                    onChange={(e) => this.processTextFieldChange(e, 'lname')} 
                    value={this.state.lname} 
                    placeholder="Last Name" required />
            </div>
            <div className="text-field">
                <input 
                type="text"
                    onChange={(e) => this.processTextFieldChange(e, 'email')}
                     value={this.state.email} placeholder="Email" required />
            </div>
            <div className="text-field">
                <input
                    onChange={(e) => this.processTextFieldChange(e, 'password')}
                    value={this.state.password} type="password"
                    placeholder="Password"
                    required />
            </div>
            <div className="text-field">
                <input type="password"
                    value={this.state.confirm_password}
                    onChange={(e) => this.processTextFieldChange(e, 'confirm_password')} placeholder="Confirm Password" required />
            </div>
        </>
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
    handleSignup = (e) => {
        const { email, password, confirm_password, fname, lname } = this.state;
        const mailFormat = /^\w+([\.-]?w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        if (email === "" || password === "" || confirm_password === "" || fname === "" || lname === "") {
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
        }
        else if (!(/[0-9]/g.test(password)) || !(/[a-zA-Z]/g.test(password))) {
            return this.setState({ message: "Password should contain a uppercase letter, a lowercase letter and a digit", status: true })
        }
        else if (password !== confirm_password) {
            return this.setState({ message: "Passwords doesn't match", status: true })
        }
        this.props.history.push('/')
    }
    MuiCard = () => {
        return (
            <div className="container">
                <div className="register-div">
                    <div></div>
                    <div>
                        <h1>
                            Signup
                        </h1>
                        <p>
                            We do not share your personal details with any one
                        </p>
                    </div>
                    <div>
                        {this.renderTextField()}
                        <div>
                            <Button id="signup-btn"
                                variant="contained"
                                color="secondary"
                                onClick={(e) => this.handleSignup(e)}>
                                Signup
                                    </Button>
                        </div>
                    </div>
                    <div></div>
                </div>
            </div>
        );
    }
    render() {
        return (<div>
            <Header />
            {this.MuiCard()}
            <Footer />
            {
                this.state.status &&
                this.renderSnackBar()
            }
        </div>)
    }
}
export default Register;