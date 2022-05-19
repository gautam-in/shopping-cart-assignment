import { useState } from 'react';
import FormGroup from '../../Components/FormGroup/FormGroup.component';
import {SignInContainer,SignInMetaContainer,SignInHeading,SignInMetaData,SignInFormContainer,SignInForm} from './SignIn.styles';
import {AppButton} from '../../Components/Buttons/Buttons.styles';
const SignIn = props =>{

    const [fields,setFields] = useState({
        email:'',
        password:'',
    }); 

    const handleChange = (event) => {
        const {name,value} = event.target;
        setFields(state => ({...state , [name]:value}))
    }

    return (
        <SignInContainer>
            <SignInMetaContainer>
                <SignInHeading>Login</SignInHeading>
                <SignInMetaData>Get access to your orders ,wishlists and Recommendations</SignInMetaData>
            </SignInMetaContainer>

            <SignInFormContainer>
                <SignInForm onSubmit={(ev) => {ev.preventDefault();console.log(fields)}}>

                    <FormGroup type="text" name="email" onChange={handleChange} 
                    value={fields.email} id="email" text="Email"/>

                    <FormGroup type="password" name="password" onChange={handleChange} 
                    value={fields.password} id="password" text="Password"/>

                    <AppButton type="submit" name="submit" >Submit</AppButton>
                </SignInForm>
            </SignInFormContainer>
            
        </SignInContainer>
    )
};


export default SignIn;