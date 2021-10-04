import React from 'react';
import styled from 'styled-components';

const Field = styled.div`
position: relative;
margin-bottom: 20px;
`
const Button = styled.button`
margin-top:20px;
width:100%
`
const Error = styled.h3`
font-weight:bold;
margin-top:20px;
text-aligm:center;
color:red
`
class Form extends React.Component {
    state = {
        fname: null,
        lname: null,
        email: null,
        password: null,
        confirmPass: null,
        error: null
    }

    onChangeHandler = (e) => {
        this.setState({
            ...this.state,
            [e.target.name]: e.target.value
        })
    }



    onSubmitHandler = async () =>{
        try {
            if (this.state.password !== this.state.confirmPass) {
                throw 'Password and Confirm Password not Matched'
            } else {
                let data = {
                    fname: this.state.fname,
                    lname: this.state.lname,
                    email: this.state.email,
                    password: this.state.password
                }
                //post request
                await fetch('http://localhost:3000/user', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(data)
                })
                window.location.reload();
            }
        } catch (error) {
            this.setState({
                error
            })
        }
    }

    render() {
        return (
            <form action="javascript:void(0);" onSubmit={this.onSubmitHandler} method="post">
                <Field>
                    <input type="input" value={this.state.fname} onChange={this.onChangeHandler} className="form_field" placeholder="First Name" name="fname" id='fname' required />
                    <label htmlFor="fname" className="form_label">First Name</label>
                </Field>
                <Field>
                    <input type="input" value={this.state.lname} className="form_field" onChange={this.onChangeHandler} placeholder="Last Name" name="lname" id='lname' />
                    <label htmlFor="lname" className="form_label">Last Name</label>
                </Field>
                <Field>
                    <input type="email" value={this.state.email} className="form_field" onChange={this.onChangeHandler} placeholder="Email" name="email" id='email' required />
                    <label htmlFor="email" className="form_label">Email</label>
                </Field>
                <Field>
                    <input type="password" value={this.state.password} className="form_field" onChange={this.onChangeHandler} placeholder="Password" name="password" id='password' required />
                    <label htmlFor="password" className="form_label">Password</label>
                </Field>
                <Field>
                    <input type="password" value={this.state.confirmPass} className="form_field" onChange={this.onChangeHandler} placeholder="Confirm Password" name="confirmPass" id='confirmPass' required />
                    <label htmlFor="confirmPass" className="form_label">Confirm Password</label>
                </Field>
                <Button type="submit">Signup</Button>
                {this.state.error && <Error>{this.state.error}</Error>}
            </form>
        )
    }
}


export default Form;
