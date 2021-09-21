/* eslint-disable react/prop-types */
import React, { useMemo, useState, useEffect } from "react";
import { useHistory } from "react-router";
import Login from "../Pages/Login/Login";

const RequireAuth = (props) => {
  const history = useHistory();
  const { Component } = props;
  const userDetails = localStorage.getItem("user") || "";
  const [state, setState] = useState({
    auth: userDetails,
  });

  useEffect(() => {
    checkAuth();
  }, []);

  const MemorizedComp = useMemo(() => {
    return Component;
  }, [Component]);

  const checkAuth = () => {
    const userData = localStorage.getItem("user") || "";
    setState({ auth: userData });
    if (!userData) {
      history.push("/login");
    }
  };

  return state.auth ? <MemorizedComp /> : <Login />;
};

export default RequireAuth;
