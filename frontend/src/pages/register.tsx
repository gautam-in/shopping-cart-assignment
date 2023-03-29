import Button from "@/components/Button";
import InputField from "@/components/InputField/";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
// @ts-ignore
import fakeAuth from "fake-auth";
import styles from "@/styles/pages/Register.module.scss";
import useAuthStore from "@/store/authStore";
import { useRouter } from "next/router";

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
  const { addUser } = useAuthStore();
  const { push } = useRouter();
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<ValidationSchema>({
    resolver: zodResolver(schema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
  });

  const onSubmit: SubmitHandler<ValidationSchema> = (data) => {
    /**
     * fake signup using local storage
     */
    fakeAuth
      .signup(data.email, data.password)
      .then((response: any) => {
        addUser({
          uid: response?.user?.uid,
          email: data?.email,
          token: response?.token,
        });
        push("/");
      })
      .catch((error: any) => {
        console.error(error);
      });
  };
  return (
    <section className={styles["login-section"]}>
      <header>
        <h1>Signup</h1>
        <p>We do not share your personal data with anyone.</p>
      </header>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Controller
          name="firstName"
          control={control}
          render={({ field }) => (
            <InputField labelText="First Name" type="text" {...field} />
          )}
        />

        <Controller
          name="lastName"
          control={control}
          render={({ field }) => (
            <InputField labelText="Last Name" type="text" {...field} />
          )}
        />
        <Controller
          name="email"
          control={control}
          render={({ field }) => (
            <InputField labelText="Email" type="email" {...field} />
          )}
        />

        <Controller
          name="password"
          control={control}
          render={({ field }) => (
            <InputField labelText="Password" type="password" {...field} />
          )}
        />

        <Controller
          name="confirmPassword"
          control={control}
          render={({ field }) => (
            <InputField
              labelText="Confirm Password"
              type="password"
              {...field}
            />
          )}
        />

        <Button type="submit">Signup</Button>
      </form>
    </section>
  );
};

export default RegisterPage;
