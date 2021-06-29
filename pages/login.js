import { useRouter } from "next/router";
import { useDispatch } from "react-redux";
import {SIGN_IN} from "../redux/actions/Constant"
import SignUpHeader from "../components/SIgnUpHeader";
import SignUpStyle from "../components/styles/SignupStyle";
import CustomFormStyle from "../components/styles/FormStyle"
import InputBox from "../components/Input"
import { useFormik } from "formik";
import ButtonStyles from "../components/styles/ButtonStyles";
import {loginValidation} from '../Utils/Validation'

export default function LoginPage() {
    const router = useRouter();
    const dispatch = useDispatch()

    const initialValues = {
      email:"",
      password:"", 
    }

    const onSubmit = (formData) =>{
      dispatch({type: SIGN_IN, payload:formData});
      router.push("/");
    }
    const formik = useFormik({
      enableReinitialize: true,
      initialValues,
      onSubmit,
      validationSchema: () => loginValidation()
    })
   
    const header = "Login";
    const description = "Get aceces to your Orders, Wishlist and Recommendations.";
      
  return (
    <SignUpStyle>
      <SignUpHeader header={header} description={description} />
      <CustomFormStyle onSubmit={formik.handleSubmit}>
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
        <ButtonStyles type="submit"  className="Btn" >Login</ButtonStyles>
      </CustomFormStyle>
    </SignUpStyle>
  );  
}
