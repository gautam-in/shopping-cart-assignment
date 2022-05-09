import { useEffect, useContext, Fragment } from "react";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";
import Styled from "styled-components";
import SEO from "../../seo/SEO";
import RegisterComponent from "../../containers/Register/Register";
import H1 from "../../components/Typography/H1";
import H5 from "../../components/Typography/H5";
import AuthContext from "../../store/Auth/Context";

const RegisterStyle = Styled.div`
    display: flex;
    justify-content: space-evenly;
    margin-top:30px;
    @media(max-width: 992px){
      align-items: center;
      justify-content: center;
      flex-direction: column;
    }
`;
const RegisterContentSection = Styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    @media(max-width: 992px){
      width: 100%;
      text-align: center;
      margin-top:60px;
    }
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
    <Fragment>
    <SEO title="Register | Sabka Bazaar" content="Sabka Bazaar is a online grocery platform, where you can buy in a affordable rate" link="/register"/>
      <RegisterStyle>
        <RegisterContentSection>
          <H1 fontSize="2em">Signup</H1>
          <H5 bold="400" margin="20px 0 0 0">
            We do not share your personal details with anyone
          </H5>
        </RegisterContentSection>
        <RegisterComponent register={register} handleSubmit={handleSubmit} onSubmit={onSubmit} errors={errors} watch={watch}/>
      </RegisterStyle>
    </Fragment>
  );
}

export default Register;
