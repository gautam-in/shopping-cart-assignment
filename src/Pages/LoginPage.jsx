import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { loginState, loginUser } from "../Redux/Reducers/LoginSlice";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { getCartData } from "../Redux/Reducers/cartSlice";
const LoginPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const REQUIRED_ERROR = "This field is Required";
  const { userInfo, error, isLoggedIn } = useSelector(loginState);
  useEffect(() => {
    if (Object.keys(userInfo).length > 0) {
      dispatch(getCartData());
      navigate("/home", {
        replace: true,
        state: {
          login: "logged in success",
        },
      });
    }
    if (Object.keys(error).length > 0) {
      if (error.hasOwnProperty("email")) {
        setError("email", {
          type: "custom",
          message: "email does not existed",
        });
      }
      if (error.hasOwnProperty("password")) {
        setError("password", {
          type: "custom",
          message: "password does not match",
        });
      }
    }
  }, [userInfo, error]);
  const schema = yup
    .object({
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
    dispatch(loginUser(data));
  };

  return (
    <>
      <div className="grid md:grid-cols-2 items-center justify-center pt-20">
        <div className="w-full max-w-sm mb-2">
          <h3 className="font-bold text-lg text-center"> Login</h3>
          <h2 className="text-center">
            Get access to your Orders, Wishlist and Recommendations
          </h2>
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className="w-full max-w-sm">
          <div className="w-full ">
            <label
              className="block  tracking-wide text-gray-700 text-xs font-bold"
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
          <div className="w-full mt-5">
            <label
              className="block  tracking-wide text-gray-700 text-xs font-bold focus:text-lime-800 "
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
              <label style={{ color: "red" }}>{errors.password?.message}</label>
            </div>
          </div>

          <button
            type="submit"
            aria-label="submit"
            className="bg-rose-600 w-full text-white h-9 mt-2"
          >
            Submit
          </button>
        </form>
      </div>
      <p
        aria-label="Copyright"
        className="text-center w-full h-10 mt-14 pt-2 bg-gray-200 text-black "
      >
        Copyright@ 2018-2018 Sabka Bazaar Supplies Pvt Ltd
      </p>
    </>
  );
};

export default LoginPage;
