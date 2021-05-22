import { memo } from "react";
import TextField from "@material-ui/core/TextField";
import { useForm, Controller } from "react-hook-form";

import LeftCard from "components/Shared/LeftCard";
import CustomButton from "components/Shared/CustomButton";
import { Container, RightBody } from "./SignUpBody.styles";

const SignUpBody = () => {
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
        title="Signup"
        description="We do not share your personal details with anyone"
      />
      <RightBody>
        <form className="right-body" onSubmit={handleSubmit(onSubmit)}>
          <Controller
            name="first-name"
            control={control}
            rules={{
              required: "First Name is required",
            }}
            render={({ field }) => <TextField {...field} label="First Name" />}
          />
          <Controller
            name="last-name"
            control={control}
            rules={{
              required: "Last Name is required",
            }}
            render={({ field }) => <TextField {...field} label="Last Name" />}
          />
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
            }}
            render={({ field }) => (
              <TextField {...field} type="password" label="Password" />
            )}
          />
          <Controller
            name="confirm-password"
            control={control}
            rules={{
              required: "Confirm Password is required",
              minLength: {
                value: 6,
                message: "Confirm Password must have at least 6 characters",
              },
            }}
            render={({ field }) => (
              <TextField {...field} type="password" label="Confirm Password" />
            )}
          />
          <CustomButton title="Signup" />
        </form>
      </RightBody>
    </Container>
  );
};

export default memo(SignUpBody);
