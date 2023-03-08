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
import React, { Fragment, useState } from "react";
import { Link } from "react-router-dom";
import { errorHandler, registerInputFields } from "utils/support";
import Layout from "./Layout";

const Register = () => {
  const [formState, setFormState] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [errorState, setErrorState] = useState({
    isError: false,
    msg: "",
    field: "",
  });

  const [showPassword, setShowPassword] = useState(false);
  const [onToggleId, setOnToggleId] = useState("");

  const onSubmitHandler = (e) => {
    e.preventDefault();
    const errorObj = errorHandler(formState, true);
    setErrorState(errorObj);
    // TODO: Pasword encryption
    if (!errorObj.isError) {
      localStorage.setItem("isAuthenticated", "true");
      // console.log("user registered", formState);
      window.location.href = "/";
    }
  };

  const handleClickShowPassword = (id) => {
    setShowPassword((show) => !show);
    setOnToggleId(id);
  };

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

  const getInputType = (type, id) => {
    if (showPassword && id === onToggleId) return "text";
    return type;
  };

  return (
    <Layout
      name="Signup"
      description="We do not share your personal details with anyone."
    >
      <Box sx={{ display: "block" }}>
        <form onSubmit={onSubmitHandler}>
          {registerInputFields.map((item) => (
            <Fragment key={item.id}>
              <TextField
                sx={{ my: "1rem" }}
                fullWidth
                color="secondary"
                name={item.name}
                value={formState[item.name]}
                onChange={formChangeHandler}
                type={getInputType(item.type, item.id)}
                margin="dense"
                id={`standard-basic${item.id}`}
                label={item.label}
                variant="standard"
                inputProps={{
                  maxLength: item.maxLength,
                  minLength: item.minLength ?? 3,
                }}
                error={item.name === errorState.field}
                required
                helperText={item.helperText}
                InputProps={{
                  endAdornment:
                    item.type === "password" ? (
                      <InputAdornment position="end">
                        <IconButton
                          aria-label={`toggle ${item.label} visibility`}
                          onClick={() => handleClickShowPassword(item.id)}
                        >
                          {showPassword && item.id === onToggleId ? (
                            <VisibilityOff />
                          ) : (
                            <Visibility />
                          )}
                        </IconButton>
                      </InputAdornment>
                    ) : (
                      <></>
                    ),
                }}
              />
            </Fragment>
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
            Signup
          </Button>
          <Typography sx={{ textAlign: "right" }}>
            Already have an account? <Link to="/">Login here</Link>
          </Typography>
        </form>
      </Box>
    </Layout>
  );
};

export default Register;
