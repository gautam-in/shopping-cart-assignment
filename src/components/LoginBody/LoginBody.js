import { memo } from "react";
import TextField from "@material-ui/core/TextField";
import { useForm, Controller } from "react-hook-form";

import LeftCard from "components/Shared/LeftCard";
import CustomButton from "components/Shared/CustomButton";
import { Container, RightBody } from "./LoginBody.styles";

const LoginBody = () => {
  const {
    control,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const onSubmit = (data) => console.log(data);

  console.log({ errors });
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
            }}
            render={({ field }) => (
              <TextField {...field} type="email" label="Email" />
            )}
          />
          <Controller
            name="password"
            control={control}
            rules={{
              required: "Password is required",
              minLength: {
                value: 6,
                message: "Password must have at least 6 characters",
              },
              // pattern: {
              //   value: /^(?=.*?[a-z])(?=.*?[0-9])$/,
              //   message: "Must have a number and alphabet & cannot have spaces",
              // },
            }}
            render={({ field }) => (
              <TextField {...field} type="password" label="Password" />
            )}
          />
          <CustomButton title="Login" />
        </form>
      </RightBody>
    </Container>
  );
};

export default memo(LoginBody);
