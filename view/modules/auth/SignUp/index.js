import { useState } from "react";
import Button from "../../../common/components/atoms/Button";
import Input from "../../../common/components/atoms/Input";
import useLocalStorage from "../../../common/hooks/AuthHooks";
import { useRouter } from "next/router";
import { useDispatchStore } from "../../../common/context/contextProvider";

export default function SignUp(props) {
  const router = useRouter();
  const [checkLogin, registerUser] = useLocalStorage();
  const { cartState, dispatch } = useDispatchStore();

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
          name="First Name"
          value={firstname}
          required
          onChange={setFirstname}
        />
        <Input
          type="text"
          name="Last Name"
          value={lastname}
          required
          onChange={setLastname}
        />
        <Input
          type="email"
          data-testid="email-signup-input"
          name="email"
          value={email}
          onChange={setEmail}
        />
        <Input
          type="password"
          name="Password"
          value={password}
          required
          onChange={setPassword}
        />
        <Input
          type="password"
          name="Confirm Password"
          value={confirmpassword}
          required
          onChange={setConfirmpassword}
        />
        <Button type="submit">Signup</Button>
      </form>
    </>
  );
}
