import { useForm } from "react-hook-form";
import React, { useState } from 'react';
import { useRouter } from 'next/router'
import { Row, Col, Button } from 'reactstrap';
import EmailInput from "../../molecules/FormInput/EmailInput"
import PasswordInput from "../../molecules/FormInput/PasswordInput"
import { connect } from 'react-redux';
import { loginProcess } from "../../../redux_store/user/actions"

// Redux State Configutration
const mapStateToProps = state => {
   return {
      user_store: state.user,
   }
}

// for functional components we need to write mapDispatchToProps this way
const mapDispatchToProps = dispatch => ({
   loginProcess: (email) => loginProcess(email)(dispatch),
});

const LoginForm = ({ user_store, loginProcess}) => {
   const router = useRouter()
   const INPROGRESS = 1
   const FAILED = -1
   const OK = 0
   const RESET = 2
   const [loginState, setLoginState] = useState(RESET);
   const [loginStateMessage, setLoginStateMessage] = useState('');

   const onSubmit = (data) => {
      setLoginState(INPROGRESS)
      setLoginStateMessage('login...')
      let found = false
      user_store.registeredUser.map((u) => {
         if (u.equals(data.email, data.password)) {
            found = true
         }
      })
      if (!found) {
         setLoginState(FAILED)
         setLoginStateMessage('Credential not found')
      } else {
         loginProcess(data.email)
         setLoginState(OK)
         setLoginStateMessage(`logged in successfully`)
         // // TODO push route to /
         router.push('/')
      }
   }
   const { register, handleSubmit, formState: { errors }, watch } = useForm();
   return (
      <form onSubmit={handleSubmit(onSubmit)}>
      <Row>
            <Col md={9} className="mt-4">
               <EmailInput name="email"
                  label="Email"
                  register={register}
                  watch={watch}
                  className="inputAnimation"
                  errors={errors} required />

            </Col>
            <Col md={9} className="mt-4">
               <PasswordInput name="password"
                  label="Password"
                  register={register}
                  watch={watch}
                  className="inputAnimation"
                  errors={errors} required />
            </Col>
            <Col md={9} className="mt-4">
               <span className={loginState == FAILED ? "text-danger" : (loginState == OK ? "text-success" : "text-muted")}>
                  {loginStateMessage}
               </span>
            </Col>
            <Col md={12} className="mt-4">
               <Button type="submit" className="w-75 btn-secondary" onClick={(e) => {
                  setLoginState(RESET)
                  setLoginStateMessage('')
               }}>Login</Button>
            </Col>
         </Row>
      </form>
   )
}
export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);