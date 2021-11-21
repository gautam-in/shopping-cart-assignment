import userForm from "../../customHooks/UserForm";
import { LoginInfoContainer , LoginForm, FormWrapper} from "../../components/styles/Form";
import { useDispatch } from 'react-redux';
import { useRouter } from 'next/router';
import { connect } from "react-redux";
import { useState } from "react";
import {ErrorMessage, SuccessMessage} from "../../components/Error";
import { addUserOnRegister } from "../../store/actions/usersAction";

const Register = ({success, message}) => {
     const { inputs, onHandleChange , clearInputs } = userForm({}) 
     const dispatch = useDispatch();

     console.log(success, message)

     const onSubmitHandler = (e) => {
        e.preventDefault();
        console.log(inputs)
        if(inputs.password === inputs.confirmPassword) {
            dispatch(addUserOnRegister(inputs))
        }
        console.log(success, message)
        clearInputs();
     }

     return (
         <>
             {success && <SuccessMessage>
                            <h3> { message} </h3>
                        </SuccessMessage> } 
            <FormWrapper>
                <LoginInfoContainer>
                    <h2> Signup </h2>
                    <p> We do not share your details with anyone!</p>
                </LoginInfoContainer>
                <LoginForm onSubmit={onSubmitHandler}>
                <input type="text" name="firstName" placeholder="First Name" value={inputs.firstName} onChange={onHandleChange}/>
                <input type="text" name="lastName" placeholder="Last Name" value={inputs.lastName} onChange={onHandleChange}/>
                <input type="text" name="email" placeholder="Email" value={inputs.email} onChange={onHandleChange}/>
                    <input type="password" name="password" placeholder="Password" value={inputs.password} onChange={onHandleChange}/>
                    <input type="password" name="confirmPassword" placeholder="Confirm Password" value={inputs.confirmPassword} onChange={onHandleChange}/>
                    <button type="submit">SIGN UP</button>
                </LoginForm>
            </FormWrapper>
         </>
     )
}

const mapStateToProps = (state) => ({
    success : state.users.success,
    message : state.users.message
})
  
export default connect(mapStateToProps, null)(Register)