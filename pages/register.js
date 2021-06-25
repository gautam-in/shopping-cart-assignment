import { useRouter } from "next/router";
import { useDispatch } from "react-redux";
import { signIn } from "../actions";
import CustomForm from "../components/CustomForm";
import LeftSignUpCard from "../components/LeftSIgnUpCard";
import SignUpStyle from "../components/styles/SignupStyle";

export default function UserRegisterPage() {
  const router = useRouter();
  const dispatch = useDispatch();
  const formArray = [
    {
      id: 1,
      formName: "firstname",
      type: "text",
      label: "First Name",
      required: true,
    },
    {
      id: 2,
      formName: "lastname",
      type: "text",
      label: "Last Name",
      required: true,
    },
    {
      id: 3,
      formName: "email",
      type: "email",
      label: "Email",
      required: true,
    },
    {
      id: 4,
      formName: "password",
      type: "password",
      label: "Password",
      required: true,
    },
    {
      id: 5,
      formName: "confirmPassword",
      type: "password",
      label: "Confirm Password",
      required: true,
    },
  ];
  const header = "Signup";
  const description = "We don not share your personal details with anyone.";
  const onSubmit = (formData) => {
    dispatch(signIn(formData));
    router.push("/");
  };

  return (
    <SignUpStyle>
      <LeftSignUpCard header={header} description={description} />
      <CustomForm
        formArray={formArray}
        btnLabel={"Signup"}
        onSubmit={onSubmit}
      />
    </SignUpStyle>
  );
}
