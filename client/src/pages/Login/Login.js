import { useEffect, useContext } from "react";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";
import Styled from 'styled-components';
import Layout from "../../layout/Layout";
import LoginComponent from "../../containers/Login/Login"
import H1 from "../../components/Typography/H1"
import P from "../../components/Typography/P"
import AuthContext from "../../store/Auth/Context";


const LoginStyle = Styled.div`
    display: flex;
    justify-content: space-evenly;
`
const LoginContentSection = Styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
`

function LoginPage() {

  const history = useHistory();
  const authContext = useContext(AuthContext);

  const { authenticationSucess, isAuthenticated } = authContext;

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm({
    reValidateMode: "onChange",
    mode: "onBlur",
    defaultValues: {
      email:"user@gmail.com",
      password:"Pass@123"
    }
  });

  useEffect(() => {
    if(isAuthenticated){
      history.push('/')
    }
  },[isAuthenticated])

  const onSubmit = (data) => {
    authenticationSucess(data)
    reset();
  };

  return (
    <Layout>
      <LoginStyle>
          <LoginContentSection>
              <H1 fontSize="2em">Login</H1>
              <P bold="400" margin="20px 0 0 0">Get acess to your Orders,Wishlist and Recommendations</P>
          </LoginContentSection>
          <LoginComponent register={register} handleSubmit={handleSubmit} onSubmit={onSubmit} errors={errors}/>
      </LoginStyle>
    </Layout>
  )
}

export default LoginPage;