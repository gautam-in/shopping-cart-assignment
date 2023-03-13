import Login from "@/app/components/login/Login";
import React from "react";
import Layout from "../Layout";
import { useSession, signIn, signOut } from "next-auth/react";

function index() {
  const { data: session, status } = useSession();
  return (
    <>
      <Layout childComponent={<Login />} />
    </>
  );
}

export default index;
