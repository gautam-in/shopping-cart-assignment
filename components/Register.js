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
    const [showpassword,togglepassword] = useState(false)
    function isValid() {
        if (errors.email||errors.first_name||
            errors.last_name||errors.confirm_password||
            errors.password||!inputs.email||
            !inputs.first_name||!inputs.password||!inputs.confirm_password) {
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
                            <label  className={loginStyles.inputlabel}>
                                First name
                                <input aria-label="First name" onChange={handleChange} name="first_name" className={loginStyles.inputbox} type="name"/>
                            {errors.first_name&& <p className={loginStyles.inputerror}>{errors.first_name}</p>}
                            </label>
                            <label className={loginStyles.inputlabel}>
                                Last name
                                <input
                                    onChange={handleChange}
                                    aria-required="true" 
                                    aria-label="last name"
                                    name="last_name" 
                                    className={loginStyles.inputbox} 
                                    type="name"/>
                                {errors.last_name&& <p className={loginStyles.inputerror}>{errors.last_name}</p>}
                            </label>
                            <label className={loginStyles.inputlabel}>
                                 Email
                                <input 
                                 aria-label="Email"
                                 aria-required="true"
                                 onChange={handleChange} name="email" aria-required="true" className={loginStyles.inputbox} type="email"/>
                                {errors.email&& <p className={loginStyles.inputerror}>{errors.email}</p>}
                            </label>
                            <label className={loginStyles.inputlabel}>
                                Password
                                <input aria-label="Password" aria-required="true" onChange={handleChange} name="password" className={loginStyles.inputbox} type={showpassword?"text":"password"}/>
                                {errors.password&& <p className={loginStyles.inputerror}>{errors.password}</p>}
                            </label>
                            <label className={loginStyles.inputlabel}>
                               Confirm password
                                <input
                                 aria-label="Confirm password"
                                 onChange={handleChange} aria-required="true" name="confirm_password" className={loginStyles.inputbox} type={showpassword?"text":"password"}/>
                            </label>
                            {errors.confirm_password&& <p className={loginStyles.inputerror}>{errors.confirm_password}</p>}
                            <div style={{display:"flex",flexDirection:"row",fontSize:12}}>
                                <input  type="checkbox" id="showpass" onChange={()=>togglepassword(!showpassword)} name="Show password" value={showpassword} />
                                <label fdr="showpass">Show password</label>
                            </div>
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