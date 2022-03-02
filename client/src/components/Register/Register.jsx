import React,{useState} from 'react'
import classes from './Register.module.css'
import {useHistory} from 'react-router-dom'

import FormInput from '../FormInput/FormInput'
import Button from '../button/Button'



const Register = () => {

    const history = useHistory()
    const [credentials, setCredentials] = useState({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        confirmPassword: ""
    })

    const [error, setError] = useState({
        password: "",
        confirmPassword: ""
    })

    const handleSubmit = async (event)=>{
        event.preventDefault()
        if(error.password){
            return;
        }
        if(credentials.password !== credentials.confirmPassword){
            return;
        }
        history.push('/')

    }

    const handleChange = (event)=>{

        const {value, name} = event.target;
        setCredentials({...credentials, [name]: value})

        if(event.target.name === "confirmPassword"){
            if(credentials.password !== event.target.value){
                setError({...error, [event.target.name]: "Password do not match"})
            }
            else {
                setError({...error, [event.target.name]: ""})
            }
        }

        if(name === "password"){
            const passRegx = /(?=^.{6,10}$)(?=.*\d)(?=.*[a-zA-Z])(?!.*\s)/;

            if(!passRegx.test(value)){
                const errorMessage = "please add min 6 characters"
                setError({ ...error, [name]: errorMessage });  
            }
            else{
                setError({ ...error, [name]: "" });
            }
        }
    }

        return (
            <div className={classes.sign_in}>
            <div className={classes.signIn__content}>
                <h2 className={classes.title}>Signup</h2>
                <span>We do not share your personal details woth anyone.</span>
            </div>

            <form onSubmit={handleSubmit} className={classes.signIn__form}>
                <FormInput 
                    name="firstName"
                    type="test"
                    label="FirstName"
                    value={credentials.firstName}
                    handleChange={handleChange}
                    required
                    
                />

                <FormInput 
                    name="lastName"
                    type="text"
                    label="lastName"
                    value={credentials.lastName}
                    handleChange={handleChange}
                    required
                    
                />

                <FormInput 
                    name="email"
                    type="email"
                    label="email"
                    value={credentials.email}
                    handleChange={handleChange}
                    required
                    
                />

                <FormInput 
                    name="password"
                    type="password"
                    label="Password"
                    value={credentials.password}
                    handleChange={handleChange}
                    error={error.password}
                    required
                    
                />

                <FormInput 
                    name="confirmPassword"
                    type="password"
                    label="confirmPassword"
                    value={credentials.confirmPassword}
                    handleChange={handleChange}
                    required
                    error={error.confirmPassword}
                />



                <Button 
                type="submit"
                
                style={{
                    width:'100%',
                    height: '3.5rem'
                }}
                >
                    Signup
                </Button>
                

            </form>
            
        </div>
        )
}


export default Register