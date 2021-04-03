import  Router  from 'next/router'
import React, { useState } from 'react'
import useForm from '../../../utils/lib/useForm'
import FormStaticContent from '../../molecules/Form/FormStaticContent'
import PageLayout from '../../organism/PageLayout'
import loginStyles from '../../../styles/login.module.scss'
import Input from '../../atoms/Input/Input'
import Form from '../../molecules/Form/Form'
import ErrorMessage from '../../atoms/Text/ErrorMessage'
import Checkbox from '../../atoms/Input/Checkbox'

function Login(props) {
    const {inputs,handleChange,errors} = useForm({
    email:'',
    password:''
    })
    
    const [userNotRegistered,checkUserRegistered] = useState(false)
    const [showpassword,togglepassword] = useState(false)

    async function signIn(e) {
            e.preventDefault()
            let isUserRegistered = props?.userReducer?.registeredUsers.findIndex(email => email === inputs.email);
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
                <FormStaticContent styles={loginStyles} heading="Login" description="Get access to your Orders,Wishlist and Recomendations" />
                <div style={{flex:1}}>
                    <Form 
                        submit={signIn}
                        buttonStyle={loginStyles.submitbutton}
                        buttonText="Log In"
                        disabled={errors.email ||errors.password||!inputs.password||!inputs.email}
                        formStyle={loginStyles.formrightcontent}>

                            <Input 
                                labelName="Email" 
                                name="email" 
                                lablestyle={loginStyles.inputlabel} 
                                inputStyle={loginStyles.inputbox} 
                                type="email" 
                                handleChange={handleChange}
                                errorMessage={errors.email} />
                        
                            <Input 
                                labelName="Password" 
                                name="password" 
                                lablestyle={loginStyles.inputlabel} 
                                inputStyle={loginStyles.inputbox} 
                                type={showpassword?"text":"password"}
                                handleChange={handleChange}
                                errorMessage={errors.password} />
                            <Checkbox toggle={()=>togglepassword(!showpassword)} name="Show password" value={showpassword} />
                        {userNotRegistered&&<ErrorMessage>User not found .Please Sign up</ErrorMessage>}
                    </Form>
                
                </div>
            </div>

        </PageLayout>
        )
    }
export default Login