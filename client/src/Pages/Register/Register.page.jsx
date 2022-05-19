import { useState } from 'react';
import FormGroup from '../../Components/FormGroup/FormGroup.component';
import {RegisterContainer,RegisterMetaContainer,RegisterHeading,RegisterMetaData,RegisterFormContainer,RegisterForm} from './register.styles.jsx';
import { AppButton } from '../../Components/Buttons/Buttons.styles';

const Register = props =>{

    const [fields,setFields] = useState({
        firstName:'',
        lastName:'',
        email:'',
        password:'',
        confirmPassword:''
    }); 

    const handleChange = (event) => {
        const {name,value} = event.target;
        setFields(state => ({...state , [name]:value}))
    }

    return (
        // <div>

        <RegisterContainer>
                    <RegisterMetaContainer>
                        <RegisterHeading>Signup</RegisterHeading>
                        <RegisterMetaData>We do not share your personal details with anyone.</RegisterMetaData>
                    </RegisterMetaContainer>

                    <RegisterFormContainer>
                        <RegisterForm onSubmit={(ev) => {ev.preventDefault();console.log(fields)}}>

                            <FormGroup type="text" name="firstName" onChange={handleChange} 
                            value={fields.firstName} id="firstName" text="First Name"/>
                            
                            <FormGroup type="text" name="lastName" onChange={handleChange} 
                            value={fields.lastName} id="lastName" text="Last Name"/>

                            <FormGroup type="text" name="email" onChange={handleChange} 
                            value={fields.email} id="email" text="Email"/>

                            <FormGroup type="password" name="password" onChange={handleChange} 
                            value={fields.password} id="password" text="Password"/>

                            <FormGroup type="password" name="confirmPassword" onChange={handleChange} 
                            value={fields.confirmPassword} id="confirmPassword" text="Confirm Password"/>

                            <AppButton type="submit" name="submit" >Submit</AppButton>

                        </RegisterForm>
                    </RegisterFormContainer>
                    
                </RegisterContainer>
        // </div>
    )
};

export default Register;