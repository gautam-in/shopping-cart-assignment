import { Wrapper, Container, SignupInfo, Title, SubTitle } from "./styled";
import SignupForm from "../../components/SignupForm";

export default function SignupPage() {
  return (
    <Wrapper>
      <Container>
        <SignupInfo>
          <Title>Sign Up</Title>
          <SubTitle>
            Get access to your Orders, Wishlist and Recommendations
          </SubTitle>
        </SignupInfo>
        <SignupForm />
      </Container>
    </Wrapper>
  );
}
