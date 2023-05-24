import { useForm, UseFormReturn } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { HeadProvider, Meta, Title } from "react-head";

import locale from "../../../assets/locale.json";
import Button from "../../../components/Common/Button";
import Input from "../../../components/Common/Input";
import Section from "../../../components/Section";

import { RegisterFormSchema } from "../../../helpers/validation-schemas";

import "./styles.scss";

interface RegisterFormData {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  confirmPassword: string;
}

const Register: React.FunctionComponent = () => {
  const {
    default: {
      application: { forms: formsLabels },
    },
  } = locale;
  const {
    register,
    handleSubmit,
    formState: { errors },
  }: UseFormReturn<RegisterFormData> = useForm({
    resolver: zodResolver(RegisterFormSchema),
  });

  console.table(errors);

  const handleFormSubmit = (data: RegisterFormData) => {
    console.log("Signed In", data);
  };

  return (
    <Section>
      <HeadProvider>
        <Title>Register - Sabka Bazaar</Title>
        <Meta
          name="description"
          content="Create a account to rester on sabka bazaar"
        />
      </HeadProvider>
      <div className="register register__wrapper">
        <div className="register__info">
          <h1>Register</h1>
          <p>Get access to your Orders, Wishlist and Recommendations</p>
        </div>
        <form
          onSubmit={handleSubmit(handleFormSubmit)}
          className="register__form"
        >
          <Input
            type="text"
            label={formsLabels.firstName}
            errors={errors["firstName"]}
            {...register("firstName")}
          />
          <Input
            type="text"
            label={formsLabels.lastName}
            errors={errors["lastName"]}
            {...register("lastName")}
          />
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
          <Input
            type="password"
            label={formsLabels.confirmPassword}
            errors={errors["confirmPassword"]}
            {...register("confirmPassword")}
          />
          <Button
            type="submit"
            variant="primary"
            classNames="register__form__submit"
          >
            {formsLabels.register}
          </Button>
        </form>
      </div>
    </Section>
  );
};

export default Register;
