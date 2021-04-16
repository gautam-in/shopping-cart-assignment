import React from "react";
import HeaderLogo from "../atoms/HeaderLogo";
import NavigationLinks from "../molecules/NavigationLinks";
import CartButton from "../molecules/CartButton";
import EntryAccessButton from "../atoms/EntryAccessButton";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header
      style={{
        display: "flex",
        width: "80%",
        margin: "0 auto",
      }}
    >
      <HeaderLogo />

      <EntryAccessButton linkTo="/login">SignIn</EntryAccessButton>
      <EntryAccessButton linkTo="/register">Register</EntryAccessButton>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          width: "100%",
        }}
      >
        <NavigationLinks />
        <CartButton />
      </div>
    </header>
  );
  /* return (
    <header
      style={{
        display: "flex",
        width: "80%",
        margin: "0 auto",
      }}
    >
      <HeaderLogo />

      <EntryAccessButton linkTo="/login">SignIn</EntryAccessButton>
      <EntryAccessButton linkTo="/register">Register</EntryAccessButton>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          width: "100%",
        }}
      >
        <NavigationLinks />
        <CartButton />
      </div>
    </header>
  ); */
}

export default Header;
