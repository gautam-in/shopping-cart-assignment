import { useSelector } from "react-redux";
import { ErrorStyleMain } from "../styles/ErrorStyle";
import { Container } from "../styles/GlobalStyle";

export default function ErrorComponent({ errorMessage }) {
  return (
    <Container>
      <ErrorStyleMain>
        <div className="error">
          <h5>{useSelector((state) => state.error.errorMessage.message)}</h5>
          <h5>{errorMessage}</h5>
        </div>
      </ErrorStyleMain>
    </Container>
  );
}
