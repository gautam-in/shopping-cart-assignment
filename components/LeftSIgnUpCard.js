import LeftSignUpCardStyle from "./styles/LeftSignUpCardStyle";
export default function LeftSignUpCard({ header, description }) {
  return (
    <LeftSignUpCardStyle>
      <h1>{header}</h1>
      <p>{description}</p>
    </LeftSignUpCardStyle>
  );
}
