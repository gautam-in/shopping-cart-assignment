export const leftNavPages = [
  { name: "Home", path: "/" },
  { name: "Products", path: "/products" },
];

export const rightNavPages = [
  { name: "Sign In", path: "/" },
  { name: "Register", path: "/register" },
];

// filter the product list based on category
export const getFilteredData = (filter, data) =>
  filter ? data?.filter((item) => item?.category === filter) : data;

export const registerInputFields = [
  {
    id: 1,
    name: "firstName",
    type: "text",
    label: "First Name",
    maxLength: 20,
  },
  {
    id: 2,
    name: "lastName",
    type: "text",
    label: "Last Name",
    maxLength: 20,
  },
  {
    id: 3,
    name: "email",
    type: "email",
    label: "Email",
    maxLength: 50,
  },
  {
    id: 4,
    name: "password",
    type: "password",
    label: "Password",
    maxLength: 30,
    minLength: 6,
    helperText:
      "Passwords must have a minimum of 6 characters, a symbol, a number, uppercase letters, lowercase letters, and no white space.",
  },
  {
    id: 5,
    name: "confirmPassword",
    type: "password",
    label: "Confirm Password",
    maxLength: 30,
    minLength: 6,
  },
];

export const loginInputFields = [
  {
    id: 1,
    name: "email",
    type: "email",
    label: "Email",
    maxLength: 50,
  },
  {
    id: 2,
    name: "password",
    type: "password",
    label: "Password",
    maxLength: 30,
  },
];

export const EMAIL_VALIDATION_REGEX =
  /^(?!.* )(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{6,}$/;

export const isAuthenticated = localStorage.getItem("isAuthenticated")
  ? Boolean(localStorage.getItem("isAuthenticated"))
  : false;

export const errorHandler = (formState, register) => {
  let errorobj = {
    isError: false,
    msg: "",
    field: "",
  };
  // password and confirm-pass should be match only for register component
  if (register) {
    if (formState.password !== formState.confirmPassword) {
      errorobj = {
        isError: true,
        msg: "Password should be match",
        field: "confirmPassword",
      };
    }
  }
  // password must have number and alphabet
  if (!EMAIL_VALIDATION_REGEX.test(formState.password)) {
    errorobj = {
      isError: true,
      msg: "Invalid password: No spaces, upper- and lower-case letters, numbers, and symbols are permitted in the password.",
      field: "password",
    };
  }
  return errorobj;
};

// func to send updated cart list, update the quantity
export const updateCartState = (cartItems, product, operator = 1) => {
  const updatedList = cartItems;
  cartItems.forEach((item, idx) => {
    if (item?.id === product?.id) {
      if (operator === 0) {
        // 0 = flag to decrease quantity
        updatedList[idx].quantity = product?.quantity - 1;
      } else {
        updatedList[idx].quantity = item?.quantity ? item?.quantity + 1 : 1;
      }
    }
  });
  return updatedList;
};
