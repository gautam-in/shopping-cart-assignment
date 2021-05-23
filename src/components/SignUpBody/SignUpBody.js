import { useState, memo } from "react";
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
  const [commonErr, setCommonErr] = useState("");

  const onSubmit = (data) => {
    setCommonErr("");
    if (data.password != data.confirm_password) {
      setCommonErr("Password must be same.");
    }
    console.log(commonErr, data);
  };

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
            name="first_name"
            control={control}
            rules={{
              required: "First Name is required",
            }}
            render={({ field }) => <TextField {...field} label="First Name" />}
          />
          {errors.first_name && (
            <span className="err-msg">{errors.first_name.message}</span>
          )}
          <Controller
            name="last_name"
            control={control}
            rules={{
              required: "Last Name is required",
            }}
            render={({ field }) => <TextField {...field} label="Last Name" />}
          />
          {errors.last_name && (
            <span className="err-msg">{errors.last_name.message}</span>
          )}
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
              <TextField {...field} type="email" label="Email" />
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
              <TextField {...field} type="password" label="Password" />
            )}
          />
          {errors.password && (
            <span className="err-msg">{errors.password.message}</span>
          )}
          <Controller
            name="confirm_password"
            control={control}
            rules={{
              required: "Confirm Password is required",
              minLength: {
                value: 6,
                message: "Confirm Password must have at least 6 characters",
              },
              pattern: {
                value: /^\S+(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/,
                message: "Confirm Password must be alphanumeric without spaces",
              },
            }}
            render={({ field }) => (
              <TextField {...field} type="password" label="Confirm Password" />
            )}
          />
          {errors.confirm_password && (
            <span className="err-msg">{errors.confirm_password.message}</span>
          )}

          {commonErr && <div className="common-err">{commonErr}</div>}
          <CustomButton title="Signup" />
        </form>
      </RightBody>
    </Container>
  );
};

export default memo(SignUpBody);
