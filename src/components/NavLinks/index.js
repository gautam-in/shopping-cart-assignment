import React from "react";
import { Wrapper, StyledLink } from "./styled";
import Link from "next/link";

export default function StyledLinks() {
  return (
    <Wrapper>
      <Link href="/">
        <StyledLink>Home</StyledLink>
      </Link>
      <Link href="/products">
        <StyledLink>Products</StyledLink>
      </Link>
    </Wrapper>
  );
}
