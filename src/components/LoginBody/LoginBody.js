import { memo } from "react";
import TextField from "@material-ui/core/TextField";
import { useForm, Controller } from "react-hook-form";

import LeftCard from "components/Shared/LeftCard";
import CustomButton from "components/Shared/CustomButton";
import { Container, RightBody } from "./LoginBody.styles";
import { signIn } from "helpers/saveUser";

const LoginBody = () => {
  const {
    control,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const onSubmit = (data) => signIn(data);

  return (
    <Container>
      <LeftCard
        title="Login"
        description="Get access to your Orders, Wishlist & Recommendations"
      />
      <RightBody>
        <form className="right-body" onSubmit={handleSubmit(onSubmit)}>
          <Controller
            name="email"
            control={control}
            rules={{
              required: "Email is required",
              pattern: {
                value: /^[a-zA-Z0-9]+[a-zA-Z0-9._]+@[a-z]+\.[a-z.]{2,5}$/,
                message: "Email is not valid",
              },
            }}
            render={({ field }) => (
              <TextField {...field} type="email" label="Email" id="Email" />
            )}
          />
          {errors.email && (
            <span className="err-msg">{errors.email.message}</span>
          )}
          <Controller
            name="password"
            control={control}
            rules={{
              required: "Password is required",
              minLength: {
                value: 6,
                message: "Password must have at least 6 characters",
              },
              pattern: {
                value: /^\S+(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/,
                message: "Password must be alphanumeric without spaces",
              },
            }}
            render={({ field }) => (
              <TextField
                {...field}
                type="password"
                label="Password"
                id="Password"
              />
            )}
          />
          {errors.password && (
            <span className="err-msg">{errors.password.message}</span>
          )}
          <CustomButton title="Login" />
        </form>
      </RightBody>
    </Container>
  );
};

export default memo(LoginBody);
