import { useForm, UseFormReturn } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import locale from "../../../assets/locale.json";
import Button from "../../../components/Common/Button";
import Input from "../../../components/Common/Input";
import Section from "../../../components/Section";
import { LoginFormSchema } from "../../../helpers/validation-schemas";

import "./styles.scss";

interface LoginFormData {
  email: string;
  password: string;
}

const Login: React.FunctionComponent = () => {
  const {
    default: {
      application: { forms: formsLabels },
    },
  } = locale;
  const {
    register,
    handleSubmit,
    formState: { errors },
  }: UseFormReturn<LoginFormData> = useForm({
    resolver: zodResolver(LoginFormSchema),
  });

  const handleFormSubmit = (data: LoginFormData) => {
    console.log("Signed In", data);
  };

  return (
    <Section>
      <div className="login login__wrapper">
        <div className="login__info">
          <h1>{formsLabels.signin}</h1>
          <p>{formsLabels.signinCopy}</p>
        </div>
        <form onSubmit={handleSubmit(handleFormSubmit)} className="login__form">
          <Input
            type="email"
            label={formsLabels.email}
            errors={errors["email"]}
            {...register("email")}
          />
          <Input
            type="password"
            label={formsLabels.password}
            errors={errors["password"]}
            {...register("password")}
          />
          <Button type="submit" variant="primary">
            {formsLabels.signin}
          </Button>
        </form>
      </div>
    </Section>
  );
};

export default Login;
