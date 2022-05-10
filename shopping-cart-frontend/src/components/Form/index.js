import React, { useState, useEffect } from "react";
import { TextField } from "@material-ui/core";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { addUsers, login } from "../../reducers/userReducer";
import { Constants } from "../../utils/constant";
import "./Form.css";

function Form({ formFields }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({});
  const [errorMsgs, setErrorMsgs] = useState({});
  const activeUser = useSelector((state) => state.userReducer.activeUser);

  useEffect(() => {
    if (activeUser) {
      navigate("/");
    }
  }, [activeUser, navigate]);

  const onChangeText = (event, label) => {
    setFormData((data) => {
      return { ...data, [label]: event.target.value };
    });
    delete errorMsgs?.[label];
  };

  const isValid = (type, label) => {
    let errorMessages = { ...errorMsgs };

    if (type && label) {
      if (!formData?.[label]) {
        errorMessages = { ...errorMessages, [label]: `* ${label} Required` };
      } else if (
        type === "email" &&
        !Constants.emailRegExp.test(String(formData?.[label]).toLowerCase())
      ) {
        errorMessages = { ...errorMessages, [label]: Constants.emailErr };
      } else if (type === "password") {
        if (label === "Confirm Password") {
          if (formData["Password"] !== formData[label]) {
            errorMessages = {
              ...errorMessages,
              [label]: Constants.confirmPasswordErr,
            };
          }
        } else if (
          formData?.[label]?.length < 6 ||
          formData?.[label]?.includes(" ") ||
          !Constants.passwordRegExp.test(formData?.[label])
        ) {
          errorMessages = {
            ...errorMessages,
            [label]: Constants.passwordErr,
          };
        }
      }
    } else {
      formFields.forEach((element) => {
        if (
          element.type !== "button" &&
          (!Object.keys(formData)?.includes(element?.label) ||
            formData?.[element?.label]?.length === 0)
        ) {
          errorMessages = {
            ...errorMessages,
            [element?.label]: `* ${element?.label} Required`,
          };
        }
      });
    }

    setErrorMsgs(() => {
      return { ...errorMessages };
    });

    return Object.keys(errorMessages)?.length === 0;
  };

  const handleSubmit = (label) => {
    if (isValid()) {
      if (label === "Login") {
        dispatch(login(formData));
      } else {
        dispatch(addUsers(formData));
      }
    }
  };

  const renderFormFields = () => {
    let formItems = formFields.map(({ type, inputType, label, isRequired }) => {
      switch (type) {
        case "textInput":
          return (
            <React.Fragment key={label}>
              <TextField
                type={inputType}
                variant="standard"
                onBlur={() => isValid(inputType, label)}
                value={formData?.[label] ?? ""}
                error={errorMsgs?.[label]?.length > 0}
                label={`${label} ${isRequired ? "*" : ""}`}
                onChange={(event) => onChangeText(event, label)}
                style={{ marginBottom: errorMsgs?.[label] ? 5 : 20 }}
              />
              {errorMsgs?.[label]?.length > 0 && (
                <p className="errorMessage">{errorMsgs?.[label]}</p>
              )}
            </React.Fragment>
          );
        case "button":
          return (
            <button
              className="button"
              key={label}
              onClick={() => handleSubmit(label)}
            >
              {label}
            </button>
          );
        default:
          return <></>;
      }
    });
    return formItems;
  };

  return renderFormFields();
}

export default Form;
