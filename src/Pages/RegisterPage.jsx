import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useDispatch, useSelector } from "react-redux";
import { loginState, registerUser } from "../Redux/Reducers/LoginSlice";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const RegisterPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const REQUIRED_ERROR = "This field is Required";
  const { userInfo, error, isLoggedIn } = useSelector(loginState);
  useEffect(() => {
    if (Object.keys(userInfo).length > 0) {
      navigate("/home", { replace: true });
    }
    if (Object.keys(error).length > 0) {
      if (error.hasOwnProperty("email")) {
        setError("email", {
          type: "custom",
          message: "email already existed",
        });
      }
    }
  }, [userInfo, error]);
  const schema = yup
    .object({
      firstName: yup.string().required(REQUIRED_ERROR),
      lastName: yup.string().required(REQUIRED_ERROR),
      email: yup
        .string()
        .email("Invalid email format")
        .required(REQUIRED_ERROR),
      password: yup
        .string()
        .required(REQUIRED_ERROR)
        .matches(
          /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,15})(?!.* )/,
          "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and One Special Case Character"
        ),
      confirmPassword: yup
        .string()
        .required(REQUIRED_ERROR)
        .matches(
          /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,15})(?!.* )/,
          "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and One Special Case Character"
        ),
    })
    .required();
  const {
    register,
    handleSubmit,
    watch,
    control,
    formState: { errors },
    setValue,
    setError,
  } = useForm({
    resolver: yupResolver(schema),
  });
  const onSubmit = async (data) => {
    if (data.password.toUpperCase() !== data.confirmPassword.toUpperCase()) {
      setError("confirmPassword", {
        type: "custom",
        message: "confirm password does not match with password",
      });
      return;
    }

    data.id = data.email.toUpperCase();
    dispatch(registerUser(data));
  };

  return (
    <>
      <div className="grid md:grid-cols-2 items-center justify-center p-2 pt-10 md:p-0 md:pt-20">
        <div className="w-full max-w-sm  mb-5">
          <h3 className="font-bold text-lg text-center"> SignUp</h3>
          <h2 className="text-center">
            We do not share your personal details with anyone.
          </h2>
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className="w-full max-w-sm">
          <div className="w-full">
            <div className="mb-2">
              <label
                className="block  tracking-wide mb-2 text-gray-700 text-xs font-bold"
                htmlFor="First Name"
              >
                First Name
              </label>
              <input
                id="firstName"
                name="firstName"
                {...register("firstName")}
                aria-label="Enter First Name"
                className="bg-transparent border-b border-gray-500 w-full text-gray-700  focus:border-blue-700 leading-tight hover:border-blue-700 focus:outline-none"
              />
              <div>
                <label style={{ color: "red" }}>
                  {errors.firstName?.message}
                </label>
              </div>
            </div>
            <div className="mb-2">
              <label
                className="block mb-2  tracking-wide text-gray-700 text-xs font-bold"
                htmlFor="Last Name"
              >
                Last Name
              </label>
              <input
                id="lastName"
                name="lastName"
                {...register("lastName")}
                aria-label="Enter Last Name"
                className="bg-transparent border-b border-gray-500 w-full text-gray-700  focus:border-blue-700 leading-tight hover:border-blue-700 focus:outline-none"
              />
              <div>
                <label style={{ color: "red" }}>
                  {errors.lastName?.message}
                </label>
              </div>
            </div>
            <div className="mb-2">
              <label
                className="block mb-2  tracking-wide text-gray-700 text-xs  font-bold"
                htmlFor="Email"
              >
                Email
              </label>
              <input
                id="email"
                name="email"
                {...register("email")}
                type="email"
                aria-label="Enter email ID"
                className="bg-transparent border-b border-gray-500 w-full text-gray-700  focus:border-blue-700 leading-tight hover:border-blue-700 focus:outline-none"
              />
              <div>
                <label style={{ color: "red" }}>{errors.email?.message}</label>
              </div>
            </div>
            <div className="mb-2">
              <label
                className="block mb-2  tracking-wide text-gray-700 text-xs font-bold focus:text-lime-800 "
                htmlFor="Password"
              >
                Password
              </label>
              <input
                id="password"
                name="password"
                {...register("password")}
                type="password"
                aria-label="Enter password"
                className="bg-transparent border-b border-gray-500 w-full text-gray-700 focus:border-blue-700 leading-tight hover:border-blue-700 focus:outline-none"
              />
              <div>
                <label style={{ color: "red" }}>
                  {errors.password?.message}
                </label>
              </div>
            </div>
            <div className="mb-2">
              <label
                className="block  mb-2 tracking-wide text-gray-700 text-xs font-bold focus:text-lime-800 "
                htmlFor="Confirm Password"
              >
                Confirm Password
              </label>
              <input
                id="confirmPassword"
                name="confirmPassword"
                {...register("confirmPassword")}
                aria-label="Enter Confirm Password"
                type="password"
                className="bg-transparent border-b  border-gray-500 w-full text-gray-700 focus:border-blue-700 leading-tight hover:border-blue-700 focus:outline-none"
              />
              <div>
                <label style={{ color: "red" }}>
                  {errors.confirmPassword?.message}
                </label>
              </div>
            </div>

            <button
              type="submit"
              aria-label="submit form"
              className="bg-rose-600 w-full text-white h-9 mt-2 hover:bg-rose-900 focus:bg-rose-900"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
      <p className="text-center w-full h-10 mt-14 pt-2 bg-gray-200 text-black ">
        Copyright@ 2018-2018 Sabka Bazaar Supplies Pvt Ltd
      </p>
    </>
  );
};

export default RegisterPage;
