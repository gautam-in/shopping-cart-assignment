import { useRouter } from "next/router";
import { useDispatch } from "react-redux";
import { signIn } from "../actions";
import CustomForm from "../components/CustomForm";
import LeftSignUpCard from "../components/LeftSIgnUpCard";
import SignUpStyle from "../components/styles/SignupStyle";

export default function LoginPage() {
    const router = useRouter();
    const dispatch = useDispatch()
  const formArray = [
    {
      id: 1,
      formName: "email",
      type: "email",
      label: "Email",
      required: true,
    },
    {
        id: 2,
        formName: "password",
        type: "password",
        label: "Password",
        required: true,
      },
  ];
  const header = "Login";
  const description =
    "Get aceces to your Orders, Wishlist and Recommendations.";
    const onSubmit = (formData) =>{
        dispatch(signIn(formData));
        router.push("/");
      }
  return (
    <SignUpStyle>
      <LeftSignUpCard header={header} description={description} />
      <CustomForm formArray={formArray} btnLabel={"Login"} onSubmit={onSubmit} />
    </SignUpStyle>
  );
}
