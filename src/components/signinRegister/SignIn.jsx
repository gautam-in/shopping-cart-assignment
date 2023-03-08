import {
  Box,
  Button,
  IconButton,
  InputAdornment,
  TextField,
  Typography,
} from "@mui/material";
import Visibility from "@mui/icons-material/Visibility";
import Alert from "@mui/material/Alert";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { errorHandler, loginInputFields } from "utils/support";
import Layout from "./Layout";

const SignIn = () => {
  const [showPassword, setShowPassword] = useState(false);

  const [formState, setFormState] = useState({
    email: "",
    password: "",
  });

  const [errorState, setErrorState] = useState({
    isError: false,
    msg: "",
    field: "",
  });

  const formChangeHandler = (e) => {
    setFormState((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));

    if (e.target.name === "password" || e.target.name === "confirmPassword") {
      setErrorState({
        isError: false,
        msg: "",
        field: "",
      });
    }
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();
    const errorObj = errorHandler(formState);
    setErrorState(errorObj);
    // TODO: Pasword encryption
    if (!errorObj.isError) {
      localStorage.setItem("isAuthenticated", "true");
      // console.log("user login", formState);
      window.location.href = "/";
    }
  };

  const handleClickShowPassword = (id) => {
    setShowPassword((show) => !show);
  };

  const getInputType = (type, id) => {
    if (showPassword) return "text";
    return type;
  };

  return (
    <Layout
      name="Login"
      description="Get access to your Orders, Wishlist and Recommendations"
    >
      <Box sx={{ display: "block" }}>
        <form onSubmit={onSubmitHandler}>
          {loginInputFields.map((item) => (
            <div key={item.id}>
              <TextField
                sx={{ my: "1rem" }}
                fullWidth
                color="secondary"
                name={item.name}
                onChange={formChangeHandler}
                value={formState[item.name]}
                type={getInputType(item.type, item.id)}
                margin="dense"
                id={`standard-basic${item.id}`}
                label={item.label}
                variant="standard"
                inputProps={{ maxLength: item.maxLength }}
                required
                InputProps={{
                  endAdornment:
                    item.type === "password" ? (
                      <InputAdornment position="end">
                        <IconButton
                          aria-label="toggle password visibility"
                          onClick={handleClickShowPassword}
                          // onMouseDown={handleMouseDownPassword}
                        >
                          {showPassword ? <VisibilityOff /> : <Visibility />}
                        </IconButton>
                      </InputAdornment>
                    ) : (
                      <></>
                    ),
                }}
              />
            </div>
          ))}
          <Box sx={{ minHeight: "55px" }}>
            {errorState.isError && (
              <Alert severity="warning">{errorState.msg}</Alert>
            )}
          </Box>
          <Button
            variant="contained"
            type="submit"
            sx={{ textTransform: "none", fontWeight: 600, my: 2 }}
            fullWidth
          >
            Login
          </Button>
          <Typography sx={{ textAlign: "right" }}>
            New user? <Link to="/register">Register here</Link>
          </Typography>
        </form>
      </Box>
    </Layout>
  );
};

export default SignIn;
