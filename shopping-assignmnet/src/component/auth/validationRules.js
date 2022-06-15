import {
  required,
  validateEmail,
  validatePassword,
} from "../common/validationFunctions";

export const validationRules = [
  {
    name: "email",
    method: validateEmail,
    message: "Invalid Email",
  },
  {
    name: "email",
    method: required,
    message: "Email is Required",
  },
  {
    name: "password",
    method: validatePassword,
    message: `<ol>
      <li>
     	  Minimum length 6 characters
      </li>
      <li>
       Must have a number and alphabet
      </li>
    </ul>`,
  },
  {
    name: "password",
    method: required,
    message: "Password is Required",
  },
  {
    name: "firstName",
    method: required,
    message: "First Name is Required",
  },
  {
    name: "lastName",
    method: required,
    message: "Last Name is Required",
  },
];
