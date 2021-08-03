/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import Nav from "../nav/Nav";
import classes from "./Header.module.css";

export default function Header({ children }) {
  return (
    <>
      <div className={classes.container}>
        <Link href="/">
          <img
            src="/static/images/logo.png"
            alt="logo"
            className={classes.logo}
          ></img>
        </Link>
        <Nav />
      </div>
      {children}
    </>
  );
}
