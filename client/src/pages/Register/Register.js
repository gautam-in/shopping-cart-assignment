import Styled from "styled-components";
import Layout from "../../layout/Layout";
import RegisterComponent from "../../containers/Register/Register";
import H1 from "../../components/Typography/H1";
import H5 from "../../components/Typography/H5";

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
  return (
    <Layout>
      <RegisterStyle>
        <RegisterContentSection>
          <H1 fontSize="2em">Signup</H1>
          <H5 bold="400" margin="20px 0 0 0">
            We do not share your personal details with anyone
          </H5>
        </RegisterContentSection>
        <RegisterComponent />
      </RegisterStyle>
    </Layout>
  );
}

export default Register;
