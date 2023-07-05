import React from "react";
import classes from "./authNavigation.module.scss";
import { useUser } from "../../context/auth";
import { NavLink } from "react-router-dom";

function AuthNavigation() {
  const { user, logout } = useUser();
  return (
    <nav className={classes.secondaryNav}>
      <ul className={classes.navlist}>
        {!user ? (
          <>
            <li>
              <NavLink to="/login">Sign in</NavLink>
            </li>
            <li>
              <NavLink to="/register">Register</NavLink>
            </li>
          </>
        ) : (
          <li>
            <NavLink to="/login" onClick={logout}>
              Logout
            </NavLink>
          </li>
        )}
      </ul>
    </nav>
  );
}

export default AuthNavigation;
