import { useEffect, useContext, Fragment,memo } from "react";
import { useHistory } from "react-router-dom";
import Styled from "styled-components";
import SEO from "../../seo/SEO";
import RegisterComponent from "../../containers/Register/Register";
import H1 from "../../components/Typography/H1";
import P from "../../components/Typography/P";
import AuthContext from "../../store/Auth/Context";
import { ROUTES,TRANSLATIONS } from '../../constants';

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

  useEffect(() => {
    if(isAuthenticated){
      history.push(ROUTES.HOME)
    }
  },[isAuthenticated])

  return (
    <Fragment>
    <SEO title="Register | Sabka Bazaar" content="Sabka Bazaar is a online grocery platform, where you can buy in a affordable rate" link={ROUTES.REGISTER}/>
      <RegisterStyle>
        <RegisterContentSection>
          <H1 fontSize="2em">{TRANSLATIONS.REGISTER.SIGNUP}</H1>
          <P bold="400" margin="20px 0 0 0">
          {TRANSLATIONS.REGISTER.DESC}
          </P>
        </RegisterContentSection>
        <RegisterComponent authenticationSucess={authenticationSucess}/>
      </RegisterStyle>
    </Fragment>
  );
}

export default Register;
