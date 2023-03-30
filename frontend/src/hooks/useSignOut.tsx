import React from "react";

// @ts-ignore
import fakeAuth from "fake-auth";
import useAuthStore from "@/store/authStore";
import useCartStore from "@/store/cartStore";
import { useRouter } from "next/router";

const useSignOut = () => {
  const { clearCart } = useCartStore();
  const { clerUser } = useAuthStore();
  const { push } = useRouter();
  const signOut = async () => {
    fakeAuth.signout().then(() => {
      clearCart();
      clerUser();
      push("/login");
    });
  };
  return { signOut };
};

export default useSignOut;
