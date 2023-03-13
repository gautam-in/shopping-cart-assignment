import React from "react";
import Layout from "../Layout";
import { useSession, signIn, signOut } from "next-auth/react";
import CartModal from "@/app/components/cart/CartModal";

function index() {
  const { data: session, status } = useSession();
  return (
    <>
      <Layout childComponent={<CartModal />} />
    </>
  );
}

export default index;
