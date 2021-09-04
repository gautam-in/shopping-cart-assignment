import { useSelector } from "react-redux";
import {
  userExist,
  validateConfirmPassword,
  validateUserEmail,
  validateUserPassword,
} from "./validation";

export const registerUser = (user) => {
  return new Promise((resolve, reject) => {
    try {
      let message = {};

      if (!validateUserEmail(user.email)) {
        message.email = "Invalid email format";
      }
      if (!validateUserPassword(user.password)) {
        message.password =
          "Password must contain at least one  number and one uppercase and lowercase letter, and at least 8 or more characters";
      }

      if (!validateConfirmPassword(user.password, user.confirmPassword)) {
        message.confirmPassword =
          "Password and Confirm Password must be matching";
      }

      if (userExist(user.email)) {
        message.email = "User already exist";
      }

      if (user.firstName.length < 3) {
        ("First Name must contain atleast 3 characters");
      }

      if (Object.keys(message).length !== 0) {
        reject(message);
      } else {
        let users = JSON.parse(localStorage.getItem("user"));
        users = users ? users : [];
        localStorage.setItem("user", JSON.stringify([...users, user]));
        resolve("User is added successfully");
      }
    } catch (error) {
      reject(error.message);
    }
  });
};

export const loginUser = (user) => {
  return new Promise((resolve, reject) => {
    try {
      let users = JSON.parse(localStorage.getItem("user"));

      if (users === null) {
        reject("Invalid Username or Password");
      } else {
        const userExist = users.find(
          (item) =>
            item.email.toUpperCase() === user.email.toUpperCase() &&
            user.password === item.password
        );
        if (userExist) {
          resolve(userExist);
        } else {
          reject("Invalid Username or Password");
        }
      }
    } catch (error) {
      reject(error.message);
    }
  });
};
