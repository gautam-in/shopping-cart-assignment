import { useState } from "react";
import Button from "../../../common/components/atoms/Button";
import Input from "../../../common/components/atoms/Input";
import { useDispatchStore } from "../../../common/context/contextProvider";
import useLocalStorage from "../../../common/hooks/AuthHooks";
import { useRouter } from "next/router";

export default function SignIn(props) {
  const [checkLogin, registerUser] = useLocalStorage();
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { cartState, dispatch } = useDispatchStore();

  const handleLogin = async (e) => {
    e.preventDefault();
    const userobj = checkLogin({ email, password });

    if (userobj) {
      if (userobj) {
        if (userobj.message) {
          alert(userobj.message);
        } else {
          await dispatch({ type: "USER", payload: { user: userobj } });
          router.push(`/`);
        }
      }
    }
  };
  return (
    <>
      <form onSubmit={handleLogin}>
        <Input
          type="email"
          required
          data-testid="email-signin-input"
          name="email"
          value={email}
          onChange={setEmail}
        />
        <Input
          type="password"
          name="password"
          value={password}
          required
          onChange={setPassword}
        />
        <Button type="submit">Login</Button>
      </form>
    </>
  );
}
