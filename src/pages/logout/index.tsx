import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { authAction, isUserLoggedInState } from "../../store/auth-slice";
import { useRouter } from "next/router";

function index() {
  const dispatcher = useDispatch();
  dispatcher(authAction.setLoginState(false));
  const router = useRouter();
  useEffect(() => {
    console.log("Signout ");
    router.push("/login");
  }, []);
}

export default index;
