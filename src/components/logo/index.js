import Link from "next/link";
import React from "react";
import LogoIcon from "../icons/LogoIcon";

export const Logo = () => {
  return (
    <Link href="/">
      <LogoIcon src="/static/images/logo.png" width="100%" height="80" />
    </Link>
  );
};
