import React, { useState } from "react";
import Button from "../ui/Button";
import Input from "../ui/Input";
import { useStore, useDispatchStore } from "../../public/store";
import useLocalStorage from "./LoginHooks";
import { useRouter } from "next/router";

export default function Loginview(props) {
  const [checkLogin, registerUser] = useLocalStorage();
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatchStore();

  const handleLogin = async (e) => {
    e.preventDefault();
    const userobj = checkLogin({ email, password });
    if (userobj) {
      if (userobj) {
        await dispatch({ type: "USER", payload: { user: userobj } });
        router.push(`/`);
      }
    }
  };
  return (
    <>
      <form onSubmit={handleLogin}>
        <Input type="email" name="email" value={email} onChange={setEmail} />
        <Input
          type="password"
          name="password"
          value={password}
          onChange={setPassword}
        />
        <Button type="submit">Login</Button>
      </form>
    </>
  );
}
