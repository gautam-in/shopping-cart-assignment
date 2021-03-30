import  Router  from 'next/router'
import React, { useState } from 'react'
import useForm from '../utils/lib/useForm'
import FormLeftContent from './common/FormLeftContent'
import PageLayout from './PageLayout'
import loginStyles from '../styles/login.module.scss'
function Login(props) {

    const {inputs,handleChange,errors} = useForm({
    email:'',
    password:''
    })
    
    const [userNotRegistered,checkUserRegistered] = useState(false)
    const [showpassword,togglepassword] = useState(false)

    async function signIn(e) {
            e.preventDefault()
            let isUserRegistered = props.registeredUsers.findIndex(email => email === inputs.email);
            if (isUserRegistered >= 0) {
            await props.actions.logIn(inputs.email);
            return  Router.push({pathname:"/"})
            }
            checkUserRegistered(true)
        }
        return(
            <PageLayout>
            <div style={{height:100}} />
            <div className={loginStyles.formcontent}>
                <FormLeftContent styles={loginStyles} heading="Login" description="Get access to your Orders,Wishlist and Recomendations" />
                <div style={{flex:1}}>
                    <form onSubmit={signIn}
                     className={loginStyles.formrightcontent}>
                        {/* <fieldset> */}
                            <label className={loginStyles.inputlabel}>
                                Email
                                <input aria-label="Email" aria-required="true" onChange={handleChange} name="email" className={loginStyles.inputbox} type="email"/>
                            </label>
                            {errors.email&& <p className={loginStyles.inputerror}>{errors.email}</p>}
                            <label  className={loginStyles.inputlabel}>
                                Password
                                <input aria-label="Password" aria-required="true" name="password" onChange={handleChange} className={loginStyles.inputbox}  type={showpassword?"text":"password"}/>
                            </label>
                            <div style={{display:"flex",flexDirection:"row",fontSize:12,marginTop:"16px"}}>
                                <input  type="checkbox" id="showpass" onChange={()=>togglepassword(!showpassword)} name="Show password" value={showpassword} />
                                <label fdr="showpass">Show password</label>
                            </div>
                            {errors.password&& <p className={loginStyles.inputerror}>{errors.password}</p>}
                            <button disabled={errors.email ||errors.password||!inputs.password||!inputs.email} 
                            className={loginStyles.submitbutton}>Log In</button>
                        {/* </fieldset> */}{userNotRegistered&&<p>User not found .Please Sign up</p>}
                    </form>
                </div>
            </div>

        </PageLayout>
        )
    }
export default Login