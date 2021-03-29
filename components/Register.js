import React, { useState } from 'react'
import useForm from '../utils/lib/useForm'
import FormLeftContent from './common/FormLeftContent'
import PageLayout from './PageLayout'
import loginStyles from '../styles/login.module.scss'

function Register (props) {
    const {inputs,handleChange,errors,clearForm} = useForm({
        first_name:'',
        last_name:'',
        email:'',
        password:'',
        confirm_password:''
    })
    const [userRegistered,checkUserRegistered] = useState(false)
    function isValid() {
        if (errors.email||errors.first_name||
            errors.last_name||errors.confirm_password||errors.password) {
            return false
        }
    return true
    }
    function UserSignUp(e) {
        e.preventDefault()
let isUserRegistered = props.registeredUsers.findIndex(email => email === inputs.email); 
        if (isUserRegistered >= 0) {
            checkUserRegistered("User Already registered")
            return null;
        }
        checkUserRegistered(`Account created with the email ${inputs.email}.${'\n'}Please login`)
        clearForm()
        return props.actions.registerUser(inputs) 
    }
        return(
            <PageLayout>
            <div style={{height:100}} />
            <div className={loginStyles.formcontent}>
                <FormLeftContent styles={loginStyles} heading="Signup" description="We do not share your personal details with anyone" />
                <div style={{flex:1}}>
                    <form onSubmit={UserSignUp} 
                        className={loginStyles.formrightcontent}>
                            <label className={loginStyles.inputlabel}>
                                First name
                                <input onChange={handleChange} name="first_name" className={loginStyles.inputbox} type="name"/>
                            {errors.first_name&& <p className={loginStyles.inputerror}>{errors.first_name}</p>}
                            </label>
                            <label className={loginStyles.inputlabel}>
                                Last name
                                <input
                                    onChange={handleChange} 
                                    name="last_name" 
                                    className={loginStyles.inputbox} 
                                    type="name"/>
                                {errors.last_name&& <p className={loginStyles.inputerror}>{errors.last_name}</p>}
                            </label>
                            <label className={loginStyles.inputlabel}>
                                 Email
                                <input onChange={handleChange} name="email" className={loginStyles.inputbox} type="email"/>
                                {errors.email&& <p className={loginStyles.inputerror}>{errors.email}</p>}
                            </label>
                            <label className={loginStyles.inputlabel}>
                                Password
                                <input onChange={handleChange} name="password" className={loginStyles.inputbox} type="password"/>
                                {errors.password&& <p className={loginStyles.inputerror}>{errors.password}</p>}
                            </label>
                            <label className={loginStyles.inputlabel}>
                               Confirm password
                                <input onChange={handleChange} name="confirm_password" className={loginStyles.inputbox} type="password"/>
                            </label>
                            {errors.confirm_password&& <p className={loginStyles.inputerror}>{errors.confirm_password}</p>}
                            <button
                                disabled={!isValid()}
                                className={loginStyles.submitbutton}>
                                    Sign Up
                            </button>
                    </form>
                    {userRegistered &&<p>{userRegistered}</p>}
                </div>
            </div>

            </PageLayout>
        )
    }
export default Register