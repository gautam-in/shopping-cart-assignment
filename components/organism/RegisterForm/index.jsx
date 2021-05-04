import { useRef } from "react"
import { useForm } from "react-hook-form";
import { Row, Col, Button } from 'reactstrap';
import EmailInput from "../../molecules/FormInput/EmailInput"
import PasswordInput from "../../molecules/FormInput/PasswordInput"
import TextInput from "../../molecules/FormInput/TextInput"


const RegisterForm = () => {
   const onSubmit = (data) => {
      console.log("onSubmit", data)
   }
   const { register, handleSubmit, formState: { errors }, watch } = useForm();
   // Confirm password code-snippet - start
   const password = useRef({});
   password.current = watch("password", "");
   // Confirm password code-snippet-end
   return (
      <Row>
         <form onSubmit={handleSubmit(onSubmit)}>
            <Col md={9} className="mt-4">
               <TextInput name="first_name"
                  label="First Name"
                  register={register}
                  className="inputAnimation"
                  errors={errors}
                  required="Firstname is required" />
            </Col>
            <Col md={9} className="mt-4">
               <TextInput name="last_name"
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
                  required/>
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
            <Col md={12} className="mt-4">
               <Button type="submit" className="w-75 btn-secondary">Signup</Button>
            </Col>
         </form>
      </Row>
   )
}

export default RegisterForm;