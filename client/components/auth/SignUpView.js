import React, { useState } from "react";
import Button from "../ui/Button";
import Input from "../ui/Input";
import useLocalStorage from "./LoginHooks";
import { useRouter } from "next/router";
import { useStore, useDispatchStore } from "../../public/store";

export default function SignUpView(props) {
  const router = useRouter();
  const [checkLogin, registerUser] = useLocalStorage();
  const dispatch = useDispatchStore();

  const handleLogin = async (e) => {
    e.preventDefault();
    if (password !== confirmpassword) {
      alert("Password doesn't match");
      return;
    }
    const userobj = await registerUser({
      fname: firstname,
      lname: lastname,
      email,
      password,
      confirmpassword,
    });
    if (userobj?.message) {
      alert(userobj?.message);
      return;
    }
    await dispatch({ type: "USER", payload: { user: userobj } });
    router.push(`/`);
  };
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmpassword, setConfirmpassword] = useState("");
  return (
    <>
      <form onSubmit={handleLogin} action="" method="post">
        <Input
          type="text"
          name="firstname"
          value={firstname}
          required
          onChange={setFirstname}
        />
        <Input
          type="text"
          name="lastname"
          value={lastname}
          required
          onChange={setLastname}
        />
        <Input type="email" name="email" value={email} onChange={setEmail} />
        <Input
          name="password"
          type="password"
          value={password}
          required
          onChange={setPassword}
        />
        <Input
          type="password"
          name="confirmpassword"
          value={confirmpassword}
          required
          onChange={setConfirmpassword}
        />
        <Button type="submit">Signup</Button>
      </form>
    </>
  );
}
