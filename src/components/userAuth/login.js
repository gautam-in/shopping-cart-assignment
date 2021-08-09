import React, { Fragment } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import { TextField, Typography, FormControl } from "@material-ui/core";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import { ButtonWithText } from "../common/button";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

const CustomTextField = withStyles({
  root: {
    "& label.Mui-focused": {
      color: "#7AD7F0",
    },
    "& .MuiInput-underline:hover": {
      borderBottomColor: "#7AD7F0",
    },
    "& .MuiInput-underline:after": {
      borderBottomColor: "#7AD7F0",
    },

  },
})(TextField);

const useStyles = makeStyles((theme) => ({
  mainContainer: {
    display: "flex",
    maxWidth: "100%",
    height: `calc(100% - 50px)`,
    padding: "10px",
    marginTop: "20px",
    justifyContent: "center",
  },
  textContainer: {
    marginTop: "20px",
    marginRight: "30px",
  },
  signupHeader: {
    fontSize: "20px",
    fontWeight: 600,
    marginBottom: "10px",
  },
  signupText: {
    fontSize: "15px",
    fontWeight: 500,
  },
  formContainer: {
    justifyContent: "center",
    width: "40%",
  },
  inputContainer: {
    width: "300px",
    marginBottom: "10px",
  },
  inputFieldContainer: {
    width: "300px",
  },
  signupButton: {
    width: "300px",
    marginTop: "30px",
  },
}));

const LoginPage = (props) => {
  console.log(props);
  const classes = useStyles();

  const validationSchema = Yup.object().shape({
    email: Yup.string().required("Email is required").email("Email is invalid"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(validationSchema),
  });

  const onSubmit = (data) => {
    props.history.push("/home");
  };

  return (
    <Fragment>
      <div className={classes.mainContainer}>
        <div className={classes.textContainer}>
          <Typography className={classes.signupHeader}>Login</Typography>
          <Typography className={classes.signupText}>
            Get Access to your Orders, Wishlist and Recommendations
          </Typography>
        </div>

        <div className={classes.formContainer}>
          <FormControl className={classes.inputContainer}>
            <CustomTextField
              required
              id="email"
              name="email"
              label="Email"
              {...register("email")}
              error={errors.email ? true : false}
            />
          </FormControl>
          <FormControl className={classes.inputContainer}>
            <CustomTextField
              required
              id="password"
              name="password"
              label="Password"
              type="password"
              {...register("password")}
              error={errors.password ? true : false}
            />
          </FormControl>

          <div className={classes.signupButton}>
            <ButtonWithText
              dispText="Signup"
              color="#FFFFFF"
              backgroundColor="#d90166"
              borderColor="#d90166"
              borderRadius="1px"
              height="30px"
              fontSize="15px"
              width="100%"
              onClick={handleSubmit(onSubmit)}
            />
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default withRouter(connect()(LoginPage));
