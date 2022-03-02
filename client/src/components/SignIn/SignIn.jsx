import  {useState} from 'react'
import {useHistory} from 'react-router-dom'

import classes from './SignIn.module.css'
import FormInput from '../FormInput/FormInput'

import Button from '../button/Button'

const SignIn = ()=> {

const history = useHistory()
    const [credentials, setCredentails] = useState({
        email: "",
        password: ""
    })

    const [error, setError] = useState({
        email: "",
        password: "",
      });

    const handleSubmit = async (event)=>{
        event.preventDefault()
        if(error.email || error.password){
            return;
        }
        history.push('/')

    }

    const handleChange = (event)=>{

        const {value, name} = event.target;
        setCredentails({...credentials, [name]: value})

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
                <h2 className={classes.title}>Login</h2>
                <span className={classes.content}>Get Access to your Orders, Wishlist and Recommensations</span>
            </div>

            <form onSubmit={handleSubmit} className={classes.signIn__form}>
                <FormInput 
                    name="email"
                    type="email"
                    label="Email"
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

                <Button 
                type="submit"
                style={{
                    width:'100%',
                    height: '3.5rem'
                }}
                >
                    Login
                </Button>
                

            </form>
            
        </div>
    )
}


export default SignIn