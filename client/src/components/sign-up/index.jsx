import { useState } from "react";
import CustomButton from "../custom-button";
import FormInput from "../form-input";

import { SignUpContainer } from "./styles";

const SignUp = () => {
	const [registerData, setRegisterData] = useState({
		firstName: "",
		lastName: "",
		email: "",
		password: "",
		confirmPassword: "",
	});
	const [formInvalid, setFormInvalid] = useState(true);
	const [errors, setErrors] = useState({
		firstName: "",
		lastName: "",
		email: "",
		password: "",
		confirmPassword: "",
	});
	const { firstName, lastName, email, password, confirmPassword } =
		registerData;

	const handleErrors = (name, value) => {
		let errorData = errors;

		switch (name) {
			case "firstName":
				errorData.firstName = !value ? "First name is required." : "";
				break;
			case "lastName":
				errorData.lastName = !value ? "Last name is required." : "";
				break;
			case "email":
				if (!value) {
					errorData.email = "Email is required.";
				} else if (!/^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/.test(value)) {
					errorData.email = "Email is not valid.";
				} else {
					errorData.email = "";
				}
				break;
			case "password":
				if (!value) {
					errorData.password = "Password is required.";
				}
				if (value.length < 6) {
					errorData.password = "Password must have minimum 6 characters.";
				} else if (value.split(" ").length > 1) {
					errorData.password = "Password should not contains space.";
				} else if (!/[A-Za-z]/.test(value) || !/\d/.test(value)) {
					errorData.password =
						"Password should contains alteast one character and number.";
				} else {
					errorData.password = "";
				}
				break;
			case "confirmPassword":
				if (value !== password) {
					errorData.confirmPassword = "Password doesn't match.";
				} else {
					errorData.confirmPassword = "";
				}
				break;
			default:
				break;
		}

		const isFormInvalid =
			!!errors.firstName ||
			!!errors.lastName ||
			!!errors.email ||
			!!errors.password ||
			!!errors.confirmPassword
				? true
				: false;
		setFormInvalid(isFormInvalid);
		setErrors(errorData);
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		console.log(registerData);
	};

	const handleInputChange = (e) => {
		const { value, name } = e.target;

		setRegisterData({
			...registerData,
			[name]: value,
		});
		handleErrors(name, value);
	};

	return (
		<SignUpContainer>
			<form onSubmit={handleSubmit}>
				<FormInput
					label="First Name"
					name="firstName"
					id="firstName"
					value={firstName}
					error={errors.firstName}
					onChange={handleInputChange}
				/>
				<FormInput
					label="Last Name"
					name="lastName"
					id="lastName"
					value={lastName}
					error={errors.lastName}
					onChange={handleInputChange}
				/>
				<FormInput
					label="Email"
					name="email"
					id="email"
					value={email}
					error={errors.email}
					onChange={handleInputChange}
				/>
				<FormInput
					label="Password"
					name="password"
					type="password"
					id="password"
					value={password}
					error={errors.password}
					onChange={handleInputChange}
				/>
				<FormInput
					label="Confirm Password"
					name="confirmPassword"
					type="password"
					id="confirmPassword"
					value={confirmPassword}
					error={errors.confirmPassword}
					onChange={handleInputChange}
				/>
				<CustomButton type="submit" isAuth disabled={formInvalid}>
					Sign Up
				</CustomButton>
			</form>
		</SignUpContainer>
	);
};

export default SignUp;
