import { useForm } from "react-hook-form";
import { Row, Col, Button } from 'reactstrap';
import EmailInput from "../../molecules/FormInput/EmailInput"
import PasswordInput from "../../molecules/FormInput/PasswordInput"




const LoginForm = () => {
   const onSubmit = (data) => {
      console.log("onSubmit",data)
   }
   const { register, handleSubmit, formState: { errors } } = useForm();
   return (
      <Row>
         <form onSubmit={handleSubmit(onSubmit)}>
            <Col md={9} className="mt-4">
               <EmailInput name="email"
                  label="Email"
                  register={register}
                  className="inputAnimation"
                  errors={errors} required/>

            </Col>
            <Col md={9} className="mt-4">
               <PasswordInput name="password"
                  label="Password"
                  register={register}
                  className="inputAnimation"
                  errors={errors} required/>
            </Col>
            <Col md={12} className="mt-4">
               <Button type="submit" className="w-75 btn-secondary" >Login</Button>
            </Col>
         </form>
      </Row>
   )
}

export default LoginForm;