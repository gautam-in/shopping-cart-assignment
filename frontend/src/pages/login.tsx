import Button from "@/components/Button";
import InputField from "@/components/InputField/";
import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import styles from "@/styles/pages/Login.module.scss";

const schema = z.object({
  email: z.string().min(1, { message: "Email is required" }).email({
    message: "Must be a valid email",
  }),
  password: z
    .string()
    .min(8, { message: "Password must be atleast 8 characters" }),
});

type ValidationSchema = z.infer<typeof schema>;

const LoginPage = () => {
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
        <h2>Login</h2>
        <p>Get Access to your Orders, Wishlist and Recommendations</p>
      </header>
      <form onSubmit={handleSubmit(onSubmit)}>
        <InputField labelText="Email" type="email" {...register("email")} />
        <InputField
          labelText="Password"
          type="password"
          {...register("password")}
        />
        <Button type="submit">Login</Button>
      </form>
    </section>
  );
};

export default LoginPage;
