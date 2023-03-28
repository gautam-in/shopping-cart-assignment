import Button from "@/components/Button";
import InputField from "@/components/InputField/";
import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import styles from "@/styles/pages/Register.module.scss";

const schema = z
  .object({
    firstName: z.string().min(1, { message: "First Name is required" }),
    lastName: z.string(),
    email: z.string().min(1, { message: "Email is required" }).email({
      message: "Must be a valid email",
    }),
    password: z
      .string()
      .min(8, { message: "Password must be atleast 8 characters" }),
    confirmPassword: z.string().min(8),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Password doesn't match",
    path: ["confirmpassword"],
  });

type ValidationSchema = z.infer<typeof schema>;

const RegisterPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ValidationSchema>({
    resolver: zodResolver(schema),
  });

  const onSubmit: SubmitHandler<ValidationSchema> = (data) => console.log(data);
  return (
    <section className={styles["login-section"]}>
      <header>
        <h1>Signup</h1>
        <p>We do not share your personal data with anyone.</p>
      </header>
      <form onSubmit={handleSubmit(onSubmit)}>
        <InputField
          labelText="First Name"
          type="text"
          {...register("firstName")}
        />
        <InputField
          labelText="Last Name"
          type="text"
          {...register("lastName")}
        />
        <InputField labelText="Email" type="email" {...register("email")} />
        <InputField
          labelText="Password"
          type="password"
          {...register("password")}
        />
        <InputField
          labelText="Confirm Password"
          type="password"
          {...register("confirmPassword")}
        />
        <Button type="submit">Signup</Button>
      </form>
    </section>
  );
};

export default RegisterPage;
