import React, { useState } from 'react'
import useForm from '../../../utils/lib/useForm'
import FormStaticContent from '../../molecules/Form/FormStaticContent'
import PageLayout from '../../organism/layout/PageLayout'
import loginStyles from '../login/login.module.scss'
import Form from '../../molecules/Form/Form'
import Input from '../../atoms/Input/Input'
import Checkbox from '../../atoms/Input/Checkbox'
import SuccessMessage from '../../atoms/Text/SuccessMessage'
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
        let isUserRegistered = props?.userReducer?.registeredUsers.findIndex(email => email === inputs.email); 

        if (isUserRegistered >= 0) {
            checkUserRegistered("User Already registered")
            return null;
        }
            checkUserRegistered(`Account created with the email ${inputs.email}.${'\n'}Please login`);
            clearForm()
            return props.actions.registerUser(inputs);
    }
        return(
            <PageLayout>
            <div className="empty" />
            <div className={loginStyles.formcontent}>
                <FormStaticContent styles={loginStyles} heading="Signup" description="We do not share your personal details with anyone" />
                <div style={{flex:1}}>
                <Form
                    submit={UserSignUp}
                    buttonStyle={loginStyles.submitbutton}
                    buttonText="Sign Up"
                    disabled={!isValid()}
                    formStyle={loginStyles.formrightcontent}>

                            <Input 
                                labelName="First name" 
                                name="first_name" 
                                lablestyle={loginStyles.inputlabel} 
                                inputStyle={loginStyles.inputbox} 
                                type="name" 
                                handleChange={handleChange}
                                errorMessage={errors.first_name} />

                            <Input 
                                labelName="Last name" 
                                name="last_name" 
                                lablestyle={loginStyles.inputlabel} 
                                inputStyle={loginStyles.inputbox} 
                                type="name" 
                                handleChange={handleChange}
                                errorMessage={errors.last_name} />

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

                            <Input 
                                labelName="Confirm password" 
                                name="confirm_password" 
                                lablestyle={loginStyles.inputlabel} 
                                inputStyle={loginStyles.inputbox} 
                                type={showpassword?"text":"password"}
                                handleChange={handleChange}
                                errorMessage={errors.confirm_password} />

                        <Checkbox toggle={()=>togglepassword(!showpassword)} name="Show password" value={showpassword} />
                    </Form>
                    {userRegistered &&<SuccessMessage text={userRegistered}/>}
                </div>
            </div>

            </PageLayout>
        )
    }
export default Register