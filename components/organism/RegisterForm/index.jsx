import { useRef } from "react"
import { useForm } from "react-hook-form";
import { useState } from 'react';
import { connect } from 'react-redux';

import { Row, Col, Button } from 'reactstrap';

import EmailInput from "../../molecules/FormInput/EmailInput"
import PasswordInput from "../../molecules/FormInput/PasswordInput"
import TextInput from "../../molecules/FormInput/TextInput"

import { registerProcess } from "../../../redux_store/user/actions"

// Redux State Configutration
const mapStateToProps = state => {
   return {
      user_store: state.user,
   }
}

// for functional components we need to write mapDispatchToProps this way
const mapDispatchToProps = dispatch => ({
   registerProcess: (firstname, lastname, email, password) => registerProcess(firstname, lastname, email, password)(dispatch),
});



const RegisterForm = ({ user_store, registerProcess }) => {
   // Registration state management
   const INPROGRESS = 1
   const FAILED = -1
   const OK = 0
   const RESET = 2
   const [registrationState, setRegistrationState] = useState(RESET);
   const [registrationStateMessage, setRegistrationStateMessage] = useState('');
   const msgEmailError = 'Email already registered'

   const isEmailAvailable = (email) => {
      let found = false
      user_store.registeredUser.map((u) => {
         if (u.email == email) {
            found = true
         }
      })
      return found
   }

   const onSubmit = (data) => {
      setRegistrationState(INPROGRESS)
      setRegistrationStateMessage('registering...')
      let found = isEmailAvailable(data.email)
      if (found) {
         setRegistrationState(FAILED)
         setRegistrationStateMessage(msgEmailError)
      } else {
         registerProcess(data.firstname, data.lastname, data.email, data.password)
         setRegistrationState(OK)
         setRegistrationStateMessage(`Registered successfully`)
      }
   }
   const { register, handleSubmit, formState: { errors }, watch } = useForm();
   // Confirm password code-snippet - start
   const password = useRef({});
   password.current = watch("password", "");
   // Confirm password code-snippet-end
   return (

      <form onSubmit={handleSubmit(onSubmit)}>
         <Row>
            <Col md={9} className="mt-4">
               <TextInput name="firstname"
                  label="First Name"
                  register={register}
                  className="inputAnimation"
                  errors={errors}
                  required="First Name is required" />
            </Col>
            <Col md={9} className="mt-4">
               <TextInput name="lastname"
                  label="Last Name"
                  register={register}
                  className="inputAnimation"
                  errors={errors}
                  required />
            </Col>
            <Col md={9} className="mt-4">
               <EmailInput name="email"
                  label="Email"
                  register={register}
                  className="inputAnimation"
                  errors={errors}
                  rules={{ validate: (email) => isEmailAvailable(email) ? msgEmailError : true }}
                  required />
            </Col>
            <Col md={9} className="mt-4">
               <PasswordInput name="password"
                  label="Password"
                  register={register}
                  className="inputAnimation"
                  errors={errors}
                  required />
            </Col>
            <Col md={9} className="mt-4">
               <PasswordInput name="confirm_password"
                  label="Confirm Password"
                  register={register}
                  className="inputAnimation"
                  errors={errors}
                  match={password} />
            </Col>
            <Col md={9} className="mt-4">
               <span className={registrationState == FAILED ? "text-danger" : (registrationState == OK ? "text-success" : "text-muted")}>
                  {registrationStateMessage}
               </span>
            </Col>
            <Col md={12} className="mt-4">
               <Button type="submit" className="w-75 btn-secondary" onClick={(e) => {
                  setRegistrationState(RESET)
                  setRegistrationStateMessage('')
               } }>Signup</Button>
            </Col>
         </Row>
      </form>
   )
}

export default connect(mapStateToProps, mapDispatchToProps)(RegisterForm);