import Button from "@/components/Button";
import InputField from "@/components/InputField/";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import styles from "@/styles/pages/Login.module.scss";
// @ts-ignore
import fakeAuth from "fake-auth";
import useAuthStore from "@/store/authStore";
import { useRouter } from "next/router";

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
  const { addUser } = useAuthStore();
  const { push } = useRouter();
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<ValidationSchema>({
    resolver: zodResolver(schema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit: SubmitHandler<ValidationSchema> = (data) => {
    fakeAuth
      .signin(data.email, data.password)
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
        <h2>Login</h2>
        <p>Get Access to your Orders, Wishlist and Recommendations</p>
      </header>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Controller
          name="email"
          control={control}
          render={({ field, fieldState }) => (
            <InputField
              labelText="Email"
              errorMsg={fieldState?.error?.message}
              type="email"
              {...field}
            />
          )}
        />

        <Controller
          name="password"
          control={control}
          render={({ field, fieldState }) => (
            <InputField
              labelText="Password"
              type="password"
              {...field}
              errorMsg={fieldState?.error?.message}
            />
          )}
        />

        <Button type="submit">Login</Button>
      </form>
    </section>
  );
};

export default LoginPage;
