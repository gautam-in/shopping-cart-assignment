import { useEffect, useContext, Fragment } from "react";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";
import SEO from "../../seo/SEO";
import Styled from "styled-components";
import LoginComponent from "../../containers/Login/Login";
import H1 from "../../components/Typography/H1";
import P from "../../components/Typography/P";
import AuthContext from "../../store/Auth/Context";
import { ROUTES,TRANSLATIONS } from '../../constants';

const LoginStyle = Styled.div`
    display: flex;
    justify-content: space-evenly;
    margin-top:60px;
    @media(max-width: 992px){
      align-items: center;
      justify-content: center;
      flex-direction: column;
    }
`;
const LoginContentSection = Styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    @media(max-width: 992px){
      width: 100%;
      text-align: center;
    }
`;

function LoginPage() {
  const history = useHistory();
  const authContext = useContext(AuthContext);

  const { authenticationSucess, isAuthenticated } = authContext;

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    reValidateMode: "onChange",
    mode: "onBlur",
    defaultValues: {
      email: "user@gmail.com",
      password: "Pass@123",
    },
  });

  useEffect(() => {
    if (isAuthenticated) {
      history.push(ROUTES.HOME);
    }
  }, [isAuthenticated]);

  const onSubmit = (data) => {
    authenticationSucess(data);
    reset();
  };

  return (
    <Fragment>
      <SEO title="Login | Sabka Bazaar" content="Sabka Bazaar is a online grocery platform, where you can buy in a affordable rate" link={ROUTES.LOGIN}/>
      <LoginStyle>
        <LoginContentSection>
          <H1 fontSize="2em">{TRANSLATIONS.LOGIN.LOGIN}</H1>
          <P bold="400" margin="20px 0 0 0">
            {TRANSLATIONS.LOGIN.DESC}
          </P>
        </LoginContentSection>
        <LoginComponent
          register={register}
          handleSubmit={handleSubmit}
          onSubmit={onSubmit}
          errors={errors}
        />
      </LoginStyle>
    </Fragment>
  );
}

export default LoginPage;
