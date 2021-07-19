import { Wrapper, StyledLink } from "./styled";
import Link from "next/link";

export default function AuthLinks() {
  return (
    <Wrapper>
      <Link href="/signin">
        <StyledLink>SignIn</StyledLink>
      </Link>
      <Link href="/register">
        <StyledLink>Register</StyledLink>
      </Link>
    </Wrapper>
  );
}
