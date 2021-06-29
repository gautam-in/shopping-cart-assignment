import { useRouter } from "next/router";
import { useDispatch } from "react-redux";
import {SIGN_IN} from "../redux/actions/Constant"
import SignUpHeader from "../components/SIgnUpHeader";
import SignUpStyle from "../components/styles/SignupStyle";
import CustomFormStyle from "../components/styles/FormStyle"
import InputBox from "../components/Input"
import { useFormik } from "formik";
import ButtonStyles from "../components/styles/ButtonStyles";
import {RegisterValidation} from '../Utils/Validation'
export default function UserRegisterPage() {
  const router = useRouter();
  const dispatch = useDispatch()
  const initialValues = {
    firstname:"",
    lastname:"",
    email:"",
    password:"", 
    confirmPassword:""
  }
  const header = "Signup";
  const description = "We don not share your personal details with anyone.";
  const onSubmit = (formData) => {
    dispatch({type: SIGN_IN, payload:formData});
    router.push("/");
  };
  const formik = useFormik({
    enableReinitialize: true,
    initialValues,
    onSubmit,
    validationSchema: () => RegisterValidation()
  })
  return (
    <SignUpStyle>
      <SignUpHeader header={header} description={description} />
       <CustomFormStyle onSubmit={formik.handleSubmit}>
        <InputBox 
                  name="firstname"
                  type ="text"
                  label ="First Name"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.firstname}
                  error={formik.touched.firstname && formik.errors.firstname ?formik.errors.firstname:""}/>
        <InputBox 
                  name ="lastname"
                  type ="text"
                  label ="Last Name"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.lastname}
                  error={formik.touched.lastname && formik.errors.lastname ?formik.errors.lastname:""}
                  />
         <InputBox 
                  name="email"
                  type ="email"
                  label ="Email"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.email}
                  error={formik.touched.email && formik.errors.email ?formik.errors.email:""}/>
        <InputBox 
                  name ="password"
                  type ="password"
                  label ="Password"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.password}
                  error={formik.touched.password && formik.errors.password ?formik.errors.password:""}
                  />
         <InputBox 
                  name ="confirmPassword"
                  type ="password"
                  label ="Confirm Password"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.confirmPassword}
                  error={formik.touched.confirmPassword && formik.errors.confirmPassword ?formik.errors.confirmPassword:""}
                  />
        <ButtonStyles type="submit"  className="Btn" >Signup</ButtonStyles>
      </CustomFormStyle>
    </SignUpStyle>
  );
}
