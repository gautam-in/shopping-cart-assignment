import { useEffect, useContext } from "react";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";
import Styled from "styled-components";
import Layout from "../../layout/Layout";
import RegisterComponent from "../../containers/Register/Register";
import H1 from "../../components/Typography/H1";
import H5 from "../../components/Typography/H5";
import AuthContext from "../../store/Auth/Context";

const RegisterStyle = Styled.div`
    display: flex;
    justify-content: space-evenly;
`;
const RegisterContentSection = Styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 60px;
`;

function Register() {

  const history = useHistory();
  const authContext = useContext(AuthContext);

  const { authenticationSucess, isAuthenticated } = authContext;

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    watch
  } = useForm({
    reValidateMode: "onChange",
    mode: "onBlur"
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
      <RegisterStyle>
        <RegisterContentSection>
          <H1 fontSize="2em">Signup</H1>
          <H5 bold="400" margin="20px 0 0 0">
            We do not share your personal details with anyone
          </H5>
        </RegisterContentSection>
        <RegisterComponent register={register} handleSubmit={handleSubmit} onSubmit={onSubmit} errors={errors} watch={watch}/>
      </RegisterStyle>
    </Layout>
  );
}

export default Register;
