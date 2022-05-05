import Styled from 'styled-components';
import Layout from "../../layout/Layout";
import LoginComponent from "../../containers/Login/Login"
import H1 from "../../components/Typography/H1"
import H5 from "../../components/Typography/H5"

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
  return (
    <Layout>
      <LoginStyle>
          <LoginContentSection>
              <H1 fontSize="2em">Login</H1>
              <H5 bold="400" margin="20px 0 0 0">Get acess to your Orders,Wishlist and Recommendations</H5>
          </LoginContentSection>
          <LoginComponent/>
      </LoginStyle>
    </Layout>
  )
}

export default LoginPage;