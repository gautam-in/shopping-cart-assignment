import  Router  from 'next/router'
import React, { useState } from 'react'
import useForm from '../../../utils/lib/useForm'
import FormStaticContent from '../../molecules/Form/FormStaticContent'
import PageLayout from '../../organism/layout/PageLayout'
import styles from './login.module.scss'
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
        console.log(e,"e");
            e.preventDefault()
            let isUserRegistered = props?.userReducer?.registeredUsers.findIndex(email => email === inputs.email);
            console.log(isUserRegistered,"isUserRegistered");
            if (isUserRegistered >= 0) {
            await props.actions.logIn(inputs.email);
            return  Router.push({pathname:"/"})
            }
           return checkUserRegistered(true)
        }
        return(
            <PageLayout>
            <div className="empty"/>
            <div className={styles.formcontent}>
                <FormStaticContent heading="Login" description="Get access to your Orders,Wishlist and Recomendations" />
                <div className={styles.main}>
                    <Form 
                        submit={signIn}
                        buttonStyle={styles.submitbutton}
                        buttonText="Log In"
                        disabled={errors.email ||errors.password||!inputs.password||!inputs.email}
                        formStyle={styles.formrightcontent}>

                            <Input 
                                labelName="Email" 
                                name="email" 
                                lablestyle={styles.inputlabel} 
                                inputStyle={styles.inputbox} 
                                type="email" 
                                handleChange={handleChange}
                                errorMessage={errors.email} />
                        
                            <Input 
                                labelName="Password" 
                                name="password" 
                                lablestyle={styles.inputlabel} 
                                inputStyle={styles.inputbox} 
                                type={showpassword?"text":"password"}
                                handleChange={handleChange}
                                errorMessage={errors.password} />
                            <Checkbox toggle={()=>togglepassword(!showpassword)} name="Show password" value={showpassword} />
                        {userNotRegistered&&<ErrorMessage text="User not found .Please Sign up" />}
                    </Form>
                
                </div>
            </div>

        </PageLayout>
        )
    }
export default Login